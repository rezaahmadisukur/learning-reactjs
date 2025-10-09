import Sidebar from "../fragments/Sidebar";

const App = ({ children }) => {
  return (
    <div className="w-full flex font-poppins min-h-screen">
      {/* Start SideBar */}
      <div className="w-1/6">
        <Sidebar />
      </div>
      {/* End Sidebar */}

      <div className="w-5/6">{children}</div>
    </div>
  );
};

export default App;
