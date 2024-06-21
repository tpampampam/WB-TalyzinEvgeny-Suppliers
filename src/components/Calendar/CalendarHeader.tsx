import { FC } from "react"
import LeftArrow from '../../images/leftArr.svg'
import RightArrow from '../../images/rightArr.svg';

type HeaderProps = {
    currentMonth: Date
    prevMonth: () => void
    nextMonth: () => void
}


const CalendarHeader: FC<HeaderProps> = ({prevMonth, nextMonth, currentMonth} ) => {
    
    const rusMonthName = (date: Date) => {
        const months = [
            'Январь', 'Февраль', 'Март', 'Апрель',
            'Май', 'Июнь', 'Июль', 'Август', 
            'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
        ];
        const month = months[date.getMonth()]
        const year = date.getFullYear() 
        return `${month}${' '}${year}`
    };


    const headerDate  = rusMonthName(currentMonth)

    return(
        <div className="calendar__header">
            <div className='calendar__header-arrow' onClick={prevMonth}>
                <img 
                    src={LeftArrow} 
                    alt="left arrow" 
                />
            </div>
            <div className="calendar__header-title">
                {headerDate}
            </div>
            <div className='calendar__header-arrow' onClick={nextMonth}>
                <img 
                    src={RightArrow} 
                    alt="right arrow" 
                />
            </div>
        </div>
    )
}
export default CalendarHeader;
