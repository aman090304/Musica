import React from "react";

function Card(props) {
  return (
    <div className="relative h-full min-h-80">
      <article className=" blur-mdr  bg-white bg-opacity-80 h-full p-6 mb-6 shadow transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer border">
        <div className="relative mb-4 rounded-2xl">
          <img
            className="max-h-80 rounded-2xl w-full object-cover transition-transform duration-300 transform group-hover:scale-105"
            src={props.img}
            alt=""
          />
        </div>
        <div className="flex justify-between items-center w-full pb-4 mb-auto">
          <div className="flex items-center">
            <div className="pr-3">
              <img
                className="h-12 w-12 rounded-full object-cover"
                src={props.img}
                alt=""
              />
            </div>
            <div className="flex flex-1">
              <div className="">
                <p className="text-sm font-semibold ">{props.name}</p>
                <p className="text-sm  text-gray-700 ">
                  Artists: {props.title}
                </p>
                <p className="text-xs text-gray-400">
                  Published on {props.date}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full ">
          <a href={props.music}> Listen Now</a>
        </div>
      </article>
    </div>
  );
}

export default Card;
