import { Filter } from "./Filter"
import { useState , useEffect} from "react"
import { Card } from "./Card"
import { items } from "../data";
import { Footer } from "./Footer";

const imagePerRow = 6;


export const Shoes = () =>{
    const [content ,setcontent] = useState([])
    useEffect(()=> {setcontent(items[1].shoes)},[])

    const [next, setNext] = useState(imagePerRow);
    const handleMoreImage = () => {
        setNext(next + imagePerRow);
      };
    
    return(
        <>
        <div className="contentdiv">
            <Filter/>
            {/* {content?.length > 0 ? <div className="testh1">{content?.length}</div> : <h1></h1>} */}

        
            <div className="itemcontainerdiv">
            {/* {content?.map(content => <Card info ={content} key={content.id}/>)} */}
            {content?.slice(0, next)?.map(content => <Card info ={content} key={content.id}/>)}



            </div>
            
        </div>

        <div className="loadmorebuttondiv">

        {next < content?.length && (
            <button className="morebutton"  onClick={handleMoreImage}>Load more</button>)}

        </div>
        <Footer/>
        </>
    )
}