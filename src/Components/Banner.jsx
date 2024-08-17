
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div>
        <div className="hero min-h-screen" style={{backgroundImage: 'url(https://img.freepik.com/premium-photo/headphone-with-audio-spectrum-wave-futuristic-background-music-abstract-backgroundgenerative-ai_218381-14946.jpg)'}}>
  {/* <div className="hero-overlay bg-opacity-20"></div> */}
  <div className="hero min-h-screen  ">
  <div className="hero-content flex justify-around flex-col lg:flex-row-reverse ">
    <div className='px-10  text-center'>
      <h1 className="lg:text-6xl text-4xl text-white font-bold">Enjoy Our <br />Delicious Meal</h1>
      <p className="py-6 text-white w-full">Experience culinary delight with our expertly crafted dishes, made from the freshest ingredients and infused with innovative flavors. Whether you're in the mood for a classic favorite or an adventurous new creation, our menu offers something for everyone.</p>
      <Link to='/all-products'><button className="rounded-2xl bg-orange-600 text-white font-semibold px-5 text-xl py-3">Explore Now</button></Link>
    </div>
  </div>
</div>
</div>
        </div>
    );
};

export default Banner;