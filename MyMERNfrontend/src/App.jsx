import { Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

//
// import Home from "./pages/Home";
// import Login from "./pages/auth/Login";
// import Register from "./pages/auth/Register";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import ProtectedRoute from "./components/Routes/ProtectedRoute";
// import PublicRoute from "./components/Routes/PublicRoute";
// import Donar from "./pages/Dashboard/Donar";
// import Hospitals from "./pages/Dashboard/Hospitals";
// import OrganisationPage from "./pages/Dashboard/OrganizationPage";
// import Consumer from "./pages/Dashboard/Consumer";
// // import Donation from "./pages/Donation";
// import Analytics from "./pages/Dashboard/Analytics";
// import DonarList from "./pages/Admin/DonarList";
// import HospitalList from "./pages/Admin/HospitalList";
// import OrgList from "./pages/Admin/OrgList";
// import AdminHome from "./pages/Admin/AdminHome";
// function App() {
//   return (
//     <>
//       <ToastContainer />
//       <Routes>
//         <Route
//           path="/admin"
//           element={
//             <ProtectedRoute>
//               <AdminHome />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/donar-list"
//           element={
//             <ProtectedRoute>
//               <DonarList />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/hospital-list"
//           element={
//             <ProtectedRoute>
//               <HospitalList />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/org-list"
//           element={
//             <ProtectedRoute>
//               <OrgList />
//             </ProtectedRoute>
//           }
//         />

//         <Route
//           path="/hospital"
//           element={
//             <ProtectedRoute>
//               <Hospitals />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/analytics"
//           element={
//             <ProtectedRoute>
//               <Analytics />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/consumer"
//           element={
//             <ProtectedRoute>
//               <Consumer />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/donation"
//           element={<ProtectedRoute>{/* <Donation /> */}</ProtectedRoute>}
//         />
//         <Route
//           path="/orgnaisation"
//           element={
//             <ProtectedRoute>
//               <OrganisationPage />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/donar"
//           element={
//             <ProtectedRoute>
//               <Donar />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/"
//           element={
//             <ProtectedRoute>
//               <Home />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/login"
//           element={
//             <PublicRoute>
//               <Login />
//             </PublicRoute>
//           }
//         />
//         <Route
//           path="/register"
//           element={
//             <PublicRoute>
//               <Register />
//             </PublicRoute>
//           }
//         />
//       </Routes>
//     </>
//   );
// }

// export default App;

// // import { React } from "react";
// // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // import { ToastContainer } from "react-toastify";
// // import "react-toastify/dist/ReactToastify.css";
// // import "bootstrap/dist/css/bootstrap.min.css";
// // import Home from "./pages/Home";
// // import Login from "./pages/auth/Login";
// // import Register from "./pages/auth/Register";
// // import Contact from "./pages/Contact";
// // import Header from "./components/Header";
// // import Footer from "./components/Footer";

// // function App() {
// //   return (
// //     <>
// //       <Router>
// //         <div className="container"></div>
// //         <Routes>
// //           <Route path="/" element={<Home />} />
// //           <Route path="/login" element={<Login />} />
// //           <Route path="/register" element={<Register />} />
// //           <Route path="/contact" element={<Contact />} />
// //         </Routes>
// //         <Header />
// //         <Footer />
// //       </Router>
// {
//   /* <ToastContainer /> */
// }
// //     </>
// //   );
// // }

// // export default App;
