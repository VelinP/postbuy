export const DropDownSorter = (props) =>{
    
    const sortpricefunchighest = () =>{

        props.info.sort((p1, p2) => (p2.price - p1.price));
        props.state(false)
    }

    const sortpricefunlowest = () =>{

        props.info.sort((p1, p2) => (p1.price - p2.price));
        props.state(false)
    }

    const sortalhabeticallyascending = () =>{
        console.log(props.info)
        props.info.sort((a, b) => a.brand.localeCompare(b.brand))
        props.state(false)

        
    }

    const sortalhabeticallydescending = () =>{
        console.log(props.info)
        props.info.sort((a, b) => b.brand.localeCompare(a.brand))
        props.state(false)

        
    }
    
    return(
        <div className="maindropdownmenu">
        <div className="dropdownmenu">
        
                <button onClick={sortpricefunchighest}>Most expensive</button>
                <button onClick={sortpricefunlowest}>Least Expensive</button>
                <button onClick={sortalhabeticallyascending}>Ascending Alphabetically</button>
                <button onClick={sortalhabeticallydescending}>Descending Alphabetically</button>

        </div>

        </div>
    )
}