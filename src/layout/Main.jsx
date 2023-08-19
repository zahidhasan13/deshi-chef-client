import { Outlet } from "react-router-dom";
import Header from "../components/Header"
import Footer from "../components/Footer"

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet/>
            <Footer></Footer>
        </div>
    );
};

export default Main;