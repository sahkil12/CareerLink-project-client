import Banner from "./Banner";
import Categories from "./Categories";

const Home = () => {
    return (
        <div className="md:w-11/12 mx-auto py-10">
            <Banner></Banner>
            <Categories></Categories>
        </div>
    );
};

export default Home;