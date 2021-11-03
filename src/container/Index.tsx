import { useTranslation } from 'react-i18next';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import { Button } from 'antd';
import routers, { IRouter } from '@/routers/routers';
import { LOGIN, PROFILE } from '@/routers/routerPath';

function Home() {
    const { t, i18n } = useTranslation();
    const history = useHistory();
    const a: string = '1';
    // eslint-disable-next-line no-unused-vars
    const changeLang: (type: 'zh' | 'en') => void = type => {
        i18n.changeLanguage(type);
    };
    // eslint-disable-next-line no-unused-vars
    const changeRouter: (router: string) => void = router => {
        history.push(router);
    };
    return (
        <div className="App">
            {a}
            {t('login.login')}999
            <Switch>
                {routers.map((router: IRouter) => {
                    return (
                        <Route
                            exact
                            key={router.path}
                            path={router.path}
                            component={router.component}
                        ></Route>
                    );
                })}
                <Route exact path="/" render={() => <Redirect to={PROFILE} />} />
            </Switch>
            <button onClick={() => changeLang('zh')}>中文</button>
            <button onClick={() => changeLang('en')}>英文</button>
            <button onClick={() => changeRouter(LOGIN)}>个人</button>
            <button onClick={() => changeRouter(PROFILE)}>登录</button>
            <Button type='primary'>测试</Button>
        </div>
    );
}

export default Home;
