const { app, BrowserWindow } = require("electron");
const path = require("path");

function createWindow() {
  const win = new BrowserWindow({
    width: 1100,
    height: 800,
    autoHideMenuBar: true,
    icon: path.join(__dirname, "assets", "logo.ico"),
    webPreferences: {
      nodeIntegration: false,     // 🔴 IMPORTANT
      contextIsolation: true,     // 🔴 IMPORTANT
    }
  });

  win.loadFile("index.html");

  // 🔴 FIX: input focus / typing issue
  win.webContents.on("did-finish-load", () => {
    win.focus();
  });
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
