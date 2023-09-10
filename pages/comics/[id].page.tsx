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
import { Item } from '../../types/marvelAPI';
import Link from "@mui/material/Link";


interface Props {
    comic: Comic;
}


const ComicPage: NextPage <Props>  = ({comic}) => {

    return (
        <>
        <Card>
            <CardMedia
            component="img"
            alt="Comic"
            width={400}
            height={800}
            image={`${comic?.thumbnail.path}.${comic?.thumbnail.extension}`}>
            </CardMedia>
        </Card>
        <Card>
        <CardContent>
            <Typography variant="h5" component="div" align='center'>{comic?.title}</Typography>
            <Typography>${comic?.oldPrice}</Typography>
            <Typography>${comic?.price}</Typography>
            <Button>COMPRAR</Button>
            <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography>Descripcion</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                {comic?.description}
                            </AccordionDetails>
                        </Accordion>
            <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography>Characters</Typography>
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