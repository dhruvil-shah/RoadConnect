
import { db } from "../db/config";
import { collection, addDoc,getDocs  } from "firebase/firestore";

const queryCollection = collection(db, "queries");
  const addData= async (data) => {
    return await addDoc(queryCollection, data);
  };
  const showData=async()=>{
    const data=await getDocs(queryCollection);
    const resp_json=[]
    data.forEach((doc)=>{
      resp_json.push(doc.data());
    })
    return resp_json
  }

  

export {addData,showData};


