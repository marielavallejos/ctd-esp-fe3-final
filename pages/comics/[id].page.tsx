import React from 'react';
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { getComic, getComics } from '../../services/marvel/marvel.service';
import { Comic, ComicResponse } from "types/marvelAPI";
import Head from "next/head";
import ComicCard from 'components/Comic/ComicCard';
import { useRouter } from 'next/router';



interface Props {
  comic: Comic;
}

const ComicPage: NextPage<Props> = ({ comic }) => {
  const router = useRouter();

  if (!comic) {
    // Redirige al usuario a la página de inicio ("/" en este ejemplo)
    router.push('/');
    return null; // Puedes retornar null o algún otro contenido temporal mientras se redirige
  }
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