import parts from '../../../assets/images/about_us/parts.jpg'
import person from '../../../assets/images/about_us/person.jpg'

const AboutUs = () => {
    return (
        <div className="hero min-h-screen bg-base-200 mt-14 rounded-xl mb-8">
  <div className="hero-content flex-col lg:flex-row">
    <div className='lg:w-1/2 relative'>
    <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
    <img src={parts} className="w-1/2 absolute right-5 top-1/2 border-white border-4  rounded-lg shadow-2xl" />
    </div>
    <div className='lg:w-1/2 px-4'>
        <h3 className='text-red-500 font-bold text-2xl'>About Us</h3>
      <h1 className=" text-5xl font-bold w-3/4">We are qualified and experience in this field</h1>
      <p className="py-6  font-bold text-xl">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <p className="py-6  font-bold text-xl">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-warning">Get More Info</button>
    </div>
  </div>
</div>
    );
};

export default AboutUs;