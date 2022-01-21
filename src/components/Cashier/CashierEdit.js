import {
    Edit,
    SimpleForm,
    TextField,
    NumberInput,
    NumberField

} from "react-admin";
import {CustomEditToolbar} from './ToolBar'

const transform = data => {
    data.userBalance = data.userBalance + data.addBalance;
    return ({
        ...data,
        // fullName: `${data.firstName} ${data.lastName}`
    })
};

const validateBalance = (values) => {
    const errors = {};

    if (!values.addBalance) {
        errors.addBalance = 'ra.validation.required';
    } else if (values.addBalance < 100) {
        errors.addBalance = 'Минимальная сумма пополнения 100';

    }
    return errors
};
const EditTitle = ({record}) => {
    return <span>Пополнить {record ? `"${record.email}"` : ''}</span>;
};

export const CashierEdit = props => {


    return (
        <Edit {...props} transform={transform} title={<EditTitle/>}>
            <SimpleForm toolbar={<CustomEditToolbar/>} validate={validateBalance}>
                {/*<TextInput source="id" disabled/>*/}
                <TextField source="email" label={"Email"}/>
                <TextField source="username" label={"Nickname"}/>
                <NumberField source="userBalance" label={"Текущий баланс"} defaultValue={0}/>

                <NumberInput source="addBalance" label={"Сумма пополнения"} defaultValue={100} min={100}/>

            </SimpleForm>
        </Edit>

    )
};