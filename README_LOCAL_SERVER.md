# 本地服务器预览说明

如果你通过 `file://` 打开 `index.html`，浏览器可能会禁用语音合成功能（`SpeechSynthesis`）。这是 Chrome 和一些浏览器对本地文件协议的安全限制。要让语音功能正常工作，请通过本地 HTTP 服务器打开页面。

## 运行方法

1. 打开 PowerShell。
2. 进入项目目录：

```powershell
cd "C:\Users\Zz\Desktop\Vs code\translator"
```

3. 运行启动脚本：

```powershell
.\run_local_server.bat
```

4. 在浏览器中打开：

```
http://localhost:8000
```

## 如果没有 Python

可以先安装 Python，或者使用支持本地服务器的其他工具。

## 方案说明

- `file://` 协议下，大多数现代浏览器会限制 `speechSynthesis`。这不是页面代码的问题，而是浏览器安全策略。
- 使用 `http://localhost` 可以避免该限制，并且页面中语音功能应该会恢复。
- 如果你希望我进一步帮你把该页面改成一个内置“启动服务器”提示页面，我也可以继续做。