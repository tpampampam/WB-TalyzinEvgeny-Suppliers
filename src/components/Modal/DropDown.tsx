
import {  FC, useState } from 'react';
import { useDevice } from '../../hooks/useDevice';
import { Change } from '../../utils/constants';
import ArrowDown from '../../images/icon-chevron-down.svg'
import ArrowUp from '../../images/icon-chevron-top.svg'
import CloseButton from './CloseButton';
import CheckIcon from '../../images/icon-check.svg'

interface DropDownProps {
    title: string
    label: string
    options: Change[]
    selectedOption: string | number;
    onSelect: (option: Change) => void;
}


const DropDown:FC<DropDownProps> = ({ title, label, options, selectedOption, onSelect }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [check, setCheck] = useState<number | null>(null)

    const isMobile = useDevice()

    const handleSelect = (option: Change) => {
        onSelect(option);
        setIsOpen(false);
    };
    const handleSelectMobile = (option: Change) => {
        onSelect(option);
        setCheck(option.value)
    };

    return(
        <div className="dropdown__wrapper">
            <div 
                className={`dropdown__label ${isOpen ? 'dropdown__label-active' : ''}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <span>{selectedOption || label}</span>
                <img src={isOpen ? ArrowUp : ArrowDown} alt="toggle dropdown" />
            </div>
            {isOpen && (
                !isMobile ? 
                (  
                    <ul className="dropdown__select">
                        {options.map((option) => (
                            <li
                                onClick={() => handleSelect(option)}
                                className="select__search-dropdown-option"
                                key={option.value}
                            >   
                                {option.label}
                            </li>
                        ))}
                    </ul>
                ) 
                : 
                (
                    <ul className="dropdown__select">
                        <span className='dropdown__mobile-title'>{title}</span>
                        <CloseButton onClick={() => setIsOpen(false)}/>                              
                        <div className='dropdown__select-body'>
                            {options.map((option: Change) => (
                                <li
                                    onClick={() => handleSelectMobile(option)}
                                    className="select__search-dropdown-option"
                                    key={option.value}
                                >   
                                    <div className='dropdown__mobile-label'>
                                        {option.label}
                                        {check === option.value && (
                                            <div>
                                                <img src={CheckIcon}/>
                                            </div>
                                        )}
                                    </div>
                                </li>
                            ))}
                        </div>
                    </ul>
                )
            )}
        </div>
    )
}

export default DropDown;

