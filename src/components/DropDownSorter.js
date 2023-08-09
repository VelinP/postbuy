
export const DropDownSorter = (props) =>{
    
    return(
        <div className="maindropdownmenu" >
        <div className={'dropdownmenu'}>
        
                <button onClick={()=>{props.info.sort((p1, p2) => (p2.price - p1.price));props.state(false)}}>Most expensive</button>
                <button onClick={()=>{props.info.sort((p1, p2) => (p1.price - p2.price));props.state(false)}}>Least Expensive</button>
                <button onClick={()=>{props.info.sort((a, b) => a.brand.localeCompare(b.brand));props.state(false)}}>Ascending Alphabetically</button>
                <button onClick={()=>{props.info.sort((a, b) => b.brand.localeCompare(a.brand));props.state(false)}}>Descending Alphabetically</button>

        </div>

        </div>
    )
}