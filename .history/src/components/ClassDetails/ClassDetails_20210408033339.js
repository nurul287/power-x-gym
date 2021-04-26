import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";

const checkSquare = <FontAwesomeIcon icon={faCheckSquare} />;
const ClassDetails = () => {
  const { id } = useParams();
  const [classDetails, setClassDetails] = useState({});
  useEffect(() => {
    axios
      .get(`http://localhost:5000/eventDetails/${id}`)
      .then((res) => setClassDetails(res.data))
      .catch((err) => console.log(err));
  }, [id]);
  const {
    image,
    item1,
    item2,
    item3,
    item4,
    item5,
    description,
  } = classDetails;
  return (
    <Container>
      <Row className="row-cols-1 row-cols-md-2 g-4">
        <Col>
          <img
            className="w-100 mb-4"
            style={{
              maxHeight: "500px",
            }}
            src={image}
            alt=""
          />
          <p>{description}</p>
          <div>
            <h6>
              <span>{checkSquare}</span>
              {item1}
            </h6>
            <h6>
              <span>{checkSquare}</span>
              {item2}
            </h6>
            <h6>
              <span>{checkSquare}</span>
              {item3}
            </h6>
            <h6>
              <span>{checkSquare}</span>
              {item4}
            </h6>
            <h6>
              <span>{checkSquare}</span>
              {item5}
            </h6>
          </div>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default ClassDetails;
