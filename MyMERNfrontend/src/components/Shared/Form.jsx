import { useState } from "react";
import InputType from "./InputType";
import { Link } from "react-router-dom";
import { handleLogin, handleRegister } from "../../services/authService";

export default function Form({ formType, submitBtn, formTitle }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("donor");
  const [name, setName] = useState("");
  const [organizationName, setOrganizationName] = useState("");
  const [hospitalName, setHospitalName] = useState("");
  const [website, setWebsite] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  return (
    <div className="form-container">
      <form
        onSubmit={(e) => {
          if (formType === "login")
            return handleLogin(e, email, password, role);
          else if (formType === "Register")
            return handleRegister(
              e,
              name,
              role,
              email,
              password,
              phone,
              organizationName,
              address,
              hospitalName,
              website
            );
        }}
      >
        <h1 className="form-title">{formTitle}</h1>
        <hr />

        <div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="role"
              id="donarRadio"
              value={"donor"}
              onChange={(e) => setRole(e.target.value)}
            />
            <label className="form-check-label" htmlFor="inlineRadio1">
              Donor
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="role"
              id="adminRadio"
              value={"admin"}
              onChange={(e) => setRole(e.target.value)}
            />
            <label className="form-check-label" htmlFor="inlineRadio2">
              Admin
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="role"
              id="hospitalRadio"
              value={"hospital"}
              onChange={(e) => setRole(e.target.value)}
            />
            <label className="form-check-label" htmlFor="inlineRadio2">
              Hospital
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="role"
              id="organizationRadio"
              value={"organization"}
              onChange={(e) => setRole(e.target.value)}
            />
            <label className="form-check-label" htmlFor="inlineRadio2">
              Organization
            </label>
          </div>
        </div>

        {/* //switch statement */}
        {(() => {
          switch (true) {
            case formType === "login": {
              return (
                <>
                  <div className="form-group">
                    <label htmlFor="forEmail">Email</label>
                    <input
                      type="text"
                      id="forEmail"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="forPassword">Password</label>
                    <input
                      type="text"
                      id="forPassword"
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </>
              );
            }

            case formType === "Register": {
              return (
                <>
                  {(role === "admin" || role === "donor") && (
                    <div className="form-group">
                      <label htmlFor="forName">Name</label>
                      <input
                        type="text"
                        id="forName"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                  )}
                  {role === "organization" && (
                    <div className="form-group">
                      <label htmlFor="forOrganizationName">
                        Organization Name
                      </label>
                      <input
                        type="text"
                        id="forOrganizationName"
                        name="organizationName"
                        value={organizationName}
                        onChange={(e) => setOrganizationName(e.target.value)}
                      />
                    </div>
                  )}

                  {role === "hospital" && (
                    <div className="form-group">
                      <label htmlFor="forHospitalName">Hospital Name</label>
                      <input
                        type="text"
                        id="forHospitalName"
                        name="hospitalName"
                        value={hospitalName}
                        onChange={(e) => setHospitalName(e.target.value)}
                      />
                    </div>
                  )}
                  <div className="form-group">
                    <label htmlFor="forEmail">Email</label>
                    <input
                      type="text"
                      id="forEmail"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="forPassword">Password</label>
                    <input
                      type="text"
                      id="forPassword"
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="forAddress">Address</label>
                    <input
                      type="text"
                      id="forAddress"
                      name="address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="forPhone">Phone</label>
                    <input
                      type="number"
                      id="forPhone"
                      name="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="forWebsite">Website</label>
                    <input
                      type="text"
                      id="forWebsite"
                      name="website"
                      value={website}
                      onChange={(e) => setWebsite(e.target.value)}
                    />
                  </div>
                </>
              );
            }
          }
        })()}

        <div className="d-flex flex-row justify-content-between">
          {formType === "login" ? (
            <p>
              Not registerd yet ? Register
              <Link to="/Register"> Here !</Link>
            </p>
          ) : (
            <p>
              Already a User Please
              <Link to="/login"> Login !</Link>
            </p>
          )}
          <button className="btn btn-primary" type="submit">
            {submitBtn}
          </button>
        </div>
      </form>
    </div>
  );
}
