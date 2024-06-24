import notFound from "@/assets/img/404.gif";
function NotFound() {
  return (
    <div className="flex flex-col items-center gap-10 w-1/2 mx-auto pt-16">
      <img src={notFound} className="block w-1/2 mx-auto" alt="not found" />
      <h1 className="text-4xl">404 - Not Found</h1>
    </div>
  );
}

export default NotFound;
