const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  platform: process.platform,
  minimize: () => ipcRenderer.send('window-minimize'),
  maximize: () => ipcRenderer.send('window-maximize'),
  close: () => ipcRenderer.send('window-close'),
  toggleOverlay: () => ipcRenderer.send('toggle-overlay'),
  closeOverlay: () => ipcRenderer.send('close-overlay'),
  onMaximizeChange: (callback) => {
    ipcRenderer.on('maximize-changed', (event, isMaximized) => callback(isMaximized));
  },
  onShowWelcomeDialog: (callback) => {
    ipcRenderer.on('show-welcome-dialog', () => callback());
  },
  onOverlayToggled: (callback) => {
    ipcRenderer.on('overlay-toggled', (event, isOverlay) => callback(isOverlay));
  },
  isOverlay: () => {
    const params = new URLSearchParams(window.location.search);
    return params.get('overlay') === 'true';
  },
});
