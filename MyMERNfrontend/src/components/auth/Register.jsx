import Form from "../Shared/Form";

export default function Register() {
  return (
    <>
      <div className="row">
        <div className="col-md-8 form-banner">
          <img src="../../../assets/BBimage6.jpg" alt="RegisterImage" />
        </div>
        <div className="col-md-4 form-container">
          <Form
            formTitle={"Register"}
            submitBtn={"Register"}
            formType={"Register"}
          />
        </div>
      </div>
    </>
  );
}
