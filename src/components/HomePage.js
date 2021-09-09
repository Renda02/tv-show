import React, {useState, useEffect} from 'react'

function HomePage() {
const [ searchShow, setSearchShow]= useState("");
const [showList, setProductList] = useState([]);

useEffect(() => {
   
}, [searchShow])


function searchValue(e){
    e.preventDefault();
}

function findShow(e){
    setSearchShow(e.target.value);
}

    return (
        <div>
            <h1> Favorite Shows</h1>
           <form>
               <input type="text" onChange={findShow} placeholder="Search your favorite" value={searchShow}/>
               <button onClick={searchValue}/>
           </form>
        </div>
    )
}

export default HomePage
