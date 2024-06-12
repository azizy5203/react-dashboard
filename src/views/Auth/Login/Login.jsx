import Form from "@/components/forms/Form";
import { useSelector, useDispatch } from "react-redux";
import { setStoreState } from "@/store/auth";
import TextField from "@/components/forms/TextField";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { toast } from "react-toastify";
import axios from "@/vendors/axios";
import { useEffect } from "react";

const showToast = (msg, type = "success") =>
  toast(msg, {
    draggable: true,
    type: type,
    theme: "light",
    autoClose: 1300,
  });

function Login() {
  // const auth = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const schema = yup.object({
    username: yup.string().required().label("username"),
    password: yup.string().required().label("password"),
  });
  const navigate = useNavigate();

  async function userLogin(values) {
    try {
      const { data } = await axios.post("/auth/login", values);
      dispatch(setStoreState(data));
      navigate("/users");
      // localStorage.setItem("TOKEN", data.token);
      console.log("🚀 ~ userLogin ~ data.Data:", data);
    } catch (error) {
      console.log("🚀 ~ userLogin ~ error:", error);
      showToast("Login Failed", "error");
    }
  }

  return (
    <div className="flex flex-col justify-center items-center h-full">
      <h2 className="text-xl">Login</h2>
      <Form schema={schema} onSubmit={userLogin} defaultActions={false}>
        <TextField name="username" type="text" label="Username" />
        <TextField name="password" type="text" label="password" />
        <Button
          label="login"
          className="mt-4 w-full rounded-lg"
          type="submit"
          title="Submit"
        />
        <Button
          label="reset"
          severity="secondary"
          className="mt-4 w-full rounded-lg"
          type="reset"
          title="reset"
        />
      </Form>
    </div>
  );
}

export default Login;
