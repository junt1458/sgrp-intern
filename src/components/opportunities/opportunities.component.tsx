import { useRouter } from 'next/router';
import { formatDate } from '../../libs/date';
import { Opportunities } from '../../libs/graphql';

import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

import ModeIcon from '@mui/icons-material/Mode'; // Draft
import VisibilityIcon from '@mui/icons-material/Visibility'; // Review
import CheckIcon from '@mui/icons-material/Check'; // Open
import CancelIcon from '@mui/icons-material/Cancel'; // Closed

import FilterAltIcon from '@mui/icons-material/FilterAlt';
import SearchIcon from '@mui/icons-material/Search';
import SortIcon from '@mui/icons-material/Sort';
import { useMemo, useState } from 'react';

interface OpportunitiesViewOptions {
  opportunities?: Opportunities[];
  key_prefix: string;
  hide_control?: boolean;
  role: string;
  defaultFilter?: number;
}

const OpportunitiesView: React.FC<OpportunitiesViewOptions> = ({
  opportunities,
  key_prefix,
  hide_control,
  role,
  defaultFilter,
}) => {
  const [filter, setFilter] = useState(
    defaultFilter === undefined ? 3 : defaultFilter
  );
  const [sort, setSort] = useState(0);
  const [search, setSearch] = useState('');

  const data = useMemo(() => {
    if (!opportunities?.length) return [];

    return opportunities
      .filter(
        (v) => filter === -1 || v.display_status === filter || hide_control
      )
      .filter((v) => {
        const t = search.toLocaleLowerCase();
        return (
          v.detail?.toLocaleLowerCase().includes(t) ||
          v.city.toLocaleLowerCase().includes(t) ||
          v.field?.toLocaleLowerCase().includes(t) ||
          v.partner.display_name?.toLocaleLowerCase().includes(t) ||
          v.partner.address_country?.toLocaleLowerCase().includes(t) ||
          hide_control
        );
      })
      .sort((a, b) => {
        const inv = sort % 2 ? -1 : 1;
        const a_name = `${a.partner.display_name} - ${a.field}`;
        const b_name = `${b.partner.display_name} - ${b.field}`;

        const a_posted = new Date(a.posted_at);
        const b_posted = new Date(b.posted_at);

        const a_start = new Date(a.date_from);
        const b_start = new Date(b.date_from);

        const name_cmp = a_name > b_name ? 1 : a_name < b_name ? -1 : 0;
        const posted_cmp =
          a_posted > b_posted ? -1 : a_posted < b_posted ? 1 : 0;
        const start_cmp = a_start > b_start ? 1 : a_start < b_start ? -1 : 0;

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

          case 4:
          case 5:
            // Start (Early/Late)
            if (start_cmp === 0)
              if (name_cmp === 0) return posted_cmp;
              else return name_cmp;
            return start_cmp * inv;
        }
        return 0;
      });
  }, [opportunities, filter, search, sort, hide_control]);

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
        <div className='mx-4 flex flex-wrap px-2 md:justify-end'>
          <div className='mr-1 flex items-center'>
            <label htmlFor='filter_search'>
              <SearchIcon />
            </label>
            <input
              type='text'
              id='filter_search'
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
              <option value={4}>Start Date (Earliest First)</option>
              <option value={5}>Start Date (Latest First)</option>
            </select>
          </div>
          <div className='flex items-center'>
            <label htmlFor='filter_select'>
              <FilterAltIcon />
            </label>
            <select
              id='filter_select'
              className='rounded-md border border-gray-400'
              defaultValue={defaultFilter === undefined ? 3 : defaultFilter}
              onChange={(e) => setFilter(parseInt(e.target.value))}
            >
              <option value={-1}>All</option>
              {role === 'partner' ? (
                <option value={0}>Draft</option>
              ) : undefined}
              {role === 'partner' || role === 'manager' ? (
                <option value={2}>Pending</option>
              ) : undefined}
              {role === 'partner' ? (
                <option value={1}>Rejected</option>
              ) : undefined}
              <option value={3}>Open</option>
              <option value={4}>Closed</option>
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
          key={key_prefix + '_' + v.opportunity_id + '_' + i}
          className='m-4 cursor-pointer rounded-md border border-gray-500 p-2'
          onClick={() =>
            router.push(
              (v.display_status === 0 ? '/partner/detail?id=' : '/detail/') +
                v.opportunity_id
            )
          }
        >
          <div className='p-1 text-2xl'>
            {v.partner.display_name} - {v.field}
          </div>
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
