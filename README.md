# 📖 Next.js 15 핵심 정리

🔗 https://www.heropy.dev/p/n7JHmI

## 설치 및 구성

```bash
npx create-next-app@latest <프로젝트이름>
    ✔ Would you like to use TypeScript? … Yes  # 타입스크립트 사용 여부
    ✔ Would you like to use ESLint? … Yes  # ESLint 사용 여부
    ✔ Would you like to use Tailwind CSS? … No  # Tailwind CSS 사용 여부
    ✔ Would you like your code inside a `src/` directory? … Yes  # src/ 디렉토리 사용 여부
    ✔ Would you like to use App Router? (recommended) … Yes  # App Router 사용 여부
    ✔ Would you like to use Turbopack for next dev? … No  # Turbopack 사용 여부
    ✔ Would you like to customize the import alias (@/* by default)? … No  # `@/*` 외 경로 별칭 사용 여부
```

### Prettier

다음 VS Code 확장 프로그램이 설치되어 있어야 합니다.

-   [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint): 코드 품질 확인 및 버그, 안티패턴(Anti-pattern)을 감지
-   [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode): 코드 스타일 및 포맷팅 관리, 일관된 코드 스타일을 적용 가능

Prettier 관련 패키지들을 설치합니다.

```bash
npm i -D prettier eslint-config-prettier prettier-plugin-tailwindcss
```

ESLint 구성을 다음과 같이 수정합니다.

```json --path=/.eslintrc.json --line-active=5
{
    "extends": ["next/core-web-vitals", "next/typescript", "prettier"]
}
```

추가로, 프로젝트 루트 경로에 `.prettierrc` 파일을 생성하고 다음처럼 원하는 규칙을 추가합니다.
자세한 규칙은 [Prettier / Options](https://prettier.io/docs/en/options) 에서 확인할 수 있습니다.

```json --path=/.prettierrc --line-active=9
{
    "semi": true,
    "singleQuote": true,
    "singleAttributePerLine": true,
    "bracketSameLine": true,
    "endOfLine": "lf",
    "trailingComma": "none",
    "arrowParents": "avoid",
    "tabWidth": 4
}
```

### 자동 포맷팅 설정

프로젝트의 루트 경로에 `.vscode/settings.json` 폴더와 파일을 생성해 다음과 같이 내용을 추가할 수 있습니다.

```json --path=/.vscode/settings.json --caption=타입스크립트인 경우.
{
    "[javascript]": {
        "editor.formatOnSave": true,
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[javascriptreact]": {
        "editor.formatOnSave": true,
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[typescript]": {
        "editor.formatOnSave": true,
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[typescriptreact]": {
        "editor.formatOnSave": true,
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    }
}
```
