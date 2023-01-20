import React, { useEffect, useState } from "react";
import { BsFilePlusFill } from "react-icons/bs";
import { showData, addData } from "../crud/manage";
import { Card } from "./Card";
import {MdCancel} from 'react-icons/md'

export const Main = () => {
  const [data, setData] = useState([]);
  const [blur, setBlur] = useState(false);
  const [values,setValues]=useState({
    que:"",
    ans:""
  });
  useEffect(() => {
    const resp = showData();
    resp
      .then((doc) => {
        setData(doc);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [data]);
  const addQA = () => {
    setBlur(!blur);

  };
  const addBtn = () => {
    setBlur(!blur);
  };
  const addNewData=(e)=>{
    e.preventDefault();
      const doc={
        que:values.que,
        ans:values.ans
      }
      addData(doc).then((result) => {
        console.log(result);
        setBlur(!blur);
      }).catch((err) => {
        console.log(err);
      });;

  }
  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  return (
    <>
      {blur ? (
        <div className="p-5 fixed bg-pink-100 left-0 right-0 mx-auto rounded-xl top-20 z-10 w-3/4 ">
          <button onClick={()=>{setBlur(!blur)}} className="absolute right-5 "><MdCancel size={25} color="#eb0c77"/></button>
          <form className="m-2">
            <input
              onChange={handleInputChange}
              value={values.que}
              className="m-1 w-3/4 p-2 mx-auto"
              placeholder="Enter Question..."
              name="que"
            ></input>
            <br />
            <textarea
            onChange={handleInputChange}
              value={values.ans}
              className="m-1 p-2 mx-auto w-full"
              placeholder="Enter Answer..."
              name="ans"
            ></textarea>
            <button onClick={addNewData} className="block mx-auto bg-pink-700 p-2 text-white rounded-lg m-2 ">
              Submit
            </button>
          </form>
        </div>
      ) : null}

      <div className="  h-screen text-white ">
        <div
          style={{
            filter: blur ? "blur(2px)" : "blur(0px)",
            marginTop: "2.5rem",
            padding: "2.5rem",
          }}
        >
          {data.map((item) => {
            return <Card data={item} />;
          })}
        </div>
        <button
          onClick={addQA}
          className="fixed float-right right-0 bottom-0 mr-10 mb-10 "
        >
          <BsFilePlusFill size={40} color="#ad1d55" />
        </button>
      </div>
    </>
  );
};
