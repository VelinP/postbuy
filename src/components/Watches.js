import { Filter } from "./Filter"
import { useState , useEffect} from "react"
import { Card } from "./Card"

const imagePerRow = 6;

export const Watches = () =>{
    const items = 
    [{ 
        brand : 'Rado',
        price: '10000$ (20% discount)', 
        img : 'https://d1rkccsb0jf1bk.cloudfront.net/products/100051806/main/large/master.jpg',
        model: 'Mens Rado Hyperchrome Chronograph Watch',
        stars: '⭐⭐⭐☆☆',
        id : 1,
    },

    { 
        brand : 'Maurice Lacroix',
        price: '1020$', 
        img : 'https://d1rkccsb0jf1bk.cloudfront.net/products/100052295/main/large/AI6008-SS00F-530-E_AIKON_ORANGE_43mm_ExtraStrap.jpg',
        model: 'Mens Maurice Lacroix Aikon Automatic Summer',
        stars: '⭐⭐⭐⭐⭐',
        id : 2
    },

    { 
        brand : 'Maurice Lacroix',
        price: '10$', 
        img : 'https://d1rkccsb0jf1bk.cloudfront.net/products/100052296/main/medium/AI6007-SS00F-431-C_AIKON_TURQUOISE_39mm_ExtraStrap.jpg',
        model: 'Maurice Lacroix Aikon Automatic Summer Edition Set',
        stars: '⭐☆☆☆☆',
        id : 3
    },

    { 
        brand : 'Tissot',
        price: '1020$', 
        img : 'https://d1rkccsb0jf1bk.cloudfront.net/products/100051350/main/large/T137_407_11_351_00.jpg',
        model: 'Mens Tissot PRX Watch',
        stars: '⭐⭐⭐☆☆',
        id : 4,

        
    },

    {
        brand : 'Mens Certina',
        price: '1020$', 
        img : 'https://d1rkccsb0jf1bk.cloudfront.net/products/100051337/main/medium/C032.430.18.041.01_SLD.jpeg',
        model: 'Mens Certina DS Action Day-Date Blue',
        stars: '⭐⭐⭐☆☆',
        id : 5
    },

    {
        brand : 'Boss',
        price: '1020$', 
        img : 'https://d1rkccsb0jf1bk.cloudfront.net/products/100032735/main/large/1513767_LRG_rgb_Web.jpg',
        model: 'Boss Hero Sport Lux Watch',
        stars: '⭐⭐⭐☆☆',
        id : 6
    },

    {
        brand : 'Bulova Octava',
        price: '1020$', 
        img : 'https://d1rkccsb0jf1bk.cloudfront.net/products/100039564/main/medium/98C133.jpg',
        model: 'Unisex Bulova Octava Automatic Automatic Watch',
        stars: '⭐⭐⭐☆☆',
        id : 7
    },
    { 
        brand : 'Rado',
        price: '10000$ (20% discount)', 
        img : 'https://d1rkccsb0jf1bk.cloudfront.net/products/100051806/main/large/master.jpg',
        model: 'Mens Rado Hyperchrome Chronograph Watch',
        stars: '⭐⭐⭐☆☆',
        id : 1,
    },

    { 
        brand : 'Maurice Lacroix',
        price: '1020$', 
        img : 'https://d1rkccsb0jf1bk.cloudfront.net/products/100052295/main/large/AI6008-SS00F-530-E_AIKON_ORANGE_43mm_ExtraStrap.jpg',
        model: 'Mens Maurice Lacroix Aikon Automatic Summer',
        stars: '⭐⭐⭐⭐⭐',
        id : 2
    },

    { 
        brand : 'Maurice Lacroix',
        price: '10$', 
        img : 'https://d1rkccsb0jf1bk.cloudfront.net/products/100052296/main/medium/AI6007-SS00F-431-C_AIKON_TURQUOISE_39mm_ExtraStrap.jpg',
        model: 'Maurice Lacroix Aikon Automatic Summer Edition Set',
        stars: '⭐☆☆☆☆',
        id : 3
    },

    { 
        brand : 'Tissot',
        price: '1020$', 
        img : 'https://d1rkccsb0jf1bk.cloudfront.net/products/100051350/main/large/T137_407_11_351_00.jpg',
        model: 'Mens Tissot PRX Watch',
        stars: '⭐⭐⭐☆☆',
        id : 4,

        
    },

    {
        brand : 'Mens Certina',
        price: '1020$', 
        img : 'https://d1rkccsb0jf1bk.cloudfront.net/products/100051337/main/medium/C032.430.18.041.01_SLD.jpeg',
        model: 'Mens Certina DS Action Day-Date Blue',
        stars: '⭐⭐⭐☆☆',
        id : 5
    },

    {
        brand : 'Boss',
        price: '1020$', 
        img : 'https://d1rkccsb0jf1bk.cloudfront.net/products/100032735/main/large/1513767_LRG_rgb_Web.jpg',
        model: 'Boss Hero Sport Lux Watch',
        stars: '⭐⭐⭐☆☆',
        id : 6
    },

    {
        brand : 'Bulova Octava',
        price: '1020$', 
        img : 'https://d1rkccsb0jf1bk.cloudfront.net/products/100039564/main/medium/98C133.jpg',
        model: 'Unisex Bulova Octava Automatic Automatic Watch',
        stars: '⭐⭐⭐☆☆',
        id : 7
    }
    






    ]
       
    

    const [content ,setcontent] = useState([])
    useEffect(()=> {setcontent(items)},[])
    
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