import React, { useState, useEffect } from 'react'

const SlideThumbNail = (props) => {
  const [imgCover, setImgCover] = useState([]);
  useEffect(() => {
    setImgCover(props.imgList);
  }, []);

  const onSlide = (val) => {
    props.onSlide(val);
  }
  if (props.loadingById) {
    return (
      <div>
        Loading..
      </div>
    )
  }
  return (
    <div className="row my-3">
      <div className="left-side-container">
        {imgCover.map((img, index) => {
          if (index === 0) {
            return (
              <div key={index}>
                <img className="img-leftside rounded" alt={img.name} src={'https://strapi.privatus.tech' + img.url} />
              </div>
            )
          }
        })}
      </div>
      <div className="right-side-container ml-2 col">
        {imgCover.map((img, index) => {
          if (index !== 0) {
            return (
              <div key={index}>
                <img className="img-rightside mb-1 rounded" onClick={() => onSlide(index)} alt={img.name} src={'https://strapi.privatus.tech' + img.url} />
              </div>
            )
          }
        })}
      </div>
      <div className="control-panel position-fixed">
        <button onClick={() => onSlide(999)} type="button" className="btn-secondary">next</button>
        <button onClick={() => onSlide(-999)} type="button" className="btn-secondary">prev</button>
      </div>
    </div >
  )
}

export default SlideThumbNail
