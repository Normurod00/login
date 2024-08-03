import logo from "../assets/logo/logo-black.png";
import { Input } from "../../ui";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  registerUserFailure,
  registerUserStart,
  registerUserSuccess,
} from "../../slice/auth";
import AuthServer from "../../server/auth";

const Register = () => {
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.auth);

  const registerHandler = async (e) => {
    e.preventDefault();
    dispatch(registerUserStart());
    const user = { username, email, password };
    try {
      const response = await AuthServer.userRegister(user);
      console.log(response);
      dispatch(registerUserSuccess({ user: response.data }));
    } catch (error) {
      dispatch(registerUserFailure({ error: error.message }));
    }
  };

  return (
    <div className="text-center">
      <main className="form-signin w-25 m-auto">
        <form className="">
          <img className="mt-5 mb-5" src={logo} alt="Logo" />

          <Input label={"Username"} state={username} setState={setName} />
          <Input
            label={"Email"}
            type={"email"}
            state={email}
            setState={setEmail}
          />
          <Input
            label={"Password"}
            type={"password"}
            state={password}
            setState={setPassword}
          />

          <div className="checkbox my-3">
            <input
              className="form-check-input"
              type="checkbox"
              value="remember-me"
              id="flexCheckDefault"
            />
            <label className="form-check-label ms-2" htmlFor="flexCheckDefault">
              Remember me
            </label>
          </div>
          <button
            className="btn btn-dark w-100 py-2"
            disabled={isLoading}
            onClick={registerHandler}
            type="submit"
          >
            {isLoading ? "Loading..." : "Registration"}
          </button>
        </form>
      </main>
    </div>
  );
};

export default Register;
