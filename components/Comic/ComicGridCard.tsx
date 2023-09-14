import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React from 'react';
import { Comic } from 'types/marvelAPI';

interface Props {
    comic: Comic;
}

const ComicGridCard: React.FC<Props> = ({ comic }) => {
    return (
        <Grid item xs={6} sm={4} md={3} xl={2}>
            <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <CardMedia
                    component="img"
                    alt={comic?.title}
                    height={300}
                    image={`${comic?.thumbnail?.path}.${comic.thumbnail.extension}`}
                />
                <CardContent sx={{ flex: 1 }}>
                    <Typography gutterBottom variant="h6" component="div">
                        {comic?.title}
                    </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'space-between' }} >
                    <Button size="small" variant="contained"  href={`/checkout/${comic.id}`} disabled={comic?.stock === 0}>
                        <Typography variant="body2" sx={{ mt: '5px', ml: '5px' }}>
                            COMPRAR
                        </Typography>
                    </Button>
                    <Button size="small" variant="outlined" href={`/comics/${comic.id}`} sx={{ pt: '5px' }}>
                        Ver detalle
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    );
}

export default ComicGridCard;
