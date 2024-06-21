import { FC } from "react"

const NameDays: FC = () => {
    const daysOfWeek = ['Пн','Вт','Ср','Чт','Пт','Сб','Вс']

    return(
        <div className="calendar__body-names">
            {daysOfWeek.map((day,i) => (
                <div 
                    key={i} 
                    className={`${(i === 5 || i === 6) ? 'calendar__body-names-active' : ''} `}>
                    {day}
                </div>
            ))}
        </div>
    )
    
}
export default NameDays;