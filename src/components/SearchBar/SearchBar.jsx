import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Alert, Select } from 'antd';
import CityService from '../../services/CityService';
import './SearchBar.scss';

const { Option } = Select;

const SearchBar = () => {
  const history = useHistory();
  const { apiKey } = useSelector(state => state.rootReducer);
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  const onSearch = city => {
    if (!city) return null;
    setLoading(true);
    CityService.searchCitiesByName(city)
      .then(cities => {
        if (cities[0] !== '%s' && cities[0] !== '') setSearchResults(cities);
        else setSearchResults([])
      })
      .finally(() => setLoading(false) );
  }
  
  const onChange = city => {
    const cityName = city.split(',')[0];
    history.push(`/w/${cityName.toLowerCase()}`);
  }

  if (!apiKey) {
    return (
      <Alert
        message='Error'
        description='No API key found, please go to the settings page and add one.'
        type='error'
        showIcon
      />
    )
  }

  return (
    <Select
      placeholder='Enter city name'
      className='SearchBar'
      size='large'
      showSearch
      showArrow={false}
      loading={loading}
      onSearch={onSearch}
      onChange={onChange}
    >
      {searchResults.map((city, index) => (
        <Option key={index} value={city}>
          {city}
        </Option>
      ))}
    </Select>
  );
};

export default SearchBar;
