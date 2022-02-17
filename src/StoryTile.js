import React, { useEffect, useState, useHistory } from "react";
import {
  Card,
  CardLink,
  CardBody,
  CardTitle,
  Row,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import "./StoryTile.css";

const StoryTile = () => {
  const [data, setData] = useState([]);
  const [isLoaded, setLoaded] = useState(false);

  useEffect(() => {
    const getData = async () => {
      await fetch("http://localhost:3001/headlines")
        .then((res) => res.json())
        .then((data) => setData(data))
        .then(setLoaded(true));
    };
    getData();
  }, []);
  const token = localStorage.getItem("NNC-token");
  return (
    <>
      <h1 className="display-1 pl-3">Today's Headlines</h1>
      <Row>
        {isLoaded
          ? data.map((article) => (
              <Card
                className="border-0 pr-2 m-4"
                key={article.article_id}
                style={{ height: "25rem", width: "18rem" }}
              >
                <CardBody>
                  <CardTitle tag="h6">{article.title}</CardTitle>
                </CardBody>
                {article.img ? (
                  <img width="100%" src={article.img} alt="alt img" />
                ) : (
                  <img
                    height="90%"
                    src="https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png"
                    alt="alt img"
                  />
                )}
                <CardBody>
                  <a href={article.original_url}>
                    <Button>View Article</Button>
                  </a>
                </CardBody>
              </Card>
            ))
          : "Loading..."}
      </Row>
    </>
  );
};

export default StoryTile;
