import React from 'react'

export default function ShowList({showList}) {
    return (
        <div>
            {showList.map((show)=>{
                return (
                    <p key={showList.id}>{show.name}</p>
                )
            })}
        </div>
    )
}
