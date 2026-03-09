const { app, BrowserWindow, ipcMain, globalShortcut } = require('electron');
const path = require('path');
const fs = require('fs');

let mainWindow;
const configPath = path.join(app.getPath('userData'), 'config.json');

function getConfig() {
  try {
    if (fs.existsSync(configPath)) {
      return JSON.parse(fs.readFileSync(configPath, 'utf-8'));
    }
  } catch (e) {
    console.error('Ошибка чтения конфига:', e);
  }
  return { firstRun: true };
}

function saveConfig(config) {
  try {
    fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
  } catch (e) {
    console.error('Ошибка записи конфига:', e);
  }
}

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 720,
    minWidth: 800,
    minHeight: 600,
    frame: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: false,
      contextIsolation: true,
      webviewTag: true,
    },
    icon: path.join(__dirname, 'assets', 'icon.png'),
    backgroundColor: '#0d0d0d',
  });

  mainWindow.loadFile('index.html');

  mainWindow.webContents.on('did-finish-load', () => {
    console.log('Приложение загружено');
    // Показываем welcome-диалог при первом запуске
    const config = getConfig();
    if (config.firstRun) {
      mainWindow.webContents.send('show-welcome-dialog');
      config.firstRun = false;
      saveConfig(config);
    }
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  mainWindow.on('maximize', () => {
    mainWindow.webContents.send('maximize-changed', true);
  });

  mainWindow.on('unmaximize', () => {
    mainWindow.webContents.send('maximize-changed', false);
  });
}

function createOverlay() {
  if (!mainWindow) return null;

  // Просто устанавливаем главное окно поверх всех
  mainWindow.setAlwaysOnTop(true, 'screen-saver');
  mainWindow.setVisibleOnAllWorkspaces(true, { visibleOnFullScreen: true });
  mainWindow.setSkipTaskbar(true);
  
  // Отправляем уведомление о включении режима оверлея
  mainWindow.webContents.send('overlay-toggled', true);
  
  return mainWindow;
}

function disableOverlay() {
  if (!mainWindow) return;
  
  mainWindow.setAlwaysOnTop(false);
  mainWindow.setVisibleOnAllWorkspaces(false);
  mainWindow.setSkipTaskbar(false);
  
  mainWindow.webContents.send('overlay-toggled', false);
}

ipcMain.on('window-minimize', () => {
  if (mainWindow) mainWindow.minimize();
});

ipcMain.on('window-maximize', () => {
  if (mainWindow) {
    if (mainWindow.isMaximized()) {
      mainWindow.unmaximize();
    } else {
      mainWindow.maximize();
    }
  }
});

ipcMain.on('window-close', () => {
  if (mainWindow) mainWindow.close();
});

ipcMain.on('toggle-overlay', () => {
  if (mainWindow && mainWindow.isAlwaysOnTop()) {
    disableOverlay();
  } else {
    createOverlay();
  }
});

ipcMain.on('close-overlay', () => {
  disableOverlay();
});

app.whenReady().then(() => {
  createWindow();

  // Регистрируем глобальную горячую клавишу Ctrl+M
  globalShortcut.register('CommandOrControl+M', () => {
    if (mainWindow && mainWindow.isAlwaysOnTop()) {
      disableOverlay();
    } else {
      createOverlay();
    }
  });

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('will-quit', () => {
  globalShortcut.unregisterAll();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
