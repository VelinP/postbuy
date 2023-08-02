import { Link } from "react-router-dom"

export const Card = (props) =>{
    
    return(
    
    //the card element thats reused to render the items
        
    <div className="homepagecardheader">
        <Link to={`/offers/${props.info.id}/details`} ><img className="homepagecardimg" src={props.info.img} alt='nothing'></img></Link>
        <div className="homepagecardbody">

            <div style={{justifyContent:"center", display:"flex"}}>{props.info.brand}</div>
            <div style={{justifyContent:"center", display:"flex"}}>{props.info.model}</div>
            <div className="pricesdiv">
                <div >${props.info.price}</div>
                <strike className="discountdiv" style={{justifyContent:"center", display:"flex", color:'red', }}>{props.info.discount}</strike>
            </div>
            
            <div style={{justifyContent:"center", display:"flex"}}>{props.info.stars}</div>

        </div>
        

    </div>


    )
}

