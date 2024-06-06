import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import AppModal from "../../components/shared/AppModal";
// import { toast } from "react-toastify";

import axios from "axios";
// const notify = () =>
//   toast("toast", {
//     draggable: true,
//     type: "success",
//     theme: "light",
//   });

const About = () => {
  const [modelList, setModelList] = useState([]);
  const [isVisible, setVisible] = useState(false);

  const load = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:5555/api/users/GetAll"
      );
      setModelList(data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    load();
  }, []);
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between">
        <span className="text-3xl">Users</span>
        <Button
          label="Add"
          size="small"
          icon="pi pi-plus-circle"
          onClick={() => setVisible(true)}
        />
      </div>
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
        <Column align="center" field="username" sortable header="Username" />
        <Column align="center" field="name" sortable header="Name" />
        <Column align="center" field="email" sortable header="Email" />
        <Column align="center" field="phone" sortable header="Phone" />
        <Column
          align="center"
          header="Actions"
          body={
            <div className="flex gap-3 justify-center">
              <Button
                className="text-sky-700"
                onClick={() => setVisible(true)}
                outlined
                icon="pi pi-pencil"
                rounded
              />
              <Button
                className="text-red-700"
                onClick={() => setVisible(true)}
                outlined
                icon="pi pi-trash"
                rounded
              />
            </div>
          }
        />
        {/* body={<i className="pi true-icon pi-check-circle"></i>} */}
      </DataTable>

      <NavLink to="/" className="w-fit">
        <Button icon="pi pi-chevron-left" rounded />
      </NavLink>

      <AppModal
        isVisible={isVisible}
        title="Add User"
        onClose={() => {
          if (!isVisible) return;
          setVisible(false);
        }}
      >
        <div className="bg-blue-300 p-4">
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
            animi error. Ullam.
          </span>
        </div>
      </AppModal>
    </div>
  );
};

export default About;
