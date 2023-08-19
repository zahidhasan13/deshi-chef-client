import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800">
  <div className="mx-auto max-w-screen-xl text-center">
      <a href="#" className="text-4xl font-semibold text-gray-900 dark:text-white">
          Deshi<span className="text-green-500">Chef</span>    
      </a>
      <p className="my-6 text-gray-500 dark:text-gray-400">Elevating Tastes with Expertise. A Chef's Journey Through Exquisite Flavors, Crafting Memories with Every Perfect Recipe.</p>
      <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
          <li>
              <Link to="/" className="mr-4 hover:underline md:mr-6 ">Home</Link>
          </li>
          <li>
              <Link to="/blog" className="mr-4 hover:underline md:mr-6">Blog</Link>
          </li>
          <li>
              <Link to="/about" className="mr-4 hover:underline md:mr-6 ">About</Link>
          </li>
          <li>
              <Link to="/contact" className="mr-4 hover:underline md:mr-6">Contact</Link>
          </li>
      </ul>
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="#" className="hover:underline">DeshiChef™</a>. All Rights Reserved.</span>
  </div>
</footer>
    );
};

export default Footer;