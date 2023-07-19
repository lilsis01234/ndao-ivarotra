import React from 'react'
import { Link } from 'react-router-dom';
import "./Footer.css";
export default function Footer() {
  return (
    <div>
    <footer className="tout">
    
        <div className="tete">
            <div className="esti">Shopee</div>
                 <div className="para">We demounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of your moment, blinded by desire those who fail weakness.</div>
                 <div className="icone">
                    <Link to="www.facebook.com" className="facebook"><i className="fab fa-facebook"></i></Link>
                    <Link to="#"className="twitter"><i className="fab fa-twitter"></i></Link>
                    <Link to="#" className="pinterest"><i className="fab fa-pinterest"></i></Link>
                    <Link to="#" className="google"><i className="fab fa-google"></i></Link>
                    <Link to="#" className="instagram"><i className="fab fa-instagram"></i></Link>
                </div>

       </div>
    
    
       <div className="ADD" >
        <div className="ADDRESS">ADDRESS <div className="underline"><span></span></div></div>
        <div className="doc">
            <div className="icone1" > 
                <Link to="#" className="GPS"><i className="fa-solid fa-map-location-dot"></i></Link><span>Madagascar Antananarivo</span>
            </div>
          <br></br>
        <div className='blabla' > 
            <Link to="#" className="phone"><i className="fas fa-phone-volume"></i></Link><span> +261 34 20 360 22</span>
        </div>
         <br></br>
        <div> 
            <Link to="#"className="envelope"><i className="fas fa-envelope"></i></Link><span>support@Shoppe.mg</span>
        </div>
       </div>
    </div>
    
    <div className="COU">
        <div className="COURSES">COURSES <div className="underline"><span></span></div></div>
        <br></br>
        <br></br>
               <div>Courses single/team</div>
                <br></br>
                <div>Music</div>
                <br></br>
                <div>Plastic art</div>
                <br></br>
                <div>Drawing lesson</div>
        </div>
        <div className="entete">
            <div className="img">
                <ion-icon name="mail-open-outline"></ion-icon>
            </div>
            <div className="Sub">Newsletter <div className="underline"><span></span></div></div>
        </div>

      
        </footer>   
    </div>
  )
}
