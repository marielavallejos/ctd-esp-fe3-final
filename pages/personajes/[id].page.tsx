import { getCharacter } from 'services/marvel/marvel.service';
import { GetServerSideProps, GetStaticProps, NextPage } from 'next';
import { Character } from 'types/marvelAPI';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

interface Props {
    character: Character;
}

const CharacterPage: NextPage<Props> = ({character}) => {
    if (!character) {
        return <div>Personaje no encontrado</div>;
    }
    return (
        <>
        <Card sx={{ marginTop: 10, padding: 3, gap: 10, height: "fit-content" }}>
        <CardMedia
            component="img"
            alt="Personaje"
            width={400}
            height={400}
            image={`${character.thumbnail.path}.${character.thumbnail.extension}`}
        />
        <CardContent>
        <Typography gutterBottom variant="h4" component="div" align='center'>
          {character.name}
        </Typography>
        </CardContent>

        <CardContent>
        <Typography gutterBottom variant="h5" component="div" align='center'>
          Otros comics de {character.name}
        </Typography>
        
        </CardContent>
        </Card>
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