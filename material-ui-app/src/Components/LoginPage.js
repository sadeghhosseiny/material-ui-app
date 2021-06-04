import React, {useState } from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Formik, Form, Field} from 'formik';
import {TextField} from 'formik-material-ui';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Backdrop from '@material-ui/core/Backdrop';
import Dialog from '@material-ui/core/Dialog';
import {Link, useHistory} from 'react-router-dom';

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

            "& .MuiFormLabel-root.Mui-focused":{
              color: "black"
            },

            "& .MuiFormHelperText-root.Mui-error":{
              color:"maroon"
            },

            "& .MuiFormLabel-root.Mui-error":{
              color:"black"
            },
            "& .MuiInput-underline:after": {
                borderBottomColor: "rgb(103 187 107)",

                borderBottom:"3px solid",
              },
              "& .MuiInput-underline:before":{
                  borderColor:"black"
              },
              "& .MuiInput-underline:hover:before":{
                  borderBottom:"1px solid"
              },
            
        },

        form:{
            // height:"100%",
            // width:"100%",
            display:"flex",
            // background:"red",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center",
            // alignContent:'center',
        },

        diaLoading:{
          backdropFilter:"blur(1px)",
        },

        link:{
          textDecoration:"none"
        },

        mainRoot:{
          // width:"100%",
          height:"100%",
          display:"grid",
          alignContent:"center",
          background:"linear-gradient(180deg, #000000d1, rgb(245 0 87 / 4%));"
            // background:"red",
            // flexDirection:"column",
            // justifyContent:"center",
            // alignItems:"center",
          // display:"flex"
        },

        text:{
          textAlign:"center",
          
        }

}));

function LoginPage() {
    const classes = useStyle();
    const [temp, setTemp] = useState(false);
    const [open, setOpen] = useState(false);
    const history = useHistory();


    return (
      <div className={classes.mainRoot}>

        <div className={classes.text}>
          <h1>Material-Ui</h1>
        </div>
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
            if(!values.password)
            {
              errors.password = 'Required';
            }
            else if (values.password.length <= 8)
            {
              errors.password = "your password must be greater than 8 characters";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTemp(true);
            setOpen(true);
            setTimeout(() => {
              setSubmitting(false);
              setOpen(false);
              alert(JSON.stringify(values, null, 2));
              history.push("/");
            }, 2000);
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
            <Link className={classes.link}>
            <Button
              variant="contained"
              color="primary"
              disabled={isSubmitting}
              onClick={() => submitForm()
              }
              >
              Submit
            </Button>
                </Link>
            <Dialog className={classes.diaLoading} open={open}>
        
              <Backdrop open={open}>
                <CircularProgress color="secondary" />
              </Backdrop>

            </Dialog>
              
          </Form>
         )} 
      </Formik>
         </div>
    );
}

export default LoginPage
