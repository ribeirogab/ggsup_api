/* eslint-disable no-console */
/* eslint-disable no-shadow */
import https from 'https';

interface Message {
  app_id: string;
  contents: { en: string };
  included_segments?: string[];
  external_id?: string;
}

export default function SendNotificationService(data: Message): void {
  const headers = {
    'Content-Type': 'application/json; charset=utf-8',
    Authorization: 'Basic MmE0NDgxZjQtMmY0ZS00OTI4LWFmOWYtZjZiMWE4NWE0YjBm',
  };

  const options = {
    host: 'onesignal.com',
    port: 443,
    path: '/api/v1/notifications',
    method: 'POST',
    headers,
  };

  const request = https.request(options, res => {
    res.on('data', data => {
      console.log('Response:');
      console.log(JSON.parse(data));
    });
  });

  request.on('error', e => {
    console.log('ERROR:');
    console.log(e);
  });

  request.write(JSON.stringify(data));
  request.end();
}
