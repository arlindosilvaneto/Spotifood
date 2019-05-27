import React from 'react';

import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

const Timestamp = ({value, onChange = () => {}, filter: {
    id
}}) => {

    const didChange = (evt) => {
        const value = new Date(evt);

        onChange(id, value.toISOString());
    }

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
                margin="normal"
                label="Data"
                value={value}
                onChange={didChange}
            />
            <KeyboardTimePicker
                margin="normal"
                label="Hora"
                value={value}
                onChange={didChange}
            />
        </MuiPickersUtilsProvider>
    );
}

export default Timestamp;