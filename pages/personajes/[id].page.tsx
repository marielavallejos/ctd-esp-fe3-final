import { getCharacter } from 'services/marvel/marvel.service';
import { GetServerSideProps, GetStaticProps, NextPage } from 'next';
import { Character } from 'types/marvelAPI';
import BodySingle from 'components/layouts/body/single/body-single';
import Head from 'next/head';
import CharacterCard from 'components/Character/CharacterCard';
interface Props {
    character: Character;
}

const CharacterPage: NextPage<Props> = ({character}) => {
    return (
        <>
        <Head>
        <title>MARVEL COMICS</title>
        <meta name="description" content={`Character ${character?.name} from Marvel`}/>
        <meta name="keywords" content={`Marvel, comics, personajes, superheroes, ${character?.name}`} />
        </Head>
        <BodySingle>
            <CharacterCard character={character}/>
        </BodySingle>
        </>
    );
}

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
    const id = parseInt(context.params?.id as string); 

    try {
        const character = await getCharacter(id);
        
        return {
            props: {
                character,
            },
        };
    } catch (error) {
        console.error("Error fetching character:", error);
        return {
            props: {
                character: null, 
            },
        };
    }
};

export default CharacterPage