import {
    BooleanInput,
    Edit,
    SimpleForm,
    TextInput,
    TextField
} from "react-admin";
import React from "react";

export const PaymentSystemEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextField source="name"/>
            <BooleanInput source="enable"/>
            <TextInput source="description"/>
            {/*<TextInput source="id" />*/}
        </SimpleForm>
    </Edit>
);