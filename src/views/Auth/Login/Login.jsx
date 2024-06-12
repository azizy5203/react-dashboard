import Form from "@/components/forms/Form";
import { useDispatch } from "react-redux";
import { loginUser } from "@/store/auth";
import TextField from "@/components/forms/TextField";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

function Login() {
  // const auth = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const schema = yup.object({
    username: yup.string().required().label("username"),
    password: yup.string().required().label("password"),
  });

  async function userLogin(values) {
    dispatch(loginUser(values));
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
