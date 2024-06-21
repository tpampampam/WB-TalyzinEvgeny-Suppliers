import { FC } from "react"
import DropCalendar from "./DropCalendar"
import DropDown from "./DropDown"
import { Change } from "../../utils/constants"

interface ModalItemProps {
    title: string
    type: 'drop' | 'calendar' | 'input'
    label?: string
    selectedOption?: string | number
    options?: Change[]
    value?: string | number
    onSelect?: (option: Change) => void
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}


const ModalItem: FC<ModalItemProps> = ({
    type, 
    title, 
    label,  
    selectedOption,
    options, 
    onSelect, 
    value, 
    onChange
}) => {
    
    const element = (type === 'drop') 
    ?  (
            <div className='modal__content-dropdown'>
                <DropDown
                    title={title}
                    label={label!}
                    options={options!}
                    selectedOption={selectedOption as string | number}
                    onSelect={onSelect as (option: Change) => void}
                />
            </div>
        ) 
    : (type === 'calendar')
    ? (
        <div className='modal__content-dropdown'>
            <DropCalendar
                selectedOption={selectedOption as string | number}
                onSelect={onSelect as (option: object) => void}
            />
        </div>
    ) 
    : (
        <div className='modal__content-input'>
            <input 
                type="number"
                name="quantity"
                value={value} 
                onChange={onChange}
            />
            <span>шт.</span>
        </div>
    )


    return (
        <div className='modal__content-item'>
            <div className='modal__content-title'>
                <span>{title}</span>
            </div>
            <div className='modal__content-dropdown'>
                {element}
            </div>
        </div>
    )
}
export default ModalItem;