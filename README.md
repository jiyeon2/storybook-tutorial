#### Add Storybook:
```npx -p @storybook/cli sb init```

#### Start the component explorer on port 6006:
```yarn storybook```


#### 설정
```js
// .storybook/main.js : storybook구성파일
module.exports = {
  //👇 Location of our stories
  stories: ['../src/components/**/*.stories.js'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app',
  ],
    typescript: { // typescript 옵션
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
      compilerOptions: {
        allowSyntheticDefaultImports: false,
        esModuleInterop: false,
      },
    },
  },
};
```

```js
// .storybook/preview.js

import '../src/index.css'; //👈 The app's CSS file goes here


//👇 Configures Storybook to log the actions( onArchiveTask and onPinTask ) in the UI.
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};
```

- 단위 테스트(jest)는 유지 관리하기가 쉽지 않습니다. 가능한 경우 수동, 스냅샷, 시각적 회귀 테스트(테스트 챕터 보기)를 사용하세요.