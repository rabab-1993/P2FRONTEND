import React from 'react'
import { alpha, styled } from '@mui/material/styles';
import TextField from "@mui/material/TextField";






const LogIn = () => {
    const ValidationTextField = styled(TextField)({
        '& input:valid + fieldset': {
          borderColor: 'green',
          borderWidth: 2,
        },
        '& input:invalid + fieldset': {
          borderColor: 'red',
          borderWidth: 2,
        },
        '& input:valid:focus + fieldset': {
          borderLeftWidth: 6,
          padding: '4px !important', // override inline-style
        },
      });
    return (
        <div>
             <ValidationTextField
        label="CSS validation style"
        required
        variant="outlined"
        defaultValue="Success"
        id="validation-outlined-input"
      />
        </div>
    )
}

export default LogIn
