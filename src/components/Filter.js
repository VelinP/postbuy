
export const Filter = (props) =>{

    //all the function for filter , i tried to add them to a seperate file so it doesnt clog this one but i had some trouble with react for some reason trying to
    // render two components at once so i just left them all in here
    const brands = ['Valentino Garavani', 'Prada', 'Balenciaga', 'Rado', 'Tissot', 'Hugo Boss', 'Gucci']

    const discountfilter = () =>{
        props.state(props.static.filter(item => item.discount !== ""))
        
    }
    
    const shopbypricefilter500 = () =>{
        props.state(props.static.filter(item => item.price >= 100 && item.price <=500))
    }

    const shopbypricefilter2000 = () =>{
        props.state(props.static.filter(item => item.price >= 500 && item.price <=2000))

    }

    const shopbypricefilter5000 = () =>{
        props.state(props.static.filter(item => item.price >= 2000 && item.price <=5000))

    }

    const shopbypricefilterabove5000 = () =>{
        props.state(props.static.filter(item => item.price >= 5000))

    }

    const allproductsfilter = () =>{
        props.state(props.static)
    }
    
    const allproductsfiltergucci = () =>{
        props.state(props.static.filter(item => item.brand === 'Gucci'))

    }

    const shopbypricefilterGaravani = () =>{
        props.state(props.static.filter(item => item.brand === 'Valentino Garavani'))

    }

    const shopbypricefilterPrada = () =>{
        props.state(props.static.filter(item => item.brand === 'Prada'))

    }

    const shopbypricefilterBalenciaga =() =>{
        props.state(props.static.filter(item => item.brand === 'Balenciaga'))

    }

 
 

    const shopbypricefilteraboveRado = () =>{
        props.state(props.static.filter(item => item.brand === 'Rado'))

    }

    const shopbypricefilteraboveTissot = () =>{
        props.state(props.static.filter(item => item.brand === 'Tissot'))

    }

    const shopbypricefilteraboveHugo = () =>{
        props.state(props.static.filter(item => item.brand === 'Hugo Boss'))

    }

    const shopbypricefilteraboveother = () =>{
        props.state(props.static.filter(item => !brands.includes(item.brand)))
        //checks the array of brands at the top and filters in all the items not in it
    }

    const shopbypricefilterless500 = () =>{
        props.state(props.static.filter(item => item.price < 100))
        
    }


    return(

        <div className="filterdiv">
            <h1 >Filter</h1>
            <div onClick={discountfilter}>Discount</div>
            <div onClick={allproductsfilter}>Show All Products</div>

            <h1>Filter Price</h1>
            <div onClick={shopbypricefilterless500}>Less than $100</div>
            <div onClick={shopbypricefilter500}>$100 - $500</div>
            <div onClick={shopbypricefilter2000}>$500 - $2000</div>
            <div onClick={shopbypricefilter5000}>$2000 - $5000</div>
            <div onClick={shopbypricefilterabove5000}>Over $5000</div>
            <h1>Filter by Brands</h1>

            <div onClick={allproductsfiltergucci}>Gucci</div>
            <div onClick={shopbypricefilterGaravani}>Valentino Garavani</div>
            <div onClick={shopbypricefilterPrada}>Prada</div>
            <div onClick={shopbypricefilterBalenciaga}>Balenciaga</div>
        
            <div onClick={shopbypricefilteraboveRado}>Rado</div>
            <div onClick={shopbypricefilteraboveTissot}>Tissot</div>
            <div onClick={shopbypricefilteraboveHugo}>Hugo Boss</div>
            <div onClick={shopbypricefilteraboveother}>Other</div>






        </div>

    )
}