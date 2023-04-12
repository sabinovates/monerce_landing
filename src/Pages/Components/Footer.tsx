import React, { useState } from "react";

import axios from "axios";
import { Formik } from "formik";
import { Button, Form, Spinner } from "react-bootstrap";
import * as Yup from "yup";

import { WaitlistProps } from "../../../types";

const Footer = ({ footerRef }: any) => {
  const [isFormSubmitted, setIsFormSubmited] = useState<boolean>(false);
  const [name, setName] = useState<string>("");

  const initialValues: WaitlistProps = {
    firstname: "",
    lastname: "",
    phoneNumber: "",
    email: ""
  };

  const onSubmit = (value: WaitlistProps, { setSubmitting }) => {
    const formdata = new FormData();
    formdata.append("data[FirstName]", value.firstname);
    formdata.append("data[LastName]", value.lastname);
    formdata.append("data[PhoneNumber]", value.phoneNumber);
    formdata.append("data[Email]", value.email);

    setName(value.firstname);
    axios
      .post("https://sheetdb.io/api/v1/pq8hlyt3vdzdz", formdata)
      .then((data) => {
        console.log(data);
        console.log("Success");
        setSubmitting(false);
        setIsFormSubmited(true);
      })
      .catch((err) => {
        console.log(err);
        console.log("Failed");
      });
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid Email Format").required("Email is required"),
    phoneNumber: Yup.string().required("Phone Number is Required"),
    firstname: Yup.string().required("First Name is Required"),
    lastname: Yup.string().required("Last Name is Required")
  });

  return (
    <footer>
      {!isFormSubmitted ? (
        <>
          <div ref={footerRef} className="title">
            Join the wait list
          </div>
          <div className="sub-title">Please provide your details below</div>
          <div className="footer-form">
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
              {({
                values,
                // errors,
                // touched,
                handleChange,
                isSubmitting,
                handleBlur,
                handleSubmit
              }: any) => (
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-2">
                    <Form.Control
                      type="text"
                      name="firstname"
                      placeholder="First Name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.firstname}
                    />
                  </Form.Group>
                  <Form.Group className="mb-2">
                    <Form.Control
                      type="text"
                      name="lastname"
                      placeholder="Last Name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.lastname}
                    />
                  </Form.Group>
                  <Form.Group className="mb-2">
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                    />
                  </Form.Group>
                  <Form.Group className="mb-4">
                    <Form.Control
                      type="text"
                      name="phoneNumber"
                      placeholder="Phone Number"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.phoneNumber}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Button className="submit-btn" type="submit" disabled={isSubmitting}>
                      {isSubmitting ? <Spinner animation="border" size="sm" /> : "Join"}
                    </Button>
                  </Form.Group>
                </Form>
              )}
            </Formik>
          </div>
          <div className="copy">
            (c) Copyright {new Date().getFullYear()} - Monerce - a product facilitated by Sabinovates Inc.
          </div>
        </>
      ) : (
        <div className="success-form">
          <div className="success-img">
            <img src="/assets/images/success.svg" alt="success" />
          </div>
          <div className="title">Congratulations {name}!</div>
          <div className="detail">
            {" "}
            You have been enlisted to enjoy the full benefits of Monerce upon its officially launched.
          </div>
          <div className="detail">
            Please keep an eye on your email and also be on the look out for an SMS message sent to your phone informing
            you of the launch.
          </div>
          <div className="detail">Welcome to the family of endless possibilities.</div>
          <div className="copy">
            (c) Copyright {new Date().getFullYear()} - Monerce - a product facilitated by Sabinovates Inc.
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
