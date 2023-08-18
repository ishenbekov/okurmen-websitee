import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const teamsData = [
    {
      id: 1,
      image: require('../assets/images/beto.JPG'),
      fbLink: 'https://www.facebook.com',
      twitterLink: 'https://www.twitter.com',
      linkedinLink: 'https://www.linkedin.com',
      name: 'Мунарбек Мавляновь',
      designation: 'CEO',
      description: 'Менеджерь'
    },
    {
      id: 2,
      image: require('../assets/beto.2.jpeg'),
      fbLink: 'https://www.facebook.com',
      twitterLink: 'https://www.twitter.com',
      linkedinLink: 'https://www.linkedin.com',
      name: 'Мадумаров Санжар',
      designation: 'Manager',
      description: 'Директор '
    },
    {
      id: 3,
      image: require('../assets/beto.3.jpeg'),
      fbLink: 'https://www.facebook.com',
      twitterLink: 'https://www.twitter.com',
      linkedinLink: 'https://www.linkedin.com',
      name: 'Белек Абдрашитов',
      designation: 'UX Designer',
      description: 'Python Тренери '
    },
    {
      id: 4,
      image: require('../assets/beto.6.jpeg'),
      fbLink: 'https://www.facebook.com',
      twitterLink: 'https://www.twitter.com',
      linkedinLink: 'https://www.linkedin.com',
      name: 'Уланбек Талибаев',
      designation: 'Developer',
      description: 'Менеджерь '
    },
  
  ]
 
  

function AppTeams (){
    return(
        <section id="teams" className="block teams-block">
           <Container>
            <div className="title-holder">
                <h2>Okurmen teams</h2>
                <div className="subtitle">Окурмен командасы</div>
            </div>
            <Row>
                {
                    teamsData.map((teams) => {
                        return(
                            <Col sm={3} key={teams.id}>
                               <div className="image">
                                <Image src={teams.image}/>
                                 <div className="overlay">
                                    <div className="socials">
                                        <ul>
                                            <li><a href={teams.fbLink}><i className="fab fa-facebook-f"></i></a></li>
                                            <li><a href={teams.twitterLink}><i className="fab fa-twitter"></i></a></li>
                                            <li><a href={teams.linkedinLink}><i className="fab fa-linkedin"></i></a></li>
                                        </ul>
                                    </div>
                                 </div>   
                               </div>
                               <div className="content">
                                <h3>{teams.name}</h3>
                                <span className="disignation">{teams.description}</span>
                                <p>{teams.description}</p>
                               </div> 
                            </Col>
                        )
                    })
                }
            </Row>
           </Container> 
        </section>
    )
}

export default AppTeams;