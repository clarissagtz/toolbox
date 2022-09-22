import React from 'react';
import Header from '../components/Header/Header'
import './Style/Share.css'
import Footer from '../components/Footer/Footer'
import { minHeight, StyledEngineProvider } from '@mui/system';
const Share = () => {
    return (
        <div>
            <header>
                <Header />
            </header>
            <div className='share-container'>
                <h1 className='first-para'>We hope that your experience with our website is execellent so far!</h1>
                <figure className='raccon-img'>
                    <a href="https://medium.com/revellations/what-was-the-best-meme-of-2018-revelle-edition-31b308226acd" target="_blank"><img src={require("../images/ucsd-raccoon.png")} height={250} width={400}/></a>
                    <figcaption>Credit: J. Robertson</figcaption>
                </figure>
                <p className='second-para'>Want to <em style={{fontWeight: 600, color: 'darkorange'}}>share</em> the website with your friends?</p>
                <p className='third-para'>You can copy the link: xxx and send it to your friends!</p>
            </div>
            <footer style={{position:"relative", marginTop:"19vh"}}>
                <Footer />
            </footer>
        </div>
    )
}

export default Share;