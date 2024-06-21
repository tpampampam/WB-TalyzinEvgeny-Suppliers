import React, { FC, useMemo, useState } from 'react';
import ModalAdd from '../Modal/ModalAdd';
import Plus from '../../images/icon-plus.svg';
import { getRandomNumber } from '../../utils/common';
import { nanoid } from 'nanoid';

interface SuppliersHeaderProps {
    children: React.ReactNode
}

const SuppliersHeader:FC<SuppliersHeaderProps> = ({children}) => {
    const [showModal, setShowModal] = useState<boolean>(false)

    const randomNumber = useMemo(() => getRandomNumber(), []);
    const randomId = useMemo(() => nanoid(), []);

    return(
        <>
            <div className='sup-header'>
                <h1>Поставки</h1>
                <div className='sup-header__right'>
                    <div className='sup-header__add' onClick={() => setShowModal(true)}>
                        <div className='sup-header__right-icon'>
                            <img 
                                src={Plus} 
                                alt="add supplier" 
                            />
                        </div>
                        <span className='sup-header__right-title'>Добавить поставку</span>
                    </div>
                    <div className='sup-header__search'>
                        {children}
                    </div>
                </div>
            </div>
            {showModal && 
                    (<ModalAdd 
                        number={randomNumber}
                        id={randomId}
                        isOpen={showModal}
                        modalStatus={setShowModal}
                    />)
            }
        </>
    )
}

export default SuppliersHeader;