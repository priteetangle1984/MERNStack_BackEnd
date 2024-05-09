import store from "../components/redux/store";
import { userLogin } from "../components/redux/features/auth/authActions";

export const handleLogin = (e, email, password, role) => {
  e.preventDefault();
  try {
    if (!role || !email || !password) {
      return alert("Please Privde All Feilds");
    }
    store.dispatch(userLogin({ email, password, role }));

    console.log("login", e, email, password, role);
  } catch (error) {
    console.log(error);
  }
};

export const handleRegister = (
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
) => {
  e.preventDefault();
  try {
    console.log(
      "register =>",
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
  } catch (error) {
    console.log(error);
  }
};
