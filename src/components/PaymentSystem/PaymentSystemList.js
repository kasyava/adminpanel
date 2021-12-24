import React from "react";

import {
    List,
    Datagrid,
    TextField,
    BooleanField, EditButton,
} from 'react-admin';


export const PaymentSystemList = props => (
    <List {...props}>
        <Datagrid>
            <TextField source="name"/>
            <BooleanField source="enable"/>
            <TextField source="description"/>
            <EditButton/>
        </Datagrid>
    </List>
);