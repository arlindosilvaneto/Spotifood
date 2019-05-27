import React from 'react';

import StatusProvider from '../context/status';
import FilterContainer from '../container/filter-container';
import PlaylistContainer from '../container/playlist-container';
import Grid from '@material-ui/core/Grid';

import './home.scss';

class Home extends React.Component {

    render() {
        return (
            <div className="app-wrapper">
                <StatusProvider>
                    <Grid container spacing={3}>
                        <Grid container item xs={12} sm={3}>
                            <FilterContainer />
                        </Grid>
                        <Grid container item xs={12} sm={9} spacing={2}>
                            <PlaylistContainer />
                        </Grid>
                    </Grid>
                </StatusProvider>
            </div>
        )
    }
}

export default Home;