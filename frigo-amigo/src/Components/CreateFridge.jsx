import React from 'react'

const CreateFridge = (props) => {
  return (
    <div>
      <div className="dark"></div>
      <div className="frame">
      <button
          className="close-button btn-reset"
          onClick={props.handleCloseCreateFridge}
        >
          &#10005;
        </button>
        <form action="post" className='create-fridge-form flex'>
          <input 
          type="text" 
          className="create-fridge-input nextart-400" 
          placeholder='Введите название'/>
          <button 
          type='button'
          className="create-fridge-btn manrope-400 btn-reset"
          >Создать</button>
        </form>
      </div>
    </div>
  )
}

export default CreateFridge