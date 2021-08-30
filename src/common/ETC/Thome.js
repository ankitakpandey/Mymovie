import React from "react";
import Header from '../../header/Header';
import './Home.css';
import GridListU from './GridListU';

function Home() {
    return (
        <div className='Main'>
            <Header/>
            <div className='page-header'>
              Upcoming Movies
            </div>
            <GridListU />
        </div>
    );
  }
  export default Home;