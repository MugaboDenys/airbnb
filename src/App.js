
import Navbar from './components/Navbar';
import Card from './components/Card';
import data from './data';
import Hero from './components/Hero';

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
            key={card.id}
            {...card}
          />
    )
  })
  // <Hero />
return (
<div>
  <Navbar />
  <Hero/>
  <section className="cards-list">
                {cards}
            </section>
</div>
)
}