import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import axios from "@/vendors/axios";
import UserForm from "./components/UserForm";
import { toast } from "react-toastify";

const showToast = (msg, type = "success") =>
  toast(msg, {
    draggable: true,
    type: type,
    theme: "light",
    autoClose: 1300,
  });

const About = () => {
  const [modelList, setModelList] = useState([]);
  const [isVisible, setVisible] = useState(false);
  const [isEditing, setEditing] = useState(false);
  const [editModel, setEditModel] = useState({});

  async function load() {
    try {
      const { data } = await axios.get("users/GetAll");
      setModelList(data);
      console.log("[DONE]");
    } catch (error) {
      showToast("Request Failed", "error");
    }
  }

  async function deleteUser(item) {
    try {
      await axios.delete(`/users/delete/${item._id}`);
      showToast("Deletion Success");
      await load();
    } catch (error) {
      showToast("Deletion Failed", "error");
    }
  }

  async function submit(values) {
    if (isEditing) await updateUser(values);
    else await addUser(values);
  }

  async function handleUserEdit(item) {
    setEditing(true);
    setVisible(true);
    setEditModel(item);
  }

  async function updateUser(values) {
    try {
      await axios.put("/users/update", values);
      showToast("Updated Successfully");
      setEditing(false);
      closeModal();
      await load();
    } catch (error) {
      showToast("Updating Failed", "error");
    }
  }

  async function addUser(values) {
    try {
      await axios.post("/users/Add", values);
      showToast("Added Successfully");
      closeModal();
      await load();
    } catch (error) {
      showToast("Creation Failed", "error");
    }
  }

  function closeModal() {
    setEditing(false);
    setEditModel({});
    if (!isVisible) return;
    setVisible(false);
  }

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
          <span className="text-3xl">Users</span>
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
          value={modelList}
          size="small"
          paginator
          rows={5}
          rowsPerPageOptions={[5, 10, 25, 50]}
          sortField="username"
          sortOrder={-1}
          removableSort
        >
          <Column hidden field="_id" />
          <Column align="center" field="username" sortable header="Username" />
          <Column align="center" field="name" sortable header="Name" />
          <Column align="center" field="email" sortable header="Email" />
          <Column align="center" field="phone" sortable header="Phone" />
          <Column
            align="center"
            header="Actions"
            body={(rowData) => (
              <>
                <div className="flex gap-3 justify-center">
                  <Button
                    className="text-sky-700"
                    onClick={() => handleUserEdit(rowData)}
                    outlined
                    icon="pi pi-pencil"
                    rounded
                  />
                  <Button
                    className="text-red-700"
                    onClick={() => deleteUser(rowData)}
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
        title="Add User"
        onClose={() => closeModal()}
      >
        <UserForm model={editModel} isEditing={isEditing} onSubmit={submit} />
      </AppModal>
    </div>
  );
};

export default About;
