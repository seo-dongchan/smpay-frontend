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
// TODO : shadcn 관련 된 컴포넌트 관련 폴더 구조를 좀 더 직관적이게 할 방법...
components/
│
├── ui/               // shadcn에서 설치된 순수 UI 단위 컴포넌트
│   ├── button.tsx
│   ├── sidebar.tsx
│   └── ...
│
├── layout/           // Header, Sidebar 등 페이지 공통 영역
│   ├── AppSidebar.tsx
│   ├── Header.tsx
│   └── ...
│
├── nav/              // 네비게이션 관련 컴포넌트
│   ├── NavMain.tsx
│   ├── NavUser.tsx
│   ├── NavProjects.tsx
│   └── TeamSwitcher.tsx
│
├── table/            // 테이블 전용
│   └── DataTable.tsx
│
└── common/           // 재사용 가능한 작은 컴포넌트 모음
```
