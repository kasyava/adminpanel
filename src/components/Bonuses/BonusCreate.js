import React, {useCallback} from 'react';

import {
    Create,
    SimpleForm,
    TextInput,
    NumberInput, useNotify, useRefresh, useRedirect, BooleanInput, SelectInput, DateInput, useMutation
} from 'react-admin';
import RichTextInput from "ra-input-rich-text";


const validateBonusCreation = (values) => {
    const errors = {};
    if (!values.title) errors.title = 'The Title is required';
    else if (values.title.length < 6) errors.title = 'The minimum length is 6 characters.';

    if (!values.wager) errors.wager = 'The Wager is required';
    if (values.wager < 10) errors.wager = 'The minimum value is 10';

    if (!values.percent) errors.percent = 'The Percent is required';

    if (!values.minCash) errors.minCash = 'The minCash is required';
    if (values.minCash < 100) errors.minCash = 'The amount cannot be less than 100';

    if (!values.maxCash) errors.maxCash = 'The maxCash is required';

    if (!values.image) errors.image = 'The Image is required';
    if (!values.description) errors.description = 'The Description is required';

    return errors
};


export const BonusCreate = props => {
        const notify = useNotify();
        const refresh = useRefresh();
        const redirect = useRedirect();
        const onSuccess = () => {
            notify(`The data was saved successfully.`, {type: 'success'});
            redirect('/bonus');
            refresh();
        };

        const onFailure = () => {
            notify(`The data was saved successfully.`, {type: 'error'});
        }

        const [mutate] = useMutation();
        const save = useCallback(
            async (values) => {
                try {
                    await mutate({
                        type: 'create',
                        resource: 'bonus',
                        payload: {data: values},
                    }, {returnPromise: true});
                } catch (error) {
                    if (error.body) {
                        notify(error.body.message, {type: 'error'});
                        return error.body;
                    }
                }
            },
            [mutate],
        );

        return (<Create {...props} onSuccess={onSuccess} onFailure={onFailure}>
            <SimpleForm save={save} validate={validateBonusCreation}>
                <TextInput source="title"/>
                <NumberInput source="wager" min={10} initialValue={10}/>
                <NumberInput source="percent"/>
                <NumberInput source="minCash" min={100} initialValue={100}/>
                <NumberInput source="maxCash"/>
                <BooleanInput source="active"/>

                {/*<TextInput source="description"/>*/}
                <RichTextInput source="description"/>
                <TextInput source="image"/>
                <BooleanInput source="autoActive"/>

                <SelectInput source="weight" defaultValue={'10'} choices={[
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
                <DateInput source="dateStart" initialValue={Date.now()}/>
            </SimpleForm>
        </Create>)
    }
;