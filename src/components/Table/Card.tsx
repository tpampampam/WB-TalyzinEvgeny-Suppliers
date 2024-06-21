import { FC, useState } from 'react';
import ModalUpdate from '../Modal/ModalUpdate';
import ChangeSupply from '../../images/icon-kebab.svg'
import { CHANGE } from '../../utils/constants';
import { Card as CardProps, useDeleteCardMutation } from '../../redux/api/apiSlice';



const Card:FC<CardProps> = (props) => {

    const { id, number, date, city, quantity, type, warehouse, address, status } = props

    const [showModal, setShowModal] = useState<boolean>(false)
    const [openItemId, setOpenItemId] = useState<boolean>(false);

    const [deleteCard, {isLoading, isError}] = useDeleteCardMutation()


    const handleOpen = () => {
        setOpenItemId(prev => !prev);
    }

    const modalStatus = (status: boolean) => {
        setOpenItemId(false);
        setShowModal(status)
    }

    const handleDelete = (id: string) => {
        deleteCard(id).unwrap()
    }

    if(isLoading) return <div>Loading...</div>
    if (isError) return <div>Карточка не удалена</div>;

    return(
       <>
            <div className="table__item-wrapper">
                <div className="table__item">{number}</div>
                <div className="table__item">{date}</div>
                <div className="table__item">{city}</div>
                <div className="table__item">{quantity}{' '}шт.</div>
                <div className="table__item">{type}</div>
                <div className="table__item table__item-adress">
                    <div>{warehouse}</div>
                    <span className='table__item-adress-text'>{address}</span>
                </div>
                <div className="table__item">
                    <div className={`table__item-status ${status === 'Задерживается' ? 'table__item-status-delay' : ''}`}>{status}</div>  
                </div>
                <div className="table__item">
                    <div className='table__item-change' onClick={handleOpen} >
                        <img 
                            src={ChangeSupply} 
                            alt="change supply" 
                        />
                        {openItemId && (
                            <ul className="table__item-change-dropdown">
                                {CHANGE.map(({value, label}) => (
                                    <li 
                                        className="table__item-change-dropdown-option" 
                                        key={value}
                                        onClick={
                                            label === 'Редактировать' 
                                            ? () => modalStatus(true) 
                                            : () => handleDelete(id)
                                        }
                                    >
                                        {label}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            </div>
            {showModal && (
                <ModalUpdate
                    isOpen={showModal}
                    {...props}
                    modalStatus={modalStatus}
                />
            )}
       </>
    )
}
export default Card;