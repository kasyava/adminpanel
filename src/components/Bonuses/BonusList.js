import React from "react";

import {
    List,
    Datagrid,
    TextField,
    NumberField,
    BooleanField,
    // TextInput,
    DateField
} from 'react-admin';

// const userFilters = [
//     <TextInput source="_search" label="Search" alwaysOn/>,
// ];

export const BonusList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="title"/>
            <NumberField source="wager"/>
            <NumberField source="percent"/>
            <NumberField source="minCash"/>
            <NumberField source="maxCash"/>
            <BooleanField source="active"/>
            <BooleanField source="autoActive"/>
            <NumberField source="weight"/>

            {/*<TextField source="description"/>*/}
            <TextField source="image"/>
            <DateField source="dateStart"/>

            {/*<TextField source="id"/>*/}
        </Datagrid>
    </List>
);