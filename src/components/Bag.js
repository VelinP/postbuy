import { Filter } from "./Filter"
import { useState , useEffect} from "react"
import { Card } from "./Card"

const imagePerRow = 6;


export const Bag = () =>{
    const items = 
    [{ 
        brand : 'Gucci',
        price: '10000$ (20% discount)', 
        img : 'https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1683325843/747372_AAB82_1000_001_100_0000_Light-Gucci-Blondie-large-tote-bag.jpg',
        model: ' GUCCI BLONDIE LARGE TOTE BAG',
        stars: '⭐⭐⭐☆☆',
        id : 1
    },

    { 
        brand : 'Armani',
        price: '100$', 
        img : 'https://gomez.bg/assets/photo/detect/upload/product/603/25-05-10-trim-398-600.jpg.webp',
        model: "Emporio Armani 'REPORTERKA'",
        stars: '⭐⭐☆☆☆',
        id : 2
    },

    { 
        brand : 'Gucci',
        price: '3002$', 
        img : 'https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1685466096/751518_1AAOW_9022_001_085_0000_Light-Gucci-Blondie-small-tote-bag.jpg',
        model: 'GUCCI BLONDIE SMALL TOTE BAG',
        stars: '⭐☆☆☆☆',
        id : 3
    },

    { 
        brand : 'Calvin Klein',
        price: '100$', 
        img : 'https://images.asos-media.com/products/calvin-klein-diagonal-cardholder-in-black/204706274-1-black?$n_640w$&wid=513&fit=constrain',
        model: 'Calvin Klein diagonal cardholder in black',
        stars: '⭐⭐⭐☆☆',
        id : 4
    }




    ]
       
    

    const [content ,setcontent] = useState([])
    useEffect(()=> {setcontent(items)},[])
    console.log(content)

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
            <button className="morebutton" onClick={handleMoreImage}>Load more</button>)}

        </div>
        </>
    )
}