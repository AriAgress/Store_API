import React, { useState, useRef, useEffect, useCallback } from "react";
import { GiShoppingCart } from "react-icons/gi";

import {
  Background,
  ModalWrapper,
  ModalImg,
  ModalContent,
  CloseModalButton,
} from "../Modal.js";

import {
  CardWrapper,
  Card,
  CardHeader,
  IMG,
  CardInfo,
  TextTile,
  TextBody,
  CardFooter,
  CardButton,
} from "../ProductSylesheet";

const HomeCard = ({ src, title, description, price }) => {
  const [showModal, setShowModal] = useState(false);

  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
        console.log("I pressed");
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <React.Fragment>
      <Card>
        <CardHeader>
          <IMG src={src} onClick={openModal} />
          <CardInfo>
            <TextTile>{title} </TextTile>
            <TextBody>{description}</TextBody>
          </CardInfo>
        </CardHeader>
        <div>
          <CardFooter>
            <TextTile>${price}</TextTile>
            <CardButton>
              <GiShoppingCart />
            </CardButton>
          </CardFooter>
        </div>
      </Card>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <div>
            <ModalWrapper showModal={showModal}>
              <ModalImg src={src} />
              <ModalContent>
                <h1>{title}</h1>
                <h3>{description}</h3>
                <p>{price}</p>
              </ModalContent>
              <CloseModalButton
                aria-label="Close modal"
                onClick={() => setShowModal((prev) => !prev)}
              />
            </ModalWrapper>
          </div>
        </Background>
      ) : null}
    </React.Fragment>
  );
};

export default HomeCard;
