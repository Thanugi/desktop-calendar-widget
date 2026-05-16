const { app, BrowserWindow, screen, ipcMain } = require('electron')
const { getTodayEvents } = require('./calendar')

let win

function createWindow() {
  const { width, height } = screen.getPrimaryDisplay().workAreaSize

  win = new BrowserWindow({
    width: 280,
    height: 280,
    x: width - 300,
    y: height - 320,
    frame: false,
    transparent: true,
    alwaysOnTop: true,
    resizable: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  })

  win.loadFile('index.html')

  app.setLoginItemSettings({
  openAtLogin: true
})

}

ipcMain.handle('get-events', async () => {
  try {
    const events = await getTodayEvents()
    return { success: true, events }
  } catch (error) {
    return { success: false, error: error.message }
  }
})

ipcMain.handle('resize-window', (event, height) => {
  if (win) {
    const { width: screenWidth, height: screenHeight } = screen.getPrimaryDisplay().workAreaSize
    win.setSize(280, height)
    win.setPosition(screenWidth - 300, screenHeight - height - 20)
  }
})

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})