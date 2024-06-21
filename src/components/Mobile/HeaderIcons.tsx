import Docs from '../../images/icon-doc.svg'
import UpdateIcon from '../../images/icon-log.svg'
import { useGetListQuery } from '../../redux/api/apiSlice'


const HeaderIcons  = () => {
    const { refetch } = useGetListQuery({})

    const handleRefetch = () => {
        refetch();
    };
    return(
        <div className='header__mobile-icons'>
            <div className='logo' onClick={handleRefetch}>
                <img 
                    src={UpdateIcon} 
                    alt="update" 
                />
            </div>
            <div>
                <img 
                    src={Docs} 
                    alt="docs" 
                />
            </div>
            
        </div>
    )
}
export default HeaderIcons;