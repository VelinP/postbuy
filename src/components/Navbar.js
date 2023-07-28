import { Link } from 'react-router-dom'
import {FaHome} from 'react-icons/fa'

export const Navbar = ()=>{

    return(

    <nav className='mainnav'>
        <ul className='mainul'>
            <>
            <Link to ="/shoes"><FaHome size={'1.4rem'}/></Link>
            <Link to ="/bags">Bags</Link>
            <Link to ="/shoes">Shoes</Link>
            <Link to ="/watches">Watches</Link>
            <Link to ="/mens">Mens</Link>
            <Link to ="/womens">Womens</Link>
            </>
        
        

        </ul>
    </nav>

    )
}