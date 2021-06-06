import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { TextField } from "formik-material-ui";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import Backdrop from "@material-ui/core/Backdrop";
import Dialog from "@material-ui/core/Dialog";
import { Link, useHistory } from "react-router-dom";
import { useStyle } from "./LoginPageJss";
import { motion } from "framer-motion";

function LoginPage() {
  const classes = useStyle();
  const [temp, setTemp] = useState(false);
  const [open, setOpen] = useState(false);
  const history = useHistory();
  const pageTransition = {
    in: {
      opacity: 1,
    },
    out: {
      opacity: 0,
    },
  };

  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={pageTransition}
      className={classes.mainRoot}
    >
      <div className={classes.text}>
        <h1>Material-Ui</h1>
      </div>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.com/i.test(values.email)) {
            errors.email = "Invalid email address";
          }
          if (!values.password) {
            errors.password = "Required";
          } else if (values.password.length <= 8) {
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
                onClick={() => submitForm()}
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
    </motion.div>
  );
}

export default LoginPage;
