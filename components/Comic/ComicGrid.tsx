import React from 'react';
import { Comic } from 'types/marvelAPI';
import ComicGridCard from './ComicGridCard';
import Grid from '@mui/material/Grid';

interface Props {
    comics: Comic[];
}

const ComicGrid: React.FC<Props> = ({ comics }) => {
    return (
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12, xl: 12 }}>
            {comics.map((comic) => (
                <ComicGridCard key={comic.id} comic={comic} />
            ))}
        </Grid>
    );
}

export default ComicGrid;
