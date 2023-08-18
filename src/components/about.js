import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import img1 from "../assets/images/img1.jpg"
import ProgressBar from 'react-bootstrap/ProgressBar';


function AppAbout(){
    const html = 80;
    const responsive = 95;
    const photoshop = 60;
    return(
        <section id="about" className="block about-block">
        <Container>
        <div className='title-holder'>
        <h2>IT-Бул биздин жан жаныбыз</h2>
        <div className='subtitle'>Okurmen</div>
        </div>
            <Row>
                 <Col cm={6}>
                 <Image src={img1}/>
                 </Col>
                 <Col sm={6}>
                 <p>
                 Сиз чекиттерди алдыга карап бириктире албайсыз; сиз аны артка кылчайып гана жасай аласыз. Демек, чекиттер келечекте кандайдыр бир жол менен туташат деп ишениш керек. Бир нерсеге, инстинктке, тагдырга, жашоого, кармага жана башка нерселерге ишенүү керек. Чекиттер туташат деп ишенип, андан кийин жолдон ылдый түшүп кетсе дагы, жүрөгүңүздү ээрчип кетүү ишенимине ээ болот, ал сизди уруп-согулган жолдон чыгарып салса дагы, бул бардык өзгөрүүлөрдү жасайт
                </p>
                <p>
                Өткөн окуяларыңыз жөнүндө эскерүүлөр келечегиңиздин потенциалын чектөөгө жол бербеңиз. Акыл-эсиңизден башка учурларда, жашоодо саякаттап өтө албаган чектериңиз жок.
                </p>
                <div className='progress-block'>
                <h4>HTML / CSS / JavaScript</h4>
                <ProgressBar now={html} label={`${html}%`} />
                </div>
                <div className='progress-block'>
                <h4>responsive</h4>
                <ProgressBar now={responsive} label={`${responsive}%`} />
                </div>
                <div className='progress-block'>
                <h4>photoshop</h4>
                <ProgressBar now={photoshop} label={`${photoshop}%`} />
                </div>

                 </Col>
            </Row>
        </Container>
        </section>
    );
    
}

export default AppAbout;