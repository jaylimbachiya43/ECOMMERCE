// "use client";
// import axios from "axios";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import Link from "next/link";
// import React from "react";
// import {SignIn, signIn, signOut, useSession} from 'next-auth/react'

// const LoginPage = () => {
//   const handleSubmit = async (values, { setSubmitting }) => {
//     try {
//       console.log(values);

//       const res = await signIn("credentials", {
//         redirect: false,
//         email: values.email,
//         password: values.password,
//         callbackUrl: "/home",
//       });
//       console.log(response);
//       if (response.status === 200) {
//         console.log("Login successful!");
//         // Handle successful registration

//         // router.push('/login'); // Redirect to login page
//       } else {
//         console.error("Failed to Login.");
//         // Handle registration failure
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       // Handle error
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   const initialValues = {
//     email: "",
//     password: "",
//   };

//   const validateForm = (values) => {
//     const errors = {};
//     console.log("VALUES", values);

//     // Add validation logic for fields if needed

//     return errors;
//   };

//   return (
//     <Formik
//       initialValues={initialValues}
//       validate={validateForm}
//       onSubmit={handleSubmit}
//     >
//       <div className="flex flex-col items-center justify-center min-h-screen">
//         <h1 className="text-2xl font-bold mb-4">Login to your account</h1>
//         <p className=" text-blue-800 flex gap-3">
//           or
//           <Link href="/registration" className="text-blue-500">
//             Register
//           </Link>
//         </p>

//         <Form className="flex flex-col">
//           <div className="mb-4">
//             <label htmlFor="email" className="mb-2 flex flex-col">
//               Email:
//             </label>
//             <Field
//               type="email"
//               id="email"
//               name="email"
//               className="mt-1 p-2 border border-gray-300 rounded-md w-full"
//             />
//             <ErrorMessage
//               name="email"
//               component="div"
//               className="text-red-500 text-sm"
//             />
//           </div>

//           <div className="mb-4">
//             <label htmlFor="password" className="mb-2 flex flex-col">
//               Password:
//             </label>
//             <Field
//               type="password"
//               id="password"
//               name="password"
//               className="mt-1 p-2 border border-gray-300 rounded-md w-full"
//             />
//             <ErrorMessage
//               name="password"
//               component="div"
//               className="text-red-500 text-sm"
//             />
//           </div>

//           <div className="mt-4 flex gap-4 content-center items-center">
//             <div className="text-sm flex items-center">
//               <input type="checkbox" name="check" />
//               Remerber me
//             </div>
//             <Link href="/forgotPassword" className="text-blue-500 text-sm">
//               Forgot youre password
//             </Link>
//           </div>
//           <button
//           onClick={handleSubmit}
//             type="submit"
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
//           >
//             Sign In
//           </button>
//         </Form>
//       </div>
//     </Formik>
//   );
// };

// export default LoginPage;


'use client'
import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Formik, Form, Field } from "formik";
import { useRouter } from 'next/navigation';


const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { push } = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("auth_token");
    if (token) {
      push("/home");
    }
  
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:1337/api/auth/local",
        {
          identifier: username,
          password: password,
        }
      );
      localStorage.setItem("auth_token", response.jwt);
      push("/home");
      // Handle the response, e.g., store user data in the state or local storage
      console.log(response.data);
    } catch (error) {
      // Handle login error
      console.error(error);
    }
  };

  return (
    <div className="   text-white py-14 grid justify-center lg:pt-28  gap-10">
      <h1 className="text-black text-center text-2xl font-extrabold ">Login Page</h1>
      <Formik>
        <Form onSubmit={handleSubmit}>
          <Field
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mt-1  text-white bg-[#0f0e0e54] p-2 rounded-md w-full"
          />
          <Field
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 text-white bg-[#0f0e0e54] p-2 rounded-md w-full"
          />
          <button
            type="submit"
            className="bg-black text-white my-4 w-full py-3 rounded-md hover:bg-[#00000054] transition-colors duration-300"
          >
            Login
          </button>
        </Form>
      </Formik>
      </div>
  )
}

export default LoginPage