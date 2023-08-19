import { useEffect, useState } from "react";
import Chef from "./chef";

const Chefs = () => {
  const [chefs, setChefs] = useState([]);

  useEffect(() => {
    fetch("https://deshi-chef-server-durdantozahid-gmailcom.vercel.app/chef")
      .then((res) => res.json())
      .then((data) => setChefs(data));
  }, []);
  return (
    <section className="bg-white">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl font-bold">
            Our <span className="text-green-500">Chef</span>
          </h2>
          <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
            Explore the whole collection of open-source web components and
            elements built with the utility classes from Tailwind
          </p>
        </div>
        <div className="lg:grid lg:grid-cols-3 lg:gap-4">
            {
                chefs.map(chef => 
                    <Chef
                    key = {chef.chefID}
                    chef={chef}
                    ></Chef>
                )
            }
        </div>
      </div>
    </section>
  );
};

export default Chefs;
