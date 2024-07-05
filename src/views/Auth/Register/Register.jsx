import Form from "@/components/forms/Form";
import { useDispatch } from "react-redux";
import { register } from "@/store/auth";

import TextField from "@/components/forms/TextField";
import { Button } from "primereact/button";
import { NavLink } from "react-router-dom";
import * as yup from "yup";
// import { useEffect } from "react";

function Register() {
  // const auth = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const schema = yup.object({
    name: yup.string().required().label("Name"),
    username: yup.string().required().label("Username"),
    email: yup.string().required().label("Email"),
    phone: yup.string().required().label("Phone"),
    password: yup.string().required().label("Password"),
  });

  function userRegister(values) {
    dispatch(register(values, 1));
  }

  return (
    <div className="flex flex-col justify-center items-center h-full">
      <h2 className="text-xl">Register</h2>
      <Form schema={schema} onSubmit={userRegister} defaultActions={false}>
        <TextField name="name" required type="text" label="Name" />
        <div className="grid grid-cols-2 gap-2 mt-2">
          <TextField name="username" required type="text" label="Username" />
          <TextField name="phone" required type="text" label="Phone" />
          <TextField name="email" required type="text" label="Email" />
          <TextField name="password" required type="text" label="password" />
        </div>
        <Button
          label="Submit"
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
        Already have an account?
        <NavLink to="/login" className="ms-1 text-primary font-bold underline">
          Login
        </NavLink>
      </span>
    </div>
  );
}

export default Register;
