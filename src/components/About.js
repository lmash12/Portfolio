import React from 'react'
import Header from './Header'
import Footer from './Footer'

const About = () => {
  return (
    <div className='sec'>
      <header className='header'>
            <Header/>
        </header>
        <main className='About-sec'>
            <div>
              <h1 style={{color: "gray", textAlign: "center"}}>About</h1>
            </div>
            <p style={{fontSize: "20px"}}>
            My name's Lesley, If you're reading this thank you for coming over to my page. I'm a Freelance Front-End Developer currrently situated in Lusaka,Zambia. I love working with ReactJs
            to create dynamic user experiences, i am also competent in VueJs. My goal is to create a platform where i can share my knowledge and help others learn. I'm also a big fan of animations and i love a good puzzle!!
            </p>
            <p>
              <em><b><i>Here are a few technologies I’ve been working with recently:</i></b></em>
              <ol className='ordered-list'>
                <li>
                  <label for='html'>HTML</label>
                  <progress id='html' min="0" max="100" value="90"></progress>
                  </li>
                <li>
                  <label for='css'>CSS</label>
                  <progress id='css' min="0" max="100" value="90"></progress>
                  </li>
                <li>
                  <label for='vue'>VueJs</label>
                  <progress id='vue' min="0" max="100" value="60"></progress>
                  </li>
                <li>
                  <label for='sql'>SQL</label>
                  <progress id='sql' min="0" max="100" value="80"></progress>
                  </li>
                <li>
                  <label for='js'>JavaScript</label>
                  <progress id='js' min="0" max="100" value="60"></progress>
                  </li>  
                <li>
                  <label for='react'>ReactJs</label>
                  <progress id='react' min="0" max="100" value="70"></progress>
                  </li>
              </ol>
            </p>                  
        </main>
        <footer className='footer'>
            <Footer/>
        </footer>
    </div>
  )
}

export default About