import React from "react";
import {Admin, Resource, ListGuesser, EditGuesser} from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';

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


import Dashboard from "./components/Dashboard/dashboard";
import authProvider from './authProvider';

import {createBrowserHistory as createHistory} from 'history';


const history = createHistory();


// import jsonServerProvider from 'ra-data-json-server';


// const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const dataProvider = jsonServerProvider('http://127.0.0.1:8008/api/admin');
const App = () => (
    <Admin history={history} dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider}>
        {/*<Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider}>*/}
        {/*<Resource name="users" icon={UserIcon} list={ListGuesser} edit={EditGuesser}/>*/}
        {/*<Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon}/>*/}
        <Resource name="users" list={UserList} edit={UserEdit} icon={UserIcon}/>
        <Resource name="promo" list={PromoList} edit={PromoEdit} create={PromoCreate}/>
        <Resource name="bonus" list={BonusList} edit={BonusEdit} create={BonusCreate}/>
        <Resource options={{label: 'Payment systems'}} name="paymentSystem"
                  list={PaymentSystemList}
                  edit={PaymentSystemEdit}/>
    </Admin>
);

export default App;