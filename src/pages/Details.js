import { Button, Card } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";

export const Details = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Card
      style={{
        padding: "16px",
        margin: "32px 16px",
        minHeight: "600px",
        width: "50%",
      }}
    >
      <Card.Img
        variant="top"
        //   src={location.state.image}
        src="https://www.teahub.io/photos/full/76-767964_carte-da-parati-3d-cantina.jpg"
        style={{ width: "100%", height: "300px" }}
      />
      <Card.Body>
        <Card.Title>{location.state.title}</Card.Title>
        <Card.Text>{location.state.body}</Card.Text>
        <Button variant="primary" onClick={() => navigate("/")}>
          Go To Home
        </Button>
      </Card.Body>
    </Card>
  );
};
