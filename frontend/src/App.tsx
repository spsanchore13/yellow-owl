import { Menu } from "lucide-react";
import Sidebar from "./components/Sidebar";
import StudentDetails from "./components/StudentDetails";

function App() {
  return (
    <>
      <div className="relative flex">
        <Sidebar />
        <div className="h-screen absolute left-[20%] w-[80%]">
          <div className="sticky top-0 flex items-center h-[76px] bg-gradient-to-r from-green-500 to-blue-500">
            <button className="flex md:hidden mx-5">
              <Menu className="h-7 w-7" color="white" />
            </button>
            <h1 className="text-[18px] text-white mx-2 md:mx-10 font-semibold">
              Students
            </h1>
          </div>
        </div>

        <StudentDetails />
      </div>
    </>
  );
}

export default App;
