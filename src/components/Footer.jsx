import { Link } from "react-router-dom";
import "./Footer.css"

const Footer = () => {
  return (
    <div className="footer">
      <h3>Jupiter Coffee</h3>
      <hr/>
      <div className="footer-text">
        <p>Created by Alex Krenitsky 2024 &#128150;</p>
        <br/>
        <p>Picture credits, in order: 
        <a href="https://unsplash.com/photos/brown-ceramic-teacup-XtUd5SiX464">Jakub Dziubak</a><span>,&nbsp;</span>
        <a href="https://www.pexels.com/photo/paper-bag-on-white-background-12039675/">mockupbee</a><span>,&nbsp;</span>
        <a href="https://unsplash.com/photos/white-ceramic-vase-with-brown-liquid-WiL53RUTDkQ">Mae Mu</a><span>,&nbsp;</span>
        <a href="https://www.pexels.com/photo/glass-bottles-on-white-surface-12039663/">mockupbee</a><span>,&nbsp;</span>
        <a href="https://unsplash.com/photos/four-assorted-spices-mLlM83CsG3I">Mae Mu</a><span>,&nbsp;</span>
        <a href="https://www.pexels.com/photo/a-glass-container-beside-a-stem-eucalyptus-6311830/">Katrin Bolovtsova</a><span>,&nbsp;</span>
        <a href="https://unsplash.com/photos/person-mixing-black-coffee-7RYrEvbqFM8">René Porter</a>
        </p>
      </div>
    </div>
  );
};

export default Footer

