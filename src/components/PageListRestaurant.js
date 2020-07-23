import React, { useState, useEffect } from 'react';
import LeftSideBar from './LeftSideBar';
import CardRestaurant from './CardRestaurant';
import '../styles/RestaurantPageStyle.css';
import axios from 'axios';
import PaginationForList from './PaginationForList';

const PageListRestaurant = () => {
  var cardPerPage = 4;
  const [data, setData] = useState([]);
  const [dataSort, setDataSort] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await axios.get('https://strapi.privatus.tech/restaurants');
      setData(res.data);
      setDataSort(res.data);
      setLoading(false);
    }
    fetchData();
  }, []);

  if (dataSort.length <= 4) {
    cardPerPage = dataSort.length;
  } else {
    cardPerPage = 4
  }
  const indexOfLastCard = currentPage * cardPerPage;
  const indexOfFirstCard = indexOfLastCard - cardPerPage;
  const currentCard = dataSort.slice(indexOfFirstCard, indexOfLastCard);

  const onPaginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const onSorting = (latestFilter, prevFilter, typeFilter) => {
    var currentData = dataSort;
    if (latestFilter.includes(0)) {
      setDataSort(data);
    } else if (latestFilter.length > 0) {
      if (latestFilter.includes(0)) currentData = data;
      currentData = currentData.filter((rest) => {
        return latestFilter.includes(rest.category.id) ||
          latestFilter.includes(rest.district);
      });
      setDataSort(currentData);
    } else if (prevFilter.category.length + prevFilter.neighborhood.length > 1) {
      currentData = data;
      currentData = currentData.filter((rest) => {
        return prevFilter.neighborhood.includes(rest.district) ||
          prevFilter.category.includes(rest.category.id)
      });
      setDataSort(currentData);
    } else {
      setDataSort(data);
    }
    setCurrentPage(1);
  }

  return (
    <div>
      <div className="Left-SideBar bg-secondary text-white" >
        <LeftSideBar onSorting={onSorting}></LeftSideBar>
      </div>
      <div className="Right-SideBar">
        <div className="container">
          <CardRestaurant data={currentCard} loading={loading} />
        </div>
        <div className="container">
          <PaginationForList cardPerPage={cardPerPage} toTalCards={dataSort.length} onPaginate={onPaginate} />
        </div>
      </div>
    </div>
  )
}

export default PageListRestaurant
