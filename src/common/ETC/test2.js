import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {GridList, GridListTile, GridListTileBar} from "@material-ui/core";
import Ugdata from '../screens/home/Ugdata';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
}));

function GridListU() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList className={classes.imageList} cellHeight={250} cols={6}>
        {dataList.map((data) => (
          <GridListTile key={data.id}>
            <img src={data.poster_url} alt={data.title} />
            <GridListTileBar
              title={data.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

export default GridListU;