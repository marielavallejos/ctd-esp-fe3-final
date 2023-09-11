import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { getComic, getComics } from '../../services/marvel/marvel.service';
import { Comic, ComicResponse } from "types/marvelAPI";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Link from "@mui/material/Link";

interface Props {
    comic: Comic;
}

const ComicPage: NextPage <Props>  = ({comic}) => { 
    const perCent: number = parseInt(((comic?.oldPrice - comic?.price) / comic?.oldPrice * 100).toString(), 10);

    return (
        <>
        <Card>
            <CardMedia
            component="img"
            alt={comic?.title}
            width={400}
            height={700}
            image={`${comic?.thumbnail.path}.${comic?.thumbnail.extension}`}>
            </CardMedia>
        </Card>
        <Card>
        <CardContent >
            <Typography>{comic?.series.name}</Typography>
            <Typography variant="h5" component="div" align='center' style={{ marginTop: '25px' }}>{comic?.title}</Typography>
            <Typography style={{ textDecoration: 'line-through', marginTop: '25px'}}>Antes ${comic?.oldPrice}</Typography>
            <Typography style={{ color: 'red' }}>{perCent} % OFF</Typography>
            <Typography variant="h5" style={{ marginTop: '25px' }}>${comic?.price}</Typography>
            <Button style={{ marginTop: '25px' }}variant="contained">COMPRAR</Button>
            <Accordion style={{ marginTop: '25px' }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography>Descripción</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                {comic?.description}
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
                                    })
                                    }
                                </ul>

                            </AccordionDetails>
                        </Accordion>
        </CardContent>
        </Card>
        </>
    )
}

    export const getStaticProps: GetStaticProps = async ({ params }) => {
        const id = parseInt(params?.id as string)
        const data: Comic = await getComic(id)
        return {
          props: {
            comic: data,
          },
          revalidate: 60 * 60* 24 
        }
    }
    
    export const getStaticPaths: GetStaticPaths = async () => {
        const data : ComicResponse = await getComics()
        const paths = data.data.results.map((comic) => {
          return { params: { id: comic.id.toString() } }
        })
        return {
          paths,
          fallback: true,
        }
      }

export default ComicPage