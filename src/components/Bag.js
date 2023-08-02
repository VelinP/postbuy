import { Filter } from "./Filter"
import { useState , useEffect} from "react"
import { Card } from "./Card"
import { items } from "../data";
import { Footer } from "./Footer";
import { DropDownSorter } from "./DropDownSorter";


const imagePerRow = 6;


export const Bag = () =>{
    const [content ,setcontent] = useState([])
    const [dropdownactive , setdropdownactive] = useState(false)
    const [staticcontent ,setstaticcontent] = useState([])
    const [showfilter , setshowfilter] = useState(true)

    // setting up states
    useEffect(()=> {setcontent(items[0].bags);setstaticcontent(items[0].bags)},[])

    const [next, setNext] = useState(imagePerRow);
    const handleMoreImage = () => {
        setNext(next + imagePerRow);
      };
    
    // the function i use for the more button
    
    const togglefunc = () =>{
        if(!dropdownactive){
            setdropdownactive(true)
        }else{
            setdropdownactive(false)
        }
    }

    //toggle functions for the two buttons in the middle of the screen , one to toggle the filter on the right and the other for the dropdown menu
    const filtertogglefunc = () =>{
        if(showfilter){
            setshowfilter(false)
        }else{
            setshowfilter(true)
        }
    }

    return(
       
        <>
        <div className="extraassetsdiv">
            <div>
                <button onClick={togglefunc} className="sortbutton">Sort</button>
                <button onClick={filtertogglefunc} className="sortbutton">Filter</button>
            </div>
            <div className="totalnumbersdiv">{content.length} products total in this section</div>

        </div>


        {dropdownactive && <DropDownSorter info={content} state ={setdropdownactive} />}

        <div className="contentdiv">
            {showfilter && <Filter info={content} state={setcontent} static = {staticcontent}/>}
            
                
                {content.length > 0
                
                ?

                <div className="itemcontainerdiv">
                {content?.slice(0, next)?.map(content => <Card info ={content} key={content.id}/>)}
                </div>
                
                :
            
                <h1 className="nocontentdiv">
                    <img src={'https://www.24worldnewslive.com/public/images/videos_not_found.png'} alt="nothing"></img>
                </h1>
                
            }
                
            
        </div>

        <div className="loadmorebuttondiv">

            {next < content?.length && (<button className="morebutton" onClick={handleMoreImage}>Load more</button>)}

        </div>
        <Footer/>
        </>
    )
}