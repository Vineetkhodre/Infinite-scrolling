import React, { useState } from "react";
import { useHistory, Redirect, Route } from "react-router-dom";

const authentication = {
  isLoggedIn: false,
  onAuthentication() {
    this.isLoggedIn = true;
  },
  getLogInStatus() {
    return this.isLoggedIn;
  },
};
export function SecuredRoute(props) {
  return (
    <Route
      path={props.path}
      render={(data) =>
        authentication.getLogInStatus() ? (
          <props.component {...data}></props.component>
        ) : (
          <Redirect to={{ pathname: "/" }}></Redirect>
        )
      }
    ></Route>
  );
}

export default function Login() {
  const history = useHistory();

  const [formData, setFormData] = useState({
    user: {
      email: "",
      password: "",
    },
  });

  const handleChange = (e) => {
    setFormData({
      user: {
        ...formData.user,
        [e.target.name]: e.target.value,
      },
    });
  };

  const logIn = () => {
    if (formData.user.email === "foo" && formData.user.password === "bar") {
      authentication.onAuthentication();
      localStorage.setItem("user", JSON.stringify(formData.user));
      history.push("/home");
    }
  };

  return (
    <div className="formouter">
      <div className="formcontainer">
        <input
          name="email"
          type="text"
          value={formData.user.email}
          onChange={handleChange}
          placeholder="User Name"
          className={
            "w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
          }
        />

        <input
          name="password"
          type="password"
          value={formData.user.password}
          onChange={handleChange}
          placeholder="Password"
          className={
            "w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
          }
        />

        <button
          type="button"
          className="btn btn-primary"
          value="Login"
          onClick={logIn}
        >
          login
        </button>
      </div>
    </div>
  );
}
