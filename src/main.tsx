import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom';
import { PersistGate } from 'redux-persist/lib/integration/react';

import store, { persistor } from './reducer/store'
import Index from './container/Index';
import '@/locale/index';
import { Globalstyle } from '@styles/globalStyle';


ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <React.StrictMode>
                <BrowserRouter>
                    <Index />
                    <Globalstyle />
                </BrowserRouter>
            </React.StrictMode>
        </PersistGate>
	</Provider>,
    document.getElementById('root')
);
