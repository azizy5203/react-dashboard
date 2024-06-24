import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import axios from "@/vendors/axios";
import TaskForm from "./components/TaskForm";
import { toast } from "react-toastify";

const showToast = (msg, type = "success") =>
  toast(msg, {
    draggable: true,
    type: type,
    theme: "light",
    autoClose: 1300,
  });

const Tasks = () => {
  const [modelList, setModelList] = useState([]);
  const [isLoading, setLoading] = useState([]);
  const [isVisible, setVisible] = useState(false);
  const [isEditing, setEditing] = useState(false);
  const [editModel, setEditModel] = useState({});

  const navigate = useNavigate();

  async function load() {
    try {
      setLoading(true);
      const { data } = await axios.get("tasks/GetAll");
      setModelList(data);
      console.log("[DONE]");
    } catch (error) {
      showToast("Request Failed", "error");
    } finally {
      setLoading(false);
    }
  }

  async function deleteTask(item) {
    try {
      await axios.delete(`/tasks/delete/${item._id}`);
      showToast("Deletion Success");
      await load();
    } catch (error) {
      showToast("Deletion Failed", "error");
    }
  }

  async function submit(values) {
    if (isEditing) await updateTask(values);
    else await addTask(values);
  }

  async function handleTaskEdit(item) {
    setEditing(true);
    setVisible(true);
    setEditModel(item);
  }

  async function updateTask(values) {
    try {
      await axios.put("/tasks/update", {
        ...values,
        assignee: values.assignee.id,
      });
      showToast("Updated Successfully");
      setEditing(false);
      closeModal();
      await load();
    } catch (error) {
      showToast("Updating Failed", "error");
    }
  }

  async function addTask(values) {
    try {
      await axios.post("/tasks/Add", {
        ...values,
        assignee: values.assignee.id,
      });
      showToast("Added Successfully");
      closeModal();
      await load();
    } catch (error) {
      showToast("Creation Failed", "error");
    }
  }

  function assigneeTemplate(rowData) {
    return rowData?.assignee ? (
      <NavLink
        className="underline text-primary"
        to={`/users/${rowData?.assignee?._id}`}
      >
        {rowData?.assignee?.name}
      </NavLink>
    ) : (
      <span>-</span>
    );
  }
  function closeModal() {
    setEditing(false);
    setEditModel({});
    if (!isVisible) return;
    setVisible(false);
  }

  //   function viewTaskData(rowData) {
  //     console.log("🚀 ~ viewTaskData ~ rowData:", rowData);
  //     navigate(`/tasks/${rowData.data._id}`);
  //   }

  useEffect(() => {
    load();
  }, []);
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between">
        <div className="flex gap-4 items-center">
          <NavLink to="/" className="w-fit">
            <Button
              className="w-7 h-7 rounded-full p-0"
              icon="pi pi-chevron-left text-[.75rem]"
            />
          </NavLink>
          <span className="text-3xl">Tasks</span>
        </div>
        <Button
          label="Add"
          size="small"
          icon="pi pi-plus-circle"
          onClick={() => setVisible(true)}
        />
      </div>
      <>
        <DataTable
          loading={isLoading}
          value={modelList}
          size="small"
          paginator
          rows={5}
          rowsPerPageOptions={[5, 10, 25, 50]}
          // sortField="taskname"
          // sortOrder={1}
          removableSort
        >
          <Column hidden field="_id" />
          <Column align="center" field="name" sortable header="Title" />
          <Column
            align="center"
            field="description"
            sortable
            header="Description"
            body={(rowData) => (
              <span
                className="truncate w-56 inline-block"
                title={rowData.description}
              >
                {rowData.description}
              </span>
            )}
          />
          <Column
            align="center"
            body={(rowData) => assigneeTemplate(rowData)}
            sortable
            header="Assigned To"
          />
          <Column align="center" field="status" sortable header="Status" />
          <Column
            align="center"
            header="Actions"
            body={(rowData) => (
              <>
                <div className="flex gap-3 justify-center">
                  <Button
                    className="text-sky-700"
                    onClick={() => handleTaskEdit(rowData)}
                    outlined
                    icon="pi pi-pencil"
                    rounded
                  />
                  <Button
                    className="text-red-700"
                    onClick={() => deleteTask(rowData)}
                    outlined
                    icon="pi pi-trash"
                    rounded
                  />
                </div>
              </>
            )}
          />
        </DataTable>
      </>

      <AppModal
        isVisible={isVisible}
        title="Add Task"
        onClose={() => closeModal()}
      >
        <TaskForm model={editModel} isEditing={isEditing} onSubmit={submit} />
      </AppModal>
    </div>
  );
};

export default Tasks;
