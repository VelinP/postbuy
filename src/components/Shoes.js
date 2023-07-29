import { Filter } from "./Filter"
import { useState , useEffect} from "react"
import { Card } from "./Card"

const imagePerRow = 6;



export const Shoes = () =>{
    const items = 
    [{ 
        brand : 'Gucci',
        price: '10000$ (20% discount)', 
        img : 'https://cdn1.jolicloset.com/imgr/full/2021/07/328744-1/gucci-baskets-ace-shoes-454551-36-it-37-fr-white-leather-sneakers-shoes.jpg',
        model: ' GUCCI JORDAAN LOAFER',
        stars: '⭐⭐⭐☆☆',
        id : 1,
    },

    { 
        brand : 'Armani',
        price: '1020$', 
        img : 'https://i8.amplience.net/t/jpl/jd_product_list?plu=jd_618943_al&qlt=85&exclusive=1&qlt=92&wid=320&hei=320&v=1&fmt=auto',
        model: 'Sneakers X8X119 XK291 R384 Triple Blk/Gold Eobu',
        stars: '⭐⭐⭐⭐⭐',
        id : 2
    },

    { 
        brand : 'Crocs',
        price: '10$', 
        img : 'https://sizeer.bg/media/cache/gallery/rc/yzxas4zf/crocs-classic-crush-clog-damski-chekhli-i-sandali-rozov-207521-6ub.jpg',
        model: 'Generic Crocs',
        stars: '⭐☆☆☆☆',
        id : 3
    },

    { 
        brand : 'Wooden Flip Flops',
        price: '1020$', 
        img : 'https://m.media-amazon.com/images/I/61gvZF5iEUL._AC_UY1000_.jpg',
        model: 'Generic flip flops',
        stars: '⭐⭐⭐☆☆',
        id : 4
    },
    { 
        brand : 'Gucci',
        price: '10000$ (20% discount)', 
        img : 'https://cdn1.jolicloset.com/imgr/full/2021/07/328744-1/gucci-baskets-ace-shoes-454551-36-it-37-fr-white-leather-sneakers-shoes.jpg',
        model: ' GUCCI JORDAAN LOAFER',
        stars: '⭐⭐⭐☆☆',
        id : 1,
    },

    { 
        brand : 'Armani',
        price: '1020$', 
        img : 'https://i8.amplience.net/t/jpl/jd_product_list?plu=jd_618943_al&qlt=85&exclusive=1&qlt=92&wid=320&hei=320&v=1&fmt=auto',
        model: 'Sneakers X8X119 XK291 R384 Triple Blk/Gold Eobu',
        stars: '⭐⭐⭐⭐⭐',
        id : 2
    },

    { 
        brand : 'Crocs',
        price: '10$', 
        img : 'https://sizeer.bg/media/cache/gallery/rc/yzxas4zf/crocs-classic-crush-clog-damski-chekhli-i-sandali-rozov-207521-6ub.jpg',
        model: 'Generic Crocs',
        stars: '⭐☆☆☆☆',
        id : 3
    },

    { 
        brand : 'Wooden Flip Flops',
        price: '1020$', 
        img : 'https://m.media-amazon.com/images/I/61gvZF5iEUL._AC_UY1000_.jpg',
        model: 'Generic flip flops',
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
            <button className="morebutton"  onClick={handleMoreImage}>Load more</button>)}

        </div>
        </>
    )
}