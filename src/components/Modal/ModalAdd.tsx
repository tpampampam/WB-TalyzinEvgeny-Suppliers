import { ChangeEvent, FC, useState } from 'react'
import { ModalButton } from './ModalButton'
import CloseButton from './CloseButton'
import ModalTitle from './ModalTitle'
import ModalItem from './ModalItem'
import Validate from './Validate'
import { CITY_WAREHOUSES, Change, Cities, DATA, WAREHOUSES } from '../../utils/constants'
import { isValidCard } from '../../utils/common'
import { Card, useAddNewCardMutation} from '../../redux/api/apiSlice'

interface ModalAddProps  {
    id: string
    number: string
    isOpen: boolean
    modalStatus: (value: boolean) => void
}

export type ModalState = Omit<Card, 'quantity'> & {quantity: number | string}

const ModalAdd:FC<ModalAddProps> = ({id, number, isOpen, modalStatus}) => {

    const [addNewCard, {isLoading, isError}] = useAddNewCardMutation() 
    
    const [values, setValues] = useState <ModalState>({
        id,
        date: '',
        number,
        city: '' as Cities,
        type: '',
        warehouse: '',
        address: '',
        status: '',
        quantity: '0' 
    });
    const [isValid, setIsValid] = useState<boolean>(true)
    const handleAdd = () => {
        if(!isValidCard(values)){
            setIsValid(false)
        } else {
            const numberQuantity = { ...values, quantity: Number(values.quantity) };
            setIsValid(true)
            addNewCard(numberQuantity).unwrap()
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
            setValues(prev => ({
                ...prev,
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

    if(isLoading) return <div>Loading...</div>
    if(isError) return <div>Ошибка при добавлении данных</div>
    if (!isOpen) return null;

    const filtredWareHouses = CITY_WAREHOUSES[values.city] || [] 
    return(
        <div className="modal">
            <div className="modal__container">
                <CloseButton onClick={() => modalStatus(false)}/>
                <div className="modal__form">
                    <ModalTitle
                        title='Новая поставка'
                        number={number}
                    />
                    {!isValid && <Validate/>}
                    <div className="modal__content">
                        <ModalItem
                            type='calendar'
                            title='Дата поставки'
                            selectedOption={values.date}
                            onSelect={(option: Change) => handleDropdownSelect('date', option)}
                        /> 
                        <ModalItem
                            type='drop'
                            title='Город'
                            label={values.city}
                            options={DATA.city}
                            selectedOption={values.city}
                            onSelect={(option: Change) => handleDropdownSelect('city', option)}
                        />
                         <ModalItem
                            type='drop'
                            title='Тип поставки'
                            label={values.type}
                            options={DATA.type}
                            selectedOption={values.type}
                            onSelect={(option: Change) => handleDropdownSelect('type', option)}
                        />
                        <ModalItem
                            type='input'
                            title='Количество'
                            label={values.type}
                            value={values.quantity} 
                            onChange={handleInputChange}
                        />   
                        <ModalItem
                            type='drop'
                            title='Склад'
                            label={values.warehouse}
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
                                title='Создать'
                                onClick={handleAdd}
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

export default ModalAdd;
