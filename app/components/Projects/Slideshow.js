import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";

export default function Slideshow(props) {
  return (
    <Modal
      show={props.show}
      onHide={props.handleClose}
      centered={true}
      size="lg"
      className="modal"
      dialogClassName="modal-dialog"
    >
      <Carousel>
        {props.project &&
          props.project.slides.map(slide => (
            <Carousel.Item>
              <Image
                src={"images/" + props.project.folder + "/" + slide.image}
                alt={slide.caption}
                style={{ width: "100%" }}
              />
              <Carousel.Caption style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>{slide.caption}</Carousel.Caption>
            </Carousel.Item>
          ))}
      </Carousel>
    </Modal>
  );
}
