const { google } = require('googleapis')
const { authorize } = require('./auth')

async function getTodayEvents() {
  const auth = await authorize()
  const calendar = google.calendar({ version: 'v3', auth })

  const now = new Date()
  const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate())
  const endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59)

  const response = await calendar.events.list({
    calendarId: 'primary',
    timeMin: startOfDay.toISOString(),
    timeMax: endOfDay.toISOString(),
    singleEvents: true,
    orderBy: 'startTime',
  })

  const events = response.data.items

  if (!events || events.length === 0) return []

  return events.map(event => {
    const start = event.start.dateTime || event.start.date
    const end = event.end.dateTime || event.end.date

    const formatTime = (iso) => {
      if (!iso.includes('T')) return 'All day'
      const d = new Date(iso)
      return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }

    return {
      title: event.summary || 'Untitled',
      time: start.includes('T')
        ? `${formatTime(start)} – ${formatTime(end)}`
        : 'All day',
    }
  })
}

module.exports = { getTodayEvents }