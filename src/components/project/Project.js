import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, EffectCoverflow, Mousewheel, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.css';

SwiperCore.use([ Pagination, EffectCoverflow, Mousewheel, Autoplay]);

function App() {
  return (
    <>


    <Swiper style={{'--swiper-navigation-color': '#fff','--swiper-pagination-color': '#fff'}}
      speed={600}
      init={"false"}
      loop={true}
      // autoplay={{
      //   "delay": 2500,
      //   "disableOnInteraction": false
      // }}
      parallax={true}
      spaceBetween={20}
      slidesPerView={1}
      centeredSlides={true}
      effect={'coverflow'}
      coverflowEffect={{
        "rotate": 50,
        "stretch": 0,
        "depth": 50,
        "modifier": 1,
        "slideShadows": true
      }}
      mousewheel={true}
      breakpoints={{
        "580": {
          "slidesPerView": 2,
          "spaceBetween": 20,
        }}}

      grabCursor={true}
      pagination= {{"clickable": true }}  className="mySwiper">
    <div slot="container-start" className="parallax-bg"  data-swiper-parallax="-23%"></div>
    <SwiperSlide>
      <div className="swiper-slide slide1">
        <div className="content">
          <div className="title-container">
            <p className="title" data-swiper-parallax="-30%" data-swiper-parallax-scale=".7">EdgeAngel.co</p>
            <p className="date" data-swiper-parallax="-30%" data-swiper-parallax-scale=".7">Février 2021 - Août 2021</p>
          </div>
          <span className="languages" data-swiper-parallax="-20%">JAVASCRIPT SASS PHP PRISMIC</span>
          <span className="caption" data-swiper-parallax="-20%">Prise en charge d'un projet de création d'un blog pour EdgeAngel en tenant compte de ses besoins et de ses contraintes, en utilisant le CMS PRISMIC. <br /> Refonte esthétique du site en utilisant VanillaJS, HTML et CSS..</span>
          <button className="infos"><a href="http://edgeangel.co" target="_blank" rel="noopener noreferrer">Voir le site &#8594;</a></button>
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper-slide slide2">
          <div className="content">
            <div className="title-container">
            <p className="title" data-swiper-parallax="-30%" data-swiper-parallax-scale=".7">danceattitude41.fr</p>
            <p className="date" data-swiper-parallax="-30%" data-swiper-parallax-scale=".7">Octobre 2020</p>
          </div>
            <span className="languages" data-swiper-parallax="-20%">HTML CSS JAVASCRIPT</span>
            <span className="caption" data-swiper-parallax="-20%">Développement du site utilisant HTML / CSS et JavaScript
            <br />Mise en place d'une newsletter en important des données d'un Google spreadsheet <br />
            Veille technologique</span>
            <button className="infos"><a href="http://www.danceattitude41.fr/" target="_blank" rel="noopener noreferrer">Voir le site &#8594;</a></button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper-slide slide3">
          <div className="content">
            <div className="title-container">
            <p className="title" data-swiper-parallax="-30%" data-swiper-parallax-scale=".7">Sport Buddies</p>
            <p className="date" data-swiper-parallax="-30%" data-swiper-parallax-scale=".7">Décembre 2020</p>
          </div>
            <span className="languages" data-swiper-parallax="-20%">RUBY RAILS JAVASCRIPT</span>
            <span className="caption" data-swiper-parallax="-20%">Création d'un réseau social autour du sport</span>
            <button className="infos"><a href="https://github.com/YannTarot/sport-buddies" target="_blank" rel="noopener noreferrer">Code source &#8594;</a></button>
            <button className="infos video"><a href="https://youtu.be/TA8cCRGzXuk?t=478" target="_blank" rel="noopener noreferrer">Voir la présentation YouTube&#8594;</a></button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper-slide slide4">
          <div className="content">
            <div className="title-container">
            <p className="title" data-swiper-parallax="-30%" data-swiper-parallax-scale=".7">Super Mario</p>
            <p className="date" data-swiper-parallax="-30%" data-swiper-parallax-scale=".7">Août 2021</p>
          </div>
            <span className="languages" data-swiper-parallax="-20%">JAVASCRIPT KABOOM.JS</span>
            <span className="caption" data-swiper-parallax="-20%">Création d'un clone de Super Mario Bros. avec le framework Kaboom.js</span>
            <button className="infos"><a href="http://edgeangel.co" target="_blank" rel="noopener noreferrer">Code source &#8594;</a></button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper-slide slide5">
          <div className="content">
            <div className="title-container">
            <p className="title" data-swiper-parallax="-30%" data-swiper-parallax-scale=".7">Floppy Bird</p>
            <p className="date" data-swiper-parallax="-30%" data-swiper-parallax-scale=".7">Juin 2021</p>
          </div>
            <span className="languages" data-swiper-parallax="-20%">SCSS JAVASCRIPT</span>
            <span className="caption" data-swiper-parallax="-20%">Clone du célèbre jeu Flappy Bird en VanillaJS</span>
            <button className="infos"><a href="https://github.com/YannTarot/floppybird" target="_blank" rel="noopener noreferrer">Code source &#8594;</a></button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper-slide slide6">
          <div className="content">
            <div className="title-container">
            <p className="title" data-swiper-parallax="-30%" data-swiper-parallax-scale=".7">César.shopping</p>
            <p className="date" data-swiper-parallax="-30%" data-swiper-parallax-scale=".7"> Août 2020</p>
          </div>
            <span className="languages" data-swiper-parallax="-20%">PHP HTML CSS  JAVASCRIPT</span>
            <span className="caption" data-swiper-parallax="-20%">Alert réassort du site sézane.com</span>
            <button className="infos"><a href="https://github.com/YannTarot/cesar-www" target="_blank" rel="noopener noreferrer">Code source &#8594;</a></button>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
      </>
  );
}

export default App;
