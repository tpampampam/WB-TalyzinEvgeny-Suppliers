import { FC } from "react";
import  { useState } from 'react';
import { format, addMonths, subMonths } from 'date-fns';
import CalendarHeader from "./CalendarHeader";
import NameDays from "./NameDays";
import Days from "./Days";

interface CalendarProps {
    onSelect: (option: object) => void;
}

const Calendar: FC<CalendarProps> = ({onSelect}) => {
    const [currentMonth, setCurrentMonth] = useState<Date>(new Date())
    const [selectedDate, setSelectedDate] = useState<Date>(new Date());

    const handleSelectDay = (day: Date) => {
        const dayOption = {
            label: format(day, 'dd.MM.yyyy')
        }
        setSelectedDate(day)
        onSelect(dayOption)
    }

    const prevMonth = () => setCurrentMonth(subMonths(currentMonth,1))
    const nextMonth = () => setCurrentMonth(addMonths(currentMonth,1))
    
    return (
        <div className="calendar__wrapper">
            <CalendarHeader 
                currentMonth={currentMonth}
                prevMonth={prevMonth}
                nextMonth={nextMonth}
            />
            <div className="calendar__body">
                <NameDays/>
                <Days
                    currentMonth={currentMonth}
                    selectedDate={selectedDate}
                    onSelect={handleSelectDay}
                />
            </div>
        </div>
    )
}

export default Calendar;