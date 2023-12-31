import { useState } from "react"
import Navbar from "../Farmer/Navbar"
import Invited_Bids from "./Invited_Bids/Tabs/Invited_Bids"
import Ongoing_Bids from "./Invited_Bids/Tabs/Ongoing_Bids"
import Completed_Transaction from "./Invited_Bids/Tabs/Completed_Transaction"

const Dashboard = () => {
    const [active, setActive] = useState('tab1')

    let display_UI

    if (active === "tab1") {
        display_UI = <Invited_Bids />
    } else if (active === "tab2") {
        display_UI = <Ongoing_Bids />
    } else if (active === "tab3") {
        display_UI = <Completed_Transaction />
    }

    return (
        <div className="container w-full mx-auto">
            <Navbar />
            <h2 className="text-hover__color text-2xl font-Roboto font-extrabold py-4 ">
                Invited Bids
            </h2>
            <div className="flex gap-3 md:gap-5 justify-end ">
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
            {
                display_UI
            }
        </div>
    )
}

export default Dashboard