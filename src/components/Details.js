import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { items } from "../data";



export const Details = () =>{
    const [currentDetails , setCurrentDetails] = useState({})
    
    const {id} = useParams() 
    const numberid = Number(id)
    const arr = []
    let detailsitem = {}

    //i had some trouble here since i dont use a server and i had to get the correct item with the id from useparams , the code is kindof a mess but it works

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
                    <h1 style={{justifyContent:"left", display:"flex" , textShadow:"1px 1px 2px pink"}}>{currentDetails?.brand}</h1>

                    <div className="detailspricesdiv">
                        <div >${currentDetails?.price}</div>
                        <strike className="discountdiv" style={{justifyContent:"center", display:"flex", color:'red', }}>{currentDetails?.discount}</strike>
                    </div>



                        <p style={{justifyContent:"left", display:"flex"}}>{currentDetails?.stars}</p>
                        <p style={{textShadow:"1px 1px 2px pink"}}>{currentDetails?.model}</p>
                        

                        <p style={{textShadow:"1px 1px 2px pink"}}>{currentDetails?.description}</p>
                        
                        <div className="detailsbuttonsdiv">
                        <button onClick={handlefunc}>Add to cart</button>
                    </div>

                

                </div>

            
            </div>
        </div>
    )
}