// import NextAuth from 'next-auth';
// import CredentialsProvider from 'next-auth/providers/credentials';
// import { signIn } from '../../../services/auth';

// export default NextAuth({
//     session: {
//         strategy: "jwt",
//     },
//   // Configure one or more authentication providers
//   providers: [
//     CredentialsProvider({
//         name: "scott-point",
//         type: "credentials",
//         credentials: {
//           email: {
//             label: "email",
//             type: "email",
//           },
//           password: { label: "Password", type: "password" },
//         },
//         async authorize(credentials, req) {
//           const payload = {
//             identifier: credentials.email,
//             password: credentials.password,
//           };
//           const res = await axiosInstance.post("auth/local", payload);
  
//           return {
//             ...res.data.user,
//             name: res.data.user.username,
//             id: res.data.user.id,
//             access_token: res.data.jwt,
//           };
//         },
//       }),
  
//   ],
//   callbacks: {
//     session: async ({ session, token }) => {
//       session.id = token.id;
//       session.jwt = token.jwt;
//       return Promise.resolve(session);
//     },
//     jwt: async ({ token, user }) => {
//       const isSignIn = user ? true : false;
//       if (isSignIn) {
//         token.id = user.id;
//         token.jwt = user.jwt;
//       }
//       return Promise.resolve(token);
//     },
//   },
// });