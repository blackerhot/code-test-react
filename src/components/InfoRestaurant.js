
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useHistory } from 'react-router-dom';

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

  return (
    <div className="justify-content-center">
      <div className="Header-Back">
        <i onClick={() => {
          history.goBack()
        }}>&lt;- Back</i>
      </div>
      {
        dataById.map(data => (
          <div key={data.id} className="d-flex flex-row justify-content-center">
            <div nameClass="d-flex flex-row">
              <h2> {data.name} </h2>
              <h2> {data.price} - {data.category.name} - {data.district}</h2>
            </div>
            <div className="left-side-container">
              <img className="img-leftside rounded float-right" src="https://strapi.privatus.tech/uploads/29d5f5ef9bbc4a438cfb9a9299fd0607.jpeg" />
            </div>
            <div className="right-side-container d-flex flex-column ml-2">
              <div>
                <img className="img-rightside mb-1 rounded " src="https://strapi.privatus.tech/uploads/29d5f5ef9bbc4a438cfb9a9299fd0607.jpeg" />
              </div>
              <div>
                <img className="img-rightside mb-1 rounded " src="https://strapi.privatus.tech/uploads/29d5f5ef9bbc4a438cfb9a9299fd0607.jpeg" />
              </div>
              <div>
                <img className="img-rightside mb-0 rounded " src="https://strapi.privatus.tech/uploads/29d5f5ef9bbc4a438cfb9a9299fd0607.jpeg" />
              </div>
            </div>
            <div className="control-panel">
              <button type="button" className="btn-secondary">next</button>
              <button type="button" className="btn-secondary">prev</button>
            </div>
            <div className="FooterInforRest">
            </div>
          </div>
        ))
      }

    </div >
  )
}

export default React.memo(InfoRestaurant);
