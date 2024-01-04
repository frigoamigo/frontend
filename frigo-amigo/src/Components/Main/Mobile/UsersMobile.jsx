import React from 'react';
import { UserContext } from '../../../UserContext';
import axios from 'axios';

class UsersMobile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      code: this.generate_code(),
      // users: [
      //     {id: 1, name: 'Марк Семакин'},
      //     {id: 2, name: 'Саша Юшина'},
      //     {id: 3, name: 'Дана Жураускас'},
      //     {id: 4, name: 'Нелли Щеголева'},
      // ],
      showDeleteIcons: false,
      showMakeAdminIcon: false,
      showDeleteConfirmation: false,
      showMakeUserAdminConfirmation: false,
      userToDelete: null,
      userToMakeAdmin: null,
      isEditMode: false,
    };
  }

  static contextType = UserContext;

  generate_code(length = 7) {
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }

  handleClickCode = () => {
    this.setState({ code: this.generate_code() });
  };

  handleEdit = () => {
    this.setState({
      showDeleteIcons: true,
      showMakeAdminIcon: true,
      isEditMode: true,
    });
  };

  saveChanges = () => {
    this.setState({
      showDeleteIcons: false,
      showMakeAdminIcon: false,
      isEditMode: false,
    });
  };

  handleCancelEdit = () => {
    this.setState({
      showDeleteIcons: false,
      showMakeAdminIcon: false,
      isEditMode: false,
    });
  };

  handleDelete = (user) => {
    this.setState({
      userToDelete: user,
      showDeleteConfirmation: true,
    });
  };

  confirmDelete = () => {
    const postDeleteUser = async () => {
      try {
        let body = {
          fridgeName: this.context.fridgeName,
          ownerEmail: this.context.user.email,
          userEmail: this.state.userToDelete,
        };
        const response = await axios.post('http://localhost:8080/users/delete', body, {
          withCredentials: true,
        });
        console.log(response.data);

        if (response.status === 200) {
          let body = {
            userEmail: this.context.user.email,
          };
          const secondResponse = await axios.post('http://localhost:8080/user/getuserData', body, {
            withCredentials: true,
          });
          console.log(secondResponse.data);
          this.context.setUser(secondResponse.data);
        }
      } catch (error) {
        console.error(`Error posting data: ${error}`);
      }
    };
    postDeleteUser();
    this.setState(() => ({
      userToDelete: null,
      showDeleteConfirmation: false,
    }));
  };

  cancelDelete = () => {
    this.setState({
      userToDelete: null,
      showDeleteConfirmation: false,
    });
  };

  handleMakeAdmin = (user) => {
    this.setState({
      userToMakeAdmin: user,
      showMakeUserAdminConfirmation: true,
    });
  };

  confirmAdmin = () => {
    this.setState({
      userToMakeAdmin: null,
      showMakeUserAdminConfirmation: false,
    });
  };

  cancelAdmin = () => {
    this.setState({
      userToMakeAdmin: null,
      showMakeUserAdminConfirmation: false,
    });
  };

  handleChangeInviteCode = () => {
    const postInviteCode = async () => {
      try {
        let body = {
          fridgeName: this.context.fridgeName,
          ownerEmail: this.context.user.email,
        };
        const response = await axios.post('http://localhost:8080/fridge/changeInviteCode', body, {
          withCredentials: true,
        });
        console.log(response.data);
        if (response.status === 200) {
          let body = {
            userEmail: this.context.user.email,
          };
          const secondResponse = await axios.post('http://localhost:8080/user/getUserData', body, {
            withCredentials: true,
          });
          console.log(secondResponse.data);
          this.context.setUser(secondResponse.data);
        }
      } catch (error) {
        console.error(`Error posting data: ${error}`);
      }
    };
    postInviteCode();
  };

  render() {
    const user = this.context.user;
    return (
      <div className="users-block flex">
        <p className="users manrope-400">Пользователи</p>
        <svg
          width="172"
          height="2"
          viewBox="0 0 172 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="1"
            y1="1"
            x2="171"
            y2="1"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>

        <ul className="users-list">
          <li className="users-item">
             <p className="user-name manrope-400">{user.name}</p>
            {/*<p className="user-name manrope-400">Умоподрочитель</p>*/}
            <svg
              className="admin-crown"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.5699 13.7178L22.822 11.0389C23.02 8.93507 23.119 7.88313 22.7591 7.44828C22.5644 7.21305 22.2996 7.06892 22.0166 7.04406C21.4933 6.9981 20.8362 7.74619 19.5219 9.24238C18.8422 10.0161 18.5024 10.403 18.1233 10.463C17.9133 10.4961 17.6992 10.462 17.5052 10.3644C17.1552 10.1882 16.9217 9.70993 16.4549 8.75336L13.9944 3.71133C13.1123 1.90378 12.6712 1 12 1C11.3288 1 10.8877 1.90378 10.0056 3.71135L7.54508 8.75337C7.07827 9.70993 6.84486 10.1882 6.49478 10.3644C6.30081 10.462 6.08677 10.4961 5.87671 10.463C5.49759 10.403 5.15775 10.0161 4.47806 9.24238C3.16379 7.74619 2.50665 6.9981 1.98339 7.04406C1.70032 7.06892 1.43558 7.21305 1.24089 7.44828C0.880978 7.88313 0.979977 8.93507 1.17799 11.0389L1.4301 13.7178C1.84551 18.1316 2.05323 20.3385 3.3541 21.6692C4.65498 23 6.60469 23 10.5041 23H13.4959C17.3953 23 19.345 23 20.6459 21.6692C21.9468 20.3385 22.1544 18.1316 22.5699 13.7178Z"
                stroke="#272826"
                strokeWidth="2"
              />
            </svg>
          </li>
        </ul>
        {this.state.showDeleteConfirmation && (
          <div className="confirmation-modal flex">
            <p className="confirmation-text manrope-400">
              Вы уверены, что хотите удалить пользователя {this.state.userToDelete.name}?
            </p>
            <div className="confirmation-buttons flex">
              <button className="btn-reset conf-btn manrope-700" onClick={this.confirmDelete}>
                Да
              </button>
              <button className="btn-reset conf-btn manrope-700" onClick={this.cancelDelete}>
                Отмена
              </button>
            </div>
          </div>
        )}
        {this.state.showMakeUserAdminConfirmation && (
          <div className="confirmation-modal flex">
            <p className="confirmation-text manrope-400">
              Вы уверены, что хотите сделать пользователя {this.state.userToMakeAdmin.name}{' '}
              администратором? Он сможет удалять других пользователей и назначать администраторов.
            </p>
            <div className="confirmation-buttons flex">
              <button className="btn-reset conf-btn manrope-700" onClick={this.confirmAdmin}>
                Да
              </button>
              <button className="btn-reset conf-btn manrope-700" onClick={this.cancelAdmin}>
                Отмена
              </button>
            </div>
          </div>
        )}
        <div className="to-edit-div">
          {this.state.isEditMode ? (
            <>
              <button onClick={this.saveChanges} className="to-edit save btn-reset nextart-400">
                Сохранить
              </button>
              <button
                onClick={this.handleCancelEdit}
                className="to-edit delete-fridge btn-reset nextart-400"
              >
                Удалить холодильник
              </button>
            </>
          ) : (
            <button onClick={this.handleEdit} className="to-edit btn-reset nextart-400">
              Редактировать
            </button>
          )}
        </div>
        {this.context.fridgeName && (
          <div className="bottom-pers-acc flex">
            <div className="code flex">
              <span className="manrope-400 code-nums">
                {
                  user.fridges.filter((fridge) => fridge.name === this.context.fridgeName)[0]
                    .inviteCode
                }
              </span>
              <button
                className="btn-reset code-arrow"
                onClick={this.handleChangeInviteCode}
              ></button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default UsersMobile;
