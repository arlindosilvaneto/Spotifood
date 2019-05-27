import React from 'react';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import './card.scss';

const ItemCard = ({item: {
    images: [{url: image}], 
    name
}}) => {
    return (
        <Card>
            <CardActionArea>
                <CardMedia
                    image={image}
                    title={name} />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    
                </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default ItemCard;