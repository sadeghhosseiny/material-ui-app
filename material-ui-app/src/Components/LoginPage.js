import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField';
import {Formik, Form, Field} from 'formik';
import {TextField} from 'formik-material-ui';
import { Button, LinearProgress } from '@material-ui/core';


const useStyle = makeStyles((theme) => ({
        textField: {
            width: '20%',
            // display:"flex",
            // margin: "auto",
            // justifyContent:"flex-center",
            // alignItems:"center",
            // alignContent:"center",
            // marginLeft: 'auto',
            // marginRight: 'auto',            
            paddingBottom: 0,
            marginTop: 0,
            fontWeight: 500,
            "& .MuiInput-underline:after": {
                borderBottomColor: "purple",
                borderBottom:"3px solid",
              },
              "& .MuiInput-underline:before":{
                  borderColor:"grey"
              },
              "& .MuiInput-underline:hover:before":{
                  borderColor:"grey",
                  borderBottom:"1px solid"
              },
            
        },

        form:{
            height:"100%",
            // width:"100%",
            display:"flex",
            // background:"red",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center",
            // alignContent:'center',
        },

        // F:{
        //     height:"100% !important",
        //     width:"100%"
        // },

}));

function LoginPage() {
    const classes = useStyle();
    return (
        
        <Formik className={classes.F}
        initialValues={{
          email: '',
          password: '',
        }}
        validate={values => {
          const errors = {};
          if (!values.email) {
            errors.email = 'Required';
            
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.com/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }
          if(!values.password)
          {
            errors.password = 'Required';
          }
          else if (values.password.length < 8)
          {
            errors.password = "your password must be greater than 8 characters";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            setSubmitting(false);
            alert(JSON.stringify(values, null, 2));
          }, 500);
        }}
      >
        {({ submitForm, isSubmitting }) => (
          <Form className={classes.form}>
            <Field
              component={TextField}
              name="email"
              type="email"
              label="Email"
              className={classes.textField}
            />
            <br />
            <Field
              component={TextField}
              type="password"
              label="Password"
              name="password"
              className={classes.textField}
            />
            <br />
            <Button
              variant="contained"
              color="primary"
              disabled={isSubmitting}
              onClick={submitForm}
              >
              Submit
            </Button> 
                {isSubmitting && <LinearProgress />}
          </Form>
         )} 
      </Formik>
    );
}

export default LoginPage
