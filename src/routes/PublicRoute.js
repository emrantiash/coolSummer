// import { Navigate, useLocation } from "react-router-dom";
// // import useAuth from "../hooks/useAuth";

// export default function PublicRoute({ children }) {
// //   const { accessToken, user } = useAuth();
//   const { pathname } = useLocation();

//   if (accessToken) {
//     if (user?.role === "admin") {
//       if (pathname !== "/") {
//         return <Navigate to="/dashboard" />;
//       } else {
//         return children;
//       }
//     }
//   }
//   return children;
// }
