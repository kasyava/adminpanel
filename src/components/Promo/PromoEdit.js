import {
    BooleanInput,
    Edit,
    SimpleForm,
    TextInput,
    NumberInput, TextField, ReferenceField,

} from "react-admin";
import React from "react";
//
// export const UserEdit = props => (
//     <Edit {...props}>
//         <SimpleForm>
//             <TextInput source="id" disabled/>
//             <TextInput source="email" label={"Email"}/>
//             <TextInput source="username" label={"Nickname"}/>
//             <TextInput source="FIO" label={"Name"}/>
//             <TextInput source="userWallets.qiwi" label={"QIWI"}/>
//             <TextInput source="userWallets.yandex" label={"Yoomoney"}/>
//             <TextInput source="userWallets.card" label={"CARD"}/>
//             <TextInput source="pin"/>
//
//             <NumberInput source="userBalance" label={"Balance"}/>
//             <NumberInput source="needTotalBet" label={"NeedTotalBet"}/>
//
//
//             <BooleanInput source="userLock.status" label={"Block"}/>
//             <BooleanInput source="acceptPromotions" label={"Promo"}/>
//
//             <DateField source="lastLoginDate" showTime label={"Login date"}/>
//             <DateField source="createdAt" showTime label={"Created"}/>
//         </SimpleForm>
//     </Edit>
// );


export const PromoEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            {/*<TextInput disabled source="id"/>*/}
            <TextInput disabled source="promoCode"/>
            <NumberInput label="Wager" source="promoWager"/>
            <NumberInput label="Sum" source="promoSum"/>
            <BooleanInput source="used"/>

            <ReferenceField label="Email" source="uid" reference="users">
                <TextField source="email"/>
            </ReferenceField>
            <ReferenceField label="Username" source="uid" reference="users">
                <TextField source="username"/>
            </ReferenceField>
            <TextInput label="Description" source="description"/>
            {/*<TextInput source="uid.userWallets.qiwi"/>*/}

        </SimpleForm>
    </Edit>
);