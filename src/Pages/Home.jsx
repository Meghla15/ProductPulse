import Banner from "../Components/Banner";
import PopularItem from "../Components/PopularItem/PopularItem";


const Home = () => {
    return (
        <div className="bg-slate-200">
          <Banner></Banner>
          <PopularItem></PopularItem>
        </div>
    );
};

export default Home;