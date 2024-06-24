import { useSelector } from "react-redux";
import { Button } from "primereact/button";

function Header() {
  const user = useSelector((state) => state.auth.user);
  // const [visible,setVisible] = useState(false)

  return (
    <div className="flex gap-8 items-center ps-4 border-b-2 border-b-sky-600">
      <Button className="md:hidden" icon="pi pi-bars" />

      <div className="flex flex-col gap-2 items-start">
        <span className="text-lg">{user?.name}</span>
        <span className="text-xs">nigga admin</span>
      </div>
    </div>
  );
}

export default Header;
