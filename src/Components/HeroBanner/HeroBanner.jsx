import HeroBannerImg from '../../assets/images/herobanner-img.png';



export default function HeroBanner() {
  return (
    <div>
      <h1>Welcome to my app</h1>
        <img src={HeroBannerImg} alt="Hero Banner" />
    </div>
  );
}