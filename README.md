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

// 이슈

- React, Nextjs 버전 다운그레이드 필요 : Reactj 18v, Nextjs 14v
- 달력 관련 이슈. 현재 React 버전으로인하여 캘린더 디자인이 안맞아서 깨짐. nextjs랑 React 버전 한단계 낮추고, 나머지 라이브러리도 전부확인 필요
- antd도 맞지 않은 부분이 많음
- 모노레포 형태로 전환 예정
- 우선 모든 화면을 생성한 후, 새로운 레포지토리로 만들어서 작업 시작

// 네비 메뉴 관련

1. 공통 메뉴 :

- SM Pay 관리

  - SM Pay 관리
  - 충전 회수 현황

- 계정 관리
  - 대행사 관리
  - 회원 등록

2. 대행사 메뉴 :

- SM Pay 관리

  - SM Pay 관리
  - 충전 회수 현황

- 광고 성과 리포트

  - 계정 보고서
  - 캠페인 보고서
  - 광고 그룹 보고서
  - 키워드 보고서
  - 검색어 보고서
  - 전환 보고서
  - 매체 보고서

- 자동 입찰

- 계정 관리
  - 대행사 관리
  - 회원 등록

3. 관리자 메뉴 :

- SM Pay 관리

  - SM Pay 관리
  - 충전 회수 현황
  - SM Pay 심사 (-)

- cs 관리

- 게시판 관리

  - 공지 관리
  - FAQ 관리

- 자동 입찰

- 계정 관리

  - 대행사 관리
  - 회원 관리

- 알림 설정
