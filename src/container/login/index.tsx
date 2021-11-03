import test from '@/reducer/type/test';
import { useSelector, useDispatch } from 'react-redux';
// import {TestStore} from '@/types/store'

function Login() {
    const name = useSelector((state: any) => state.test.testStr);
    const dispatch = useDispatch();
    const changeName: () => void = () => {
        dispatch({ type: test.CHANGE_TEXT, data: 'sera' });
    };
    return (
        <div>
            <div>登录: {name}</div>
            <button onClick={() => changeName()}>切换name</button>
        </div>
    );
}

export default Login;
