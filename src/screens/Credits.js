import React from 'react';
import Header from '../components/Header/Header'
import './Style/Credits.css'
import Footer from '../components/Footer/Footer'
const Credits = () => {
    return (
        <div>
            <header>
                <Header />
            </header>
            <section className='credits-container'>
                <div className='credits-header'>
                    <h1>Credits</h1>
                    <hr />
                </div>
                <div className='cinfo'>
                    <p className='credits-name'>Clarissa Gutierrez-Godoy</p>
                    <p>Math-CS - Fourth Year - Revelle</p>
                    <p className='credits-email'>Email: cgutierrezgodoy@ucsd.edu</p>
                </div>
                <div className='dinfo'>
                    <p className='credits-name'>Daixi Shen</p>
                    <p>Math-CS - Third Year - Marshall</p>
                    <p className='credits-email'>Email: dshen@ucsd.edu</p>
                </div>
            </section>
            <footer style={{marginTop:"43vh"}}>
                <Footer />
            </footer>
        </div>
    )
}

export default Credits;