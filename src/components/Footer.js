import { Link } from "react-router-dom"
import { BsFacebook, BsGithub, BsLinkedin } from 'react-icons/bs'
import { FaPhoneFlip} from 'react-icons/fa'

export const Footer = () =>{
    return(
        <>
    <footer className="footer">

      <div className="footer-left">

        <div className="footerleftdiv">
          <h1>Company</h1>
          <Link>About Us</Link>
          <Link>T&C</Link>
          <Link>Services</Link>

        </div>
      </div>

      <div className="footer-center">

        <div className="footercenterdiv">
            <h1>Help</h1>
            <Link>Contact Us</Link>
            <Link>FAQ</Link>
            <Link>Payment Options</Link>

        </div>

        

      </div>

      

      <div className="footer-right">

        

        <div className="footerrightdiv">
            <h1>Further Info</h1>

            <Link>Find us on the map</Link>
            <Link>FAQ</Link>
            <Link>+359 884690940</Link>

        </div>

      </div>

    </footer>
    </>

    )
}