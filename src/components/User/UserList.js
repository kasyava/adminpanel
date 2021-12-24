import React from "react";
import {
    List,
    Datagrid,
    TextField,
    EmailField,
    NumberField,
    DateField,
    BooleanField,
    TextInput,
} from 'react-admin';


const userFilters = [
    <TextInput source="_search" label="Search" alwaysOn/>,
    // <ReferenceInput source="userId" label="User" reference="users" allowEmpty>
    // <SelectInput optionText="name"/>
    // </ReferenceInput>,
];

export const UserList = props => (
    <List filters={userFilters} {...props}>
        <Datagrid rowClick="edit">
            {/*<Datagrid>*/}
            {/*<TextField source="id"/>*/}
            <EmailField source="email" label={"Email"}/>
            <TextField source="username" label={"Nickname"}/>
            <TextField source="FIO" label={"Name"}/>
            <TextField source="userWallets.qiwi" label={"QIWI"}/>
            <TextField source="userWallets.yandex" label={"Yoomoney"}/>
            <TextField source="userWallets.card" label={"CARD"}/>
            <TextField source="pin"/>

            <NumberField source="userBalance" label={"Balance"}/>
            <NumberField source="needTotalBet" label={"NeedTotalBet"}/>


            <BooleanField source="userLock.status" label={"Block"}/>
            <BooleanField source="acceptPromotions" label={"Promo"}/>

            <DateField source="lastLoginDate" showTime label={"Login date"}/>
            <DateField source="createdAt" showTime label={"Created"}/>
            {/*<EditButton/>*/}

        </Datagrid>
    </List>
);