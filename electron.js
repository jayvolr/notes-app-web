const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow

let url
if (process.env.NODE_ENV === 'DEV') {
  url = 'http://localhost:8080/'
} else {
  url = `file://${process.cwd()}/dist/index.html`
}

app.on('ready', () => {
  let window = new BrowserWindow({
    title: 'Notes',
    icon: './public/favicon.ico',
    width: 1000,
    height: 700,
    titleBarStyle: 'hidden',
    backgroundColor: '#1e1f22',
    minHeight: 500,
    minWidth: 500,
    webPreferences: {
      nodeIntegration: true,
    }
  })
  window.loadURL(url)
})