import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "@/vendors/axios";

function UsersEdit() {
  const { userId } = useParams();
  const [userData, setUserData] = useState();

  useEffect(() => {
    async function getUser() {
      const { data } = await axios.get(`/users/GetOne/${userId}`);
      setUserData(data);
    }

    getUser();
  }, [userId]);
  return (
    <div className="flex flex-col gap-10">
      <div className="border border-primary p-4 rounded-lg">
        <h1 className="text-4xl mb-3">{userData?.name}</h1>
        <div className="grid grid-cols-2 w-1/4 gap-y-4">
          <div className="data-pair">
            <span>username</span>
            <span>{userData?.username}</span>
          </div>
          <div className="data-pair">
            <span>email</span>
            <span>{userData?.email}</span>
          </div>
          <div className="data-pair">
            <span>phone</span>
            <span>{userData?.phone}</span>
          </div>
        </div>
      </div>
      <div className="border border-primary p-4 rounded-lg">
        <h3 className="text-2xl">Tasks</h3>
        {userData?.tasks?.map((task) => (
          <div key={task?._id}>{task}</div>
        ))}
      </div>
    </div>
  );
}

export default UsersEdit;
