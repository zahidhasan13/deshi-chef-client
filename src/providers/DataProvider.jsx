/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

export const DataContext = createContext(null);

const DataProvider = ({children}) => {
    const [chefs, setChefs] = useState([]);

  useEffect(() => {
    fetch("https://deshi-chef-server-durdantozahid-gmailcom.vercel.app/chef")
      .then((res) => res.json())
      .then((data) => setChefs(data));
  }, []);


    const dataInfo = {chefs}
    return (
        <DataContext.Provider value={dataInfo}>
            {children}
        </DataContext.Provider>
    );
};

export default DataProvider;