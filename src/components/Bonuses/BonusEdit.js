import {
    BooleanInput,
    Edit,
    SimpleForm,
    TextInput,
    NumberInput,
    DateInput,
    SelectInput
} from "react-admin";
import RichTextInput from 'ra-input-rich-text';
import React from "react";

export const BonusEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="title"/>
            <NumberInput source="wager"/>
            <NumberInput source="percent"/>
            <NumberInput source="minCash"/>
            <NumberInput source="maxCash"/>
            <BooleanInput source="active"/>

            {/*<TextInput source="description"/>*/}
            <RichTextInput source="description"/>
            <TextInput source="image"/>
            <BooleanInput source="autoActive"/>

            <SelectInput source="weight" choices={[
                {id: '0', name: '0'},
                {id: '1', name: '1'},
                {id: '2', name: '2'},
                {id: '3', name: '3'},
                {id: '4', name: '4'},
                {id: '5', name: '5'},
                {id: '6', name: '6'},
                {id: '7', name: '7'},
                {id: '8', name: '8'},
                {id: '9', name: '9'},
                {id: '10', name: '10'},
            ]}/>
            <DateInput source="dateStart"/>

            {/*<TextInput source="id"/>*/}
        </SimpleForm>
    </Edit>
);