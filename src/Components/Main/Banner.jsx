const Banner = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 lg:px-12">
      <div className="mb-14 mt-10 p-0">
        <div className="hero ">
          <img className="min-h-full" src="https://i.ibb.co/Wt2ktH4/banner.jpg"></img>
          
          <div className="hero-content  text-neutral-content">
            <div className="lg:mx-24 ">
              <h1 className="mb-5 text-2xl lg:text-5xl text-center font-bold">Discover an exceptional cooking class tailored for you!</h1>
              <p className="mb-5 text-center">
              Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.
              </p>
              <div className="flex justify-center">
              <button className="btn btn-primary rounded-3xl mr-11">Explore Now</button>
              <button className="btn bg-gray-400 rounded-3xl">Our Feedback</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
