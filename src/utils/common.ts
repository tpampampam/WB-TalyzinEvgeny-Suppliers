import { ModalState } from "../components/Modal/ModalAdd";

export const getRandomNumber = (): string => {
    return  Math.floor(10000 + Math.random() * 90000).toString();
}

export const isValidCard = (card: ModalState): boolean => {
    return Object.values(card).every(value => !!value) && Number(card.quantity) > 0 ;
  };