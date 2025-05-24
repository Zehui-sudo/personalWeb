# 项目名称 (请替换为你的项目名称)

这是一个使用 Vite + React + TypeScript 构建的前端项目。

## 项目结构简介

```
.
├── .bolt/            # Bolt 配置 (如果使用)
├── dist/             # 打包后的生产文件
├── public/           # 静态公共资源
│   └── logo.svg      # 项目 Logo (示例)
├── src/              # 项目源代码
│   ├── components/   # React 组件
│   ├── data/         # 数据或状态管理相关
│   ├── pages/        # 页面级别组件
│   ├── types/        # TypeScript 类型定义
│   ├── utils/        # 工具函数
│   ├── App.tsx       # 应用主组件
│   ├── index.css     # 全局 CSS (或 Tailwind 入口)
│   ├── main.tsx      # 应用入口文件
│   └── vite-env.d.ts # Vite 环境变量类型定义
├── .gitignore        # Git 忽略配置
├── eslint.config.js  # ESLint 配置文件
├── index.html        # HTML 入口文件
├── package-lock.json # npm 依赖锁定文件
├── package.json      # npm 包管理文件
├── postcss.config.js # PostCSS 配置文件
├── tailwind.config.js # Tailwind CSS 配置文件
├── tsconfig.app.json # TypeScript 应用编译配置
├── tsconfig.json     # TypeScript 基础编译配置
├── tsconfig.node.json # TypeScript Node 环境编译配置
└── vite.config.ts    # Vite 配置文件
```

## 如何开始

1.  **安装依赖:**
    ```bash
    npm install
    ```
    或者，如果你使用 `yarn` 或 `pnpm`:
    ```bash
    yarn install
    # 或者
    pnpm install
    ```

2.  **启动开发服务器:**
    ```bash
    npm run dev
    ```
    或者:
    ```bash
    yarn dev
    # 或者
    pnpm dev
    ```
    这将会在本地启动一个开发服务器，通常访问地址为 `http://localhost:5173` (具体端口请查看终端输出)。

3.  **构建生产版本:**
    ```bash
    npm run build
    ```
    或者:
    ```bash
    yarn build
    # 或者
    pnpm build
    ```
    构建产物将输出到 `dist` 目录。

4.  **预览生产版本:**
    ```bash
    npm run preview
    ```
    或者:
    ```bash
    yarn preview
    # 或者
    pnpm preview
    ```
    此命令会在本地启动一个服务器来预览 `dist` 目录中的生产构建。

## 主要技术栈

*   **Vite:** 下一代前端构建工具。
*   **React:** 用于构建用户界面的 JavaScript 库。
*   **TypeScript:** JavaScript 的超集，添加了静态类型。
*   **Tailwind CSS:** 一个功能优先的 CSS 框架。
*   **ESLint:** 代码检查工具，用于保持代码风格一致和发现潜在错误。

## 其他脚本

你可以在 `package.json` 文件中的 `scripts` 部分找到更多可用的脚本，例如：

*   `lint`: 运行 ESLint 检查代码。
*   `type-check`: 运行 TypeScript 类型检查。

请根据你的实际项目情况修改和完善此 README 文件。 