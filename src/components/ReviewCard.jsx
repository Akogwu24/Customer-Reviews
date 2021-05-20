import React, { useState } from 'react';

import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
  Button,
  ButtonGroup,
} from '@material-ui/core';
import people from '../data';
import { makeStyles } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import RefreshIcon from '@material-ui/icons/Refresh';

const useStyles = makeStyles({
  root: {
    maxWidth: '60%',
    margin: '10px auto',
    textAlign: 'center',
  },
  media: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    margin: '15px auto 5px',
  },
  name: {
    fontSize: '2rem',
  },
  job: {
    color: '#009688',
    fontSize: '1.5rem',
    margin: '5px 0',
  },
  text: {
    textAlign: 'justify',
    wordSpacing: '-0.1rem',
    padding: '0 10px',
  },
  nextPrevContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
});

const ReviewCard = () => {
  const classes = useStyles();

  const [index, setIndex] = useState(0);
  const { name, image, job, text } = people[index];

  const nextPerson = () => {
    setIndex((index) => index + 1);
  };

  const previousPerson = (index) => {
    setIndex((index) => index - 1);
  };

  return (
    <div style={{ backgroundColor: 'green' }}>
      <Card className={classes.root}>
        <CardMedia className={classes.media} image={image} title={name} />
        <CardContent>
          <Typography variant='h1' component='h1' className={classes.name}>
            {name}
          </Typography>
          <Typography variant='h2' component='h2' className={classes.job}>
            {job}
          </Typography>
          <Typography variant='body1' component='p' className={classes.text}>
            {text}
          </Typography>
        </CardContent>
        <CardActions className={classes.nextPrevContainer}>
          <ButtonGroup color='primary'>
            <IconButton>
              <ArrowBackIosIcon onClick={previousPerson} />
            </IconButton>
            <IconButton>
              <ArrowForwardIosIcon onClick={nextPerson} />
            </IconButton>
          </ButtonGroup>
          <Button
            onClick={() => setIndex(0)}
            startIcon={<RefreshIcon />}
            variant='contained'
            color='primary'
          >
            Refresh
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default ReviewCard;
