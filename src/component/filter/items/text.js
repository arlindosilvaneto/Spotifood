import React from 'react';

import TextField from '@material-ui/core/TextField';

const Text = ({value = "", onChange = () => {}, id, name}) => {

    const didChange = (evt) => {
        const value = evt.target.value;

        onChange(id, value);
    }

    return <TextField
            id={id}
            label={name}
            value={value}
            onChange={didChange}
            type="text"
            InputLabelProps={{
                shrink: true,
            }}
            margin="normal"/>
};

export default Text;