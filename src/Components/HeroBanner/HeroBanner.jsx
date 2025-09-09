import HeroBannerImg from '../../assets/images/herobanner-img.png';
import CommonButton from '../CommonButton/CommonButton'; 


export default function HeroBanner() {
  return (
    <div>
        <img src={HeroBannerImg} alt="Hero Banner" />
        <CommonButton href="https://remotecleanacademy.com/privacy-policy/" text="test" variant="borderbtn" />
    </div>
  );
}