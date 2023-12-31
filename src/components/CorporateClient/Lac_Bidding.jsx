import { useState } from "react";
import StartBid from "./Modals/StartBid"
import Navbar from "../Farmer/Navbar"
import useModal from "../hooks/useModal"
import Invited_Bids from "./Tabs/Invited_Bids";
import Ongoing_Transactions from "./Tabs/Ongoing_Transactions";
import Completed_Transations from "./Tabs/Completed_Transations";
const Lac_Bidding = () => {
  const [active, setActive] = useState("tab1");
  const { modal, closeModal, updateModal } = useModal()

  let tab__UI;
  if (active === "tab1") {
    tab__UI = <Invited_Bids />;
  } else if (active === "tab2") {
    tab__UI = <Ongoing_Transactions />;
  }else if(active === "tab3") {
    tab__UI = <Completed_Transations />
  }

  return (
    <div className="container w-full mx-auto">
      <Navbar />
      <h2 className="text-hover__color text-2xl font-Roboto font-extrabold py-4 ">
        Corporate Customer
      </h2>

      <div>
        <button
          onClick={() => updateModal("ShowStartBid")}
          className="bg-bg__color mb-4 text-white__color border-none shadow-md rounded-lg z-0 px-4 py-2 font-Roboto text-sm md:text-base cursor-pointer"
        >
          Start Bid
        </button>
      </div>

      <div className="flex gap-3 md:gap-5 justify-between md:justify-end ">
        <button
          onClick={() => setActive("tab1")}
          style={{
            borderBottom: active === "tab1" && "2px solid green",
          }}
          className="text-hover__color shadow-md rounded-lg z-0 focus:outline-none px-4 py-2 font-Roboto text-base font-bold cursor-pointer"
        >
          Invited Bids
        </button>
        <button
          onClick={() => setActive("tab2")}
          style={{
            borderBottom: active === "tab2" && "2px solid green",
          }}
          className="text-hover__color shadow-md rounded-lg z-0 focus:outline-none px-4 py-2 font-Roboto text-base font-bold cursor-pointer"
        >
          Ongoing Bids
        </button>
        <button
          onClick={() => setActive("tab3")}
          style={{
            borderBottom: active === "tab3" && "2px solid green",
          }}
          className="text-hover__color shadow-md rounded-lg z-0 focus:outline-none px-4 py-2 font-Roboto text-base font-bold cursor-pointer"
        >
          Completed Transactions
        </button>
      </div>
      {tab__UI}
      {
        modal.state === "ShowStartBid" && <StartBid handleClose={closeModal} />
      }
    </div>

  )
}

export default Lac_Bidding