import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';

var testimonialsData = [
    {
      id: 1,
      name: 'Сыймык Токтобек уулу',
      description: 'Бүгүнкү күндө программалоо - бул көбүрөөк жана жакшыраак акмактарга каршылык көрсөтүү менен программаларды жазууга умтулган программалык камсыздоону иштеп чыгуучулардын жарышы жана дагы тандалма акмактарды түзүүгө аракет кылган аалам. Аалам жеңгенче..',
      designation: ''
    },
    {
      id: 2,
      name: 'Джасмин Перри',
      description: 'Узак убакыт бою мен үчүн абдан кымбат жана технологиялык жактан өнүккөн нерсенин мынчалык пайдасыз болуп калышы табышмак болуп келген. Анан мен көп өтпөй компьютер укмуштуудай акылдуу нерселерди жасай ала турган акылсыз машина экенин, ал эми программисттер укмуштуудай келесоо нерселерди жасоого таланты бар акылдуу адамдар экенин түшүндүм. Кыскасы, алар бири-бирин табышты',
      designation: ''
    },
    {
      id: 3,
      name: 'Билл Гейтс',
      description: 'Мүчүлүштүктөрдү оңдоо кодун жазуудан эки эсе кыйын. Демек, эгер сиз кодду мүмкүн болушунча акылдуу жазсаңыз, анда аныктама боюнча сиз аны оңдоого акылдуу эмессиз.',
      designation: ''
    }
  ]
  
function AppTestimonials(){
    return(
        <section id="testimonials" className="testimonials-block">
            <Container fluid>
              <div className='title-holder'>
                <h2>Кыргыз тилдуу IT-Академия</h2>
                <div className='subtitle'>Биринчи кадамды сен башта</div>
              </div>  
              <Carousel controls={false}>
              {
                testimonialsData.map((testimonials) =>{
                    return(
                        <Carousel.Item key={testimonials.id}>
                            <blockquote>
                            <p>{testimonials.description}</p>
                            <cite>
                                <span className='name'>{testimonials.name}</span>
                                <span className='designation'>{testimonials.designation}</span>
                            </cite>
                            </blockquote>
                        </Carousel.Item>
                    )
                })
              }
              </Carousel>
            </Container>
        </section>
    )
}


export default AppTestimonials;