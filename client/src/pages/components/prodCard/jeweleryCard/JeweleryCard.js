import React, { useState, useRef, useEffect, useCallback } from "react";
import { GiShoppingCart } from "react-icons/gi";
import { AiOutlineCheck } from "react-icons/ai";
import { addToCart } from "../../crud/Crud.js";

import {
  Background,
  ModalWrapper,
  ModalImg,
  ModalContent,
  Title,
  Description,
  Price,
  PriceContainer,
  ATC,
  CloseModalButton,
} from "../ModalStyles.js";

import {
  Card,
  CardHeader,
  IMG,
  CardInfo,
  TextTile,
  TextBody,
  CardFooter,
  CardButton,
} from "../ProductSylesheet";

const JeweleryCard = ({
  src,
  title,
  description,
  price,
  product,
  numTag,
  setNumTag,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [isAlertVisible, setIsAlertVisible] = useState(false);

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

  const handleButtonClick = () => {
    setIsAlertVisible(true);
  };

  setTimeout(() => {
    setIsAlertVisible(false);
  }, 1000);

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
            <CardButton
              isAlertVisible={isAlertVisible}
              onClick={() => {
                addToCart(product);
                handleButtonClick();
                setNumTag(numTag + 1);
              }}>
              {(isAlertVisible && <AiOutlineCheck />) || <GiShoppingCart />}
            </CardButton>
          </CardFooter>
        </div>
      </Card>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <ModalWrapper showModal={showModal}>
            <ModalImg src={src} />
            <ModalContent>
              <Title>{title}</Title>
              <Description>{description}</Description>
              <PriceContainer>
                <Price>${price}</Price>
                <ATC
                  isAlertVisible={isAlertVisible}
                  onClick={() => {
                    addToCart(product);
                    handleButtonClick();
                    setNumTag(numTag + 1);
                  }}>
                  {(isAlertVisible && <AiOutlineCheck />) || <GiShoppingCart />}
                </ATC>
              </PriceContainer>
            </ModalContent>
            <CloseModalButton
              aria-label="Close modal"
              onClick={() => setShowModal((prev) => !prev)}
            />
          </ModalWrapper>
        </Background>
      ) : null}
    </React.Fragment>
  );
};

export default JeweleryCard;
