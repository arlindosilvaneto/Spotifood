import React from 'react';

import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

const SelectMenu = ({value = "", onChange = () => {}, filter: {
    values,
    name,
    id
}}) => {

    const didUpdate = (evt) => {
        const value = evt.target.value;

        onChange(id, value);
    }

    return (
        <FormControl>
            <InputLabel htmlFor={id}>{name}</InputLabel>
            <Select
            value={value}
            onChange={didUpdate}
            inputProps={{id}}
            >
                <MenuItem value="">
                    <em>Selecione...</em>
                </MenuItem>
                {values.map((value, index) => {
                    return <MenuItem key={index} value={value.value}>{value.name}</MenuItem>
                })}
            </Select>
        </FormControl>
    )
}

export default SelectMenu;