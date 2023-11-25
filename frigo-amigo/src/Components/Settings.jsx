import React from 'react'

const Settings = () => {
  return (
    <div className='settings-block'>
      <p className='nextart-900 settings-header'>Настройки</p>
      <ul className='list-reset settings-list flex'>
        <li className='settings-item flex'>
          <label className='settings-label manrope-400'>Никнейм</label>
          <input className='settings-input'></input>
        </li>
        <li className='settings-item flex'>
          <label className='settings-label manrope-400'>Логин</label>
          <input className='settings-input'></input>
        </li>
        <li className='settings-item flex'>
          <label className='settings-label manrope-400'>Пароль</label>
          <input className='settings-input'></input>
        </li>
        <li className='settings-item flex'>
          <label className='settings-label manrope-400'>Премиум подписка</label>
          <div className='change-plan flex'>
            <input className='settings-input plan-input'></input>
            <button className='btn-reset change-plan-btn manrope-400'>Изменить план</button>
          </div>
        </li>
      </ul>
      <div className='delete-div'>
        <button className='delete-account manrope-400 btn-reset'>Удалить аккаунт</button>
      </div>
      <button className='door btn-reset flex'>
        <svg width="53" height="59" viewBox="0 0 53 59" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.9715 8.94287H15.2715C8.90753 8.94287 5.72555 8.94287 3.74851 10.9764C1.77148 13.0099 1.77148 16.2828 1.77148 22.8286V36.7143C1.77148 43.26 1.77148 46.5329 3.74851 48.5666C5.72555 50.6 8.90753 50.6 15.2715 50.6H17.9715" stroke="#272826" stroke-width="2.89286" />
          <path d="M17.9717 14.4316C17.9717 8.06136 17.9717 4.87625 19.9267 3.13501C21.8818 1.39376 24.87 1.91739 30.8466 2.96466L37.2841 4.09268C43.9032 5.25253 47.2126 5.83242 49.178 8.27151C51.1431 10.7106 51.1431 14.2381 51.1431 21.2931V38.2498C51.1431 45.3049 51.1431 48.8324 49.178 51.2713C47.2126 53.7104 43.9032 54.2903 37.2841 55.4503L30.8466 56.5781C24.87 57.6254 21.8818 58.1492 19.9267 56.4079C17.9717 54.6666 17.9717 51.4815 17.9717 45.1113V14.4316Z" stroke="#272826" stroke-width="2.89286" />
          <path d="M26.457 26.6855V32.857" stroke="#272826" stroke-width="2.89286" stroke-linecap="round" />
        </svg>
        <p className='nextart-400'>Выйти</p>
      </button>
    </div>
  )
}

export default Settings