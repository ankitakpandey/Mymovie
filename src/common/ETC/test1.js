import React from 'react';
import itemData from '../screens/home/data.json';
import { GridListTile, GridListTileBar } from '@material-ui/core';

export default function GridList() {
  return (
    <div className='root'>
      <GridList className='imageList' cols={2.5}>
        {dataList.map((itemData) => (
          <GridListTile key={itemData.img}>
            <img src={itemData.img} alt={itemData.title} />
            <GridListTileBar
              title={itemData.title}
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
