import { memo } from "react";


const TableHead = memo(() => {

    return(
        <div className="table__item-wrapper table__header">
            <div className="table__item table__header-item">Номер</div>
            <div className="table__item table__header-item">Дата поставки</div>
            <div className="table__item table__header-item">Город</div>
            <div className="table__item table__header-item">Количество</div>
            <div className="table__item table__header-item">Тип поставки</div>
            <div className="table__item table__header-item">Склад</div>
            <div className="table__item table__header-item">Статус</div>
        </div>
    )
})
export default TableHead;