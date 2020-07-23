
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import SlideThumbNail from './SlideThumbNail';
import TogglePanelInfomation from './TogglePanelInfomation';

const InfoRestaurant = (props) => {
  const [dataById, setDataById] = useState({});
  const [loadingById, setLoadingbyID] = useState(true);
  const history = useHistory();

  useEffect(() => {
    setLoadingbyID(true);
    const fetchDataById = async (byId) => {
      await axios({
        method: "get",
        url: 'https://strapi.privatus.tech/restaurants/?id=' + byId,
        timeout: 1000 * 5, // Wait for 5 seconds
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(response => {
          setDataById(response.data);
        })
        .catch(error => {
          return (
            <div>
              <h1>Error...</h1>
              {error}
            </div>
          )
        });
      setLoadingbyID(false);
    }
    fetchDataById(props.match.params.id);
  }, []);

  if (loadingById) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    )
  }

  const onPrevNextHandle = (num) => {
    if (num === 999) {
      var dataNext = [...dataById];
      var next = dataNext[0].cover;
      next.push(next.shift());
      dataNext[0].cover = next;
      setDataById(dataNext);
    } else if (num === -999) {
      var dataPrev = [...dataById];
      var prev = dataPrev[0].cover
      prev.unshift(prev.pop());
      dataPrev[0].cover = prev;
      setDataById(dataPrev);
    } else {
      var dataTemp = [...dataById];
      var temp = dataTemp[0].cover
      var imgHold = temp[0];
      temp[0] = temp[num];
      temp[num] = imgHold;
      dataTemp[0].cover = temp;
      setDataById(dataTemp);
    }
  }

  return (
    <div className="container">
      <div className="row">
        <i onClick={() => {
          history.goBack()
        }}>&lt;- Back</i>
      </div>
      {
        dataById.map(data => (
          <div key={data.id} >
            <div className="d-flex flex-column row" key={data.name}>
              <h2> {data.name} </h2>
              <h2> {data.price} - {data.category.name} - {data.district}</h2>
              <span>
                {Array(Math.floor(data.note)).fill(<i className="fa fa-star"></i>)}
                {(data.note) - Math.floor(data.note) === 0
                  ? ('')
                  : (<i className="fa fa-star-half"></i>)}
                {(data.note) - Math.floor(data.note) === 0 && Math.floor(data.note) === 4
                  ? ('')
                  : Array(5 - Math.ceil(data.note)).fill(<i className="fa fa-star-o"></i>)
                }
              </span>
            </div>
            <SlideThumbNail imgList={data.cover} onSlide={onPrevNextHandle} loadingById={loadingById} />
            <TogglePanelInfomation dataList={data} />
          </div>
        ))
      }

    </div >
  )
}

export default React.memo(InfoRestaurant);
