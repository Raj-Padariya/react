import HeroBannerImg from '../../assets/images/herobanner-img.png';
import Solidbtn from '../Solidbutton/Solidbtn'; 


export default function HeroBanner() {
  return (
    <div>
        <img src={HeroBannerImg} alt="Hero Banner" />
        <Solidbtn href="https://remotecleanacademy.com/privacy-policy/" text="test" variant="borderbtn" />
    </div>
  );
}