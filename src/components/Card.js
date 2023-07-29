import { Link } from "react-router-dom"
import cart from '../images/cart.png'

export const Card = (props) =>{
    
    const buyFunc = (e) =>{
        alert("Item successfully added to cart")
    }
    
    return(

        
    <div className="homepagecardheader">
        <Link to={`/offers/${props.info.id}/details`} ><img className="homepagecardimg" src={props.info.img} alt='nothing'></img></Link>
        <div className="homepagecardbody">
            <div style={{justifyContent:"center", display:"flex"}}>{props.info.model}</div>
            <div style={{justifyContent:"center", display:"flex", color:'green'}}>{props.info.price}</div>
            <div style={{justifyContent:"center", display:"flex"}}>{props.info.stars}</div>
            {/* <div style={{justifyContent:"center", display:"flex" , paddingBottom:"20px"}}><button onClick={buyFunc} img src={cart} alt="Image">Buy</button></div> */}

        </div>
        

    </div>


    )
}


