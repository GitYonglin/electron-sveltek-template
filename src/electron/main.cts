import { app, BrowserWindow, Menu, protocol } from "electron";
import { createWindow } from "./utils/createWindow.cjs";
import { showLoading } from "./utils/loadingWindow.cjs";
// import { onAppMenu, createAppMenu } from "./utils/menu";
// import { onNavbar } from "./utils/navbar";
// import { onContextMenu } from "./utils/contextMenu";

// onNavbar();
// onAppMenu();
// onContextMenu();
app.whenReady().then(() => {
    const loading = showLoading();
    createWindow(loading);
    // 设置app菜单
    // Menu.setApplicationMenu(createAppMenu());
    // createWindow(); // 创建窗口
    protocol.registerFileProtocol('files', (request, callback) => {
        const url = request.url.substr(8)
        let path = decodeURI(url.split('?')[0])
        callback({path})
    })
    // 通常在 macOS 上，当点击 dock 中的应用程序图标时，如果没有其他打开的窗口，那么程序会重新创建一个窗口。
    app.on("activate", () => BrowserWindow.getAllWindows().length === 0 && createWindow(loading));
})


// 除了 macOS 外，当所有窗口都被关闭的时候退出程序。 macOS窗口全部关闭时,dock中程序不会退出
app.on("window-all-closed", () => {
    process.platform !== "darwin" && app.quit();
});

