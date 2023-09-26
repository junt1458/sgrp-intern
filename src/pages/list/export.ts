import * as csv from 'csv';
import { formatDate, formatDateTime } from '../../libs/date';
import { Applications, Opportunities } from '../../libs/graphql';

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

export const exportCSV = (
  opportunity: Opportunities,
  applications: Applications[]
) => {
  const title = `Applications for "${opportunity.partner.display_name} - ${opportunity.field}" (${opportunity.opportunity_id})`;
  const header = [
    'Application ID',
    'Apply Date',
    'Status',
    'Approved By',
    'Name',
    'Photo',
    'Phone',
    'Email',
    'Gender',
    'Date of Birth',
    'Passport No.',
    'Passport Expiry',
    'Passport Country',
    'Department of School',
    'Major Field',
    'Self Introduction',
  ];
  const data: String[][] = [];
  applications.forEach((v) => {
    data.push([
      v.application_id,
      formatDateTime(new Date(v.applied_at)),
      toStateString(v.display_status!),
      v.manager?.name || '',
      v.student.name,
      `${process.env.NEXT_PUBLIC_R2_PUBLIC_URL}/${v.student.client_id}.png`,
      v.student.phone,
      v.student.email,
      v.student.gender,
      !v.student.birthday ? '' : formatDateTime(new Date(v.student.birthday)),
      v.student.passport_no,
      !v.student.passport_expires
        ? ''
        : formatDateTime(new Date(v.student.passport_expires)),
      v.student.passport_country,
      v.student.department,
      v.student.major,
      v.student.self_introduction,
    ]);
  });

  const rows = [[title], header, ...data];
  csv.stringify(rows, (err, res) => {
    if (err) {
      alert('Error occured during processing: ' + err);
      return;
    }

    const csv_with_bom = Buffer.concat([
      Buffer.from(Uint8Array.from([0xef, 0xbb, 0xbf])),
      Buffer.from(res),
    ]);

    const link = document.createElement('a');
    link.href =
      'data:text/csv;base64;charset=utf-8,' + csv_with_bom.toString('base64');
    link.download = `internship_applications_${formatDate(
      new Date()
    ).replaceAll('/', '-')}_${opportunity.opportunity_id}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
};
