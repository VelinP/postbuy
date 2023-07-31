export const Filter = (props) =>{
    let oldarr = props.static
    debugger;

    const discountfilter = () =>{
        props.state(oldarr.filter(item => item.discount != ""))
        
    }
    
    const shopbypricefilter500 = () =>{
        props.state(oldarr.filter(item => item.price >= 100 && item.price <=500))
        oldarr = props.static
    }

    const shopbypricefilter2000 = () =>{
        props.state(oldarr.filter(item => item.price >= 500 && item.price <=2000))

    }

    const shopbypricefilter5000 = () =>{
        props.state(oldarr.filter(item => item.price >= 2000 && item.price <=5000))

    }


    const shopbypricefilterabove5000 = () =>{
        props.state(oldarr.filter(item => item.price >= 5000))

    }
    
    return(

        <div className="filterdiv">
            <h1>Filter</h1>
            <button onClick={discountfilter}>Discount</button>
            <h1>Filter Price</h1>
            <button onClick={shopbypricefilter500}>$100 - $500</button>
            <button onClick={shopbypricefilter2000}>$500 - $2000</button>
            <button onClick={shopbypricefilter5000}>$2000 - $5000</button>
            <button onClick={shopbypricefilterabove5000}>$5000 +</button>
         
            




        </div>

    )
}