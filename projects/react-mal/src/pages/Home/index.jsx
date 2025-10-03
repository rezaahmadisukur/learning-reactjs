import HomeContent from "../../components/fragments/HomeContent";
import Sidebar from "../../components/fragments/Sidebar";

const HomePage = () => {
  return (
    <div className="w-full flex font-poppins border min-h-screen">
      {/* Start SideBar */}
      <div className="w-1/6">
        <Sidebar />
      </div>
      {/* End Sidebar */}

      {/* Main Content */}
      <div className="w-5/6">
        <HomeContent />
      </div>
    </div>
  );
};

export default HomePage;
