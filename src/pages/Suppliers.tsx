import { useState } from "react";
import { useDebounce } from "../hooks/useDebounce";
import { useDevice } from "../hooks/useDevice";
import SuppliersHeader from "../components/SuppliearsHeader/SuppliersHeader";
import Table from "../components/Table/Table";
import Pagination from "../components/SuppliearsFooter/Pagination";
import SelectList from "../components/SuppliearsHeader/SelectList";
import Search from "../components/SuppliearsHeader/Search";
import TableMobile from "../components/Mobile/TableMobile";
import TableHead from "../components/Table/TableHead";
import Card from "../components/Table/Card";
import { Data,  useGetListQuery } from "../redux/api/apiSlice";


const Suppliers = () => {
    const [page, setPage] = useState<number>(1) 
    const [type, setType] = useState<string>('number');
    const [searchValue, setSearchValue] = useState<string>('');

    const isMobile = useDevice()
    const search = useDebounce(searchValue, 500)
    
    const {data, isLoading, isFetching, isError} = useGetListQuery({limit: 10, page, type, search})
    const {cards = [],  first , prev, next, last}: Data = data || {}  as Data;

    const handlePageChange = (newPage: number | null) => {
        if(newPage !== null) {
            setPage(newPage);
        }
    };

    if(isLoading || isFetching) return <div>Loading...</div>
    if(isError) return <div>Упс не загрузил список...</div>

    return(
        <>
            <SuppliersHeader>
                <SelectList
                    onType={setType}
                />
                <Search
                    searchValue={searchValue}
                    onSearch={setSearchValue}
                />
            </SuppliersHeader>
            {!isMobile ? (
                <Table>
                    <TableHead />
                    {cards && cards.map(item => (
                        <Card key={item.id} {...item} />
                    ))}
                </Table>
            ) : (
                <TableMobile
                    cards={cards}
                />
            )}
            <Pagination
                first={first}
                prev={prev}
                next={next}
                last={last}
                page={page}
                changePage={handlePageChange}
            />
        </>
    )
}
export default Suppliers;