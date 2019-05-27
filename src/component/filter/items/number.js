import React from 'react';

import TextField from '@material-ui/core/TextField';

const Number = ({value = "", onChange = () => {}, filter: {
    name,
    id
}}) => {

    const didChange = (evt) => {
        const value = evt.target.value;

        onChange(id, value);
    }

    return <TextField
            id={id}
            label={name}
            value={value}
            onChange={didChange}
            type="number"
            InputLabelProps={{
                shrink: true,
            }}
            margin="normal"/>
};

export default Number;