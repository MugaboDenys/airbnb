import React from "react"

export default function Card(props) {
    let badgeText
    if(props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online" ) {
         badgeText = "ONLINE" 
    }
    console.log(props.card)
    return (
        
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={`/images/${props.coverImg}`} className="card--image" alt=""/>
            <div className="card--stats">
                <img src="/images/star.png" className="card--star" alt="" />
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}