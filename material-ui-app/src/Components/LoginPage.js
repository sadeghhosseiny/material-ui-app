import React from 'react';
import {makeStyles} from '@material-ui/core/styles';

const useStyle = makeStyles((theme) => ({
    Text:{
        fontWeight:"bold",
        textAlign:"center",
        fontSize:"40px"
    },
}));

function LoginPage() {
    const classes = useStyle();
    return (
        <div>
           <div className={classes.Text}>
               <h1>Material-Ui</h1>
           </div>
        </div>
    )
}

export default LoginPage
