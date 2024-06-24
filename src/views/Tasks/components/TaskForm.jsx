import Form from "@/components/forms/Form";
import * as yup from "yup";
import PropTypes from "prop-types";
import axios from "@/vendors/axios";
import { useEffect, useState } from "react";
import ListField from "@/components/forms/ListField";

TaskForm.propTypes = {
  model: PropTypes.object,
  initialValues: PropTypes.object,
  isEditing: PropTypes.bool,
  onSubmit: PropTypes.func,
};

function TaskForm({ model = {}, initialValues, isEditing, onSubmit }) {
  const schema = yup.object({
    name: yup.string().required().max(18).label("Name"),
    status: yup.string().required().label("Status"),
    description: yup.string().required().max(200).label("Description"),
    assignee: yup.string().required().label("Assignee"),
  });

  const [usersList, setUsersList] = useState([]);
  const [statusList, setStatusList] = useState([]);

  useEffect(() => {
    async function getUsersList() {
      try {
        const { data } = await axios.get("/users/GetLookup");
        setUsersList(data);
      } catch (error) {
        console.error(error);
      }
    }
    async function getStatusList() {
      try {
        const { data } = await axios.get("/tasks/GetStatusList");
        setStatusList(data);
      } catch (error) {
        console.error(error);
      }
    }

    getUsersList();
    getStatusList();
  }, []);

  return (
    <Form
      initialValues={
        initialValues || {
          name: null,
          status: null,
          description: null,
          assignee: null,
        }
      }
      model={model}
      schema={schema}
      isEditing={isEditing}
      onSubmit={onSubmit}
    >
      <div className="grid grid-cols-2 gap-4">
        <TextField name="name" type="text" label="Name" />
        <ListField
          name="status"
          items={statusList}
          placeholder="Select Status"
          itemTitle="name"
          itemValue="value"
        />
        <TextField name="description" type="text" label="Description" />
        <ListField
          name="assignee"
          items={usersList}
          placeholder="Select a User"
          itemTitle="name"
          itemValue="id"
        />
      </div>
    </Form>
  );
}

export default TaskForm;
