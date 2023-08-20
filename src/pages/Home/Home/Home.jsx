import Chefs from "../../../components/Chefs";
import Hero from "../../../components/Hero/Hero";
import Testimonial from "../../../components/Testimonial";

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Chefs></Chefs>
            <hr />
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;