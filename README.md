# 🐶 Mongle Monorepo

모노레포로 구성된 Mongle 프로젝트입니다.

## 🛠️ 기술 스택

| Package Manager | Build Tools | Core | Language |
|----------------|------------|-----------|-----------|
| <img width="100" height="100" src="https://pnpm.io/img/pnpm-no-name-with-frame.svg"/> | <img width="100" height="100" src="https://turbo.build/images/docs/repo/repo-hero-logo-dark.svg"/>  <img width="100" height="100" src="https://vitejs.dev/logo.svg"/> | <img width="110" height="100" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"/> <img width="100" height="100" src="https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_dark_background.png"/>   | <img width="100" height="100" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png"/> |
| pnpm | Turborepo, Vite | React 18v, Next.js 14v (app router)| TypeScript |

## 🗂 공통 UI Components

| Shadcn UI | Tailwind CSS |
|----------|--------------|
| <img width="100" height="100" src="https://avatars.githubusercontent.com/u/139895814?s=200&v=4"/> | <img width="100" height="100" src="https://avatars.githubusercontent.com/u/67109815?s=200&v=4"/> |

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

## 🚀 실행 방법

### 패키지 설치
    pnpm install

### 실행

Webview 앱 실행 (Next.js)

    pnpm run:mg-wb
Business 앱 실행 (Vite)

    pnpm run:mg-bs
