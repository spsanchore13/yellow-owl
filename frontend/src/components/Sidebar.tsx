const Sidebar = () => {
  return (
    <div className="fixed top-0 hidden md:block bg-gradient-to-r from-blue-800 to-purple-800 h-screen w-[20%]">
      <div className="flex gap-x-2 m-7">
        <img
          className="h-[48px] w-[48px] rounded-full border-[1px] border-gray-500"
          src="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG.png"
          alt="user-image"
        />
        <div>
          <p className="text-white text-md">Yellow Owl</p>
          <p className="text-[#BFDBFE] text-sm">Admin</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
