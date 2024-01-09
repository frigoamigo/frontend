import React from 'react';
import people from '../../Pictures/our_team.jpg';
import Heading from '../Heading';

const AboutUs = () => {
  return (
    <div className="container">
      <div className="about-us">
        <div className="about-div flex">
          <div className="about-texts">
            <div className="about-heading">
              <div className="about-heading-web-desktop">
                <Heading heading="О нас" lineWidth="6.5em" lineMargin="1em" />
              </div>
              <div className="about-heading-web-mobile">
                <Heading heading="О нас" lineWidth="2em" lineMargin="1em" />
              </div>
            </div>
            <p className="about-text roundedmplus-400">
              Создатели FrigoAmigo - команда инициативных студентов факультета искусств СПбГУ.
              <br />
              <br />
              Мы сами порой забывали про недолговечность некоторых продуктов (особенно в период
              сессии :D) и устали от необходимости каждый раз выискивать срок годности на упаковке,
              потому решили найти способ упростить быт. Так появился{' '}
              <b style={{ color: '#EC9A29' }}>Frigo Amigo</b> - ваш новый лучший друг :)
            </p>
          </div>
          <img src={people} alt="people" className="people" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
