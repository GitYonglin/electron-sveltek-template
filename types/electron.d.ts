type FS = {
    readFile: (filePath: string) => Promise<T>;
}


// ? 扩展window对象
interface Window {
    /** NodeJs fs */
    fs: FS;
    /** Electron ipcRenderer */
    ipc: import("electron").IpcRenderer;
    require: (name: string) => any;
}
