import Form from "@/components/forms/Form";
import TextField from "@/components/forms/TextField";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";
import axios from "@/vendors/axios";
import { toast } from "react-toastify";
import * as yup from "yup";

const showToast = (msg, type = "success") =>
  toast(msg, {
    draggable: true,
    type: type,
    theme: "light",
    autoClose: 1300,
  });

function Login() {
  const schema = yup.object({
    username: yup.string().required().label("username"),
    password: yup.string().required().label("password"),
  });

  const nav = useNavigate();
  async function userLogin(values) {
    try {
      const { data } = await axios.post("/auth/login", values);
      localStorage.setItem("token", data.token);
      nav("/users");
      console.log("🚀 ~ userLogin ~ data.Data:", data);
    } catch (error) {
      showToast("Login Failed", "error");
    }
  }

  return (
    <div className="flex flex-col justify-center items-center  h-full">
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
      </Form>
    </div>
  );
}

export default Login;
