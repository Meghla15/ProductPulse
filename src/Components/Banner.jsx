import 'animate.css';

const Banner = () => {
    return (
        <div>
        <div className="hero min-h-screen" style={{backgroundImage: 'url(https://img.freepik.com/premium-photo/headphone-with-audio-spectrum-wave-futuristic-background-music-abstract-backgroundgenerative-ai_218381-14946.jpg)'}}>
  {/* <div className="hero-overlay bg-opacity-20"></div> */}
  <div className="hero min-h-screen  ">
  <div className="hero-content flex justify-around flex-col lg:flex-row-reverse ">
    <div className='px-10  text-center'>
      <h1 className="lg:text-6xl text-4xl text-white font-bold animate__animated animate__swing">Shop Smarter, Live Better</h1>
      <p className="py-6 text-white w-full">Browse through an extensive collection of top-quality products that cater to all your needs. Whether you’re looking for tech gadgets, home essentials, or unique finds, our website offers a seamless shopping experience with unbeatable prices and exceptional service. Find what you need today!</p>
      <button className="rounded-2xl bg-orange-600 text-white font-semibold px-5 text-xl py-3">Explore Now</button>
    </div>
  </div>
</div>
</div>
        </div>
    );
};

export default Banner;