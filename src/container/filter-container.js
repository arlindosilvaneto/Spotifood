import React from 'react';

import { withStatusContext } from '../context/status';
import Filter from '../component/filter';

class FilterContainer extends React.Component {

    render() {
        return <Filter {...this.props} />
    }
}

export default withStatusContext(FilterContainer);