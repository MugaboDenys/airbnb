import React from "react"

export default function Card({openSpots, location, card, coverImg, rating, reviewCount, title, price}) {
    let badgeText
    if(openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (location === "Online" ) {
         badgeText = "ONLINE" 
    }
    return (
        
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={`/images/${coverImg}`} className="card--image" alt=""/>
            <div className="card--stats">
                <img src="/images/star.png" className="card--star" alt="" />
                <span>{rating}</span>
                <span className="gray">({reviewCount}) • </span>
                <span className="gray">{location}</span>
            </div>
            <p>{title}</p>
            <p><span className="bold">From ${price}</span> / person</p>
        </div>
    )
}