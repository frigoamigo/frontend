import React, { useState } from 'react';

function generate_code(length = 7) {
  let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

const Users = () => {
  const [code, setCode] = useState(generate_code());
  const [users, setUsers] = useState([
    { id: 1, name: 'Марк Семакин' },
    { id: 2, name: 'Саша Юшина' },
    { id: 3, name: 'Дана Жураускас' },
    { id: 4, name: 'Нелли Щеголева' },
  ]);
  const [showDeleteIcons, setShowDeleteIcons] = useState(false);
  const [showMakeAdminIcon, setShowMakeAdminIcon] = useState(false);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [showMakeUserAdminConfirmation, setShowMakeUserAdminConfirmation] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);
  const [userToMakeAdmin, setUserToMakeAdmin] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);

  const handleClickCode = () => {
    setCode(generate_code());
  }

  const handleEdit = () => {
    setShowDeleteIcons(true);
    setShowMakeAdminIcon(true);
    setIsEditMode(true);
  };

  const saveChanges = () => {
    // Ваши действия по сохранению изменений
    setShowDeleteIcons(false);
    setShowMakeAdminIcon(false);
    setIsEditMode(false);
  };

  const handleCancelEdit = () => {
    // Ваши действия по отмене редактирования
    setShowDeleteIcons(false);
    setShowMakeAdminIcon(false);
    setIsEditMode(false);
  };

  const handleDelete = (user) => {
    setUserToDelete(user);
    setShowDeleteConfirmation(true);
  };

  const confirmDelete = () => {
    setUsers(users.filter((user) => user.id !== userToDelete.id));
    setUserToDelete(null);
    setShowDeleteConfirmation(false);
  };

  const cancelDelete = () => {
    setUserToDelete(null);
    setShowDeleteConfirmation(false);
  };

  const handleMakeAdmin = (user) => {
    // Ваши действия по назначению пользователя администратором
    setUserToMakeAdmin(user);
    setShowMakeUserAdminConfirmation(true);
  }

  const confirmAdmin = () => {
    setUserToMakeAdmin(null);
    setShowMakeUserAdminConfirmation(false);
  };

  const cancelAdmin = () => {
    setUserToMakeAdmin(null);
    setShowMakeUserAdminConfirmation(false);
  };

  return (
    <div className='users-block flex'>
      <p className='fridge-name nextart-900'>Мой холодильник</p>
      <p className='users manrope-400'>Пользователи</p>
      <ul className='users-list'>
        <li className='users-item'>
          {/* <p className='user-name manrope-400'>{user.name}</p> */}
          <p className='user-name manrope-400'>Умоподрочитель</p>
          <svg className='admin-crown' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.5699 13.7178L22.822 11.0389C23.02 8.93507 23.119 7.88313 22.7591 7.44828C22.5644 7.21305 22.2996 7.06892 22.0166 7.04406C21.4933 6.9981 20.8362 7.74619 19.5219 9.24238C18.8422 10.0161 18.5024 10.403 18.1233 10.463C17.9133 10.4961 17.6992 10.462 17.5052 10.3644C17.1552 10.1882 16.9217 9.70993 16.4549 8.75336L13.9944 3.71133C13.1123 1.90378 12.6712 1 12 1C11.3288 1 10.8877 1.90378 10.0056 3.71135L7.54508 8.75337C7.07827 9.70993 6.84486 10.1882 6.49478 10.3644C6.30081 10.462 6.08677 10.4961 5.87671 10.463C5.49759 10.403 5.15775 10.0161 4.47806 9.24238C3.16379 7.74619 2.50665 6.9981 1.98339 7.04406C1.70032 7.06892 1.43558 7.21305 1.24089 7.44828C0.880978 7.88313 0.979977 8.93507 1.17799 11.0389L1.4301 13.7178C1.84551 18.1316 2.05323 20.3385 3.3541 21.6692C4.65498 23 6.60469 23 10.5041 23H13.4959C17.3953 23 19.345 23 20.6459 21.6692C21.9468 20.3385 22.1544 18.1316 22.5699 13.7178Z" stroke="#272826" strokeWidth="2" />
          </svg>
        </li>
        {users.map((user) => (
          <li className='users-item' key={user.id}>
            <p className='user-name manrope-400'>{user.name}</p>
            {showDeleteIcons && (
              <button className='btn-reset delete-user' onClick={() => handleDelete(user)}>
                <svg width="26" height="22" viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 19.9358C0 20.2452 0.122916 20.5419 0.341709 20.7607C0.560501 20.9795 0.857247 21.1024 1.16667 21.1024H10.5C10.8094 21.1024 11.1062 20.9795 11.325 20.7607C11.5437 20.5419 11.6667 20.2452 11.6667 19.9358C11.6667 19.6264 11.5437 19.3296 11.325 19.1108C11.1062 18.892 10.8094 18.7691 10.5 18.7691H2.41617C2.69927 16.8264 3.67166 15.0503 5.15579 13.7652C6.63992 12.48 8.53678 11.7716 10.5 11.7691C11.8737 11.781 13.2083 11.3119 14.2725 10.4432C15.3367 9.5744 16.0634 8.36068 16.3266 7.01236C16.5899 5.66405 16.3731 4.26612 15.7139 3.06085C15.0547 1.85557 13.9946 0.91892 12.7173 0.413216C11.4399 -0.0924885 10.026 -0.135371 8.72036 0.292001C7.41475 0.719373 6.29981 1.59006 5.56876 2.75317C4.83772 3.91628 4.53664 5.29851 4.71771 6.6603C4.89878 8.02209 5.55059 9.27761 6.56017 10.2093C4.62374 10.9948 2.9654 12.3397 1.79691 14.0722C0.628419 15.8047 0.00281908 17.8461 0 19.9358ZM10.5 2.43578C11.1922 2.43578 11.8689 2.64105 12.4445 3.02564C13.0201 3.41022 13.4687 3.95685 13.7336 4.59639C13.9985 5.23593 14.0678 5.93966 13.9327 6.6186C13.7977 7.29753 13.4644 7.92117 12.9749 8.41065C12.4854 8.90014 11.8617 9.23348 11.1828 9.36853C10.5039 9.50358 9.80015 9.43426 9.16061 9.16936C8.52107 8.90445 7.97444 8.45585 7.58986 7.88028C7.20527 7.3047 7 6.62801 7 5.93578C7 5.00752 7.36875 4.11728 8.02513 3.46091C8.6815 2.80453 9.57174 2.43578 10.5 2.43578ZM25.3248 13.7606L22.6497 16.4358L25.3248 19.1109C25.4363 19.2186 25.5251 19.3473 25.5863 19.4896C25.6474 19.632 25.6796 19.7851 25.681 19.94C25.6823 20.0949 25.6528 20.2485 25.5941 20.3919C25.5355 20.5353 25.4488 20.6655 25.3393 20.7751C25.2298 20.8846 25.0995 20.9712 24.9561 21.0299C24.8127 21.0886 24.6591 21.1181 24.5042 21.1167C24.3493 21.1154 24.1962 21.0832 24.0539 21.0221C23.9115 20.9609 23.7828 20.872 23.6752 20.7606L21 18.0854L18.3248 20.7606C18.1048 20.9731 17.8101 21.0907 17.5042 21.0881C17.1983 21.0854 16.9057 20.9627 16.6894 20.7464C16.4731 20.5301 16.3504 20.2375 16.3477 19.9316C16.3451 19.6257 16.4626 19.331 16.6752 19.1109L19.3503 16.4358L16.6752 13.7606C16.4626 13.5406 16.3451 13.2459 16.3477 12.94C16.3504 12.6341 16.4731 12.3415 16.6894 12.1252C16.9057 11.9088 17.1983 11.7862 17.5042 11.7835C17.8101 11.7808 18.1048 11.8984 18.3248 12.1109L21 14.7861L23.6752 12.1109C23.8952 11.8984 24.1899 11.7808 24.4958 11.7835C24.8017 11.7862 25.0943 11.9088 25.3106 12.1252C25.5269 12.3415 25.6496 12.6341 25.6523 12.94C25.6549 13.2459 25.5374 13.5406 25.3248 13.7606Z" fill="#272826" />
                </svg>
              </button>
            )}
            {showMakeAdminIcon && (
              <button className='btn-reset delete-user' onClick={() => handleMakeAdmin(user)}>
                <svg className='make-admin-crown' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.5699 13.7178L22.822 11.0389C23.02 8.93507 23.119 7.88313 22.7591 7.44828C22.5644 7.21305 22.2996 7.06892 22.0166 7.04406C21.4933 6.9981 20.8362 7.74619 19.5219 9.24238C18.8422 10.0161 18.5024 10.403 18.1233 10.463C17.9133 10.4961 17.6992 10.462 17.5052 10.3644C17.1552 10.1882 16.9217 9.70993 16.4549 8.75336L13.9944 3.71133C13.1123 1.90378 12.6712 1 12 1C11.3288 1 10.8877 1.90378 10.0056 3.71135L7.54508 8.75337C7.07827 9.70993 6.84486 10.1882 6.49478 10.3644C6.30081 10.462 6.08677 10.4961 5.87671 10.463C5.49759 10.403 5.15775 10.0161 4.47806 9.24238C3.16379 7.74619 2.50665 6.9981 1.98339 7.04406C1.70032 7.06892 1.43558 7.21305 1.24089 7.44828C0.880978 7.88313 0.979977 8.93507 1.17799 11.0389L1.4301 13.7178C1.84551 18.1316 2.05323 20.3385 3.3541 21.6692C4.65498 23 6.60469 23 10.5041 23H13.4959C17.3953 23 19.345 23 20.6459 21.6692C21.9468 20.3385 22.1544 18.1316 22.5699 13.7178Z" stroke="#818181" strokeWidth="2" />
                </svg>
              </button>
            )}
          </li>
        ))}
      </ul>
      {showDeleteConfirmation && (
        <div className='confirmation-modal flex'>
          <p className='confirmation-text manrope-400'>Вы уверены, что хотите удалить пользователя {userToDelete.name}?</p>
          <div className='confirmation-buttons flex'>
            <button className='btn-reset conf-btn manrope-700' onClick={confirmDelete}>Да</button>
            <button className='btn-reset conf-btn manrope-700' onClick={cancelDelete}>Отмена</button>
          </div>
        </div>
      )}
      {showMakeUserAdminConfirmation && (
        <div className='confirmation-modal flex'>
          <p className='confirmation-text manrope-400'>Вы уверены, что хотите сделать пользователя {userToMakeAdmin.name} администратором? Он сможет удалять других пользователей и назначать администраторов.</p>
          <div className='confirmation-buttons flex'>
            <button className='btn-reset conf-btn manrope-700' onClick={confirmAdmin}>Да</button>
            <button className='btn-reset conf-btn manrope-700' onClick={cancelAdmin}>Отмена</button>
          </div>
        </div>
      )}
      <div className='to-edit-div'>
        {isEditMode ? (
          <>
            <button onClick={saveChanges} className='to-edit save btn-reset nextart-400'>
              Сохранить
            </button>
            <button onClick={handleCancelEdit} className='to-edit delete-fridge btn-reset nextart-400'>
              Удалить холодильник
            </button>
          </>
        ) : (
          <button onClick={handleEdit} className='to-edit btn-reset nextart-400'>
            Редактировать
          </button>
        )}
      </div>
      <div className='bottom-pers-acc flex'>
        <span className='code-name nextart-400'>код доступа</span>
        <div className='code flex'>
          <span className='manrope-400 code-nums'>{code}</span>
          <button
            className='btn-reset code-arrow'
            onClick={handleClickCode}>
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


// import React, { useState } from 'react';

// function generate_code(length = 7) {
//   let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//   let result = '';
//   for (let i = 0; i < length; i++) {
//     result += characters.charAt(Math.floor(Math.random() * characters.length));
//   }
//   return result;
// }

// const Users = () => {
//   const [code, setCode] = useState(generate_code());
//   const [showDeleteIcons, setShowDeleteIcons] = useState({});

//   const handleClickCode = () => {
//     setCode(generate_code());
//   }

//   const handleEdit = () => {
//     setShowDeleteIcons((prevState) => {
//       return { ...prevState, edit: true };
//     });
//   };

//   return (
//     <div className='users-block'>
//       <p className='fridge-name nextart-900'>Мой холодильник</p>
//       <p className='users manrope-400'>Пользователи</p>
//       <ul className='users-list'>
//         <li className='users-item'>
//           {/* <p className='user-name manrope-400'>{user.name}</p> */}
//           <p className='user-name manrope-400'>Умоподрочитель</p>
//           <svg className='admin-crown' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <path d="M22.5699 13.7178L22.822 11.0389C23.02 8.93507 23.119 7.88313 22.7591 7.44828C22.5644 7.21305 22.2996 7.06892 22.0166 7.04406C21.4933 6.9981 20.8362 7.74619 19.5219 9.24238C18.8422 10.0161 18.5024 10.403 18.1233 10.463C17.9133 10.4961 17.6992 10.462 17.5052 10.3644C17.1552 10.1882 16.9217 9.70993 16.4549 8.75336L13.9944 3.71133C13.1123 1.90378 12.6712 1 12 1C11.3288 1 10.8877 1.90378 10.0056 3.71135L7.54508 8.75337C7.07827 9.70993 6.84486 10.1882 6.49478 10.3644C6.30081 10.462 6.08677 10.4961 5.87671 10.463C5.49759 10.403 5.15775 10.0161 4.47806 9.24238C3.16379 7.74619 2.50665 6.9981 1.98339 7.04406C1.70032 7.06892 1.43558 7.21305 1.24089 7.44828C0.880978 7.88313 0.979977 8.93507 1.17799 11.0389L1.4301 13.7178C1.84551 18.1316 2.05323 20.3385 3.3541 21.6692C4.65498 23 6.60469 23 10.5041 23H13.4959C17.3953 23 19.345 23 20.6459 21.6692C21.9468 20.3385 22.1544 18.1316 22.5699 13.7178Z" stroke="#272826" strokeWidth="2" />
//           </svg>
//         </li>
//         <li className='users-item'>
//           <p className='user-name manrope-400'>Дана Жураускас</p>
//         </li>
//         <li className='users-item'>
//           <p className='user-name manrope-400'>Нелли Щеголева</p>
//         </li>
//         <li className='users-item'>
//           <p className='user-name manrope-400'>Марк семакин</p>
//         </li>
//         <li className='users-item'>
//           <p className='user-name manrope-400'>саша юшина</p>
//         </li>
//       </ul>
//       <div className='to-edit-div'>
//         <button
//         onClick={handleEdit}
//         className='to-edit btn-reset nextart-400'>Редактировать</button>
//       </div>
//       <div className='bottom-pers-acc flex'>
//         <span className='code-name nextart-400'>код доступа</span>
//         <div className='code flex'>
//           <span className='manrope-400 code-nums'>{code}</span>
//           <button
//           className='btn-reset code-arrow'
//           onClick={handleClickCode}>
//           </button>
//         </div>
//         <div className='lock-div'>
//           <button className='btn-reset code-lock'></button>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Users