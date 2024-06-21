import { FC } from 'react';
import { format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, isSameMonth, isSameDay } from 'date-fns';


interface DaysProps {
    currentMonth: Date
    selectedDate: Date
    onSelect: (option: Date) => void;
}

const Days:FC<DaysProps> = ({currentMonth, selectedDate, onSelect}) => {
    const startMonth = startOfMonth(currentMonth);
    const endMonth = endOfMonth(startMonth);
    const startWeek = startOfWeek(startMonth, {weekStartsOn: 1})
    const endWeek = endOfWeek(endMonth, {weekStartsOn: 1})

    let weeks = []
    let days = []
    let day = startWeek

    while(day <= endWeek) {
        for(let i = 0; i < 7; i++) {
            const formatedDay= format(day, 'd')
            const cloneDay = day;
            const dayElement = (
                <div
                    className={`col cell ${
                        !isSameMonth(day, currentMonth)
                        ? 'disabled'
                        : isSameDay(day, selectedDate)
                        ? 'selected'
                        : ''
                    }`}
                  key={day.getTime()} 
                  onClick={() => onSelect(cloneDay)}
                >
                  <span className="number">{formatedDay}</span>
                </div>
            )
            days.push(dayElement);
            day = addDays(day, 1);
        }
        weeks.push(
            <div className="calendar__body-days" key={day.getTime()}>
                {days}
            </div>
        );
        days = [];
     }
        
    return(
        <div>
            {weeks}
        </div>
    )
}

export default Days;