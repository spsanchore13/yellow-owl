import { Button } from "./ui/button";
import { Input } from "./ui/input";

const StudentDetails = () => {
  return (
    <div className="fixed left-[20%] w-[80%] h-full top-[76px] p-4 md:p-10  bg-[#E5E7EB]">
      <div className="flex justify-between items-center w-full">
        <h1 className="text-xl md:text-3xl font-bold">Students</h1>

        <div className="flex gap-x-3 md:gap-x-5">
          <Input type="text" placeholder="Search..." />
          <Button className="hidden md:block">ADD NEW STUDENT</Button>
          <Button className="flex md:hidden">ADD</Button>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default StudentDetails;
