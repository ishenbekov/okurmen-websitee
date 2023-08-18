import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const blogData = [
  {
    id: 1,
    image: require("../assets/images/blog1.jpg"),
    time: "15 Nov 2016",
    title: "Алардын конулун которо туурган коффе ичишет",
    description:
      "Когда остаешься один на один с чашечкой бодрящего напитка, то порой возникает ощущение, будто вся жизнь и есть эта чашка, а все остальное неважно..",
    link: "https://www.google.com",
  },
  {
    id: 2,
    image: require("../assets/images/blog2.jpg"),
    time: "10 Nov 2016",
    title: "Оз ойуу менен жаны проект тузушот",
    description:
      "Когда ты делаеш свой собственный проект то это твое самое лучшее время которое ты можешь наслаждаться.",
    link: "https://www.facebook.com",
  },
  {
    id: 3,
    image: require("../assets/images/blog3.jpg"),
    time: "07 Nov 2016",
    title: "Достору менен бирге эс алышат",
    description:
      "Можешь делать свою роботу в тихом пространстве .И наслаждаться этим",
    link: "https://www.twitter.com",
  },
];

function AppBlog() {
  return (
    <section id="blog" className="block blog-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Okurmen окуучулары</h2>
          <div className="subtitle">программисттер бош убактарында эмне кылат</div>
        </div>
        <Row>
          {blogData.map((blog) => {
            return (
              <Col sm={4} key={blog.id}>
                <div className="holder">
                  <Card>
                    <Card.Img variant="top" src={blog.image} />
                    <Card.Body>
                    <time>{blog.time}</time>
                      <Card.Title>{blog.title}</Card.Title>
                      <Card.Text>{blog.description}</Card.Text>      
                      <a href={blog.link} className="btn btn-primary">
                        БАСУУ<i className="fas fa-chevron-right">
                        </i>
                      </a>            
                    </Card.Body>
                  </Card>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
}

export default AppBlog;
