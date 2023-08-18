import Carousel from 'react-bootstrap/Carousel';
let heroData = [
    {
      id: 1,
      image: require('../assets/images/img-hero1.jpg'),
      title: 'Okurmen',
      description: 'Ийгиликке жеткен адамдардын бардыгы улуу кыялкечтер. Алар идеалдуу келечеги жашоолорунун бардык тармактарында кандай болоорун элестетишет жана күн сайын ошол көз-карашка, максатка же максатка умтулушат',
      link: 'https://www.google.com'
    },
    {
      id: 2,
      image: require('../assets/images/img-hero2.jpg'),
      title: 'Келечек бизден башталат',
      description: 'Сиз чекиттерди алдыга карап бириктире албайсыз; сиз аны артка кылчайып гана жасай аласыз. Демек, чекиттер келечекте кандайдыр бир жол менен туташат деп ишениш керек. Бир нерсеге, инстинктке, тагдырга, жашоого, кармага жана башка нерселерге ишенүү керек. Чекиттер туташат деп ишенип, андан кийин жолдон ылдый түшүп кетсе дагы, жүрөгүңүздү ээрчип кетүү ишенимине ээ болот, ал сизди уруп-согулган жолдон чыгарып салса дагы, бул бардык өзгөрүүлөрдү жасайт',
      link: 'https://www.facebook.com'
    },
    {
      id: 3,
      image: require('../assets/images/img-hero3.jpg'),
      title: 'Ар бир кесип ардактуу, ар бир кесип маанилүү',
      description: 'Биз эртеңки күндүн аз гана нерсесин көрө алабыз, бирок ал үчүн иштешибиз керектигин жетиштүү деңгээлде көрөбүз.',
      link: 'https://www.twitter.com'
    }
  ]
  

function AppHero(){
    return (
        <section id="home" className="hero-block"><Carousel>
        {
            heroData.map((hero) =>{
                return(
                    <Carousel.Item key={hero.id}>  
                    <img src={hero.image} alt={"slide" + hero.id}/>    
                    <Carousel.Caption>
                        <h3>{hero.title}</h3>
                        <p>{hero.description}</p>
                        <a className='btn btn-primary' href={hero.link}>
                        БАСУУ
                        </a>
                    </Carousel.Caption>
                 </Carousel.Item>
                )
            })
        }
        
        
      </Carousel>
    </section>
    );
    
}

export default AppHero

