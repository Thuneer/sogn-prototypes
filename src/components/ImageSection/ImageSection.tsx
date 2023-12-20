import React from "react";
import classes from "./ImageSection.module.css";
import { Container, Row, Col } from "react-bootstrap";
import { Tag } from "../Tag/Tag";
import cn from "classnames";

type ImageSectionProps = {
  image: string;
  title: string;
  desc: string;
  imgDir?: "left" | "right";
  tagColor: "red" | "blue" | "yellow";
};

export const ImageSection = ({
  image,
  title,
  desc,
  imgDir = "left",
  tagColor = "red",
}: ImageSectionProps) => {
  return (
    <div className={classes.section}>
      <Container>
        <Row
          className={cn(classes.row, { [classes.test]: imgDir === "right" })}
        >
          <Col xl={6}>
            <div className={classes.imageContainer}>
              <img src={image} alt="image" />
            </div>
          </Col>

          <Col xl={6}>
            <div className={classes.textContainer}>
              <Tag color={tagColor}>Offentlig sektor</Tag>
              <h2 className={classes.title}>{title}</h2>
              <p className={classes.desc}>{desc}</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
