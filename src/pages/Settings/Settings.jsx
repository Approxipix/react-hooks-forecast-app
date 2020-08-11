import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeApiKey, changeTemperatureUnit } from '../../redux/rootReducer/actions';
import { Select, Input } from 'antd';
import './Settings.scss';

const { Option } = Select;

const Settings = () => {
  const { temperatureUnit, apiKey } = useSelector(state => state.rootReducer);
  const dispatch = useDispatch();

  const onApiKeyChange = key => {
    dispatch(changeApiKey(key))
  }

  const onTempChange = tempUnit => {
    dispatch(changeTemperatureUnit(tempUnit))
  }

  return (
    <section className='Settings'>
      <h1 className='Settings__header'>
        Settings
      </h1>
      <div className='Settings__content'>
        <div className="Settings__input-wrapper">
          <h2 className="Settings__input-title">
            API Key (Open Weather Map)
          </h2>
          <Input
            defaultValue={apiKey}
            placeholder='Enter API Key'
            className='Settings__input'
            size='large'
            onChange={e => onApiKeyChange(e.target.value)}
          />
        </div>
        <div
        >
          <h2 className='Settings__input-title'>
            Temperature Unit
          </h2>
          <Select
            value={temperatureUnit}
            className='Settings__input'
            size='large'
            showArrow={false}
            onChange={onTempChange}
          >
            <Option value='celsius'>
              Celsius
            </Option>
            <Option value='fahrenheit'>
              Fahrenheit
            </Option>
          </Select>
        </div>
      </div>
    </section>
  );
};

export default Settings;
