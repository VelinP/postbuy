import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { items } from "../data";



export const Details = () =>{
    const [currentDetails , setCurrentDetails] = useState({})
    
    const {id} = useParams() 
    const numberid = Number(id)
    const arr = []
    let detailsitem = {}

    const secretitems = items.map(item => ((Object.values(item))))
    secretitems.map(item => arr.push(item[0]))

    for(let item of arr){
        for(let arritem of item){
            if(arritem.id === numberid){
                detailsitem = arritem
            }
        }
        
    }

    useEffect(()=> {setCurrentDetails(detailsitem)},[])
    
    const handlefunc = () =>{
        alert('This item has been added to your shopping cart')
    }
    
    return(
        <div className="maindetails">
            <div className="detailsDiv">
                <img className="offerimg" src={currentDetails?.img} alt="nothing"/>
                
                
                
                <div className="descdiv">
                    <h1 style={{justifyContent:"left", display:"flex"}}>{currentDetails?.brand}</h1>

                    <div className="detailspricesdiv">
                        <div >${currentDetails?.price}</div>
                        <strike className="discountdiv" style={{justifyContent:"center", display:"flex", color:'red', }}>{currentDetails?.discount}</strike>
                    </div>



                    <p style={{justifyContent:"left", display:"flex"}}>{currentDetails?.stars}</p>
                    <p>{currentDetails?.model}</p>
                    

                    <p>{currentDetails?.description}</p>
                    
                    <div className="detailsbuttonsdiv">
                    <button onClick={handlefunc}>Add to cart</button>
                    </div>

                

                </div>

            
            </div>
        </div>
    )
}