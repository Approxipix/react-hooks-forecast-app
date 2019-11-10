import React from 'react';
import SearchBar from '../../components/SearchBar/SearchBar'
import RecentlyViewed from '../../components/RecentlyViewed/RecentlyViewed'
import './Home.scss';
import { useSelector } from "react-redux";

const Home = () => {
  const { recentWeathers } = useSelector(state => state.weatherReducer);

  return (
    <div className='Home'>
      <div className='Home__container'>
        <h1 className='Home__title'>
          Search the weather forecast
        </h1>
        <SearchBar />
      </div>
      {recentWeathers.length !== 0 && (
        <div className='Home__container'>
          <h1 className='Home__title'>
            Recently viewed
          </h1>
          <RecentlyViewed recentWeathers={recentWeathers}/>
        </div>
      )}
    </div>
  );
};

export default Home;
