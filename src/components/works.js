import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Pagination from "react-bootstrap/Pagination";

const worksData = [
  {
    id: 1,
    link: "https://www.google.com",
    image: require("../assets/blog.1.jpg"),
    title: "Линус торвальдс",
    subtitle: "Програмист",
  },
  {
    id: 2,
    link: "https://www.google.com",
    image: require("../assets/blog.5.jpg"),
    title: "Билл Гейтс",
    subtitle: "Програмист",
  },
  {
    id: 3,
    link: "https://www.google.com",
    image: require("../assets/blog.7.jpg"),
    title: "Сэр Тим Бернерс-Ли",
    subtitle: "Програмист "
  },
  {
    id: 4,
    link: "https://www.google.com",
    image: require("../assets/blog.8.jpg"),
    title: "Алан Матисон Тьюринг",
    subtitle: "Програмист",
  },
  {
    id: 5,
    link: "https://www.google.com",
    image: require("../assets/blog.10.jpg"),
    title: "Ларри Пейдж и Сергей Брин",
    subtitle: "Основатели Google",
  },
  {
    id: 6,
    link: "https://www.google.com",
    image: require("../assets/идщпю11.jpg"),
    title: "Брайан Керниган",
    subtitle: "Ученный информатеки",
    
  },
  
];

let active = 5;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>
  );
}

function AppWorks() {
  return (
    <section id="works" className="block works-block">
      <Container>
        <div className="title-holder">
          <h2>Создатели </h2>
          <div className="sub-title">Великие програмисты</div>
        </div>
        <Row className="portfoliolist">
          {worksData.map((works) => {
            return (
              <Col sm={4} key={works.id}>
                <div className="portfolio-wrapper">
                  <a href={works.link}>
                    <Image src={works.image} />
                    
                    <div className="label text-center">
                      <h3>{works.title}</h3>
                      <p>{works.subtitle}</p>
                    </div>
                  </a>
                </div>
              </Col>
            )
          })}
        </Row>
        <Pagination>{items}</Pagination>
      </Container>
    </section>
  );
}

export default AppWorks;
