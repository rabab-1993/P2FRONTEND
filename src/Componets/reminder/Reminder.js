import React from 'react'
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';



const Reminder = () => {
    const [value, setValue] = React.useState(new Date());


    return (
        <div>
             {/* date and time picker  */}
         <LocalizationProvider dateAdapter={AdapterDateFns}>
         <DateTimePicker
          renderInput={(params) => <TextField {...params} />}
          label="Ignore date and time"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          minDateTime={new Date()}
        />
         </LocalizationProvider>

         <input type="search" name="" id="" /> 
        </div>
    )
}

export default Reminder
