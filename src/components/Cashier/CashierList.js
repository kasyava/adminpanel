import React from "react";
import {
    List,
    Datagrid,
    TextField,
    EmailField,
    NumberField,
    TextInput,
    EditButton,
    Pagination
} from 'react-admin';

const MyPagination = props => <Pagination rowsPerPageOptions={[25, 50, 100]} {...props} />;


const cashierFilters = [
    <TextInput source="_search" label="Поиск" type={"search"} variant={"outlined"} alwaysOn/>,
];

export const CashierList = props => (
    <List {...props}
          filters={cashierFilters}
          exporter={false}
          pagination={<MyPagination/>}
          perPage={25}
          bulkActionButtons={false}
    >
        <Datagrid>

            <EmailField source="email" label={"Email"}/>
            <TextField source="username" label={"Nickname"}/>
            <NumberField source="userBalance" label={"Баланс"}/>

            <EditButton label={"Пополнить"}/>

        </Datagrid>
    </List>

);