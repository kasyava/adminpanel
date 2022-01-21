import React from 'react';
import {
    Toolbar,
    SaveButton,
    // DeleteButton,
} from 'react-admin';

import {withStyles} from '@material-ui/core';
import BackButton from './BackButton'

const toolbarStyles = {
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between',
    },
};

export const CustomEditToolbar = withStyles(toolbarStyles)(props => (
    <Toolbar {...props}>
        <SaveButton label={"Сохранить"}/>
        {/*<DeleteButton/>*/}
        <BackButton/>
    </Toolbar>
));

export const CustomCreateToolbar = withStyles(toolbarStyles)(props => (
    <Toolbar {...props}>
        <SaveButton/>
        <BackButton/>
    </Toolbar>
));