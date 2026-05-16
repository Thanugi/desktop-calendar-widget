const { google } = require('googleapis')
const path = require('path')
const fs = require('fs')

const TOKEN_PATH = path.join(__dirname, 'token.json')
const CREDENTIALS_PATH = path.join(__dirname, 'credentials.json')

async function authorize() {
  const credentials = JSON.parse(fs.readFileSync(CREDENTIALS_PATH))
  const token = JSON.parse(fs.readFileSync(TOKEN_PATH))

  const { client_id, client_secret } = credentials.installed
  const oAuth2Client = new google.auth.OAuth2(client_id, client_secret)

  oAuth2Client.setCredentials({
    refresh_token: token.refresh_token
  })

  return oAuth2Client
}

module.exports = { authorize }