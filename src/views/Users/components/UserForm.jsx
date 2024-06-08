import { Field } from "formik";
import Form from "@/components/forms/Form";
import * as yup from "yup";

import PropTypes from "prop-types";

import { toast } from "react-toastify";

UserForm.propTypes = {
  model: PropTypes.object,
  isEditing: PropTypes.bool,
};

const notify = () =>
  toast("toast", {
    draggable: true,
    type: "success",
    theme: "light",
  });

function UserForm({ model, isEditing }) {
  const schema = yup.object({
    name: yup.string().required().max(18).label("Name"),
    username: yup.string().required().max(10).label("Username"),
    email: yup.string().email().required().max(24).label("Email"),
    phone: yup.number().required().max(10).label("Phone Number"),
  });

  function onSubmit(values) {
    console.log("🚀 ~ onSubmit ~ values:", values);
  }
  return (
    <Form
      initialValues={model || null}
      schema={schema}
      isEditing={isEditing}
      onSubmit={onSubmit}
      onReset={() => {
        console.log("Reset");
        notify();
      }}
    >
      <div className="grid grid-cols-2 gap-4">
        <Field
          className="ps-3 py-2 rounded-lg bg-transparent border border-primary"
          name="name"
        />
        <Field
          className="ps-3 py-2 rounded-lg bg-transparent border border-primary"
          name="username"
        />
        <Field
          className="ps-3 py-2 rounded-lg bg-transparent border border-primary"
          name="email"
        />
        <Field
          className="ps-3 py-2 rounded-lg bg-transparent border border-primary"
          name="phone"
        />
      </div>
    </Form>
  );
}

export default UserForm;
