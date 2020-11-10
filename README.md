# Linewalks FE Skeleton
## 폴더 구조
```
├── 
├── components
│   ├── __test__
│   │  ├── Button.test.js
│   ├── Button.js
├── pages
│   ├── about
│   │   ├── index.js
│   ├── _app.js
│   ├── _document.js
│   └── index.js
├── public
│   ├── img
│   ├── styles
│   └── svg
├── .babelrc
├── .eslintignore
├── .eslintrc.js
├── .gitignore
├── jest.config.js
├── jsconfig.json
├── package.json
└── README.md

```

## 사전 준비

1. Node.js 설치(>= 10.16)
    * [파일다운로드](https://nodejs.org/ko/download/) - OS에 맞는 파일을 다운 받아서 설치하는 방법
    * [nvm](https://github.com/nvm-sh/nvm#installing-and-updating) - Node.js의 버전 매니저 이다. 이것을 사용하는것을 추천. 사용법은 문서 참고

2. Yarn 설치
    * [yarn](https://classic.yarnpkg.com/en/docs/install#debian-stable) - 프로젝트에 필요한 패키지를 설치 하도록 돕는 패키지 매니저이다.

## 프로젝트 사용법

* 설치
```
git clone https://github.com/linewalks/lw_fe_skeleton.git
```

* 폴더명 변경 및 레포 등록
```
lw_fe_skeleton -> [project name]
cd [project name]
git init
git add .
git commit -m 'feat: 초기설정'
git remote add origin [repo 주소]
```

* 패키지 설치
```
cd [project name]
yarn
```

* 실행
```
yarn dev
```

* 테스트
```
yarn test
```

* 빌드
```
yarn build
```

* public
  * img - 필요한 svg 파일 추가(파일 이름은 lw 디자인 규칙에 따름)
  * svg - 필요한 svg 파일 추가(파일 이름은 lw 디자인 규칙에 따름)
  * styles - reset 및 전역 스타일 추가

* 스타일
  * 전역 스타일 - pages/_app.js에 전역으로 사용할 스타일 import
  * 로컬 스타일 - 사용할 파일에 styled-components나 [name].module.sass를 사용

* 설정
  * eslint - .eslintrc.js에 필요한 설정이 더 있으면 추가
  * babel - 새로운 문법이나 필요한 설정이 있으면 .babelrc에 추가
  * test
    * jest 관련 설정은 jest.config.js에 필요시 추가
    * test 관련 프레임워크나 라이브러리 추가시 setupTests.js에 추가