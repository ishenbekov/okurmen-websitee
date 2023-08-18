import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const servicesData = [
    {
      id: 1,
      icon: 'fas fa-clone',
      title: 'Сенин келечегин',
      description: 'Жакшы келечекти жаратуу күчү азыркы учурда камтылган: Сиз жакшы белек түзүү менен жакшы келечек түзөсүз'
    },
    {
      id: 2,
      icon: 'fas fa-snowflake',
      title: 'Үмүтүңдү калтырба',
      description: 'Үмүтү жок жана ушундай экендигин билген адам келечекке таандык болбой калды'
    },
    {
      id: 3,
      icon: 'fas fa-plug',
      title: 'IT бул сенин жолун',
      description: 'Информатикада бардык маселелерди кошумча кыйыр деңгээл менен чечсе болот'
    },
    {
      id: 4,
      icon: 'fas fa-desktop',
      title: 'Кодду жок IT жок',
      description: 'Эгерде биз код саптарынын санын эсептесек, анда биз аларды "чыгарылган саптар" катары эмес, "сатып алынган саптар" деп эсептешибиз керек'
    },
    {
      id: 5,
      icon: 'fas fa-trophy',
      title: 'Кодд бул биздин жаныбыз',
      description: 'Кодду окууга караганда жазуу оңой.'
    },
    {
      id: 6,
      icon: 'fas fa-life-ring',
      title: 'Програмист бул чоң жол',
      description: 'Жакшы програмист кодд жазаганды гана билиш керек эмес изденгнди гана дагы билиш керек'
    }
  ]
  
function AppServices(){
    return(
        <section id="services" className="block services-block">
        <Container>
        <div className='title-holder'>
            <h2>Кандай спатар програмист болушунузга жардам берет   </h2> 
            <div className='subtitle'>Кыялыңдын артынан жөнө </div>      
         </div>
         <Row>
            {servicesData.map((services) => {
                return(
                    <Col sm={4} className='holder' key={services.id}>
                    <div className='icon'>
                    <i className={services.icon}></i>
                    </div>
                    <h3>{services.title}</h3>
                    <p>{services.description}</p>
                    </Col>
                )
            })            
            }
         </Row>
        </Container>
        </section>
    );
}

export default AppServices;