import { useParams } from "react-router-dom";
import data from "./data";

function Travel() {
  const params = useParams();
  const id = Number(params.id);
  const details = data.find((item) => item.id === id);

  if (!details) {
    <h1 className="text-center text-5xl font-semibold">
      Pacakge not found...
    </h1>;
  }
  return (
    <div className="mt-20 px-12">
      <h1 className="text-[#bd5757] text-3xl font-semibold">
        {details?.title}
      </h1>

      <div
        className="grid grid-cols-1  md:grid-cols-3 md:grid-rows-3 gap-3 text-black mt-12"
        key={details?.id}
      >
        <div
          className="bg-[#fff] hidden md:grid shadow-xl p-10 rounded-2xl row-span-2"
          style={{
            backgroundImage: `url(${details?.gallery[1]})`,
            backgroundSize: "cover",
          }}
        ></div>
        <div
          className="bg-[#fff] hidden md:block shadow-xl p-5 rounded-2xl col-span-2 row-span-5"
          style={{
            backgroundImage: `url(${details?.gallery[0]})`,
            backgroundSize: "cover",
          }}
        >
          <p className="bg-white hidden md:block bg-opacity-75 p-4 rounded w-1/2 text-xl">
            {details?.title}
            <span className="inline-flex items-center ">
              {/* <img src="images/star.png" alt="star" className="w-4 mr-1 ml-3" /> */}
              <img
                width="24"
                height="24"
                src="https://img.icons8.com/material-sharp/24/FA5252/star--v1.png"
                alt="star--v1"
                className="w-5 mr-1 ml-3"
              />
              <h1 className="text-[#b33e3e] text-lg">
                {details && details.stats.rating} (
                {details && details.stats.reviewCount})
              </h1>
            </span>
          </p>
        </div>
        <div
          className="shadow-xl p-10 rounded-2xl row-span-2"
          style={{
            backgroundImage: `url(${details?.gallery[2]})`,
            backgroundSize: "cover",
          }}
        >
          <div className="p-12 rounded-2xl"></div>
        </div>
      </div>

      <div className=" flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start text-black p-3 mt-8">
        <div className="bg-[#e6e6e6]  max-w-3xl rounded-lg p-3">
          <ul className="  p-3">
            <li className="m-2">• {details?.highlights[0]}</li>
            <li className="m-2">• {details?.highlights[1]}</li>
            <li className="m-2">• {details?.highlights[2]}</li>
            <li className="m-2">• {details?.highlights[3]}</li>
          </ul>

          <div className="flex items-center ">
            <h3 className="ml-3 mx-2 p-2 rounded-md font-semibold bg-[#ffffff] opacity-75 w-fit">
              Duration • {details?.duration}
            </h3>

            <h3 className="ml-3 p-2 rounded-md font-semibold bg-[#ffffff] opacity-75 w-fit">
              Location • {details?.location}
            </h3>
          </div>
        </div>
        <div className="w-60 mt-10 md:mt-0 flex flex-col justify-center items-center rounded-lg p-3 shadow-lg border border-black">
          <h1 className="font-bold text-2xl text-center ">₹{details?.price}</h1>
          <button className="mt-5 w-full py-1 px-3  hover:scale-105 duration-300 bg-[#b33e3e] text-white font-bold mr-10 rounded-full mx-auto">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Travel;
