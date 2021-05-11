import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyle = makeStyles((theme) => ({
        textField: {
            width: '40%',
            marginLeft: 'auto',
            marginRight: 'auto',            
            paddingBottom: 0,
            marginTop: 0,
            fontWeight: 500,
            "& .MuiInput-underline:after": {
                borderBottomColor: "blue",
                borderBottom:"3px solid"
              },
              "& .MuiInput-underline:before":{
                  borderColor:"grey"
              },
              "& .MuiInput-underline:hover:before":{
                  borderColor:"grey",
                  borderBottom:"1px solid"
              },
            
        },

}));

function LoginPage() {
    const classes = useStyle();
    return (
        <div>
           <div className={classes.Text}>
               <h1>Material-Ui</h1>
           </div>
           <form >
           <TextField
    id="email"
    label="Email"
    className={classes.textField}

    margin="normal"
    InputProps={{
        className: classes.input,
    }}
/>
           </form>

        </div>
    )
}

export default LoginPage
