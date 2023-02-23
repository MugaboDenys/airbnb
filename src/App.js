import './App.css';
import Navbar from './components/Navbar';
import Card from './components/Card';
import data from './data';

/*
Challenge: Pass props to the Card component and display that data

- img ("katie-zaferes.png")
- rating ("5.0")
- reviewCount (6)
- country (Whatever you want)
- title ("Life Lessons with Katie Zaferes")
- price (136)

*/

export default function App() {
  const cards = data.map(card=>{
    return(
          <Card 
            img = {card.coverImg}
            rating = {card.stats.rating}
            reviewCount= {card.stats.reviewCount}
            country = {card.location}
            title = {card.description}
            price = {card.price}
            openSpots = {card.openSpots}
          />
    )
  })
  // <Hero />
return (
<div>
  <Navbar />
  <section className="cards-list">
                {cards}
            </section>
</div>
)
}