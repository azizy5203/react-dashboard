import Form from "@/components/forms/Form";
import * as yup from "yup";
import PropTypes from "prop-types";
import TextField from "@/components/forms/TextField";

UserForm.propTypes = {
  model: PropTypes.object,
  isEditing: PropTypes.bool,
  onSubmit: PropTypes.func,
};

function UserForm({ model = {}, isEditing, onSubmit }) {
  const schema = yup.object({
    name: yup.string().required().max(18).label("Name"),
    username: yup.string().required().max(10).label("Username"),
    email: yup.string().email().required().max(50).label("Email"),
    phone: yup.number().required().label("Phone Number"),
  });

  return (
    <Form
      initialValues={{ name: "", username: "", email: "", phone: "" }}
      model={model}
      schema={schema}
      isEditing={isEditing}
      onSubmit={onSubmit}
    >
      <div className="grid grid-cols-2 gap-4">
        <TextField name="name" type="text" label="Name" />
        <TextField name="email" type="text" label="Email" />
        <TextField name="username" type="text" label="Username" />
        <TextField name="phone" type="text" label="Phone" />
      </div>
    </Form>
  );
}

export default UserForm;
