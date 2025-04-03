# SM-pay Frontend

## 기술 스택

### core

- Nextjs 15, React 19 (node v23 이상)
- Typescript

### state

- React-query [-]
- Zustand [-]

### styles & ui

- tailwinds

### ui 라이브러리

- shadcn-ui
- antd-ui(일부만 : Description)
  - Table은 현재 shadcn 커스텀으로 사용해보고, 작업이 힘들 경우 antd로 사용할 것
  - Input은 현재 antd로 사용 중이며, 커스텀 마이징 가능하면 추후 작업

## 기획안 및 피그마

[피그마](https://www.figma.com/design/RxwP19dL9bvFhMJpZ5FzSW/SMPay-Planning?node-id=31-3468&p=f)
[정책안](https://searchm-atlab.atlassian.net/wiki/spaces/SMPay/pages/13336707/2.)

## 빌드 및 실행

### 빌드

```bash
npm run build
```

### 로컬 실행

```bash
npm run dev
```

### 운영 실행

```bash
npm run start
```

## 폴더 파일 구조

```bash
components
├── ui                # 순수 shadcn-ui 컴포넌트
│   ├── button.tsx
│   ├── input.tsx
│   └── ...
├── layout            # 전체 레이아웃 구성 컴포넌트
│   ├── Header.tsx
│   └── Layout.tsx
├── composite         # 조합형 UI (shadcn 기반)
│   ├── AppSidebar.tsx
│   ├── TeamSwitcher.tsx
│   └── NavMain.tsx
├── common            # 기타 공통 유틸/작은 컴포넌트
│   └── UserMenu.tsx

```
