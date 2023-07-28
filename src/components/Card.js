import { Link } from "react-router-dom"
import cart from '../images/cart.png'

export const Card = (props) =>{
    
    const buyFunc = (e) =>{
        alert("Item successfully added to cart")
    }
    
    return(

        
    <div className="homepagecardheader">
        <Link to={`/offers/${props.info._id}/details`} ><img className="homepagecardimg" src={props.info.img} alt='nothing'></img></Link>
        <div className="homepagecardbody">
            {/* <div style={{justifyContent:"left", display:"flex"}}>{props.info.brand} </div> */}
            <div style={{justifyContent:"left", display:"flex"}}>{props.info.price}$</div>
            <div style={{justifyContent:"left", display:"flex"}}>{props.info.model}</div>
            <div style={{justifyContent:"left", display:"flex"}}>{props.info.stars}</div>
            <div style={{justifyContent:"left", display:"flex" , paddingBottom:"20px"}}><button onClick={buyFunc} img src={cart} alt="Image">Buy</button></div>

        </div>
        

    </div>


    )
}


