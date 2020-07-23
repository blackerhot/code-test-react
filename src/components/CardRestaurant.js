import React from 'react';
import { Link } from 'react-router-dom'
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../styles/RestaurantPageStyle.css'
const CardRestaurant = ({ data, loading }) => {
  if (loading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    )
  } else if (data.length === 0) {
    return (
      <div>
        <h1>Not found Data</h1>
      </div>
    )
  }

  return (
    <Container fluid>
      <Row className="py-2 justify-content-center">
        {
          data.map(data => (
            <Col key={data.id} md="5" className="p-2 justify-content-center">
              <Link to={"/listRestaurant/" + data.id}>
                <Card className="card-rest">
                  <Card.Img variant="top" src={'https://strapi.privatus.tech' + data.cover[0].url} />
                  <Card.Body>
                    <Card.Title>{data.name}</Card.Title>
                    <div className="d-flex">
                      <div>
                        <Card.Text>
                          {data.price}- {data.category.name}- {data.district}
                        </Card.Text>
                      </div>
                      <div className="ml-auto">
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
                    </div>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))
        }
      </Row>
    </Container >
  )
}
export default CardRestaurant
