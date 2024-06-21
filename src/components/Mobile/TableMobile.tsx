import { FC } from "react";
import { Card } from "../../redux/api/apiSlice";
import CardMobile from "./CardMobile";


interface TableMobileProps {
    cards: Card[]
}

const TableMobile:FC<TableMobileProps> = ({cards}) => 
(
    <div>
        {cards && cards.map(card => (
            <CardMobile
                key={card.id}
                {...card}
            />
        ))}
    </div>
)


export default TableMobile;