import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React from 'react';
import { Comic } from 'types/marvelAPI';

interface Props {
    comic: Comic;
}

const ComicFormCard: React.FC<Props> = ({ comic }) => {
    return (
        <Grid item xs={6} sm={4} md={3} xl={2} mb={2}>
            <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <CardMedia
                    component="img"
                    alt={comic?.title}
                    height={200}
                    image={`${comic?.thumbnail?.path}.${comic.thumbnail.extension}`}
                />
                <CardContent sx={{ flex: 1 }}>
                    <Typography gutterBottom variant="h6" component="div" align='center'>
                        {comic?.title}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div" align='center'>
                        Precio ${comic?.price}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
}

export default ComicFormCard;
