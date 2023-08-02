import { Link } from 'react-router-dom'
import {MdSell} from 'react-icons/md'


export const Navbar = ()=>{

    return(

    <nav className='mainnav'>
        <ul className='mainul'>
            <>
            <Link to ="/shoes"><MdSell size={'1.4rem'}/></Link>
            <Link to ="/bags">Bags</Link>
            <Link to ="/shoes">Shoes</Link>
            <Link to ="/watches">Watches</Link>
            </>
        

        </ul>
    </nav>

    )
}