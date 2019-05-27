import React from 'react';

import SelectMenu from './items/select';
import Timestamp from './items/timestamp';
import Number from './items/number';
import Text from './items/text';

import Paper from '@material-ui/core/Paper';

import './filter.scss';

class Filter extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            filters: props.filters
        }
    }

    componentWillReceiveProps(props) {
        this.setState({
            filters: props.filters
        })
    }

    getFilter = (filter, value, onChange) => {
        if(filter.values) {
            return <SelectMenu key={filter.id} filter={filter} value={value} onChange={onChange} />
        } else if(filter.validation && filter.validation.min && filter.validation.max) {
            const min = filter.validation.min;
            const max = filter.validation.max;
    
            filter.values = [];
            [...Array(max + 1).keys()].forEach(value => {
                if(value >= min) {
                    filter.values.push({
                        name: value,
                        value
                    });
                }
            });
            
            return <SelectMenu key={filter.id} filter={filter} value={value} onChange={onChange} />
        } else if(filter.id === 'timestamp') {
            return <Timestamp key={filter.id} filter={filter} value={value} onChange={onChange} />
        } else if(filter.id === 'offset') {
            return <Number key={filter.id} filter={filter} value={value} onChange={onChange} />
        }
    };

    updateFilter = (id, value) => {
        const activeFilters = this.props.activeFilters;

        activeFilters[id] = value;

        this.props.updateFilters(activeFilters);
    }

    filterByName = (id, value) => {
        this.props.filterContents(value);
    }

    render () {
        const activeFilters = this.props.activeFilters;

        return (
            <div className="filter-wrapper">
                <Paper>
                    {this.state.filters.map((filter) => {
                        return this.getFilter(filter, activeFilters[filter.id], this.updateFilter);
                    })}
                    <Text value={this.props.query} id='query' name='Por nome' onChange={this.filterByName} />
                </Paper>
            </div>
        );
    }
};

Filter.defaultProps = {
    updateFilters: () => {},
    filterContents: () => {}
}

export default Filter;