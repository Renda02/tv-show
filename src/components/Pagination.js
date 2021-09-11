import React from 'react'

function Pagination({showPerPage, totalShows, paginate}) {
    const pageNumbers= [];

for ( let i =1; i<= Math.ceil(totalShows/ showPerPage); i++){
pageNumbers.push(i);
}


    return (
        <div>
            <nav> 
                <ul className="paginate-list">
                {pageNumbers.map((number,i)=>{
                    return <li key={i} className="pagination-list">
                        <a onClick={() => paginate(number)} href='/' className='page-link'>
              {number}
            </a>
                    </li>
                })}
            </ul></nav>
           
        </div>
    )
}

export default Pagination
