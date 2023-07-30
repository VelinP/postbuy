import { Link } from "react-router-dom"

export const Card = (props) =>{
    
    return(

        
    <div className="homepagecardheader">
        <Link to={`/offers/${props.info.id}/details`} ><img className="homepagecardimg" src={props.info.img} alt='nothing'></img></Link>
        <div className="homepagecardbody">

            <div style={{justifyContent:"center", display:"flex"}}>{props.info.brand}</div>
            <div style={{justifyContent:"center", display:"flex"}}>{props.info.model}</div>
            <div style={{justifyContent:"center", display:"flex", color:'green'}}>${props.info.price}</div>
            <div style={{justifyContent:"center", display:"flex"}}>{props.info.stars}</div>

        </div>
        

    </div>


    )
}


