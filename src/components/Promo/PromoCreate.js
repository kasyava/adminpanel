import React from 'react';

import {
    Create,
    SimpleForm,
    TextInput,
    NumberInput, useNotify, useRefresh, useRedirect
} from 'react-admin';


export const PromoCreate = props => {
        const notify = useNotify();
        const refresh = useRefresh();
        const redirect = useRedirect();
        const onSuccess = () => {
            notify(`The data was saved successfully.`, {type: 'success'});
            // notify(`The data was saved successfully.`);
            redirect('/promo');
            refresh();
        };
        return (<Create {...props} onSuccess={onSuccess}>
            <SimpleForm>
                <NumberInput label={"Count"} source="count" initialValue={1}/>
                <NumberInput label={"Wager"} source="promoWager" initialValue={20}/>
                <NumberInput label={"Sum"} source="promoSum" initialValue={100}/>
                <TextInput label={"Description"} multiline source="description"/>
            </SimpleForm>
        </Create>)
    }
;