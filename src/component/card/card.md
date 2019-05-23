```js
const item = {
    "collaborative": false,
    "external_urls": {
        "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWXfgo3OOonqa"
    },
    "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWXfgo3OOonqa",
    "id": "37i9dQZF1DWXfgo3OOonqa",
    "images": [{
        "height": null,
        "url": "https://pl.scdn.co/images/pl/default/5f5a8d53851826d5313f5164350f59d1913a506e",
        "width": null
    }],
    "name": "100",
    "owner": {
        "display_name": "Spotify",
        "external_urls": {
            "spotify": "https://open.spotify.com/user/spotify"
        },
        "href": "https://api.spotify.com/v1/users/spotify",
        "id": "spotify",
        "type": "user",
        "uri": "spotify:user:spotify"
    },
    "primary_color": null,
    "public": null,
    "snapshot_id": "MTU1ODUxNTc3NCwwMDAwMDI1YTAwMDAwMTZhZGVjNzcyNGMwMDAwMDE2YWMzNGQxYTRk",
    "tracks": {
        "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWXfgo3OOonqa/tracks",
        "total": 65
    },
    "type": "playlist",
    "uri": "spotify:playlist:37i9dQZF1DWXfgo3OOonqa"
};

<Card item={item} />
```

