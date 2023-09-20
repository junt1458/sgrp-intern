import { NextApiRequest, NextApiResponse } from 'next';
import { authenticate } from '../../libs/auth';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

const createEmail = (
  to_name: string,
  cc: string,
  cc_name: string,
  body: string
) => {
  return [
    `Hi, ${to_name}.`,
    !cc ? '' : `(Cc: ${cc_name})`,
    '',
    body,
    '',
    '===============',
    'Internship Application System',
    process.env.ADMIN_MAIL_WEB_URL,
    '* This is auto-generated message.',
    '* Do not send any messages to this address.',
  ].join('\r\n');
};

const sendEmail = (
  to: string,
  to_name: string,
  cc: string,
  cc_name: string,
  subject: string,
  text: string
): Promise<boolean> => {
  if (!to && !cc) return new Promise<boolean>((resolve) => resolve(false));

  const transporter = nodemailer.createTransport({
    host: process.env.ADMIN_MAIL_SERVER,
    port: Number.parseInt(process.env.ADMIN_MAIL_PORT!),
    secure: true,
    auth: {
      user: process.env.ADMIN_MAIL_USER,
      pass: process.env.ADMIN_MAIL_PASS,
    },
  });

  const mailOptions: Mail.Options = {
    from: `${process.env.ADMIN_MAIL_FROM_NAME} <${process.env.ADMIN_MAIL_FROM_ADDRESS}>`,
    to: `${to}`,
    cc: `${cc}`,
    subject: subject,
    text: createEmail(to_name, cc, cc_name, text),
  };

  if (!to) delete mailOptions['to'];
  if (!cc) delete mailOptions['cc'];

  return new Promise<boolean>((resolve) => {
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        resolve(false);
      } else {
        resolve(true);
      }
    });
  });
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { error, status } = await authenticate(req.headers, [
    'partner',
    'manager',
  ]);
  if (error !== undefined) {
    res.status(status).json({ error });
    return;
  }

  const aid = req.body.application_id;
  if (!aid) {
    res.status(400).json({ error: 'Application ID is missing' });
    return;
  }

  const a0Req = await fetch(
    `${process.env.GRAPHQL_REST_BASE}/getcontactsfromapplication/${aid}`,
    {
      headers: {
        'x-hasura-admin-secret': process.env.GRAPHQL_SECRET!,
      },
    }
  );
  const a0Res = await a0Req.json();

  if (!a0Res.applications_by_pk) {
    res.status(400).json({ error: 'Application ID is not found.' });
    return;
  }

  switch (a0Res.applications_by_pk.display_status) {
    case 1: {
      // Manager Reject
      await Promise.all([
        sendEmail(
          a0Res.applications_by_pk.student.email,
          a0Res.applications_by_pk.student.name,
          '',
          '',
          '[Internship] UPDATE: Your application is rejected.',
          [
            `Unfortunately, your application to "${a0Res.applications_by_pk.partner.display_name} - ${a0Res.applications_by_pk.opportunity.field}" is rejected by manager.`,
            `${process.env.ADMIN_MAIL_WEB_URL}/application/${aid}`,
          ].join('\r\n')
        ),
      ]);
      break;
    }
    case 3: {
      // Manager Approve
      await Promise.all([
        sendEmail(
          a0Res.applications_by_pk.student.email,
          a0Res.applications_by_pk.student.name,
          '',
          '',
          '[Internship] UPDATE: Your application is approved.',
          [
            `Good News! Your application to "${a0Res.applications_by_pk.partner.display_name} - ${a0Res.applications_by_pk.opportunity.field}" is approved by manager!`,
            'Please wait until the partner accepts your request.',
            `${process.env.ADMIN_MAIL_WEB_URL}/application/${aid}`,
          ].join('\r\n')
        ),
        sendEmail(
          a0Res.applications_by_pk.partner.contact_email,
          a0Res.applications_by_pk.partner.contact_name,
          '',
          '',
          '[Internship] New application',
          [
            `New application to "${a0Res.applications_by_pk.partner.display_name} - ${a0Res.applications_by_pk.opportunity.field}" is submitted.`,
            'Please visit website and accept or reject this application.',
            `${process.env.ADMIN_MAIL_WEB_URL}/application/${aid}`,
          ].join('\r\n')
        ),
      ]);
      break;
    }
    case 4: {
      // Partner Reject
      await Promise.all([
        sendEmail(
          a0Res.applications_by_pk.student.email,
          a0Res.applications_by_pk.manager.name,
          a0Res.applications_by_pk.manager.email,
          a0Res.applications_by_pk.manager.name,
          '[Internship] UPDATE: Your application is rejected.',
          [
            `Unfortunately, your application to "${a0Res.applications_by_pk.partner.display_name} - ${a0Res.applications_by_pk.opportunity.field}" is rejected by partner.`,
            `${process.env.ADMIN_MAIL_WEB_URL}/application/${aid}`,
          ].join('\r\n')
        ),
      ]);
      break;
    }
    case 5: {
      await Promise.all([
        sendEmail(
          a0Res.applications_by_pk.student.email,
          a0Res.applications_by_pk.manager.name,
          a0Res.applications_by_pk.manager.email,
          a0Res.applications_by_pk.manager.name,
          '[Internship] UPDATE: Your application is accepted.',
          [
            `Congratulations! Your application to "${a0Res.applications_by_pk.partner.display_name} - ${a0Res.applications_by_pk.opportunity.field}" is approved by partner!`,
            `${process.env.ADMIN_MAIL_WEB_URL}/application/${aid}`,
          ].join('\r\n')
        ),
      ]);
      break;
    }
  }

  res.status(200).json({});
};

export default handler;
