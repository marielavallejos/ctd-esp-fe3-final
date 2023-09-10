import type { NextPage } from 'next'
import Head from 'next/head'
import BodySingle from "dh-marvel/components/layouts/body/single/body-single";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { getComics } from 'dh-marvel/services/marvel/marvel.service';
import { GetServerSideProps } from "next";
import { useState, useEffect } from 'react';
import { Comic, ComicResponse} from 'types/marvelAPI';

interface Props {
    comics: ComicResponse;
}

const Index: NextPage<Props> = ({ comics }) => {

    return (
        <div>
            
        </div>



    )

}

export const getServerSideProps: GetServerSideProps = async () => {
    const comics = await getComics(0, 12);

    return {
        props: {
            comics,
        },
    };
};

export default Index