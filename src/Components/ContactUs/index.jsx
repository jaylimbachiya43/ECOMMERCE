"use client";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";

const ContactForm = () => {
  const handleSubmit = async (values, { setSubmitting }) => {
    console.log({ values });
    try {
      const response = await axios.post(
        "http://localhost:1337/api/contacts",
        { data: values }
      );

      if (response.status === 200) {
        console.log("Data sent successfully!");
        // Handle success response
      } else {
        console.error("Failed to send data.");
        // Handle error response
      }
    } catch (error) {
      console.error("Error:", error);
      // Handle error
    } finally {
      setSubmitting(false);
    }
  };

  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const validateForm = (values) => {
    const errors = {};
    console.log("VALUES", values);

    // Add validation logic for fields if needed

    return errors;
  };

  return (
    <div className="max-w-md mx-4 md:mx-auto my-14">
      <h1 className="text-2xl font-bold mb-4">Contact Form</h1>
      <Formik
        initialValues={initialValues}
        validate={validateForm}
        onSubmit={handleSubmit}
      >
        <Form className="mx-4 ">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-semibold">Name:</label>
            <Field type="text" id="name" name="name" className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
            <ErrorMessage name="name" component="div" className="text-red-500 text-sm"/>
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-semibold">Email:</label>
            <Field type="email" id="email" name="email" className="mt-1 p-2 border border-gray-300 rounded-md w-full"/>
            <ErrorMessage name="email" component="div" className="text-red-500 text-sm"/>
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <Field as="textarea" id="message" name="message" className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
            <ErrorMessage name="message" component="div" className="text-red-500 text-sm"/>
          </div>
          <button type="submit"  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
