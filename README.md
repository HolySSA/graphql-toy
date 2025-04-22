# GraphQL 학습용 토이 프로젝트

이 프로젝트는 GraphQL을 학습하기 위한 토이 프로젝트입니다. GraphQL은 API를 위한 쿼리 언어이며, 클라이언트가 필요한 데이터를 정확히 요청할 수 있게 해주는 런타임입니다.

## GraphQL이란?

GraphQL은 다음과 같은 특징을 가지고 있습니다

- 클라이언트가 필요한 데이터를 정확히 지정할 수 있음
- 단일 요청으로 여러 리소스를 조회 가능
- 타입 시스템을 통한 강력한 타입 안정성
- API 버전 관리가 용이
- 자동 문서화

## 프로젝트 설정

### 필수 요구사항

- Node.js (v14 이상)
- npm 또는 yarn
- TypeScript (v4 이상)

### 설치 방법

1. 프로젝트 초기화

```bash
npm init -y
```

2. 필요한 패키지 설치

```bash
npm install express express-graphql graphql @graphql-tools/schema
```

3. 개발 의존성 설치

```bash
npm install --save-dev typescript ts-node nodemon @types/express @types/express-graphql @types/graphql @types/node
```

4. TypeScript 설정

```bash
npx tsc --init
```

### 프로젝트 구조

```
graphql-toy/
├── src/
│   ├── schema/
│   │   └── index.ts      # GraphQL 스키마 정의
│   ├── resolvers/
│   │   └── index.ts      # 리졸버 함수 정의
│   └── server.ts         # Express 서버 설정
├── dist/                 # 컴파일된 JavaScript 파일
├── package.json
├── tsconfig.json
└── README.md
```

## 실행 방법

개발 모드로 실행 (TypeScript 직접 실행):

```bash
npm run dev
```

프로덕션 모드로 실행 (컴파일 후 실행):

```bash
npm run build
npm start
```

## GraphQL Playground

서버 실행 후 다음 URL에서 GraphQL Playground에 접속할 수 있습니다:

```
http://localhost:4000/graphql
```

예시 쿼리:

```graphql
query {
  hello
}
```

## 학습 목표

1. GraphQL 스키마 작성
2. 리졸버 구현
3. 쿼리와 뮤테이션 작성
4. TypeScript와 GraphQL 타입 시스템 통합
5. 데이터 로딩 최적화

## 참고 자료

- [GraphQL 공식 문서](https://graphql.org/learn/)
- [GraphQL Korea](https://graphql-kr.github.io/)
- [Apollo GraphQL](https://www.apollographql.com/docs/)
- [TypeScript 공식 문서](https://www.typescriptlang.org/docs/)
