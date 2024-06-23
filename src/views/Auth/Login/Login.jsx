import Form from "@/components/forms/Form";
import { useDispatch } from "react-redux";
import { login } from "@/store/auth";

import TextField from "@/components/forms/TextField";
import { Button } from "primereact/button";
import { NavLink } from "react-router-dom";
import * as yup from "yup";

function Login() {
  const schema = yup.object({
    username: yup.string().required().label("username"),
    password: yup.string().required().label("password"),
  });

  const dispatch = useDispatch();

  function userLogin(values) {
    dispatch(login(values));
  }

  return (
    <div className="flex flex-col justify-center items-center h-full">
      <h2 className="text-xl">Login</h2>
      <Form schema={schema} onSubmit={userLogin} defaultActions={false}>
        <TextField name="username" type="text" label="Username" />
        <TextField name="password" type="password" label="password" />
        <Button
          label="login"
          className="mt-4 w-full rounded-lg"
          type="submit"
          title="Submit"
        />
        <Button
          label="reset"
          className="block mx-auto mt-4 rounded-lg bg-transparent p-0 border-none text-primary"
          type="reset"
          title="reset"
        />
      </Form>

      <span>
        Need an account?
        <NavLink
          to="/register"
          className="ms-1 text-primary font-bold underline"
        >
          Register
        </NavLink>
      </span>
    </div>
  );
}

export default Login;
