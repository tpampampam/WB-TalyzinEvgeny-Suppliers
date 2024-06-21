import { FC } from "react";
import { Page } from "../../redux/api/apiSlice";

interface Props extends Page {
    changePage: (page: number | null) => void
    page: number
}

const Pagination:FC<Props> = ({ first, prev, next, last, page, changePage}) => 
(
        <div className="pagination">
            <button onClick={() => changePage(first)} disabled={page === first}>First</button>
            <button onClick={() => changePage(prev)} disabled={!prev}>Previous</button>
            <button onClick={() => changePage(next)} disabled={!next}>Next</button>
            <button onClick={() => changePage(last)} disabled={page === last}>Last</button>
        </div>
)

export default Pagination;