import * as React from 'react';
// [MaterialUI]
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// [JoyUI]
import IconButton from '@mui/material/IconButton';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Stack from '@mui/material/Stack';
import Switch from '@mui/material/Switch';
// [Icon]
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
// import DeleteIcon from '@mui/icons-material/DeleteIcon';

import { useDispatch } from 'react-redux';
import { toggleLikeDislike, deleteMovie } from '../redux/actions/moviesActions';


const MovieCard = ({movie}) => {
    const [disabled, setDisabled] = React.useState(false);
    const dispatch = useDispatch();

    return(
            <>
                                   <div className=" movie-card">
                                   <Box sx={{ minWidth: 120 }}>
                                    <Card variant="outlined">
                                    <CardContent>
                                        <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
                                        <h3><strong>
                                            {movie.title}
                                        </strong></h3>
                                        </Typography>
                                        <Typography variant="h5" component="div">
                                        <p>{movie.category}</p>
                                        </Typography>
                                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                        <div
                                        className="likes"
                                        style={{ width: `${(movie.likes / (movie.likes + movie.dislikes)) * 100}%` }}
                                        >
                                        </div>
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                    <button >
                                        {movie.liked ? 'Dislike' : 'Like'}
                                    </button>
                                    <Stack spacing={3} alignItems="center">
                                    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', alignItems: 'center' }}>
                                        <IconButton variant="solid" onClick={() => dispatch(toggleLikeDislike(movie.id))}>
                                        <FavoriteBorder />
                                        </IconButton>
                                        <IconButton variant="solid">
                                        {/* <DeleteIcon /> */}
                                        </IconButton>
                                    </Box>
                                    </Stack>

                                    <button onClick={() => dispatch(deleteMovie(movie.id))}>Delete</button>

                                    </CardActions>
                                    </Card>
                                    </Box>
                                    </div>


                    
            </>
    )
};

export default MovieCard;