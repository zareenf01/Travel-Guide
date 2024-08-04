import { useState } from "react";
import Enquiry from "./Enquiry";

function Nav() {
  const [isModalVisible, setModalVisible] = useState(false);

  return (
    <div>
      <div className="p-4 flex justify-between items-center shadow-b shadow-xl">
        <h1 className="text-3xl font-semibold text-[#b33e3e]">YourGuide</h1>
        <button
          onClick={() => setModalVisible(true)}
          className="px-4 py-2 hover:border hover:border-[#b33e3e] hover:bg-transparent hover:text-red-800 duration-300 bg-[#b33e3e] text-white font-bold mr-10 rounded-full"
        >
          Enquiry
        </button>
      </div>
      <Enquiry
        isVisible={isModalVisible}
        onClose={() => setModalVisible(false)}
      />
    </div>
  );
}

export default Nav;
