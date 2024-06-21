
import { ChangeEvent, FC, useState } from 'react'
import { CITY_WAREHOUSES, Change, Cities, DATA, WAREHOUSES } from '../../utils/constants'
import { ModalButton } from './ModalButton'
import { Card, useUpdateCardMutation } from '../../redux/api/apiSlice'
import CloseButton from './CloseButton'
import ModalTitle from './ModalTitle'
import ModalItem from './ModalItem'
import Validate from './Validate'
import { ModalState } from './ModalAdd'
import { isValidCard } from '../../utils/common'


interface ModalUpdateProps extends Card{
    isOpen: boolean
    modalStatus: (value: boolean) => void
}

const ModalUpdate:FC<ModalUpdateProps> = (
    {
        id, 
        date, 
        number,
        city, 
        address, 
        type, 
        warehouse, 
        status, 
        quantity, 
        isOpen,
        modalStatus
    }) => {

    const [updateCard, {isLoading, isError}] = useUpdateCardMutation() 

    const [values, setValues] = useState<ModalState>({
        id,
        date,
        number,
        city,
        type,
        warehouse,
        address,
        status,
        quantity
    });
    const [isValid, setIsValid] = useState<boolean>(true)

    const handleUpdate = () => {
        if(!isValidCard(values)){
            setIsValid(false)
        } else {
            const numberQuantity = { ...values, quantity: Number(values.quantity) };
            setIsValid(true)
            updateCard(numberQuantity).unwrap()
            modalStatus(false);
        }    
    };


    const handleDropdownSelect = (field: string, {value, label}: Change) => {
        if(field === 'city') {
            const firstWarehouse = CITY_WAREHOUSES[label as Cities][0]
            setValues(prev => ({
                ...prev,
                city: label as Cities,
                warehouse: firstWarehouse.label,
                address: WAREHOUSES[firstWarehouse.value]
            }))
        } else if (field === 'warehouse') {
            setValues(prev => ({
                ...prev,
                warehouse: label,
                address: WAREHOUSES[value]
            }))
        } else {
            setValues((prevValues) => ({
                ...prevValues,
                [field]: label,
            }));
        }
        
    };

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setValues((prevValues) => ({
        ...prevValues,
        [name]: value,
        }));
    };

    if(isLoading) return <div>Loading...</div>;
    if(isError) return <div>Ошибка при обнавлении данных</div>;
    if (!isOpen) return null;

    const filtredWareHouses = CITY_WAREHOUSES[values.city] || [] 
    return(
        <div className="modal">
            <div className="modal__container">  
                <CloseButton onClick={() => modalStatus(false)}/>
                <div className="modal__form">
                    <ModalTitle
                        title='Редактирование'
                        number={number}
                    />
                    {!isValid && <Validate/>}
                    <div className="modal__content">
                        <ModalItem
                            type='drop'
                            title='Город'
                            label={city}
                            options={DATA.city}
                            selectedOption={values.city}
                            onSelect={(option: Change) => handleDropdownSelect('city', option)}
                        />
                        <ModalItem
                            type='drop'
                            title='Тип поставки'
                            label={type}
                            options={DATA.type}
                            selectedOption={values.type}
                            onSelect={(option: Change) => handleDropdownSelect('type', option)}
                        />
                        <ModalItem
                            type='input'
                            title='Количество'
                            label={type}
                            value={values.quantity} 
                            onChange={handleInputChange}
                        />
                        <ModalItem
                            type='drop'
                            title='Склад'
                            label={warehouse}
                            options={filtredWareHouses }
                            selectedOption={values.warehouse}
                            onSelect={(option: Change) => handleDropdownSelect('warehouse', option)}
                        />   
                        <ModalItem
                            type='drop'
                            title='Статус'
                            label={status}
                            options={DATA.status}
                            selectedOption={values.status}
                            onSelect={(option: Change) => handleDropdownSelect('status', option)}
                        /> 
                        <div className="modal__btns">
                            <ModalButton 
                                type="submit"
                                title='Сохранить'
                                onClick={handleUpdate}
                            />
                            <ModalButton
                                type="cancel"
                                title='Отменить'  
                                onClick={() => modalStatus(false)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalUpdate;

