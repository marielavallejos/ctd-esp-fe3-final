import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Character } from "types/marvelAPI";

interface Props {
    character: Character;
}

const CharacterCard: React.FC<Props> = ({character}) => {
    return(
        <Card
    sx={{
        width: '35%', 
        margin: '0 auto', 
        padding: '0.5%', 
        gap: 3,
        height: 'fit-content',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', 
    }}
>
        <CardMedia
            component="img"
            alt="Personaje"
            height={300}
            image={`${character?.thumbnail.path}.${character?.thumbnail.extension}`}
            sx={{ 
                margin: '0 auto', 
                display: 'block', 
            }}
        />
        <CardContent>
        <Typography gutterBottom variant="h4" component="div" align='center'>
          {character?.name}
        </Typography>
        <Typography gutterBottom component="div" align='center'>
        {character?.description !== "" ? character.description : 'No hay descripción disponible'}
        </Typography>
        </CardContent>
        </Card>
    )
}

export default CharacterCard