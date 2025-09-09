import HeroBannerImg from '../../assets/images/herobanner-img.png';

export default function HeroBanner() {
  return (
    <div className='rounded-lg'>
        <img src={HeroBannerImg} alt="Hero Banner" />
    </div>
  );
}