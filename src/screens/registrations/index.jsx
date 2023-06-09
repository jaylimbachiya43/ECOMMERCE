"use client";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";

const RegistrationForm = () => {
  //   const router = useRouter();

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      console.log(values);

      const response = await axios.post(
        "http://localhost:1337/api/auth/local/register",
         values 
      );

      console.log(response);
      if (response.status === 200) {
        console.log("Registration successful!");
        // Handle successful registration

        // router.push('/login'); // Redirect to login page
      } else {
        console.error("Failed to register.");
        // Handle registration failure
      }
    } catch (error) {
      console.error("Error:", error);
      // Handle error
    } finally {
      setSubmitting(false);
    }
  };

  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  const validateForm = (values) => {
    const errors = {};
    console.log("VALUES", values);

    // Add validation logic for fields if needed

    return errors;
  };

  return (
    <div className="max-w-md md:mx-auto my-14 mx-4">
      <h1 className="text-2xl font-bold mb-4">Registration Form</h1>
      <Formik
        initialValues={initialValues}
        validate={validateForm}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-700 font-semibold"
            >
              Username:
            </label>
            <Field
              type="text"
              id="username"
              name="username"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
            <ErrorMessage
              name="username"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-semibold"
            >
              Email:
            </label>
            <Field
              type="email"
              id="email"
              name="email"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 font-semibold"
            >
              Password:
            </label>
            <Field
              type="password"
              id="password"
              name="password"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
          >
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
