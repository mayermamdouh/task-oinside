// import testImage from "../assets/test.png";
import { VscScreenFull } from "react-icons/vsc";
import { FiZoomIn } from "react-icons/fi";
import { FiZoomOut } from "react-icons/fi";
import { Joystick } from "react-joystick-component";
import { useEffect, useState, useRef } from "react";
import Gauge from "./gauge";
import { FaCar, FaTruck } from "react-icons/fa";

function Home() {
  const [speed, setSpeed] = useState(0.5);

  const videoRef = useRef(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: false })
      .then((stream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      })
      .catch((err) => {
        console.error("Error accessing webcam:", err);
      });
  }, []);

  const toggleFullscreen = () => {
    setIsFullscreen((prev) => !prev);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const simulatedSpeed = (Math.random() * 2).toFixed(2);
      setSpeed(simulatedSpeed);
    }, 1500);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div
        className={`relative ${isFullscreen ? "fixed inset-0 z-50" : "w-[100vw] h-[100vh]"} bg-black -z-50`}
      >
        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted
          className="w-full h-full object-cover rounded-lg shadow-md"
        />
        <button
          onClick={toggleFullscreen}
          className="absolute top-2 right-2 bg-white text-black px-3 py-1 text-xs rounded shadow"
        >
          {isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
        </button>
      </div>
      <button className="absolute text-white text-center w-32 py-2 bg-transparent backdrop-blur-md  top-[100px] left-[20px] border-[5px] rounded-lg border-[var(--border-button-color)] opacity-80 cursor-pointer ">
        MENU
      </button>
      <div className="absolute text-white bg-transparent backdrop-blur-md w-32 left-[20px] top-[200px] border-[5px] rounded-lg border-[var(--border-button-color)] opacity-80">
        <div className="grid grid-rows-3 divide-y-1 divide-gray-900">
          <div className="flex flex-row h-10 items-center justify-center gap-2  w-[100%] cursor-pointer">
            <button className="flex flex-col w-[70%] items-center text-[12px] font-bold cursor-pointer">
              Auto
            </button>
            <div className="flex flex-col mb-7 w-[30%] items-center  ">
              {Array.from({ length: 5 }).map((_, index) => (
                <div
                  className="flex flex-row h-[4px] text-gray-500 "
                  key={index}
                >
                  <div>.</div>
                  <div>.</div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-row h-10 items-center justify-center gap-2  w-[100%] cursor-pointer">
            <button className="flex flex-col w-[70%] items-center text-[12px] font-bold cursor-pointer">
              Semi-Auto
            </button>
            <div className="flex flex-col mb-7 w-[30%] items-center ">
              {Array.from({ length: 5 }).map((_, index) => (
                <div
                  className="flex flex-row h-[4px] text-gray-500"
                  key={index}
                >
                  <div>.</div>
                  <div>.</div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-row h-10 items-center justify-center gap-2  w-[100%] cursor-pointer">
            <button className="flex flex-col w-[70%] items-center text-[12px] font-bold cursor-pointer">
              Manual
            </button>
            <div className="flex flex-col mb-7 w-[30%] items-center ">
              {Array.from({ length: 5 }).map((_, index) => (
                <div
                  className="flex flex-row h-[4px] text-yellow-400 font-bold "
                  key={index}
                >
                  <div>.</div>
                  <div>.</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute text-white bg-transparent backdrop-blur-md w-[70px] left-[20px] top-[350px] border-[5px] rounded-lg border-[var(--border-button-color)] opacity-80">
        <div className="grid grid-rows-3 divide-y-1 divide-gray-900">
          <div className="flex flex-row h-10 items-center justify-center gap-2  w-[100%] cursor-pointer">
            <button className="flex flex-col w-[70%] items-center text-[12px] font-bold cursor-pointer">
              2x
            </button>
            <div className="flex flex-col mb-7 w-[30%] items-center ">
              {Array.from({ length: 5 }).map((_, index) => (
                <div
                  className="flex flex-row h-[4px] text-gray-500 "
                  key={index}
                >
                  <div>.</div>
                  <div>.</div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-row h-10 items-center justify-center gap-2  w-[100%] cursor-pointer">
            <button className="flex flex-col w-[70%] items-center text-[12px] font-bold cursor-pointer">
              1x
            </button>
            <div className="flex flex-col mb-7 w-[30%] items-center ">
              {Array.from({ length: 5 }).map((_, index) => (
                <div
                  className="flex flex-row h-[4px] text-gray-500"
                  key={index}
                >
                  <div>.</div>
                  <div>.</div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-row h-10 items-center justify-center gap-2  w-[100%] cursor-pointer">
            <button className="flex flex-col w-[70%] items-center text-[12px] font-bold cursor-pointer">
              0.5x
            </button>
            <div className="flex flex-col mb-7 w-[30%] items-center ">
              {Array.from({ length: 5 }).map((_, index) => (
                <div
                  className="flex flex-row h-[4px] text-yellow-400 font-bold "
                  key={index}
                >
                  <div>.</div>
                  <div>.</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute text-white bg-transparent backdrop-blur-md w-32 right-[20px] top-[200px] border-[5px] rounded-lg border-[var(--border-button-color)] opacity-80">
        <div className="fgrid grid-rows-3 divide-y-1 divide-gray-900">
          <div className="flex flex-row h-10 items-center justify-center gap-2  w-[100%] cursor-pointer">
            <div className="flex flex-col mb-7 w-[30%] items-center cursor-pointer">
              {Array.from({ length: 5 }).map((_, index) => (
                <div
                  className="flex flex-row h-[4px] text-gray-500 "
                  key={index}
                >
                  <div>.</div>
                  <div>.</div>
                </div>
              ))}
            </div>
            <button className="flex flex-col w-[70%] items-center text-[12px] font-bold cursor-pointer">
              Light
            </button>
          </div>

          <div className="flex flex-row h-10 items-center justify-center gap-2  w-[100%] cursor-pointer">
            <div className="flex flex-col mb-7 w-[30%] items-center cursor-pointer">
              {Array.from({ length: 5 }).map((_, index) => (
                <div
                  className="flex flex-row h-[4px] text-gray-500"
                  key={index}
                >
                  <div>.</div>
                  <div>.</div>
                </div>
              ))}
            </div>
            <button className="flex flex-col w-[70%] items-center text-[12px] font-bold cursor-pointer">
              Spot Light
            </button>
          </div>
          <div className="flex flex-row h-10 items-center justify-center gap-2  w-[100%] cursor-pointer">
            <div className="flex flex-col mb-7 w-[30%] items-center cursor-pointer">
              {Array.from({ length: 5 }).map((_, index) => (
                <div
                  className="flex flex-row h-[4px] text-yellow-400 font-bold "
                  key={index}
                >
                  <div>.</div>
                  <div>.</div>
                </div>
              ))}
            </div>
            <button className="flex flex-col w-[70%] items-center text-[12px] font-bold cursor-pointer">
              Laser
            </button>
          </div>
        </div>
      </div>
      <div className="absolute text-white bg-transparent backdrop-blur-md w-[70px] right-[20px] top-[350px] border-[5px] rounded-lg border-[var(--border-button-color)] opacity-80">
        <div className="grid grid-rows-3 divide-y-1 divide-gray-900 ">
          <div className="flex flex-row h-10 items-center justify-center gap-2  w-[100%] cursor-pointer">
            <button className="flex flex-col w-[70%] items-center text-[12px] font-bold cursor-pointer">
              <VscScreenFull className="w-5 h-5" />
            </button>
          </div>

          <div className="flex flex-row h-10 items-center justify-center gap-2  w-[100%] cursor-pointer">
            <button className="flex flex-col w-[70%] items-center text-[12px] font-bold cursor-pointer">
              <FiZoomIn className="w-5 h-5" />
            </button>
          </div>
          <div className="flex flex-row h-10 items-center justify-center gap-2  w-[100%] cursor-pointer">
            <button className="flex flex-col w-[70%] items-center text-[12px] font-bold cursor-pointer">
              <FiZoomOut className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
      <button className="absolute text-white text-center  w-32 py-2 bg-red-800 opacity-80 backdrop-blur-md top-[100px] right-[20px] border-[5px] rounded-lg border-[var(--border-button-color)] cursor-pointer ">
        STOP
      </button>
      <div className="absolute flex items-center justify-center text-white text-center top-[600px] left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center justify-center">
          <div className="text-white text-5xl font-bold">{speed}</div>
          <div className="text-white text-[17px]">m/s</div>
        </div>
        <div className="absolute text-white bg-transparent backdrop-blur-md w-80 border-[5px] top-[90px] rounded-lg border-[var(--border-button-color)] opacity-80">
          <div className="grid grid-cols-3 divide-x-1 divide-gray-900">
            <div className="flex flex-col h-10 items-center justify-center  w-[100%] cursor-pointer">
              <div className="flex flex-col h-[30%] ml-8 items-center rotate-90 cursor-pointer">
                {Array.from({ length: 5 }).map((_, index) => (
                  <div
                    className="flex flex-row h-[4px] text-gray-500"
                    key={index}
                  >
                    <div>.</div>
                    <div>.</div>
                  </div>
                ))}
              </div>
              <button className="flex flex-col w-[70%] items-center text-[12px] font-bold cursor-pointer">
                3D Map
              </button>
            </div>

            <div className="flex flex-col h-10 items-center justify-center w-[100%] cursor-pointer">
              <div className="flex flex-col ml-8 h-[30%] items-center rotate-90 cursor-pointer">
                {Array.from({ length: 5 }).map((_, index) => (
                  <div
                    className="flex flex-row h-[4px] text-yellow-400 font-bold"
                    key={index}
                  >
                    <div>.</div>
                    <div>.</div>
                  </div>
                ))}
              </div>
              <button className="flex flex-col w-[70%] items-center text-[12px] font-bold cursor-pointer">
                Camera
              </button>
            </div>
            <div className="flex flex-col h-10 items-center justify-center w-[100%] cursor-pointer">
              <div className="flex flex-col ml-8 rotate-90 h-[30%] items-cente cursor-pointerr">
                {Array.from({ length: 5 }).map((_, index) => (
                  <div
                    className="flex flex-row h-[4px] text-gray-500 font-bold"
                    key={index}
                  >
                    <div>.</div>
                    <div>.</div>
                  </div>
                ))}
              </div>
              <button className=" flex flex-col w-[70%] items-center text-[12px] font-bold cursor-pointer">
                2D Map
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute flex items-center justify-center border-2 bg-transparent backdrop-blur-xs rounded-full  white-shadow top-[540px] right-[50px]">
        <Joystick
          size={140} //
          throttle={100}
          baseColor="rgba(121, 121, 121, 0.6)"
          stickColor="#111827"
          // move={handleMove1}
        />
      </div>
      <div className="absolute flex items-center justify-center border-2 bg-transparent backdrop-blur-md rounded-full  white-shadow top-[540px] left-[50px]">
        <Joystick
          size={140}
          throttle={100}
          baseColor="rgba(121, 121, 121, 0.6)"
          stickColor="#111827"
          // move={handleMove1}
        />
      </div>
      <div className="absolute top-[130px] flex flex-row left-1/2 transform -translate-x-1/2 gap-3">
        <Gauge value={5} label=" " icon={<FaCar />} />
        <Gauge value={35} label="NE" icon={null} />
        <Gauge value={10} label=" " icon={<FaTruck />} />
      </div>
    </>
  );
}

export default Home;
