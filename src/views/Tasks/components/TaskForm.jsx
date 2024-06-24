import Form from "@/components/forms/Form";
import * as yup from "yup";
import PropTypes from "prop-types";
import axios from "@/vendors/axios";
import { useEffect, useState } from "react";
import AutocompleteField from "@/components/forms/AutocompleteField";

TaskForm.propTypes = {
  model: PropTypes.object,
  initialValues: PropTypes.object,
  isEditing: PropTypes.bool,
  onSubmit: PropTypes.func,
};

function TaskForm({ model = {}, initialValues, isEditing, onSubmit }) {
  const schema = yup.object({
    name: yup.string().required().max(18).label("Name"),
    status: yup.string().required().max(18).label("Status"),
    description: yup.string().required().max(200).label("Description"),
    // assignee: yup.array().required().label("Assignee"),
  });

  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    async function getUsersList() {
      try {
        const { data } = await axios.get("/users/GetLookup");
        setUsersList(data);
      } catch (error) {
        console.error(error);
      }
    }

    getUsersList();
  }, []);

  return (
    <Form
      initialValues={initialValues || { name: "", status: "", description: "" }}
      model={model}
      schema={schema}
      isEditing={isEditing}
      onSubmit={onSubmit}
    >
      <div className="grid grid-cols-2 gap-4">
        <TextField name="name" type="text" label="Name" />
        <TextField name="status" type="text" label="Status" />
        <TextField name="description" type="text" label="Description" />
        <AutocompleteField
          name="assignee"
          items={usersList}
          placeholder="Select a User"
          itemTitle="name"
        />
      </div>
    </Form>
  );
}

export default TaskForm;
