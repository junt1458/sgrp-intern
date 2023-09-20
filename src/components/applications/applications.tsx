import { useRouter } from 'next/router';
import { Applications } from '../../libs/graphql';
import PersonIcon from '@mui/icons-material/Person';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckIcon from '@mui/icons-material/Check';
import { formatDateTime } from '../../libs/date';

import FilterAltIcon from '@mui/icons-material/FilterAlt';
import SearchIcon from '@mui/icons-material/Search';
import SortIcon from '@mui/icons-material/Sort';
import { useMemo, useState } from 'react';

interface ApplicationsViewOptions {
  applications?: Applications[];
  key_prefix: string;
  hide_control?: boolean;
  role: string;
}

const ApplicationsView: React.FC<ApplicationsViewOptions> = ({
  applications,
  key_prefix,
  hide_control,
  role,
}) => {
  const router = useRouter();

  const [filter, setFilter] = useState(-1);
  const [sort, setSort] = useState(0);
  const [search, setSearch] = useState('');

  const data = useMemo(() => {
    if (!applications?.length) return [];

    return applications
      .filter(
        (v) =>
          filter === -1 ||
          hide_control ||
          (filter === 0 &&
            (v.display_status === 0 || v.display_status === 3)) ||
          (filter === 1 && v.display_status === 5) ||
          (filter === 2 && (v.display_status === 1 || v.display_status === 4))
      )
      .filter((v) => {
        const t = search.toLocaleLowerCase();
        return (
          v.opportunity.field?.toLocaleLowerCase().includes(t) ||
          v.partner.display_name?.toLocaleLowerCase().includes(t) ||
          v.partner.address_country?.toLocaleLowerCase().includes(t) ||
          hide_control
        );
      })
      .sort((a, b) => {
        const inv = sort % 2 ? -1 : 1;
        const a_name = `${a.partner.display_name} - ${a.opportunity.field}`;
        const b_name = `${b.partner.display_name} - ${b.opportunity.field}`;

        const a_applied = new Date(a.applied_at);
        const b_applied = new Date(b.applied_at);

        const name_cmp = a_name > b_name ? 1 : a_name < b_name ? -1 : 0;
        const posted_cmp =
          a_applied > b_applied ? -1 : a_applied < b_applied ? 1 : 0;

        switch (sort) {
          case 0:
          case 1:
            // Newest / Oldest
            if (posted_cmp === 0) return name_cmp;
            return posted_cmp * inv;

          case 2:
          case 3:
            // Name (A-Z) (Z-A)
            if (name_cmp === 0) return posted_cmp;
            return name_cmp * inv;
        }
        return 0;
      });
  }, [applications, filter, search, sort, hide_control]);

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
        return 'Partner Accepted';
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
        <div className='mx-4 flex flex-wrap px-2 md:justify-end'>
          <div className='mr-1 flex items-center'>
            <label htmlFor='filter_search'>
              <SearchIcon />
            </label>
            <input
              type='text'
              id='filter_search'
              placeholder='Name/Field/Country'
              className='my-1 w-full max-w-[300px] rounded-md border border-gray-400 px-[2px]'
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className='mr-1 flex items-center'>
            <label htmlFor='item_sort'>
              <SortIcon />
            </label>
            <select
              id='item_sort'
              className='rounded-md border border-gray-400'
              defaultValue={0}
              onChange={(e) => setSort(parseInt(e.target.value))}
            >
              <option value={0}>Newest</option>
              <option value={1}>Oldest</option>
              <option value={2}>Partner Name (A to Z)</option>
              <option value={3}>Partner Name (Z to A)</option>
            </select>
          </div>
          <div className='flex items-center'>
            <label htmlFor='filter_select'>
              <FilterAltIcon />
            </label>
            <select
              id='filter_select'
              className='rounded-md border border-gray-400'
              defaultValue={-1}
              onChange={(e) => setFilter(parseInt(e.target.value))}
            >
              <option value={-1}>All</option>
              <option value={0}>Pending</option>
              <option value={1}>Accepted</option>
              <option value={2}>Rejected</option>
            </select>
          </div>
        </div>
      )}
      {!data.length ? (
        <div className='text-center text-xl'>- Nothing to show -</div>
      ) : (
        ''
      )}
      {data.map((v, i) => (
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
