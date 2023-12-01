import React from 'react'
import people from '../Pictures/people.png'

const AboutUs = () => {
  return (
    <div className='container'>
      <div className='about-us'>
        <div className='about-div flex'>
          <div className='about-texts'>
            <h2 className='about-header nextart-300'>О нас</h2>
            <div className='about-line'>
              <svg xmlns="http://www.w3.org/2000/svg" width="504" height="9" viewBox="0 0 504 9" fill="none">
                <path d="M3 6L501 3.00004" stroke="#EC9A29" stroke-width="5" stroke-linecap="round" />
              </svg>
            </div>
            <p className='about-text roundedmplus-400'>
              Создатели FrigoAmigo - команда инициативных студентов факультета искусств
              СПбГУ. Мы сами порой забывали про недолговечность некоторых продуктов
              (особенно в период сессии :D) и устали от необходимости каждый раз выискивать
              срок годности на упаковке, потому решили найти способ упростить быт. Так
              появился <b style={{ color: '#EC9A29' }}>Frigo Amigo</b> - ваш новый лучший друг :)
            </p>
          </div>
          <img src={people} alt="people" className='people'/>
        </div>
      </div>
    </div>
  )
}

export default AboutUs