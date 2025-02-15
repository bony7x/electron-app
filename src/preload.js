const { contextBridge, ipcRenderer } = require("electron/renderer");

contextBridge.exposeInMainWorld("darkMode", {
  toggle: () => ipcRenderer.invoke("dark-mode:toggle"),
  system: () => ipcRenderer.invoke("dark-mode:system"),
});

contextBridge.exposeInMainWorld("electron", {
  startDrag: (fileName) => ipcRenderer.send("ondragstart", fileName),
});
