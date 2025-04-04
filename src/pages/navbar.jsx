import logo from "../assets/logo.png";
import battery from "../assets/battery.png";
import { IoNotificationsOutline } from "react-icons/io5";
import { HiSignal } from "react-icons/hi2";
// import { IoIosBatteryDead } from "react-icons/io";

const Navbar = () => {
  return (
    <section className="flex flex-col items-center justify-center relative z-20 w-[100vw] min-w-[700px]  ">
      <div className="flex flex-row items-center bg-[var(--navbar-color-first)] p-2.5 w-full h-[60px] absolute top-0 left-0 border-b-[10px] -z-1 ">
        <div className="flex flex-row items-center gap-2 justify-start ">
          <img className="w-[30px] h-[30px]" src={logo} alt="logo" />
          <div className="text-white">Oinride®</div>
          <div className="text-[var(--navbar-color-third)] text-[10px] ml-1 font-bold">
            ControWire®
          </div>
        </div>
        <div className="relative flex flex-row top-0 items-center justify-start mt-3  ml-auto main-section">
          <section className="flex flex-row border-bottom  bg-[var(--navbar-color-second)] gap-3 p-1.5 skew-x-12 rounded-bl-lg absolute top-0  width-section1 pl-4">
            <div className="flex flex-col items-center justify-center gap-1 ">
              <div className="text-white opacity-[.60]">Distance</div>
              <div className="text-white">2.456 m</div>
            </div>
            <div className="flex flex-col items-center justify-center gap-1 bg-[var(--navbar-color-second)]">
              <div className="text-white opacity-[.60]">Running</div>
              <div className="text-white">2h 34m</div>
            </div>
          </section>
          <section className="flex flex-row border-bottom bg-[var(--navbar-color-third)] skew-x-12 rounded-bl-lg gap-3 p-1.5 h-[70px] absolute width-section2 top-0 left-[160px] z-10">
            <div className="flex flex-col items-center justify-center gap-1 ">
              <div className="text-white opacity-[.60] ">Latitude</div>
              <div className="text-white">60°16'58" N</div>
            </div>
          </section>
          <section className="trapezoid gap-3 border-bottom p-1.5 top-0 left-[280px] width-section3 z-20 ">
            <div className="flex flex-col items-center justify-center gap-1 ">
              <div className="text-white opacity-[0.60] z-10">STATUS</div>
              <button className=" button trapezoid-botton text-white p-1.5 cursor-pointer">
                <span className="z-10 font-bold">OK</span>
              </button>
            </div>
          </section>
          <section className="flex flex-row border-bottom justify-center  bg-[var(--navbar-color-third)] -skew-x-12 rounded-br-lg absolute width-section2 gap-3 p-1.5 top-0 left-[350px] h-[70px] z-10">
            <div className="flex flex-col items-center justify-center gap-1 ">
              <div className="text-white opacity-[.60]">Longitude</div>
              <div className="text-white">25°01'96" E</div>
            </div>
          </section>
          <section className="flex flex-row border-bottom bg-[var(--navbar-color-second)] pl-4 -skew-x-12 gap-3 p-1.5 rounded-br-lg width-section1 absolute top-0 left-[460px] ">
            <div className="flex flex-col items-center justify-center gap-1 ">
              <div className="text-white opacity-[.60]">Elevation</div>
              <div className="text-white">127 m</div>
            </div>
            <div className="flex flex-col items-center justify-center gap-1 bg-[var(--navbar-color-second)]">
              <div className="text-white opacity-[.60]">Temperature</div>
              <div className="text-white">21 °C</div>
            </div>
          </section>
        </div>
        <div className="flex flex-row items-center gap-5 justify-center ml-auto">
          <div className="relative cursor-po">
            <IoNotificationsOutline className="h-6 w-6 text-white font-bold" />
            <div className="flex items-center justify-center border-2 bg-red-600 w-1 h-1 text-white text-[13px] p-2 rounded-full absolute -top-1 -right-1 border-none z-10">
              2
            </div>
          </div>
          <HiSignal className="h-6 w-6 text-white" />
          <div className="flex flex-col h-5 items-center justify-center ">
            <img
              alt="battery icon"
              src={battery}
              className="w-7 h-7 text-white "
            />
            <div className="text-white text-[12px]">89%</div>
          </div>
          <div className="flex flex-col w-auto items-end justify-center ">
            <div className="text-white text-[10px] ">Wed, 26 Feb</div>
            <div className="text-white text-[10px]">23:58</div>
          </div>
        </div>
      </div>
    </section>
  );
};




export default Navbar;
