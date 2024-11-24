# 🐶 Mongle Monorepo

모노레포로 구성된 Mongle 프로젝트입니다.

## 🛠️ 기술 스택

| Package Manager | Build Tool | Framework | Framework | Language |
|----------------|------------|-----------|-----------|-----------|
| <img width="100" height="100" src="https://pnpm.io/img/pnpm-no-name-with-frame.svg"/> | <img width="100" height="100" src="https://turbo.build/images/docs/repo/repo-hero-logo-dark.svg"/> | <img width="100" height="100" src="https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_dark_background.png"/> | <img width="100" height="100" src="https://vitejs.dev/logo.svg"/> | <img width="100" height="100" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png"/> |
| pnpm | Turborepo | Next.js (app router)| Vite | TypeScript |

## 🗂 공통 UI Components

| Shadcn UI | Radix UI | Tailwind CSS |
|-----------|----------|--------------|
| <img width="100" height="100" src="https://avatars.githubusercontent.com/u/139895814?s=200&v=4"/> | <img width="100" height="100" src="https://avatars.githubusercontent.com/u/75051251?s=200&v=4"/> | <img width="100" height="100" src="https://avatars.githubusercontent.com/u/67109815?s=200&v=4"/> |

## 🗂️ 프로젝트 구조

<pre>
📦 mongle
 ┣ 📂 apps
 ┃ ┣ 📱 mongle-webview (Next js v14)
 ┃ ┃ ┣ 📂 src
 ┃ ┃ ┣ 📂 public
 ┃ ┃ ┗ 📄 package.json
 ┃ ┃
 ┃ ┗ 💼 mongle-business (Vite)
 ┃   ┣ 📂 src
 ┃   ┣ 📂 public
 ┃   ┗ 📄 package.json
 ┃
 ┣ 📂 packages
 ┃ ┗ 🎨 ui              
 ┃   ┣ 📂 components
 ┃   ┣ 📂 hooks
 ┃   ┗ 📄 package.json
 ┃
 ┣ 📄 package.json
 ┣ 📄 pnpm-workspace.yaml
 ┗ 📄 turbo.json
</pre>