import Form from "../Shared/Form";
import InputType from "../Shared/InputType";

export default function Login() {
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
          />
        </div>
      </div>
    </>
  );
}
