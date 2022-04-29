import React from 'react';
import Checkboxes from '../Checkboxes/Checkboxes';
import './FormLayout.scss';

const FormLayout = ({ response, onChange, onBackBtnClick }) => {
  const { title, paragraph, inputs, btnContent, checkBoxes } = response;

  return (
    <div className="modalBox">
      <div className="modalText">
        <h2 className="modalTitle">{title}</h2>
        <p className="modalParagraph">{paragraph}</p>
      </div>

      {inputs.map(({ type, name, placeholder }, index) => {
        return (
          <input
            key={index}
            className="modalInput"
            type={type}
            name={name}
            placeholder={placeholder}
            onChange={onChange}
          />
        );
      })}

      {inputs.length > 1 && (
        <button type="button" className="backBtn" onClick={onBackBtnClick}>
          back
        </button>
      )}

      {checkBoxes && <Checkboxes onChange={onChange} />}

      {btnContent && (
        <button type="submit" className="continueBtn">
          {btnContent}
        </button>
      )}
    </div>
  );
};

export default FormLayout;
