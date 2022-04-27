import React, { useState } from 'react';
import Signup from './Signup/Signup';
import './Login.scss';

const Login = () => {
  const originalTitle = {
    title: '안녕하세요',
    paragraph: '로그인 및 회원가입을 위한 이메일 주소를 입력 부탁드립니다.',
    inputs: [],
    buttonContent: '계속',
  };
  const [modalTitle, setModalTitle] = useState(originalTitle);
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: null,
    passwordCheck: null,
    lastName: null,
    firstName: null,
    checkBox: null,
    checkBoxTwo: null,
  });

  const [condition, setCondition] = useState(false);

  // const modalClose = () => {
  //   setModalOpen(!modalOpen);
  // };

  const resObj = {
    'invalid email': ['password', 'passwordCheck', 'lastName', 'firstName'],
    SUCCESS: ['email', 'password'],
  };

  const onChange = e => {
    const { name, value, checked } = e.target;
    setUserInfo(prev => {
      if (name.indexOf('check') === -1) {
        return { ...prev, [name]: value };
      }
      return { ...prev, [name]: checked };
    });
  };

  const goTosignup = e => {
    e.preventDefault();
    setCondition(true);
    setModalTitle(prev => {
      return {
        ...prev,
        ['buttonContent']: '가입',
        ['title']: '푀세아에 오신 것을 환영합니다.',
        ['paragraph']: '회원가입을 위해 아래 세부 정보를 작성해주세요.',
      };
    });
  };

  const onBackBtnClick = () => {
    setCondition(false);
    setModalTitle(originalTitle);
  };

  //패치 받았을 때 N 받으면 signup으로 넘어가기
  // if ('response'.message === 'Invalid email') {
  //   setModalTitle({
  //     title: '푀세아에 오신 것을 환영합니다.',
  //     paragraph: '회원가입을 위해 아래의 세부 정보를 작성해주세요.',
  //     buttonContent: '가입',
  //   });
  //   userInfo();
  // }

  return (
    <>
      <button className="loginBtn">로그인</button>
      <div className="modalOverlay">
        <form className="modalBody" onSubmit={goTosignup}>
          <button className="modalExit" type="button">
            X
          </button>
          <div className="modalBox">
            <div className="modalText">
              <h2 className="modalTitle">{modalTitle.title}</h2>
              <p className="modalParagraph">{modalTitle.paragraph}</p>
            </div>
            <input
              className="modalInput inputEmail"
              placeholder="이메일 주소"
              type="email"
              name="email"
              onChange={onChange}
            />
            {condition && (
              <Signup onBackBtnClick={onBackBtnClick} onChange={onChange} />
            )}
            <button className="continueBtn">{modalTitle.buttonContent}</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
