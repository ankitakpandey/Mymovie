import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import itemData from '../screens/home/data.json';
import { GridListTile, GridListTileBar } from '@material-ui/core';  

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

export default function GridList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList className={classes.imageList} cols={2.5}>
        {itemData.map((item) => (
          <GridListTile key={item.img}>
            <img src={item.img} alt={item.title} />
            <GridListTileBar
              title={item.title}
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
