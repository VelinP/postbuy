
export const Filter = (props) =>{

    //  all the function for filter , i tried to add them to a seperate file so it doesnt clog this one but i had some trouble with react for some reason trying to
    //  render two components at once so i just left them all in here
    //  The reason i have two states , one for visualizaiton , and the other for static information , is because
    //  i had some issues with filter because it changed the default state so if i filtered it 2-3 times it just didnt show any items after filtering
    //  but with the static state since it never changes i got it to work
    const brands = ['Valentino Garavani', 'Prada', 'Balenciaga', 'Rado', 'Tissot', 'Hugo Boss', 'Gucci']
    return(

        <div className="filterdiv">
            <h1 >Filter</h1>
                <div onClick={()=>{props.state(props.static.filter(item => item.discount !== ""))}}>Discount</div>
                <div onClick={()=>{props.state(props.static)}}>Show All Products</div>

            <h1>Filter Price</h1>
                <div onClick={()=>{props.state(props.static.filter(item => item.price < 100))}}>Less than $100</div>
                <div onClick={()=>{props.state(props.static.filter(item => item.price >= 100 && item.price <=500))}}>$100 - $500</div>
                <div onClick={()=>{props.state(props.static.filter(item => item.price >= 500 && item.price <=2000))}}>$500 - $2000</div>
                <div onClick={()=>{props.state(props.static.filter(item => item.price >= 2000 && item.price <=5000))}}>$2000 - $5000</div>
                <div onClick={()=>{props.state(props.static.filter(item => item.price >= 5000))}}>Over $5000</div>
            <h1>Filter by Brands</h1>

                <div onClick={()=>{props.state(props.static.filter(item => item.brand === 'Gucci'))}}>Gucci</div>
                <div onClick={()=>{props.state(props.static.filter(item => item.brand === 'Valentino Garavani'))}}>Valentino Garavani</div>
                <div onClick={()=>{props.state(props.static.filter(item => item.brand === 'Prada'))}}>Prada</div>
                <div onClick={()=>{props.state(props.static.filter(item => item.brand === 'Balenciaga'))}}>Balenciaga</div>
            
                <div onClick={()=>{props.state(props.static.filter(item => item.brand === 'Rado'))}}>Rado</div>
                <div onClick={()=>{props.state(props.static.filter(item => item.brand === 'Tissot'))}}>Tissot</div>
                <div onClick={()=>{props.state(props.static.filter(item => item.brand === 'Hugo Boss'))}}>Hugo Boss</div>
                <div onClick={()=>{props.state(props.static.filter(item => !brands.includes(item.brand)))}}>Other</div>

        </div>

    )
}