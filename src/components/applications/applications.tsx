import { useRouter } from 'next/router';
import { Applications } from '../../libs/graphql';
import PersonIcon from '@mui/icons-material/Person';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckIcon from '@mui/icons-material/Check';
import { formatDateTime } from '../../libs/date';

interface ApplicationsViewOptions {
  applications?: Applications[];
  key_prefix: string;
  hide_control?: boolean;
}

const ApplicationsView: React.FC<ApplicationsViewOptions> = ({
  applications,
  key_prefix,
  hide_control,
}) => {
  const router = useRouter();

  const toStateString = (state: Number) => {
    switch (state) {
      case 0:
        return 'Manager Reviewing';
      case 1:
        return 'Manager Rejected';
      case 3:
        return 'Partner Reviewing';
      case 4:
        return 'Partner Rejected';
      case 5:
        return 'Partnet Accepted';
      default:
        return 'Unknown';
    }
  };

  const toStatusIcon = (state: Number) => {
    switch (state) {
      case 0:
        return <VisibilityIcon className='ml-3 mr-1' />;
      case 1:
        return <CancelIcon className='ml-3 mr-1' />;
      case 3:
        return <VisibilityIcon className='ml-3 mr-1' />;
      case 4:
        return <CancelIcon className='ml-3 mr-1' />;
      case 5:
        return <CheckIcon className='ml-3 mr-1' />;
      default:
        return <></>;
    }
  };

  return (
    <div>
      {hide_control ? (
        <></>
      ) : (
        <div className='mx-4 flex justify-end px-2'>
          TODO: PUT SOME FILTER CONTROLS HERE
        </div>
      )}
      {!(applications || []).length ? (
        <div className='text-center text-xl'>- Nothing to show -</div>
      ) : (
        ''
      )}
      {(applications || []).map((v, i) => (
        <div
          key={key_prefix + '_' + v.application_id + '_' + i}
          className='m-4 cursor-pointer rounded-md border border-gray-500 p-2'
          onClick={() => router.push('/application/' + v.application_id)}
        >
          <div className='p-1 text-2xl'>
            {v.partner.display_name} - {v.opportunity?.field}
          </div>
          <div className='flex flex-wrap'>
            <div>
              <PersonIcon className='mr-1' />
              {v.student.name}
            </div>
            <div>
              <CalendarMonthIcon className='ml-3 mr-1' />
              {formatDateTime(new Date(v.applied_at))}
            </div>
            <div>
              {toStatusIcon(v.display_status!)}
              {toStateString(v.display_status!)}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ApplicationsView;
