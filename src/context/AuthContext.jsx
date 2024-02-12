
import { createContext, useContext, useState } from "react";

const authContext = createContext();
export const ContextProvider = ({ children }) => {
  const [show, setShow] = useState(false);
  const [backet1, setBacket] = useState([]);
  const [like1, setLike] = useState([]);
  const [sale1, setSale] = useState([]);
  const [zakaz1,setZakaz ] = useState([]);
  const [oform1,setOform ] = useState([]);

  //add to backet
  const backet = [...new Set(backet1)];
  const addToBacket = (data) => {
    setBacket((prev) => [...prev, data]);
  };

  //delete to Backet
  const deleteBacket = (id) => {
    setBacket((prev) => prev.filter((user) => user.id !== id));
  };

  //add to like
  const like = [...new Set(like1)];
  const addToLike = (data) => {
    setLike((prev) => [...prev, data]);
  };

  //delete to like
  const deleteLike = (id) => {
    setLike((prev) => prev.filter((user) => user.id !== id));
  };

  //Add to Sale
  const sale = [...new Set(sale1)];
  const addSale = (date) => {
    setSale((prev) => [...prev, date]);
  };

 

  //delete to Sale
  const deleteSale = (id) => {
    setSale((prev) => prev.filter((user) => user.id !== id));
  };

   //Add to Zakaz
   const zakaz = [...new Set(zakaz1)];
   const addZakaz = (date) => {
     setZakaz((prev) => [...prev, date]);
   };
   

   //Add to Oform
   const oform = [...new Set(oform1)];
   const addOform = (date) => {
     setOform((prev) => [...prev, date]);
   };
   
  

  //search
const [searchValue,setSearchValue]=useState("")


const [userValue,setUserValue]=useState({  namer: "",
lname: "",
tel: 998,
date: "",
gender: "",
url:""})

const updateUser =(data)=>{
  setUserValue(prev=>({...prev,data}))
}

  return (
    <authContext.Provider
      value={{
        addToBacket,
        backet,
        like,
        deleteBacket,
        addToLike,
        deleteLike,
        show,
        setShow,
        sale,
        deleteSale,
        addSale,
        searchValue,
        setSearchValue,
        userValue,
        updateUser,
        setUserValue,
        zakaz,
        addZakaz,
        oform,
        addOform
      }}
    >
      {children}
    </authContext.Provider>
  );
};
export const useHook = () => {
  const contex = useContext(authContext);
  if (!contex) {
    throw new Error(" useHook is not define !!!");
  }
  return contex;
};
