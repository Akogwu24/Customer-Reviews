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
  Container,
} from '@material-ui/core';
import people from '../data';
import { makeStyles } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import RefreshIcon from '@material-ui/icons/Refresh';

const useStyles = makeStyles({
  root: {
    maxWidth: '100%',
    margin: '10px auto',
    textAlign: 'center',
  },
  // container: {
  //   width: '100vw',
  //   height: '100vh',
  //   display: 'flex',
  //   flexDirection: 'column',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },

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
  refreshbtn: {
    margin: '10px 15px',
  },
});

const ReviewCard = () => {
  const classes = useStyles();

  const [index, setIndex] = useState(0);
  const { name, image, job, text } = people[index];

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    } else if (number < 0) {
      return people.length - 1;
    }
    return number;
  };

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const previousPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  const handleRandom = () => {
    let randomIndex = Math.floor(Math.random() * 4);
    setIndex(randomIndex);
  };

  return (
    <Container className='container'>
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
            className={classes.refreshbtn}
            onClick={handleRandom}
            startIcon={<RefreshIcon />}
            variant='contained'
            color='primary'
          >
            Random Person
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
};

export default ReviewCard;
