import React, { useState, useEffect } from 'react';
import LeftSideBar from './LeftSideBar';
import CardRestaurant from './CardRestaurant';
import '../styles/RestaurantPageStyle.css';
import axios from 'axios';
import PaginationForList from './PaginationForList';

const PageListRestaurant = () => {
  const cardPerPage = 4;

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await axios.get('https://strapi.privatus.tech/restaurants');
      setData(res.data);
      setLoading(false);
    }
    fetchData();
  }, []);

  const indexOfLastCard = currentPage * cardPerPage;
  const indexOfFirstCard = indexOfLastCard - cardPerPage;
  const currentCard = data.slice(indexOfFirstCard, indexOfLastCard);

  const onPaginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <div className="Left-SideBar bg-secondary text-white" >
        <LeftSideBar></LeftSideBar>
      </div>
      <div className="Right-SideBar">
        <CardRestaurant data={currentCard} loading={loading} />
        <PaginationForList cardPerPage={cardPerPage} toTalCards={data.length} onPaginate={onPaginate} />
      </div>
    </div>
  )
}

export default PageListRestaurant
