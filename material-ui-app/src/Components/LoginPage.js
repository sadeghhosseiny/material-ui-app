import React from 'react';
import {makeStyles} from '@material-ui/core/styles';

const useStyle = makeStyles((theme) => ({
    Text:{
        fontWeight:"bold",
        textAlign:"center"
    },
}));

function LoginPage() {
    const classes = useStyle();
    return (
        <div>
           <div className={classes.Text}>
               <h2>Material-Ui</h2>
           </div>
        </div>
    )
}

export default LoginPage
