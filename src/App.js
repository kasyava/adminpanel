import React from "react";
import decodeJwt from 'jwt-decode';
import Axios from "axios";
import {Admin, Resource, fetchUtils, /*ListGuesser, EditGuesser*/} from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
// import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import HistoryIcon from '@material-ui/icons/History';

import {UserList} from "./components/User/UserList";
import {UserEdit} from "./components/User/UserEdit";

import {PromoList} from "./components/Promo/PromoList";
import {PromoEdit} from "./components/Promo/PromoEdit";
import {PromoCreate} from "./components/Promo/PromoCreate";

import {PaymentSystemList} from "./components/PaymentSystem/PaymentSystemList";
import {PaymentSystemEdit} from "./components/PaymentSystem/PaymentSystemEdit";

import {BonusList} from "./components/Bonuses/BonusList";
import {BonusEdit} from "./components/Bonuses/BonusEdit";
import {BonusCreate} from "./components/Bonuses/BonusCreate";


import {CashierList} from "./components/Cashier/CashierList";
import {CashierEdit} from "./components/Cashier/CashierEdit";

import {HistoryList} from "./components/History/HistoryList"


import Dashboard from "./components/Dashboard/dashboard";
import authProvider from './authProvider';

import {createBrowserHistory as createHistory} from 'history';


const history = createHistory();
let refreshTokenRequest = null;


const httpClient = async (url, options = {}) => {
    let actualToken = localStorage.getItem('token');
    let refToken = localStorage.getItem('refreshToken');
    let decodedToken = decodeJwt(actualToken);
    let tokenExp = decodedToken.exp;
    let dtNow = Math.floor(Date.now() / 1000);

    if (tokenExp <= dtNow + 10) {
        if (refreshTokenRequest === null) {
            refreshTokenRequest = Axios.post(`${process.env.REACT_APP_API_URL}/auth/refresh_token`, {refreshToken: refToken});
        }

        // резолвим запрос
        let response = await refreshTokenRequest;

        // очищаем переменную
        refreshTokenRequest = null;
        let {status, token, refreshToken} = response.data;
        if (status === 'ok') {
            let newDecodedToken = decodeJwt(token);
            localStorage.setItem('token', token);
            localStorage.setItem('refreshToken', refreshToken);
            localStorage.setItem('permissions', newDecodedToken.permission);
            actualToken = token
        }
    }


    if (!options.headers) {
        options.headers = new Headers({Accept: 'application/json'});
    }

    options.headers.set('Authorization', `Bearer ${actualToken}`);
    return fetchUtils.fetchJson(url, options);
};


const dataProvider = jsonServerProvider(`${process.env.REACT_APP_API_URL}/admin`, httpClient);
const App = () => (
    <Admin history={history} dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider}>
        {/*<Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider}>*/}
        {/*<Resource name="users" icon={UserIcon} list={ListGuesser} edit={EditGuesser}/>*/}
        {/*<Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon}/>*/}

        {permissions => [

            permissions === 'cashier' ?
                <Resource name="cashier"
                          list={CashierList}
                          edit={CashierEdit}
                          icon={UserIcon}
                          options={{label: 'Пополнить'}}
                /> : null,
            permissions === 'cashier' || permissions === 'admin' ?
                <Resource name="history"
                          list={HistoryList}
                          icon={HistoryIcon}
                          options={{label: 'История транзакций'}}
                /> : null,
            permissions === 'admin' ? <Resource name="users" list={UserList} edit={UserEdit} icon={UserIcon}/> : null,

            permissions === 'admin' ?
                <Resource name="promo" list={PromoList} edit={PromoEdit} create={PromoCreate}/> : null,
            permissions === 'admin' ?
                <Resource name="bonus" list={BonusList} edit={BonusEdit} create={BonusCreate}/> : null,
            permissions === 'admin' ? <Resource options={{label: 'Payment systems'}} name="paymentSystem"
                                                list={PaymentSystemList}
                                                edit={PaymentSystemEdit}/> : null,
        ]}
    </Admin>
);

export default App;