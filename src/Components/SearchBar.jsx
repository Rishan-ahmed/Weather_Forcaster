import React, { useEffect, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch, useSelector } from 'react-redux';
import { get_current_temp } from '../state/Action';
import { styled } from '@mui/system';
import { get_forcast } from '../state/ForcastState/Action';
import { get_day_forcast } from '../state/DayForcast/Action';

const SearchBar = ({ placeholder = "Search..." }) => {
  const [location, setLocation] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();


  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          
          setLocation(`${latitude},${longitude}`);
        },
        (error) => {
          console.log("Error getting location: ", error.message);
          setLocation("sylhet"); 
        }
      );
    } else {
      setLocation("sylhet");
    }
  }, []);

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const setNewLocation = () => {
    if (searchValue.trim()) {
      setLocation(searchValue);
    }
  };

  useEffect(() => {
    if (location) {
      dispatch(get_current_temp(location));
      dispatch(get_forcast(location))
      dispatch(get_day_forcast(location))
    }
  }, [location, dispatch]);

  const PopupBody = styled('div')`
    position: absolute;
    padding: 12px 16px;
    margin-top: 8px;
    border-radius: 8px;
    background-color: white;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 0.875rem;
    z-index: 1000;
    border: 1px solid lightgray;
  `;

  const data = useSelector((store) => store.current);
  const forcastData = useSelector((store) => store.forcast);
  console.log(forcastData)

  return (
    <div className="relative w-full">
      <div className="flex items-center border border-gray-300 rounded-full overflow-hidden bg-[#34333D] shadow-sm">
        <input
          style={{ paddingLeft:"50px"}}
          type="text"
          placeholder={placeholder}
          className="outline-none w-full pl-5 bg-transparent text-white placeholder-gray-400"
          onChange={handleChange}
        />
        <div className="flex items-center p-2 pr-4 ">
          <button 
          
          onClick={setNewLocation} >
            <SearchIcon className="text-gray-500" />
          </button>
        </div>
      </div>

      {data.error && (
        <PopupBody>
          <h1>No Location Found!!</h1>
        </PopupBody>
      )}
    </div>
  );
};

export default SearchBar;
