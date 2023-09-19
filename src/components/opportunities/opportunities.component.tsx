import { useRouter } from 'next/router';
import { formatDate } from '../../libs/date';
import { Opportunities } from '../../libs/graphql';

import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

import ModeIcon from '@mui/icons-material/Mode'; // Draft
import VisibilityIcon from '@mui/icons-material/Visibility'; // Review
import CheckIcon from '@mui/icons-material/Check'; // Open
import CancelIcon from '@mui/icons-material/Cancel'; // Closed

interface OpportunitiesViewOptions {
  opportunities?: Opportunities[];
  key_prefix: string;
  hide_control?: boolean;
}

const OpportunitiesView: React.FC<OpportunitiesViewOptions> = ({
  opportunities,
  key_prefix,
  hide_control,
}) => {
  const router = useRouter();
  const toStateString = (state: Number) => {
    switch (state) {
      case 0:
        return 'Draft';
      case 1:
        return 'Rejected';
      case 2:
        return 'In Review';
      case 3:
        return 'Open';
      case 4:
        return 'Closed';
      default:
        return 'Unknown';
    }
  };

  const toStatusIcon = (state: Number) => {
    switch (state) {
      case 0:
        return <ModeIcon className='ml-3 mr-1' />;
      case 1:
        return <CancelIcon className='ml-3 mr-1' />;
      case 2:
        return <VisibilityIcon className='ml-3 mr-1' />;
      case 3:
        return <CheckIcon className='ml-3 mr-1' />;
      case 4:
        return <CancelIcon className='ml-3 mr-1' />;
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
      {(opportunities || []).map((v, i) => (
        <div
          key={key_prefix + '_' + v.opportunity_id + '_' + i}
          className='m-4 cursor-pointer rounded-md border border-gray-500 p-2'
          onClick={() =>
            router.push(
              (v.display_status === 0 ? '/partner/detail?id=' : '/detail/') +
                v.opportunity_id
            )
          }
        >
          <div className='p-1 text-2xl'>{v.partner.display_name}</div>
          <div className='flex flex-wrap'>
            <div>
              <LocationOnIcon />
              {v.city}, {v.partner.address_country}
            </div>
            <div>
              <CalendarMonthIcon className='ml-3 mr-1' />
              {formatDate(new Date(v.date_from))} ~{' '}
              {formatDate(new Date(v.date_to))}
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

export default OpportunitiesView;
