import { FC, useState } from 'react';
import { Card } from '../../redux/api/apiSlice';
import ModalUpdate from '../Modal/ModalUpdate';
import Pencil from '../../images/pencil-create.svg'


const CardMobile:FC<Card> = (props) => {
    const { number, date, status } = props;
    const [showModal, setShowModal] = useState<boolean>(false)

    return(
        <>
            <div className="cardmobile__wrapper">
                <div className='cardmobile__left'> 
                    <div className='cardmobile__left-item'>
                        <span className='cardmobile__subtitle'>Номер</span>
                        <div className='cardmobile__number'>{number}</div>
                    </div>
                    <div className={`table__item-status ${status === 'Задерживается' ? 'table__item-status-delay' : ''}`}>
                        {status}
                    </div>
                </div>
                <div className='cardmobile__right'>
                    <div className='cardmobile__right-date'>
                        <span className='cardmobile__subtitle'>Дата поставки</span>
                        <div className='cardmobile__date'>{date}</div>
                    </div>
                    <div className='cardmobile__right-pencil' onClick={() => setShowModal(true)}>
                        <img 
                            src={Pencil} 
                            alt="change" 
                        />
                    </div>
                </div>
            </div>
            {showModal && (
                <ModalUpdate
                    isOpen={showModal}
                    {...props}
                    modalStatus={setShowModal}
                />
            )}
        </>
    )
}

export default CardMobile;