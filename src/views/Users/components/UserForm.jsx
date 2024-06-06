import { Field } from "formik";
import Form from "../../../components/forms/Form";
import * as yup from "yup";
function UserForm({ children, isSubmitting, isEditing }) {
  const schema = yup.object({
    name: yup.string().required().max(18).label("Name"),
    username: yup.string().required().max(10).label("Username"),
    email: yup.string().email().required().max(24).label("Email"),
    phone: yup.number().required().max(10).label("Phone Number"),
  });
  const intiValues = {
    name: "Youssef",
    username: "Youssef",
    email: "Youssef@mail.com",
    phone: "01089487234",
  };
  function onSubmit(values) {
    console.log("🚀 ~ onSubmit ~ values:", values);
  }
  return (
    <Form
      initialValues={intiValues}
      schema={schema}
      isEditing={false}
      onSubmit={onSubmit}
      onReset={() => console.log("Reset")}
    >
      <Field name="name" />
      <Field name="username" />
      <Field name="email" />
      <Field name="phone" />
    </Form>
  );
}

export default UserForm;
