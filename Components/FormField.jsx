import React from 'react'
import './FormField.css'
const FormField = ({labelName, placeholder, inputType, isTextArea, value, handleChange}) => {
  return (
    <label class='label'>
        {
          labelName && (
            <span class='span'>{labelName}</span>
          )
        }
        {isTextArea ?(
          <textArea required
          value={value}
          onChange={handleChange}
          rows="10"
          placeholder={placeholder}
          class='area'
          />
        ): (
          <input required
          value={value}
          onChange={handleChange}
          type={inputType}
          step="0.1"
          placeholder={placeholder}
          class='area'
          />
        )}
    </label>
  )
}

export default FormField