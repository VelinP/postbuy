export const Filter = (props) =>{
    
    const discountfilter = () =>{
        console.log(props)
        const newarr = props.info.filter(item => item.discount != "");
        console.log(newarr)
        props.state(newarr)
    }
    
    
    
    return(

        <div className="filterdiv">
            <h1>Filter</h1>
            <button onClick={discountfilter}>Discount</button>
            <div>Collection</div>
            <div>Price</div>
            <div>Dial Color</div>
            <div>Shape</div>
            <div>Target Group</div>
            <div>Material</div>
            




        </div>

    )
}