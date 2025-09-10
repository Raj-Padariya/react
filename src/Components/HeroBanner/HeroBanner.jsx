import HeroBannerImg from '../../assets/images/herobanner-img.png';

export default function HeroBanner() {
  return (
    <section className='xl:p-7 md:p-5 p-3 !pb-0 '>
        <div className='relative after:absolute after:inset-0 after:bg-gradient-to-b after:from-transparent after:via-black/20 after:to-black/50 after:rounded-xl'>
        <div className='absolute top-1/6 left-1/2 -translate-x-1/2 text-center text-white px-4 z-10'>
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4'>Welcome to Our Service</h1>
            <p className='text-lg md:text-xl mb-6'>Providing top-notch solutions for your needs</p>
            <a href="#get-started" className='inline-block bg-[#E79F56] hover:bg-[#cf7c3a] text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300'>Get Started</a>
        </div>
        <img className='rounded-xl' src={HeroBannerImg} alt="Hero Banner" />
        </div>
    </section>
  );
}