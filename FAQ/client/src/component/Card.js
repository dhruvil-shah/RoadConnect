import { React, useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";

export const Card = (props) => {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };

  return (
    <div className="flex flex-col m-2 p-1 white rounded-xl border-2 border-slate-300 bg-slate-200">
      <div className="flex font-mono align-middle flex-row text-black ">
        <h1 className="ml-4">{props.data.que}</h1>
        <button className=" ml-auto mr-2" onClick={handleClick}>
          <AiFillCaretDown color="black" />
        </button>
      </div>

      <h1
        style={{
          padding:10,
          margin:10,
          borderRadius:10,
          opacity: !show ? "0" : "1",
          transition: "all .2s",
          display: !show ? "none" : "inline",
          background:"white",
          color:"black"
        }}
      >
        {props.data.ans}
      </h1>
      {/* <h1>{props.data.ans}</h1> */}
    </div>
  );
};
