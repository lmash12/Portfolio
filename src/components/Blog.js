import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Blog = () => {
  return (
    <div className='blog-page'>
      <header className='header'>
            <Header/>
        </header>
        <main className='main-blog'>
            <div className='blog-head'>
              <h1 style={{color: "gray", textAlign: "center"}}>Blog</h1>
            </div>

            <div className='blogEssays'>
                <div className='Essay1'>
                    <article>Two EASY ways to center a div
                      <br/> <p style={{textAlign: "center"}}><a href='https://medium.com/@lesleymashaya/two-ways-to-center-a-div-7cfe13233835' target='_blank' rel='noopener noreferrer'>Learn more</a></p>
                    </article>
                             
                </div>

                <div className='Essay2'>
                <article>Documenting My ReactJs Application
                      <br/> <p style={{textAlign: "center"}}><a style={{color: "black"}} href='https://medium.com/towardsdev/documenting-my-reactjs-application-a397ef97a3d9' target='_blank' rel='noopener noreferrer'>Learn more</a></p>
                    </article>
                </div>

                <div className='Essay3'>
                <article> Writing code at 2am?
                      <br/> <p style={{textAlign: "center"}}><a href='https://medium.com/@lesleymashaya/writing-code-at-2-am-9529c7a29355' target='_blank' rel='noopener noreferrer'>Learn more</a></p>
                    </article>
                </div>

                <div className='Essay4'>
                <article>Will ChatGPT take away my job?
                      <br/> <p style={{textAlign: "center"}}><a href='https://medium.com/@lesleymashaya/will-chatgpt-take-away-my-job-93bb204e2dee' target='_blank' rel='noopener noreferrer'>Learn more</a></p>
                    </article>
                </div>
                
                 
            </div>
        </main>
        <footer className='footer'>
            <Footer/>
        </footer>
    </div>
  )
}

export default Blog