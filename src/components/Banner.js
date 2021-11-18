import React from 'react';
import Yann from '../assets/yann.png'
import LetterAnimationBanner from './LetterAnimationBanner';
import Social from './Social';


const Banner = () => {
  return (
<>
  <section className="bannerContainer">

      <img src= {Yann} center="true" cover="true" alt="Yann Tarot" />
      <div className="overlay"></div>

      <div className="text">
        <h5>Yann Tarot</h5>
        <h3><LetterAnimationBanner/></h3>
        <h5>Développeur front-end ReactJS</h5>
        <p>Mordu d'informatique depuis mon plus jeune âge, j'ai commencé le code en BASIC. Après avoir travaillé 10
            ans en tant que prothésiste dentaire j'ai décidé de suivre ma vraie vocation en commençant à coder en
            autodidacte avant de rentrer au Wagon.
            </p>
        <a href="./assets/Yann_Tarot_CV.pdf" target="_blank">Télécharger CV</a>
      </div>
  </section>
    <Social />
</>
  );
};

export default Banner;
