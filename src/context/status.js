import React, { createContext } from 'react';

import Integration from '../service/integration';

const StatusContext = createContext();

export default class StatusProvider extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            filters: [],
            activeFilters: [],
            allItems: [],
            items: [],
            query: '',

            // update methods
            updateFilters: this.updateFilters,
            filterContents: this.filterContents,

            // control
            timer: false
        }

        this.fetchPlaylists = this.fetchPlaylists.bind(this);
    }

    async componentDidMount() {
        const filters = await Integration.fetchFilters();

        this.setState({
            filters: filters.filters
        });

        this.fetchPlaylists();
    }

    componentWillUnmount() {
        clearInterval(this.state.timer);
    }

    updateFilters = (filters) => {
        this.setState({
            activeFilters: filters,
            query: ''
        });
    }

    filterContents = (query) => {
        const pattern = new RegExp(`.*${query}.*`, 'ig');

        this.setState({
            query: query,
            items: this.state.allItems.filter(item => {
                return pattern.test(item.name);
            })
        })
    }

    async fetchPlaylists() {
        clearInterval(this.state.timer);

        const filters = this.state.activeFilters;
        const playlists = await Integration.fetchPlaylists(filters);

        const timer = setInterval(this.fetchPlaylists, 30000);

        this.setState({
            allItems: playlists.playlists.items,
            items: playlists.playlists.items,
            timer
        });
    }

    render() {
        return (
            <StatusContext.Provider value={this.state}>
                {this.props.children}
            </StatusContext.Provider>
        )
    }
};

export const withStatusContext = Inner => props => {
    return (
        <StatusContext.Consumer>
            {context => {
                return <Inner filters={context.filters}
                                activeFilters={context.activeFilters} 
                                items={context.items} 
                                query={context.query}
                                updateFilters={context.updateFilters}
                                filterContents={context.filterContents} {...props} />
            }}
        </StatusContext.Consumer>
    );
};