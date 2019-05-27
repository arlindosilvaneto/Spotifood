import React from 'react';

import Grid from '@material-ui/core/Grid';

import Card from '../component/card';
import { withStatusContext } from '../context/status';

const PlaylistContainer = ({items}) => {

    return items.map((item, index) => {
            return (
                <Grid item xs={12} sm={3}>
                    <Card key={index} item={item} />
                </Grid>
            );
        }) 
}

export default withStatusContext(PlaylistContainer);