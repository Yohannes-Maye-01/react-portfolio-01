import React from 'react'
import './Portfolio.css'
import Portfolio1 from '../../assets/portfolio1.jpg'

const Portfolio = () => {
  const Data=[
    {
      id: 1,
      title: "Portfolio",
      GitHub:"alice@example.com" ,
      Demo: "https://cdn.dribbble.com/users/1341208/screenshots/10111206/media/e5dff016bb8d11779c97fb5bac1e142f.jpg"
    },
    {
      id: 2,
      title: "Portfolio",
      GitHub:"alice@example.com" ,
      Demo: "https://cdn.dribbble.com/users/1341208/screenshots/10111206/media/e5dff016bb8d11779c97fb5bac1e142f.jpg"
    },
    {
      id: 3,
      title: "Portfolio",
      GitHub:"alice@example.com" ,
      Demo: "https://cdn.dribbble.com/users/1341208/screenshots/10111206/media/e5dff016bb8d11779c97fb5bac1e142f.jpg"
    },
    {
      id: 4,
      title: "Portfolio",
      GitHub:"alice@example.com" ,
      Demo: "https://cdn.dribbble.com/users/1341208/screenshots/10111206/media/e5dff016bb8d11779c97fb5bac1e142f.jpg"
    },
    {
      id: 5,
      title: "Portfolio",
      GitHub:"alice@example.com" ,
      Demo: "https://cdn.dribbble.com/users/1341208/screenshots/10111206/media/e5dff016bb8d11779c97fb5bac1e142f.jpg"
    },
    {
      id: 6,
      title: "Portfolio",
      GitHub:"alice@example.com" ,
      Demo: "https://cdn.dribbble.com/users/1341208/screenshots/10111206/media/e5dff016bb8d11779c97fb5bac1e142f.jpg"
    }
    
  
  ]
  
  return (
    <section id='portfolio' > 
    <div className="container portfolio_container">
     {
Data.map(({id,title,GitHub,Demo})=>{
        return(
          <article className='portfolio_item' key={id}>
          <div className="portfolio_img"><img src={Portfolio1} alt="" /></div>
          <div className="portfolio_info">
            <h3>{title}</h3>
            <div className="portfolio_cta">
              <a href={GitHub}  className="btn">GitHub</a>
              <a href={Demo} className="btn btn-primary">LiveDemo</a>
            </div>
          </div>
          </article>
        )
      })
     }
    
      
    
    </div>

    </section>
  )
}

export default Portfolio