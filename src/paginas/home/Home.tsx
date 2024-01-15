import React from 'react';
import './Home.css';
import homelogo from '../../assets/homelogo.jpg'

function Home(){
    return (
        <>
            <h1 className="titulo">Home</h1>
            <img src={homelogo} alt="Imagem Tela Inicial" className="img"/>
        </>
    );
}

export default Home;