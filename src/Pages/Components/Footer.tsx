import * as fs from "fs/promises";

import React, {useState, useEffect} from 'react';

import { Formik } from "formik";
import { Button, Form, Spinner } from "react-bootstrap";
import * as Yup from "yup";

import { WaitlistProps } from "../../../types";


const Footer = ({footerRef}: any) => {
    const [data, seteData] = useState<WaitlistProps[]>([]);
    const [jsonFilePath] = useState<string>("../../data/data.json")

    const initialValues: WaitlistProps  = {
        firstname: "",
        lastname: "",
        phoneNumber: "",
        email: ""
    }

    const onSubmit = (value: WaitlistProps) => {
        data.push(value);

        const jsonString = JSON.stringify(data, null, 2);

        fs.writeFile(jsonFilePath, jsonString, (err) => {
            if (err) throw err;
            console.log('Data has been added to the file!');
        });
    }

    const validationSchema = Yup.object({
        email: Yup.string().email("Invalid Email Format").required("Email is required"),
        phoneNumber: Yup.string().required("Phone Number is Required"),
        firstname: Yup.string().required("First Name is Required"),
        lastname: Yup.string().required("Last Name is Required"),
    });

    useEffect(() => {
    fs.readFile(jsonFilePath, (err, data: any) => {
      if (err) throw err;

      const jsonData = JSON.parse(data);
      seteData(jsonData);
    });
  }, []);


  return (
    <footer>
      <div ref={footerRef} className="title">Join the wait list</div>  
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
                <Form.Group className='mb-3'>
                  <Button className="submit-btn" type="submit" disabled={isSubmitting}>
                    {isSubmitting ? <Spinner animation="border" size="sm" /> : "Join"}
                  </Button>
                </Form.Group>
                </Form>
                )}
        </Formik>
      </div>
      <div className="copy">(c) Copyright {new Date().getFullYear()} - Monerce - a product facilitated by Sabinovates Inc.</div>
    </footer>
  )
}

export default Footer