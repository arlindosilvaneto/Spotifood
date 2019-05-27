import Config from '../config/app';

export default class Integration {

    static async fetchFilters() {
        const url = Config.filtersUrl;

        const response = await fetch(url);
            
        return await response.json();
    }

    static async fetchPlaylists(filters) {
        const url = Config.playlistsUrl;
        const token = Config.token;
        const query = Integration.getQuery(filters);
        
        const response = await fetch(`${url}${query}`, {headers: {
            Authorization: `Bearer ${token}`
        }});

        return await response.json();
    }

    static getQuery(filters) {
        const esc = encodeURIComponent;
        let query = [];

        for(let filter in filters) {
            query.push(esc(filter) + '=' + esc(filters[filter]))
        }

        return query.length ? `?${query.join('&')}` : '';
    }

}