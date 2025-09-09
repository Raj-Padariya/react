import HeroBannerImg from '../../assets/images/herobanner-img.png';

export default function HeroBanner() {
  return (
    <div>
        <img src={HeroBannerImg} alt="Hero Banner" />
        <h1 className="text-4xl font-bold mt-4">Welcome to Our Cleaning Service</h1>
        <p className="mt-2 text-lg text-gray-600">
            We provide top-notch cleaning services for your home and office.
        </p>
    </div>
  );
}