import React from "react";

import {
    List,
    Datagrid,
    TextField,
    NumberField,
    BooleanField,
    TextInput,
    EditButton,
    DeleteButton,
    ReferenceField,
} from 'react-admin';

const userFilters = [
    <TextInput source="_search" label="Search" alwaysOn/>,
];

export const PromoList = props => (
    <List filters={userFilters} {...props}>
        <Datagrid>
            <TextField label="Code" source="promoCode"/>
            <NumberField label="Wager" source="promoWager"/>
            <NumberField label="Sum" source="promoSum"/>
            <TextField label="Description" source="description"/>
            <BooleanField source="used"/>
            <ReferenceField label="Email" source="uid" reference="users">
                <TextField source="email"/>
            </ReferenceField>
            <ReferenceField label="Username" source="uid" reference="users">
                <TextField source="username"/>
            </ReferenceField>

            <EditButton/>
            <DeleteButton/>

        </Datagrid>
    </List>
);