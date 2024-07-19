import "../index.css";

function Home() {
  return (
    <>
      <div className="bgc my-0 pt-10 ">
        <ul className=" navbar  flex  justify-between ">
          <li className="">
            <div className=" justify-start hover:text-purple-900  text-gray-800  items-start mx-10 ml-1 font-semibold font-serif text-3xl cursor-pointer">
              {" "}
              <span className="font-light mr-1">🎧</span>
              hume{" "}
            </div>
          </li>

          <div className="   flex gap-16 text-purple-400   text-lg font-medium">
            <li className="link-hover-effect cursor-pointer  hover:text-purple-300 hover:underline{} ">
              PRODUCTS
            </li>
            <li className="cursor-pointer hover:text-purple-300 text-gray-800 link-hover-effect">
              RESEARCH
            </li>
            <li className="cursor-pointer hover:text-purple-300 link-hover-effect">
              COMPANY{" "}
            </li>
            <li className="hover:text-purple-300 cursor-pointer link-hover-effect">
              DOCS
            </li>
          </div>

          <li className=" mr-5  ">
            <button className="  hover:text-white hover:bg-purple-800     hover:ring-offset-blue-700 hover:ring-offset-2  hover:ring-0 hover:translate-x-2 shadow-2xl[0 0 10px-red]  ring ring-black ring-opacity-20  px-10 py-2  font-serif rounded-full">
              {" "}
              SIGN UP{" "}
            </button>
          </li>
        </ul>

        <div className="box mt-40">
          <div className="text-3xl mr-28 mb-1">Empathic AI to serve </div>
          <div className="text-3xl mb-3 mr-36">human well-being</div>
          <div className="mr-5">
            Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum
            dolor sit amet. Lorem ipsum dolor sit.
          </div>
          <div className="flex justify-between gap-5  ">
            <div className="btn mt-16 ml-0  pr-6 text-sm px-5  bg-black text-gray-300  font-thin font-mono">
              TRY THE DEMO{" "}
            </div>
            <div className="btn mt-16 mr-3 px-3 font-thin font-mono text-gray-800">
              START BUILDING
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
