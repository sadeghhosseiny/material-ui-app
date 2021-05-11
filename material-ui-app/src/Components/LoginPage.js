import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField';
import {Formik, Form, Field} from 'formik';
import {TextField} from 'formik-material-ui';

const useStyle = makeStyles((theme) => ({
        textField: {
            width: '40%',
            marginLeft: 'auto',
            marginRight: 'auto',            
            paddingBottom: 0,
            marginTop: 0,
            fontWeight: 500,
            "& .MuiInput-underline:after": {
                borderBottomColor: "purple",
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
        
        <Formik
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
          return errors;
        }}
        // onSubmit={(values, { setSubmitting }) => {
        //   setTimeout(() => {
        //     setSubmitting(false);
        //     alert(JSON.stringify(values, null, 2));
        //   }, 500);
        // }}
      >
        {/* {({ submitForm, isSubmitting }) => ( */}
          <Form>
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
            />
            {/* {isSubmitting && <LinearProgress />} */}
            <br />
            {/* <Button
              variant="contained"
              color="primary"
              disabled={isSubmitting}
              onClick={submitForm}
            >
              Submit
            </Button> */}
          </Form>
        {/* )} */}
      </Formik>
    );
}

export default LoginPage
