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

### ui 라이브러리 이슈

0. 최대한 shadcn 위주로 작업하는게 목표. tailwinds 방식이 요새 선호하는 추세

1. Table

- Table은 현재 shadcn 커스텀으로 사용 중.
- 테이블 관련하여 많은 기능이나 커스텀 마이징이 필요하면 antd로 사용

2. Input

- 현재 antd 사용 : 유효성 검사 같은 부분이 큼
- shadcn으로 쉽게 커스텀마이징이 가능하다면 shadcn으로 사용

3. Description

- shadcn은 이런 형태가 없으므로 antd 로 사용중
- 만약 디자인이 굳이 필요 없다면, shadcn Card로 대체...

4. Form

- shadcn으로 Form 사용하기로 결정.

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

## 불필요하거나 사용하지 않은 컴포넌트 혹은 참고용

```bash
components
├── ui
│   ├── dropdown-menu.tsx # 보류
│   ├── input.tsx # 유효성 검사로 인하여 antd 사용중
│   ├── table.tsx # 일부는 antd를 사용 중
│   └── ...
├── composite
│   ├── nav-user.tsx
│   ├── team-switcher.tsx
│   └── nav-projects.tsx
```

// 테스트 하기
