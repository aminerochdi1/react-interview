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

// [Icons]
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';

import { useDispatch } from 'react-redux';
import { toggleLikeDislike, deleteMovie } from '../redux/actions/moviesActions';


const MovieCard = ({movie}) => {
    const [disabled, setDisabled] = React.useState(false);
    const dispatch = useDispatch();

    return(
            <>
                                   <div className=" movie-card">
                                   <Box style={{ width: 350 }}>

                                    <Card variant="outlined">
                                    <CardContent>
                                    {/* Start[Le titre en gras] */}
                                        <Typography sx={{ fontSize: 18 , fontWeight: 'bold' }} color="text.secondary" >
                                        <h3><strong>
                                            {movie.title}
                                        </strong></h3>
                                        </Typography>
                                        {/* End[Le titre en gras] */}

                                       {/* Start[ la catégorie] */}
                                        <Typography variant="h5" component="div">
                                        <p>
                                            {movie.category}
                                        </p>
                                        </Typography>
                                        {/* End[ la catégorie] */}


                                        <Typography  color="text.secondary">
                                        <div
                                        className="likes" >
                                            <p>Likes: {movie.likes}</p>
                                        </div>
                                        </Typography>
                                    </CardContent>

                                    <CardActions>

                                    <Box sx={{ display: 'flex', gap: 4,  alignItems: 'center',alignContent: 'center' }}>
                                        
                                        <IconButton variant="solid" onClick={() => dispatch(toggleLikeDislike(movie.id))}>
                                        <FavoriteBorderRoundedIcon />
                                        </IconButton>

                                         <IconButton onClick={() => dispatch(deleteMovie(movie.id))}>
                                        <DeleteOutlineRoundedIcon/>
                                        </IconButton>

                                    </Box>


                                    </CardActions>
                                    </Card>

                                    </Box>
                                    </div>


                    
            </>
    )
};

export default MovieCard;