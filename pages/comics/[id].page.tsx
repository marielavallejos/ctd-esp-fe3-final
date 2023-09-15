import React from 'react';
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { getComic, getComics } from '../../services/marvel/marvel.service';
import { Comic, ComicResponse } from "types/marvelAPI";
import Head from "next/head";
import ComicCard from 'components/Comic/ComicCard';



interface Props {
  comic: Comic;
}

const ComicPage: NextPage<Props> = ({ comic }) => {
  return (
    <>
      <Head>
        <title>MARVEL COMICS</title>
        <meta name="description" content={`Comic ${comic?.title} from ${comic?.series} of Marvel`} />
        <meta name="keywords" content={`Marvel, comics, personajes, superheroes, ${comic?.title}, ${comic?.characters}`} />
      </Head>
      <ComicCard comic={comic} /> 
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = parseInt(params?.id as string)
  const data: Comic = await getComic(id)
  return {
    props: {
      comic: data,
    },
    revalidate: 60 * 60 * 24
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const data: ComicResponse = await getComics()
  const paths = data.data.results.map((comic) => {
    return { params: { id: comic.id.toString() } }
  })
  return {
    paths,
    fallback: true,
  }
}

export default ComicPage;