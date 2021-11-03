# 目录树测试

```bash
.
├── README.md
├── index.html
├── package.json
├── src
│   ├── App.css
│   ├── App.tsx
│   ├── apis
│   ├── components
│   ├── container
│   ├── favicon.svg
│   ├── hooks (钩子文件)
│   ├── images
│   │   └── logo.svg
│   ├── index.css
│   ├── locale
│   ├── main.tsx
│   ├── reducer
│   ├── routers
│   ├── style
│   ├── types
│   │   └── vite-env.d.ts
│   └── utils
│       └── random.ts
├── tsconfig.json
├── vite.config.ts
└── yarn.lock
```

### 多语言配置:

[react-i18n 官方文档](https://react.i18next.com/)

1. 新增模块多语言: 如 login

```js
// login/en.ts
const en = {
	login: 'login',
	register: 'register',
};

export default en;

// login/zh.ts
const zh = {
	login: '登录',
	register: '注册',
};

export default zh;
```

2. 使用

2.1 函数组件

```tsx
// 导入多语言库
import { useTranslation } from 'react-i18next';

function Login() {
    // 使用
    const { t } = useTranslation();

    return <h1>{t('login.login')}</h1>;
}

export default Login;
```

2.2 HOC 组件

```tsx
import React, { Component } from 'react';
import { Translation } from 'react-i18next'; // 导入

class Login extends Component<{}, {}> {
    render() {
        return (
            <Translation>
                {t => (
                    <div className={styles.test}>
                        <div>{t('login.login')}</div>
                    </div>
                )}
            </Translation>
        );
    }
}

export default Login;
```

2.3 切换多语言

```tsx
i18n.changeLanguage('zh');
```

### 样式隔离

使用 `css in js`: `strled-components`

[styled-components 官方文档](https://styled-components.com/)
