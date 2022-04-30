import React, { useState, useRef } from 'react';
import FormLayout from './FormLayout/FormLayout';
import { RESPONSE_OBJECT } from './RESPONSE_OBJECT';
import { useNavigate } from 'react-router-dom';
import './Login.scss';
import { SIGNUP_MESSAGE } from './SIGNUP_MESSAGE';

const Login = () => {
  const navigate = useNavigate();
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

  const exitBtnClick = () => {
    setOpenModalBtn(false);
    setServerMessage('initial');
  };

  const outModalBtnClick = e => {
    if (outModal.current === e.target) {
      setOpenModalBtn(false);
      setServerMessage('initial');
      setErrorMessage('');
    }
  };

  const openModal = () => {
    localStorage.getItem('token') ? navigate('/') : setOpenModalBtn(true);
  };

  const onBackBtnClick = () => {
    setServerMessage('initial');
    setErrorMessage('');
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

  const postUserInfo = e => {
    e.preventDefault();
    const btnText = RESPONSE_OBJECT[serverMessage].btnContent;

    if (btnText === '계속') {
      if (!isValidEmail) {
        setErrorMessage(SIGNUP_MESSAGE['invalidEmail']);
        return;
      }

      setErrorMessage('');
      fetch('http://10.58.4.121:8000/users/check', {
        method: 'POST',
        body: JSON.stringify({
          email: email,
        }),
      })
        .then(res => res.json())
        .then(res => {
          setServerMessage(res.message);
        });
    } else if (btnText === '로그인') {
      setErrorMessage('');

      if (!isValidPassword) {
        setErrorMessage(SIGNUP_MESSAGE['invalidPassword']);
        return;
      }

      fetch('http://10.58.4.121:8000/users/login', {
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
          setLoggedUserName(`${res.last_name}${res.first_name}`);
        });
    } else {
      setErrorMessage('');

      if (!isValidPassword) {
        setErrorMessage(SIGNUP_MESSAGE['invalidPassword']);
        return;
      }

      if (password !== passwordCheck) {
        setErrorMessage(SIGNUP_MESSAGE['samePassword']);
        return;
      }

      if (!(checkBox && checkBoxTwo)) {
        setErrorMessage(SIGNUP_MESSAGE['invalidCheckBox']);
        return;
      }

      if (isInputEmpty) {
        setErrorMessage(SIGNUP_MESSAGE['fullInput']);
        return;
      }

      fetch('http://10.58.4.121:8000/users/signup', {
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
    }
  };

  return (
    <>
      <button className="loginBtn" onClick={openModal}>
        {loggedUserName || '로그인'}
      </button>
      {openModalBtn && (
        <div className="modalOverlay" ref={outModal} onClick={outModalBtnClick}>
          <form className="modalBody" onSubmit={postUserInfo}>
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
