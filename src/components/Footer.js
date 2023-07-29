import { Link } from "react-router-dom"
import { BsFacebook, BsGithub, BsLinkedin } from 'react-icons/bs'


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

        

        <div className="linksdiv">
          <Link to={"https://www.facebook.com/velin.porchev/"}><BsFacebook size={'3rem'}/></Link>
          <Link to={"https://www.linkedin.com/in/velin-porchev-857202283/"}><BsLinkedin size={'3rem'}/></Link>
          <Link to={"https://github.com/VelinP"}><BsGithub size={'3rem'}/></Link>
        </div>

      </div>

    </footer>
    </>

    )
}