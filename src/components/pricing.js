import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from 'react-bootstrap/ListGroup';

const pricingData = [
    {
      id: 1,
      plan: 'English',
      price: 'Free',
      features: ['Present-simple', 'past-Simple', 'Subject', 'Object', ' Objective',],
      link: 'https://www.google.com'
    },
    {
      id: 2,
      plan: 'Java-Script',
      price: '£149',
      features: ['set-time-out', 'Object.keys', 'value', 'entries', 'JSON формат',],
      link: 'https://www.facebook.com'
    },
    {
      id: 3,
      plan: 'React',
      price: '£349',
      features: ['create-react-app', 'css Variables', 'fluid', 'Css', 'ID', ],
      link: 'https://www.twitter.com'
    }
  ]
 
  
  

function AppPricing(){
    return(
        <section id="pricing" className="block pricing-block">
          <Container fluid>
            <div className="title-holder">
              <h2>Okurmen &amp; Plans</h2> 
              <div className="subtitle">Сабактар</div> 
            </div>
            <Row>
              {
                pricingData.map((pricing) =>{
                    return(
                        <Col sm={4} key={pricing.id}>
                          <div className="heading">
                            <h3>{pricing.plan}</h3>
                            <span className="price">{pricing.price}</span>    
                          </div>  
                          <div className="content">
                            <ListGroup>
                               {
                                pricing.features.map((feature, index) => {
                                    return(
                                        <ListGroup.Item key={index}>
                                            {feature}
                                        </ListGroup.Item>
                                    )
                                })
                               } 
                            </ListGroup>

                          </div>
                          <div className="btn-holder">
                             <a href={pricing.link} className="btn btn-primary">
                             БАСУУ</a>  
                          </div>
                        </Col>
                    );
                })
              }  
            </Row>
          </Container>  
        </section>
    )
}

export default AppPricing;