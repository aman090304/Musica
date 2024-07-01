import { useState, useEffect } from "react";
import { BiSearch } from "react-icons/bi";
import Loader from "./assets/Loader";
import "./App.css";
import Card from "./assets/Card";
function App() {
  const [tracks, setTracks] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function getTracks() {
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://v1.nocodeapi.com/xoolxunt/spotify/SrCbdICLAGUyJobF/search?q=${searchValue}`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data.albums.items);
      // Add safety checks
      if (data && data.albums) {
        setTracks(data.albums.items);
      } else {
        console.error("Unexpected response format:", data);
      }
    } catch (error) {
      console.error("Error fetching tracks:", error);
      setError(error.message);
    }
    setIsLoading(false);
  }

  return (
    <div className="">
      {/* ------------------------HEADER FILES--------------------------- */}
      <div className="fixed z-10">
        <div className="flex flex-row z-10 shadow-sm items-center gap-3 fixed w-full bg-black text-white justify-between">
          <div className="pl-1 md:pl-10 p-4 hover:text-2xl">
            <a href="/" className=" text-xl">
              A-music
            </a>
          </div>
          <div className="p-4 flex ">
            <div className=" flex gap-2 w-40 sm:w-60 md:w-[500px] lg:w-[700px]">
              <input
                type="search"
                placeholder="Search"
                value={searchValue}
                onChange={(event) => {
                  setSearchValue(event.target.value);
                }}
                className="flex px-4 text-black rounded-lg w-40 h-9 sm:w-60 md:w-[500px] lg:w-[700px] focus:border-green-500 "
              ></input>
              <button onClick={getTracks} className=" m-1">
                <BiSearch className="" />
              </button>
            </div>
          </div>
          <div className="  p-4 justify-end flex">
            <a href="/" className="text-lg hover:underline px-2 md:px-5">
              Home
            </a>
            <div className="text-lg border-r-2 border-slate-500" />
            <a href="https://github.com/aman090304/Musica" target="__blank" className="text-lg px-2 hover:underline  md:px-5 ">
              Github
            </a>
          </div>
        </div>
      </div>

      {/* <div className="flex justify-center font-semibold text-5xl pt-28 pb-5">
        <h1>A-music</h1>
      </div> */}
      <div class="flex justify-center font-semibold text-5xl pt-28 pb-5">
        <div class="">
          <h1 class=" animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-black pr-5 text-5xl text-black font-semibold">
            A-music
          </h1>
        </div>
      </div>

      {/* ---------------------- MAIN ------------------------ */}

      <div
        className={`px-2 sm:px-8 md:px-12 lg:px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 overflow-x-hidden  ${
          isLoading && searchValue ? "p-4" : "hidden"
        }`}
      >
        <Loader />
        <Loader />
        <Loader />
        <Loader />
        <Loader />
        <Loader />
        <Loader />
        <Loader />
      </div>

      <div className="px-2 py-2 sm:px-8 md:px-12 lg:px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 overflow-x-hidden">
        {tracks.map((element) => (
          <Card
            className=""
            date={element.release_date}
            name={element.name}
            key={element.id} // Ensure to provide a unique key for each element
            img={element.images[1]?.url} // Use optional chaining in case images array is empty
            title={element.artists[0]?.name} // Ensure artists is an array
            music={element.uri}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
