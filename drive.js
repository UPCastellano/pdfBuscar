const { google } = require('googleapis');
const key = require('./drive-key.json');

const auth = new google.auth.GoogleAuth({
  credentials: key,
  scopes: ['https://www.googleapis.com/auth/drive.readonly']
});

const drive = google.drive({ version: 'v3', auth });

module.exports = drive; 