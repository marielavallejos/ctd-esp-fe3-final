import type { NextPage } from 'next'
import BodySingle from "components/layouts/body/single/body-single";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { GetServerSideProps } from "next";
import { ComicResponse } from 'types/marvelAPI';
import Box from '@mui/material/Box';
import { useRouter } from 'next/router';
import Pagination from '@mui/material/Pagination';
import { useState } from 'react';
import { getComics } from 'services/marvel/marvel.service';

interface Props {
    comics: ComicResponse;
}

const comicsPerPage = 12; 

const Index: NextPage<Props> = ({ comics }) => {
    const router = useRouter();
    const handleClickBuy = (id: string) => {
        router.push(`/checkout/${id}`);
    }

    const [page, setPage] = useState<number>(1);
    const totalComics = comics?.data.total || 0;
    const totalPages = Math.ceil(totalComics / comicsPerPage);

    const handleChange = (_: React.ChangeEvent<unknown>, newPage: number) => {
        setPage(newPage);
        router.push(`/?page=${newPage}`);
    };


    const comicsToShow = comics?.data.results || [];

    return (
        <BodySingle title={"MARVEL"}>
            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                <Pagination onChange={handleChange} count={totalPages} page={page} size="large" showFirstButton showLastButton />
            </Box>
            <Box sx={{ flexGrow: 1 , m:'20px auto 40px'}}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12, xl: 12 }}>
                    {comicsToShow.map((comic) => (
                        <Grid item xs={2} sm={4} md={4} xl={3} key={comic.id}>
                            <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                                <CardMedia
                                    component="img"
                                    alt={comic?.title}
                                    height={500}
                                    width={250}
                                    image={`${comic?.thumbnail?.path}.${comic.thumbnail.extension}`}
                                />
                                <CardContent sx={{ flex: 1 }}>
                                    <Typography gutterBottom variant="h6" component="div">
                                        {comic?.title}
                                    </Typography>
                                </CardContent>
                                <CardActions sx={{justifyContent:'space-between'}} >
                                    <Button size="small" variant="outlined" onClick={()=>handleClickBuy(String(comic.id))}>
                                        <Typography variant="body2" sx={{mt:'5px', ml:'5px'}}>
                                            Comprar
                                        </Typography>
                                    </Button>
                                    <Button size="small" variant="outlined" href={`/comics/${comic.id}`} sx={{pt:'5px'}}>
                                        Ver detalle
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
                <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                    <Pagination onChange={handleChange} count={totalPages} page={page} size="large" showFirstButton showLastButton />
                </Box>
            </Box>
        </BodySingle>
    );
}

export const getServerSideProps: GetServerSideProps = async ({ query, res }) => {
    const page = parseInt(query.page as string ?? 1) || 1; 
    const offset = (page - 1) * comicsPerPage; 
    const comics = await getComics(offset, comicsPerPage);
    res.setHeader("Cache-Control", "public, s-maxage=10, stale-while-revalidate");

    return {
        props: {
            comics,
        },
    };
};

export default Index;
