# electron + svelte (typescript)

``` shell
  pnpm i
  pnpm start
  pnpm build
  pnpm back:win

```
## 项目目录
```shell
.
├── output // 编译目录
│   └──electron
│      └──loading.html // 加载页面（根目录手动复制到这里）
├── public
├── src
│   ├── common
│   ├── electron // 主进程
│   └── render // 渲染进程
.
.
.
├── loading.html // 加载页面
├── teconfig.e.json // 主进程编译配置
.
.
.
```
