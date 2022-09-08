import { Card, Row, Col, Button, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";
export const Home = () => {
  // const Dummy_Data = [
  //   {
  //     userId: 1,
  //     id: 1,
  //     title: "to make a blinded choice to reject or provident to task",
  //     body: "because he receives and accepts the accepted consequences that are unencumbered and when he finds annoyanc",
  //     image:
  //       "https://www.teahub.io/photos/full/245-2450374_anime-vocaloid-wallpaper-3d-photo-wallpaper-hatsune-graffiti.jpg",
  //   },
  //   {
  //     userId: 1,
  //     id: 2,
  //     title: "who is to be",
  //     body: "it is the time of life to pursue the things that are to be blamed for the pain of a blessed one, nor avoid the pleasures of flattery, nor any further annoyance to reject one's debts",
  //     image:
  //       "https://www.teahub.io/photos/full/200-2002307_deer-christmas-live-animated-wallpaper-3d-christmas-clock.jpg",
  //   },
  //   {
  //     userId: 1,
  //     id: 3,
  //     title: "abuse her as an exercise in who she or she is",
  //     body: "and who is blinded by the pleasure of the just but by what right to choose, or to the pleasure of the pains or the accusers?",
  //     image:
  //       "https://www.teahub.io/photos/full/102-1024868_custom-3d-stereo-large-mural-wolf-totem-animal.jpg",
  //   },
  //   {
  //     userId: 1,
  //     id: 4,
  //     title: "he is blinded",
  //     body: "to obtain any pleasure by rejecting it and often wanting it to be taken care of",
  //     image:
  //       "https://www.teahub.io/photos/full/76-767964_carte-da-parati-3d-cantina.jpg",
  //   },
  // ];

  const [fetchedData, setFetchedData] = useState([]);
  const fetchData = () => {
    axios
      .get("/posts")
      .then((res) => {
        setFetchedData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
                                                                                                              
  useEffect(() => {
    fetchData();
  }, []);

  const navigate = useNavigate();
  const handleNavigation = (data) => {
    navigate("/details", { state: data });
  };
  return (
    <Container fluid>
      <Row>
        {fetchedData.map((data) => (
          <Col lg={4} md={6} sm={12}>
            <Card
              style={{
                padding: "16px",
                margin: "32px 16px",
                // minHeight: "600px",
              }}
            >
              <Card.Img
                variant="top"
                src="https://www.teahub.io/photos/full/76-767964_carte-da-parati-3d-cantina.jpg"
                style={{ width: "100%", height: "300px" }}
              />
              <Card.Body>
                <Card.Title style={{height:'100px'}}>{data.title}</Card.Title>
                <Card.Text style={{height:'160px'}}>{data.body}</Card.Text>
                <Button
                  variant="primary"
                  onClick={() => handleNavigation(data)}
                >
                  Details
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
