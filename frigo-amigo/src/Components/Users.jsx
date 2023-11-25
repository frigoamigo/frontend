import React, { useState } from 'react';

function generate_code(length=7) {
  let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

const Users = () => {
  const [code, setCode] = useState(generate_code());

  const handleClickCode = () => {
    setCode(generate_code());
  }

  return (
    <div>
      <p className='fridge-name nextart-900'>Мой холодильник</p>
      <p className='users manrope-400'>Пользователи</p>
      <ul className='users-list'>
        <li className='users-item'>
          <p className='user-name manrope-400'>Дана Жураускас</p>
        </li>
        <li className='users-item'>
          <p className='user-name manrope-400'>Нелли Щеголева</p>
        </li>
        <li className='users-item'>
          <p className='user-name manrope-400'>Марк семакин</p>
        </li>
        <li className='users-item'>
          <p className='user-name manrope-400'>саша юшина</p>
        </li>
        <li className='users-item'>
          <p className='user-name manrope-400'>Умоподрочитель</p>
        </li>
      </ul>
      <div className='to-edit-div'>
        <span className='to-edit nextart-400'>Редактировать</span>
      </div>
      <div className='bottom-pers-acc flex'>
        <span className='code-name nextart-400'>код доступа</span>
        <div className='code flex'>
          <span className='manrope-400 code-nums'>{code}</span>
          <button className='btn-reset code-arrow' onClick={handleClickCode}>
          </button>
        </div>
        <div className='lock-div'>
          <button className='btn-reset code-lock'></button>
        </div>
      </div>
    </div>
  )
}

export default Users