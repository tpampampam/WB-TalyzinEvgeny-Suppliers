
import {  FC, useState } from 'react';
import CalendarIcon from '../../images/calendar.svg'
import Calendar from '../Calendar/Calendar';

interface DropCalendarProps {
    selectedOption: string | number;
    onSelect:  (option: object) => void;
}

const DropCalendar: FC<DropCalendarProps> = ({  selectedOption, onSelect }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return(
        <div className="dropdown__wrapper">
            <div 
                className={`dropdown__label ${isOpen ? 'dropdown__label-active' : ''}`}
                onClick={() => setIsOpen(!isOpen)}
            >   
                <span>{selectedOption ? selectedOption : '__.__.____'}</span>
                <img src={CalendarIcon} alt="calendar" />
            </div>
            {isOpen && (
                <div className="dropdown__calendar">
                    <Calendar 
                        onSelect={onSelect}
                    />
                </div>
            )}
        </div>
    )
}

export default DropCalendar;