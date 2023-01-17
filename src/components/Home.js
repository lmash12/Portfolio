import React from 'react'
import Footer from './Footer'
import Header from './Header'
import image from './images/image.jpg'
import image1 from './images/proj1.jpg'
import image2 from './images/proj2.png'
import image3 from './images/proj3.png'
import image4 from './images/proj4.jpg'

const Home = () => {
  return (
    <div className='grid-container'>
        <header className='header'>
            <Header/>
        </header>
        <aside className='aside'></aside>
        <main className='main'>
            <div className='overview-content'>
                <div className='overview-card'></div>
            </div>

            <div className='chart-content'>
                <div className='chart'>
                    <h2 style={{textAlign: "center", margin: "10px auto", color: "black"}}>Projects</h2>
                    <div className='projects'>
                        <div className='project'>
                           <img className='image' src={image1} alt='project1'/>
                           <div className='middle'>
                            <div className='text'>
                            <h1 style={{fontSize: "16px", color: "black"}}>GitHub API Fetch App</h1>
                                <p style={{color: "rgb(130, 42, 39)", fontSize: "13px"}}>ReactJs/ JavaScript/ CSS/ HTML</p>
                                <a href='https://project-exam-88dbb.web.app/' target='_blank' rel='noopener noreferrer'>Learn more</a>
                            </div>
                           </div>
                        </div>

                        <div className='project'>
                        <img className='image' src={image2} alt='project 2'/>
                           <div className='middle'>
                            <div className='text'>
                            <h1 style={{fontSize: "16px", color: "black"}}>Portfolio Example</h1>
                            <p style={{color: "rgb(130, 42, 39)", fontSize: "13px"}}>ReactJs</p>
                            <a href='https://mashayalesleyy.web.app/' target='_blank' rel='noopener noreferrer'>Learn more</a>
                            </div>
                           </div>
                        </div>

                        <div className='project'>
                        <img className='image' src={image3} alt='project 2'/>
                           <div className='middle'>
                            <div className='text'>
                            <h1 style={{fontSize: "16px", color: "black"}}>Random User Generator</h1>
                            <p style={{color: "rgb(130, 42, 39)", fontSize: "13px"}}>ReactJs</p>
                            <a href='https://assignment-2-alt-school.web.app/' target='_blank' rel='noopener noreferrer'>Learn more</a>
                            </div>
                           </div>
                        </div>

                        <div className='project'>
                        <img className='image' src={image4} alt='project 2'/>
                           <div className='middle'>
                            <div className='text'>
                                <h1 style={{fontSize: "16px", color: "black"}}>Calculator</h1>
                                <p style={{color: "rgb(130, 42, 39)", fontSize: "13px"}}>ReactJs/CSS</p>
                                <a href='https://068su9.csb.app/' target='_blank' rel='noopener noreferrer'>Learn more</a>
                            </div>
                           </div>
                        </div>

                    </div>
                </div>
                <div className='chart-overview'>
                    <div className='chartImage'>
                    <img className='chartImage' alt='Lesley Mashaya' src={image} style={{borderRadius: "50%", height: "200px", width: "200px"}}/>
                    </div>
                    <h1 style={{textAlign: "center"}}>Who?</h1>
                    <p style={{textAlign: "center"}}>
                    I'm a Freelance Front-End Developer currrently situated in Lusaka, Zambia.
                    I love working with animations, designing creative dynamic user experiences and i love a good puzzle!!
                    </p>
                </div>
            </div>
        </main>
        <footer className='footer'>
            <Footer/>
        </footer>
    </div>
  )
}

export default Home