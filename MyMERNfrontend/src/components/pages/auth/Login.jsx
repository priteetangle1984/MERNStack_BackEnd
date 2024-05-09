import React from "react";
import Form from "../../Shared/Form";
import InputType from "../../Shared/InputType";
import { useDispatch } from "react-redux";
import { userLogin } from "../../redux/features/auth/authActions"; // Import userLogin action

export default function Login() {
  const dispatch = useDispatch(); // Initialize useDispatch hook

  const handleLogin = async (formData) => {
    try {
      // Dispatch the userLogin action with form data
      await dispatch(userLogin(formData));
      console.log("Login successful!"); // Log success message
    } catch (error) {
      console.error("Login failed:", error); // Log error message
    }
  };

  return (
    <>
      <div className="row">
        <div className="col-md-8 form-banner">
          <img src="../../assets/BBimage2.jpg" alt="loginImage" />
        </div>
        <div className="col-md-4 form-container">
          <Form
            formTitle={"Login Page"}
            submitBtn={"Login"}
            formType={"login"}
            onSubmit={handleLogin} // Pass handleLogin as onSubmit prop
          />
        </div>
      </div>
    </>
  );
}
