import React from 'react';
import Header from '../components/Header/Header'
import './Style/Contact.css'
import Footer from '../components/Footer/Footer'
const Contact = () => {
    return (
        <div>
            <header>
                <Header />
            </header>
            <section className='contact-container'>
            <div className='credits-header'>
                    <h1>Contact</h1>
                    <hr />
            </div>
            <div className='contact-email'>
                <p className='contact-method'>Email</p>
                <p>cgutierrezgodoy@ucsd.edu</p>
                <p>dshen@ucsd.edu</p>
            </div>
            <div className='contact-instagram'>
                <p className='contact-method'>Instagram</p>
                <p>InstagramName Link</p>
            </div>
            <div className='contact-twitter'>
                <p className='contact-method'>Twitter</p>
                <p>TwitterName Link</p>
            </div>
            </section>
            <footer style={{position:'relative', marginTop:"28vh"}}>
                <Footer />
            </footer>
        </div>
    )
}

export default Contact;