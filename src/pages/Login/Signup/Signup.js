import React from 'react';
import './Signup.scss';

const Signup = ({ onChange, modalTitle }) => {
  return (
    <>
      <input
        className="modalInput inputPassword"
        placeholder="패스워드"
        type="password"
        name="password"
        onChange={onChange}
      />
      <input
        className="modalInput inputPasswordConfrem"
        placeholder="패스워드 확인"
        type="password"
        name="passwordCheck"
        onChange={onChange}
      />
      <div className="inputNameBoxs">
        <input
          className="modalInput inputLastName"
          placeholder="성"
          type="text"
          name="lastName"
          onChange={onChange}
        />
        <input
          className="modalInput inputFirstName"
          placeholder="이름"
          type="text"
          name="firstName"
          onChange={onChange}
        />
      </div>
      <div className="checkBoxs">
        <input
          className="checkBox"
          type="checkbox"
          id="checkBox"
          name="checkBox"
          onChange={onChange}
        />
        <label className="checkBoxText" for="checkBox">
          가입자 본인은 만 14세 이상입니다.
        </label>
      </div>
      <div className="checkBoxs">
        <input
          className="checkBox"
          type="checkbox"
          id="checkBoxTwo"
          name="checkBoxTwo"
          onChange={onChange}
        />
        <label className="checkBoxTextTwo" for="checkBoxTwo">
          이용 약관에 동의합니다.
        </label>
      </div>
      <button className="loginBtn">{modalTitle.buttonContent}</button>
      <button className="isUsers">이솝 계정을 가지고 계십니까?</button>
    </>
  );
};
export default Signup;
