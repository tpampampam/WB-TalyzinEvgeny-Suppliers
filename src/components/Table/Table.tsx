import React, { FC } from "react";

interface TableProps {
    children: React.ReactNode
}

const Table: FC<TableProps> = ({children}) =>  
(
    <div className="table__wrapper">
        {children}
    </div>
)

export default Table;