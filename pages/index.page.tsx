import type { NextPage } from 'next';
import BodySingle from "components/layouts/body/single/body-single";
import Box from '@mui/material/Box';
import Pagination from '@mui/material/Pagination';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { GetServerSideProps } from "next";
import { ComicResponse } from 'types/marvelAPI';
import { getComics } from 'services/marvel/marvel.service';
import ComicGrid from 'components/Comic/ComicGrid';
interface Props {
    comics: ComicResponse;
}

const comicsPerPage = 12;

const Index: NextPage<Props> = ({ comics }) => {
    const router = useRouter();

    const [page, setPage] = useState<number>(1);
    const totalComics = comics?.data.total || 0;
    const totalPages = Math.ceil(totalComics / comicsPerPage);

    const handleChange = (_: React.ChangeEvent<unknown>, newPage: number) => {
        setPage(newPage);
        router.push(`/?page=${newPage}`);
    };

    const comicsToShow = comics?.data.results || [];

    return (
        <>
            <Head>
                <title>MARVEL COMICS</title>
                <meta name="description" content="Sitio web de comics de Marvel" />
                <meta name="keywords" content="Marvel, comics, personajes, superheroes" />
            </Head>
            <BodySingle title={"MARVEL"}>
                <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                    <Pagination onChange={handleChange} count={totalPages} page={page} size="large" showFirstButton showLastButton />
                </Box>
                <ComicGrid comics={comicsToShow} />
                <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                    <Pagination onChange={handleChange} count={totalPages} page={page} size="large" showFirstButton showLastButton />
                </Box>
            </BodySingle>
        </>
    );
}

export const getServerSideProps: GetServerSideProps = async ({ query, res }) => {
    const page = parseInt(query.page as string ?? '1') || 1;
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