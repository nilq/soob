const electron      = require('electron');
const app           = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({ width: 900, height: 680 });
  mainWindow.loadURL('http://localhost:3000');

  app.setAboutPanelOptions(
    { applicationName: "Soob"
    , applicationVersion: "0.0.1"
    }
  );

  mainWindow.on('closed', () => mainWindow = null);
}

app.on('ready', createWindow)