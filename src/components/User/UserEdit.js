import {
    BooleanInput, DateField,
    Edit,
    SimpleForm,
    TextInput,
    NumberInput,

} from "react-admin";
import React from "react";

export const UserEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="id" disabled/>
            <TextInput source="email" label={"Email"}/>
            <TextInput source="username" label={"Nickname"}/>
            <TextInput source="FIO" label={"Name"}/>
            <TextInput source="userWallets.qiwi" label={"QIWI"}/>
            <TextInput source="userWallets.yandex" label={"Yoomoney"}/>
            <TextInput source="userWallets.card" label={"CARD"}/>
            <TextInput source="pin"/>

            <NumberInput source="userBalance" label={"Balance"}/>
            <NumberInput source="needTotalBet" label={"NeedTotalBet"}/>


            <BooleanInput source="userLock.status" label={"Block"}/>
            <BooleanInput source="acceptPromotions" label={"Promo"}/>

            <DateField source="lastLoginDate" showTime label={"Login date"}/>
            <DateField source="createdAt" showTime label={"Created"}/>
        </SimpleForm>
    </Edit>
);