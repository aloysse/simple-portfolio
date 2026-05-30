# Simple Portfolio — CLAUDE.md

個人作品集網站，作者：何旼修（Front-end Designer）。

## Tech Stack

| 技術 | 版本 | 用途 |
|------|------|------|
| Astro | ^5.0.9 | SSG 框架、路由、content collections |
| React | ^18.3.1 | 互動元件（搭配 `client:idle` / `client:load`）|
| Tailwind CSS | ^3.4.14 | 所有樣式 |
| shadCN + Radix UI | — | 無障礙 headless 元件（Tabs、Button、Badge）|
| CVA | ^0.7.0 | 元件 variant 管理 |
| TypeScript | ^5.6.3 | 嚴格模式（`astro/tsconfigs/strict`）|
| MDX | ^4.0.2 | 專案文章 |
| Lucide React | ^0.456.0 | 行內 icon |
| astro-icon | ^1.1.2 | Astro 專用 icon 元件 |

## Directory Structure

```
src/
├── components/
│   ├── ui/              # shadCN 元件 (button.tsx, tabs.tsx, badge.tsx)
│   ├── icons/           # 自訂 icon 元件
│   └── *.astro / *.tsx  # 頁面區塊元件
├── pages/
│   ├── index.astro      # 首頁（主入口）
│   └── projects/        # 專案詳細頁路由
├── layouts/
│   └── Layout.astro     # 根 layout（Head meta、ClientRouter、Footer）
├── content/
│   └── projects/        # MDX 專案文章 + 圖片資源
├── data/                # TypeScript 靜態資料陣列
│   ├── Jobs.ts          # 工作經歷（WorkExperience interface）
│   ├── hardSkills.ts    # 技術技能
│   ├── softSkills.ts    # 軟技能
│   ├── education.ts     # 學歷
│   ├── languages.ts     # 語言能力
│   └── menu.ts          # 導覽選單項目
├── styles/
│   └── globals.css      # Tailwind directives + prose 樣式 + icon 動畫
├── lib/
│   ├── utils.ts         # cn() — clsx + tailwind-merge
│   └── formatDatetime.js
├── icons/               # SVG icon 檔案（32 個）
└── config.ts            # 全站設定（SITE / ME / SOCIALS）
public/                  # 靜態檔案（favicon、OG image、履歷 PDF）
```

## Key Configuration Files

### `src/config.ts`
全站核心設定，**所有個人資訊都在這裡修改**：
- `SITE` — 網站 URL、title、description、OG image、語言（`zh-Hant`）
- `ME` — 姓名、職稱、個人簡介、聯絡資訊、履歷 PDF 路徑
- `SOCIALS` — 社群連結（`show: true/false` 控制顯示）

### `tailwind.config.mjs`
自訂色彩系統：
```js
'light-theme': '#E9EBEC'       // 淺色背景
'dark-theme':  '#0C151D'       // 深色背景
'primary-light': '#FBD144'     // 主色（淺色模式）
'primary-dark':  '#FFE071'     // 主色（深色模式）
'n900': '#222222'              // 深色文字
'n700': '#171F26'
'n500': '#555555'              // 次要文字
```
Dark mode: `['media']`（跟隨系統偏好）
Container 最大寬度: `lg: 520px`, `xl: 620px`

### `src/content/config.ts`
Content collection schema — projects 欄位：`title`, `startDate`, `endDate`, `summary`, `url`, `cover`（image）, `tags`, `ogImage`

## Component Conventions

**Astro 元件（靜態）：**
- 命名加 `CC` 後綴代表 Content Container（聚合多個子元件），例如 `AboutMeCC.astro`、`ProjectsCC.astro`
- Layout 用 `<slot />` 注入內容

**React 元件（互動）：**
- 非即時需求用 `client:idle`；需立即互動用 `client:load`
- 目前只有 `TabsButtons.tsx` 使用 React（切換 About / Projects 分頁）

**shadCN 元件：**
- 放在 `src/components/ui/`，使用 CVA 管理 variant
- `cn()` 函式（`@/lib/utils`）合併 Tailwind class，避免衝突

## Data Management

- **靜態資料**：TypeScript 陣列 in `src/data/`，有 interface 型別定義
- **專案文章**：MDX in `src/content/projects/`，檔名以數字開頭排序（`1-xxx.mdx`）
- **MDX 結構慣例**：問題（Problem）→ 目標（Goal）→ 解決方案（Solution）

## Styling Conventions

- 所有樣式使用 Tailwind utility class
- 不使用 CSS Modules，Astro 元件可用 `<style>` 做 scoped 樣式（適合一次性覆寫）
- Icon 動畫定義在 `globals.css`（`slide-right`、`linkedin`）
- Prose（MDX 內文）樣式透過 `@tailwindcss/typography` + `globals.css` 自訂

## Icon System

- `astro-icon` 元件 + `src/icons/` 目錄（SVG 檔案，32 個）
- Lucide React 用於行內 React 元件
- 社群 icon 名稱對應 `src/icons/*.svg` 檔名

## Path Alias

`@/*` → `src/*`（tsconfig.json）

## Commands

```bash
npm run dev      # 開發伺服器（port 4321）
npm run build    # astro check + astro build
npm run preview  # 預覽 build 結果
```

## Language

UI 文案使用**繁體中文（zh-Hant）**，技術術語可保留英文。
