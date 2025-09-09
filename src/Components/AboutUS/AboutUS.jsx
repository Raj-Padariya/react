import Solidbtn from "../Solidbutton/Solidbtn";
import AboutUSImgone from '../../assets//images/about-img.png';
export default function AboutUS() {
  return (
     <section className="relative py-16 bg-white">
      <div className="container mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div>
          <p className="text-sm font-semibold tracking-wider text-orange-500 uppercase mb-2">
            About Us
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            We Provide <span className="italic">Best Cleaning</span> Service Provider.
          </h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            We are committed to providing top-quality cleaning services tailored to meet the 
            unique needs of our clients. With a dedicated team of professionals, we take pride 
            in delivering thorough, reliable, and eco-friendly cleaning solutions for both 
            residential and commercial spaces at the BEST PRICES. Whether you need a One-Time 
            Deep Clean or ongoing maintenance, our team is equipped with the latest tools and 
            techniques to leave your space spotless and welcoming.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mb-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900">2k+</h3>
              <p className="text-sm text-gray-500">Cleanings</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">500+</h3>
              <p className="text-sm text-gray-500">Happy Clients</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">100%</h3>
              <p className="text-sm text-gray-500">Client Satisfaction</p>
            </div>
          </div>

          {/* Button */}
          <Solidbtn/>
        </div>

        {/* Right Image Section */}
        <div className="relative">
          {/* Background image */}
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src={AboutUSImgone}
              alt="Interior background"
              className="w-full h-[450px] object-cover"
            />
          </div>

          {/* Foreground image */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/4 -translate-y-1/2 w-2/3 rounded-xl shadow-lg overflow-hidden border-4 border-white">
            <img
              src={AboutUSImgone}
              alt="Service preview"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}