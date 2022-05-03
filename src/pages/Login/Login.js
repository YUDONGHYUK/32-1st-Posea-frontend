import React, { useState, useRef } from 'react';
import FormLayout from './FormLayout/FormLayout';
import { RESPONSE_OBJECT, SIGNUP_MESSAGE } from './userMessage';
import './Login.scss';

const Login = () => {
  const [openModalBtn, setOpenModalBtn] = useState(false);
  const [serverMessage, setServerMessage] = useState('initial');
  const [loggedUserName, setLoggedUserName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
    passwordCheck: '',
    lastName: '',
    firstName: '',
    checkBox: false,
    checkBoxTwo: false,
  });

  const {
    email,
    password,
    passwordCheck,
    lastName,
    firstName,
    checkBox,
    checkBoxTwo,
  } = userInfo;

  const outModal = useRef();
  const isValidEmail = email.includes('@') && email.includes('.');
  const isValidPassword =
    password.match(/[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g) &&
    password.length >= 8;
  const isInputEmpty = Object.values(userInfo).some(info => info === '');

  const logout = () => {
    const isLoggingOut = window.confirm('정말 로그아웃하실 것입니까?');
    if (isLoggingOut) {
      localStorage.removeItem('token');
      setLoggedUserName('로그인');
      setServerMessage('initial');
    }
  };

  const resetState = (modal, server, error) => {
    modal && setOpenModalBtn(false);
    server && setServerMessage('initial');
    error && setErrorMessage('');
  };

  const exitBtnClick = () => {
    resetState(true, true, false);
  };

  const outModalBtnClick = e => {
    if (outModal.current === e.target) {
      resetState(true, true, true);
    }
  };

  const onBackBtnClick = () => {
    resetState(false, true, true);
  };

  const openModal = () => {
    localStorage.getItem('token') ? logout() : setOpenModalBtn(true);
  };

  const onChange = e => {
    const { name, value, checked } = e.target;
    const isCheckClicked = name.indexOf('check') === -1;
    setUserInfo(userInfo => {
      return {
        ...userInfo,
        [name]: isCheckClicked ? value : checked,
      };
    });
  };

  const checkEmail = () => {
    fetch('http://10.58.0.92:8000/users/check', {
      method: 'POST',
      body: JSON.stringify({
        email: email,
      }),
    })
      .then(res => res.json())
      .then(res => {
        setServerMessage(res.message);
        setErrorMessage('');
      });
  };

  const postUserLogin = () => {
    fetch('http://10.58.0.92:8000/users/login', {
      method: 'POST',
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then(res => res.json())
      .then(res => {
        localStorage.setItem('token', res.token);
        setOpenModalBtn(false);
        setLoggedUserName(`${res.last_name} ${res.first_name}`);
        setErrorMessage('');
      });
  };

  const postUserSignUp = () => {
    fetch('http://10.58.0.92:8000/users/signup', {
      method: 'POST',
      body: JSON.stringify({
        email: email,
        password: password,
        last_name: lastName,
        first_name: firstName,
      }),
    })
      .then(res => res.json())
      .then(res => {
        setServerMessage(res.message);

        setErrorMessage('');
        setUserInfo({
          email: '',
          password: '',
          passwordCheck: '',
          lastName: '',
          firstName: '',
          checkBox: false,
          checkBoxTwo: false,
        });
      });
  };

  const handleUserButton = e => {
    e.preventDefault();
    const btnText = RESPONSE_OBJECT[serverMessage].btnContent;

    if (btnText === '계속') {
      if (!isValidEmail) {
        setErrorMessage(SIGNUP_MESSAGE['invalidEmail']);
        return;
      }
      checkEmail();
    } else if (btnText === '로그인') {
      if (!isValidPassword) {
        setErrorMessage(SIGNUP_MESSAGE['invalidPassword']);
        return;
      }
      postUserLogin();
    } else {
      if (!isValidPassword) {
        setErrorMessage(SIGNUP_MESSAGE['invalidPassword']);
        return;
      } else if (password !== passwordCheck) {
        setErrorMessage(SIGNUP_MESSAGE['samePassword']);
        return;
      } else if (!(checkBox && checkBoxTwo)) {
        setErrorMessage(SIGNUP_MESSAGE['invalidCheckBox']);
        return;
      } else if (isInputEmpty) {
        setErrorMessage(SIGNUP_MESSAGE['fullInput']);
        return;
      }

      postUserSignUp();
    }
  };

  return (
    <>
      <button className="loginBtn" onClick={openModal}>
        {loggedUserName || '로그인'}
      </button>
      {openModalBtn && (
        <div className="modalOverlay" ref={outModal} onClick={outModalBtnClick}>
          <form className="modalBody" onSubmit={handleUserButton}>
            <button className="modalExit" type="button" onClick={exitBtnClick}>
              X
            </button>
            <FormLayout
              response={RESPONSE_OBJECT[serverMessage]}
              onChange={onChange}
              onBackBtnClick={onBackBtnClick}
              errorMessage={errorMessage}
            />
          </form>
        </div>
      )}
    </>
  );
};

export default Login;
