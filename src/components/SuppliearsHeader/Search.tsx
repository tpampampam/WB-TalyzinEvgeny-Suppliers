import { FC } from 'react';
import IconSearch from '../../images/icon-search.svg'

interface SearchProps {
    searchValue: string
    onSearch: (value: string) => void
}

const Search: FC<SearchProps> =  ({searchValue, onSearch}) => 
(
    <div className='search-wrapper'>
        <input 
            placeholder='Поиск...'
            type="search" 
            className='search-input'
            value={searchValue}
            onChange={(e) => onSearch(e.target.value)}
        />

            <img 
                src={IconSearch}
                className='search-icon' 
                alt="search" 
            />

    </div>
)

export default Search;