import React from 'react';
import './Checkboxes.scss';

const Checkboxes = ({ onChange }) => {
  return (
    <>
      <div className="checkBoxes">
        <input
          className="checkBox"
          type="checkbox"
          id="checkBox"
          name="checkBox"
          onChange={onChange}
        />
        <label className="checkBoxText isOverFourteen" htmlFor="checkBox">
          가입자 본인은 만 14세 이상입니다.
        </label>
      </div>

      <div className="checkBoxes">
        <input
          className="checkBox"
          type="checkbox"
          id="checkBoxTwo"
          name="checkBoxTwo"
          onChange={onChange}
        />
        <label className="checkBoxText" htmlFor="checkBoxTwo">
          이용 약관에 동의합니다.
        </label>
      </div>
    </>
  );
};

export default Checkboxes;
