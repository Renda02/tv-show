import React from 'react'

export default function ShowList({showList}) {
    return (
        <div className="showlist-wrapper">
            <h2 className="showList-title">Shows</h2>
            <ul> {showList.map((show)=>{
                return (
                    <li key={showList.id} className="showlist-name">{show.name}</li>
                )
            })}</ul>
           
        </div>
    )
}
