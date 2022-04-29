import React, { useState, useRef } from 'react';
import FormLayout from './FormLayout/FormLayout';
import { RESPONSE_OBJECT } from './RESPONSE_OBJECT';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

const Login = () => {
  const navigate = useNavigate();
  const [openModalBtn, setOpenModalBtn] = useState(false);
  const [serverMessage, setServerMessage] = useState('initial');
  const [loggedUserName, setLoggedUserName] = useState('');
  const [signUpError, setSignUpError] = useState('');
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

  const exitBtnClick = () => {
    setOpenModalBtn(false);
  };

  const outModalBtnClick = e => {
    if (outModal.current === e.target) {
      setOpenModalBtn(false);
    }
  };

  const openModal = () => {
    localStorage.getItem('token') ? navigate('/') : setOpenModalBtn(true);
  };

  const onBackBtnClick = () => {
    setServerMessage('initial');
  };

  const errorMsgHandler = () => {
    setSignUpError('');
  };
  // const isValidEmail = email.includes('@') && email.includes('.');
  // const isValidPassword =
  //   password.match(/[~!@#$%";'^,&*()_+|</>=>`?:{[\}]/g) && password.length >= 8;

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
      // .catch(e => console.log(e));
    } else if (btnText === '로그인') {
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
        .then(res => setServerMessage(res.message));

      //회원가입 성공 시 input,btn 에러날것임 조건부렌더링을 통해 해결하기
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
            />
          </form>
        </div>
      )}
    </>
  );
};

export default Login;
