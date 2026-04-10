import React from 'react'
import './portfolio.css'

const data = [
  {
    id: 1,
    image: "https://via.placeholder.com/600x400",
    title: "E-Commerce UI Design Concept",
    desc: "A modern shopping experience focused on clean UI, smooth navigation, and product clarity.",
    github: "#",
    demo: "#"
  },
  {
    id: 2,
    image: "https://via.placeholder.com/600x400",
    title: "Blog Platform UI Layout",
    desc: "A minimal and readable blog interface designed for better content consumption.",
    github: "#",
    demo: "#"
  },
  {
    id: 3,
    image: "https://via.placeholder.com/600x400",
    title: "Food Delivery App UI",
    desc: "Interactive food ordering experience with intuitive user flow and visuals.",
    github: "#",
    demo: "#"
  },
  {
    id: 4,
    image: "https://via.placeholder.com/600x400",
    title: "Hotel Booking Interface",
    desc: "User-friendly booking system with structured layout and smooth UX flow.",
    github: "#",
    demo: "#"
  },
  {
    id: 5,
    image: "https://via.placeholder.com/600x400",
    title: "Photo Gallery UI Concept",
    desc: "Minimal gallery design focusing on visual hierarchy and image presentation.",
    github: "#",
    demo: "#"
  },
  {
    id: 6,
    image: "https://via.placeholder.com/600x400",
    title: "Dashboard UI Design",
    desc: "Clean admin dashboard layout with data visualization and modern UI components.",
    github: "#",
    demo: "#"
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>UI/UX Design Showcase</h5>
      <h2>Selected Works</h2>

      <div className='container portfolio__container'>

        {data.map((d) => {
          return (
            <article className='portfolio__item' key={d.id}>

              <div className="portfolio__item-image">
                <img src={d.image} alt={d.title} />
              </div>

              <div className="portfolio__content">
                <h3>{d.title}</h3>
                <p>{d.desc}</p>

                <div className="portfolio__item-cta">
                  <a href={d.github} className='btn' target='_blank' rel="noopener noreferrer">
                    Case Study
                  </a>
                  <a href={d.demo} className='btn btn-primary' target='_blank' rel="noopener noreferrer">
                    Live Preview
                  </a>
                </div>
              </div>

            </article>
          )
        })}

      </div>
    </section>
  )
}

export default Portfolio