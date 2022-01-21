import React from "react";
import {
    List,
    Datagrid,
    TextField,
    EmailField,
    NumberField,
    DateField,
    Pagination
} from 'react-admin';


const MyPagination = props => <Pagination rowsPerPageOptions={[25, 50, 100]} {...props} />;


export const HistoryList = props => (
    <List {...props}
          exporter={false}
          bulkActionButtons={false}
          pagination={<MyPagination/>}
          perPage={25}
          sort={{field: 'id', order: 'DESC'}}

    >
        <Datagrid>
            <EmailField source="email"/>
            <TextField source="username"/>
            <NumberField source="amount"/>
            <TextField source="direction"/>
            <DateField showTime source="date"/>
        </Datagrid>
    </List>
);