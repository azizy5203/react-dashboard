function Header() {
  return (
    <div className="flex gap-8 items-center ps-4 border-b-2 border-b-sky-600">
      {/* <Button
      className="md:hidden"
      icon="pi pi-bars"
      onClick={() => setVisible(true)}
    /> */}

      <div className="flex flex-col gap-2 items-start">
        <span className="text-lg">Youssuf Abdulaziz</span>
        <span className="text-xs">nigga admin</span>
      </div>
    </div>
  );
}

export default Header;