import React from 'react';
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { Comic } from "types/marvelAPI";
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';

interface Props {
  comic: Comic;
}

const ComicCard: React.FC<Props> = ({ comic }) => {
  const perCent: number = parseInt(((comic?.oldPrice - comic?.price) / comic?.oldPrice * 100).toString(), 10);

  return (
    <Card>
        <Grid container spacing={1}> 
        <Grid item xs={12} sm={6}>
      <CardMedia
        component="img"
        alt={comic?.title}
        width="100%"
        height="100%"
        image={`${comic?.thumbnail.path}.${comic?.thumbnail.extension}`}
      />
     </Grid>
     <Grid item xs={12} sm={6}>
      <CardContent>
        <Typography>{comic?.series.name}</Typography>
        <Typography variant="h5" component="div" style={{ marginTop: '25px' }}>{comic?.title}</Typography>
        <Typography style={{ textDecoration: 'line-through', marginTop: '25px' }}>Antes ${comic?.oldPrice}</Typography>
        <Typography style={{ color: 'red' }}>{perCent} % OFF</Typography>
        <Typography variant="h5" style={{ marginTop: '25px' }}>${comic?.price}</Typography>
        <Button style={{ marginTop: '25px' }} variant="contained" disabled={comic?.stock === 0}>{comic?.stock > 0 ? 'COMPRAR' : 'Sin stock disponible'}</Button>
        <Accordion style={{ marginTop: '25px' }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Descripción</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {comic?.description !== "" ? comic?.description : 'No hay descripción disponible'}
          </AccordionDetails>
        </Accordion>
        <Accordion style={{ marginTop: '25px' }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Personajes</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <ul>
              {comic?.characters.items?.map(character => {
                return (
                  <li key={character.name} >
                    <Link href={`/personajes/${character.resourceURI.split("/").at(6)}`}>
                      {character.name}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </AccordionDetails>
        </Accordion>
      </CardContent>
      </Grid>
      </Grid>
    </Card>
  );
}

export default ComicCard;
