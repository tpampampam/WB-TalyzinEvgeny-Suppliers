import  { FC, useEffect,  useState } from "react";
import ArrowDown from '../../images/icon-chevron-down.svg';
import ArrowUp from '../../images/icon-chevron-top.svg';
import {  OPTIONS, Option } from "../../utils/constants";



interface SelectListProps {
    onType: (value: string) => void
}

const SelectList: FC<SelectListProps> = ({onType}) => {

    const [showList, setShowList] = useState<boolean>(false)    
    const [selectedLabel, setSelectedLabel] = useState<number | null>(() => {
        const storedValue = localStorage.getItem('selectedLabel');
        return storedValue ? JSON.parse(storedValue) : null;
    })    

    useEffect(() => {
        if (selectedLabel !== null) {
            localStorage.setItem('selectedLabel', JSON.stringify(selectedLabel));
        }
    }, [selectedLabel]);
   
    const handleChoice = ({value, type}: Omit<Option, 'label'>) => {
        setSelectedLabel(value)
        onType(type) 
        setShowList(false)
    }

    return(
        <div className="select__wrapper">
            <div 
                className={`select__search ${showList ? 'select__search-active' : ''}`} 
                onClick={() => setShowList(!showList)}
            >
                <span>
                    {selectedLabel 
                    ? OPTIONS[selectedLabel - 1].label 
                    : OPTIONS[0].label}
                </span>
                <img 
                    src={showList ? ArrowUp : ArrowDown} 
                    alt="toggle type" 
                />
            </div>
            {showList && (
                <ul className="select__search-dropdown">
                    {OPTIONS.map(({value, label, type}) => (
                        <li 
                            onClick={() => handleChoice({value, type})} 
                            className="select__search-dropdown-option" 
                            key={value}
                        >
                            {label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}
export default SelectList;