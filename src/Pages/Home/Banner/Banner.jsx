 import bannerImg1 from '../../../assets/images/banner/1.jpg'
 import bannerImg2 from '../../../assets/images/banner/2.jpg'
 import bannerImg3 from '../../../assets/images/banner/3.jpg'
 import bannerImg4 from '../../../assets/images/banner/4.jpg' 

const Banner = () => {
    return (
        <div className="carousel w-full mt-10">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={bannerImg1} className="w-full rounded-xl" />
    <div className="absolute flex items-center h-full left-0 top-0 rounded-xl justify-start bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
       <div className='w-1/2 pl-16'>
        <h2 className='text-white text-7xl font-bold'>Affordable Price For Car Servicing</h2>
        <p className='text-white mt-8 text-xl'>There are Many Variations Of Passeges of available, But The majority have suffered alteration in some Form</p>

        <div className='mt-8'>
        <button className="btn bg-red-600 border-none mr-6">Discover More</button>
        <button className="btn btn-outline btn-error">Latest Package</button>
        </div>
       </div>
    </div>

    <div className="absolute flex  justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide4" className="btn btn-circle mr-5">❮</a> 
      <a href="#slide2" className="btn border-none btn-circle bg-red-700">❯</a>
    </div>

  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={bannerImg2} className="w-full" />
    <div className="absolute flex  justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide1" className="btn btn-circle mr-5">❮</a> 
      <a href="#slide3" className="btn border-none btn-circle bg-red-700">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={bannerImg3} className="w-full" />
    <div className="absolute flex  justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide2" className="btn btn-circle mr-5">❮</a> 
      <a href="#slide4" className="btn border-none btn-circle bg-red-700">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src={bannerImg4} className="w-full" />
    <div className="absolute flex  justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide3" className="btn btn-circle mr-5">❮</a> 
      <a href="#slide1" className="btn border-none btn-circle bg-red-700">❯</a>
    </div>
  </div>
</div>
    );
};

export default Banner;