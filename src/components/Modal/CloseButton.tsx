import CloseIcon from '../../images/Union.svg'


interface CloseButtonProps  {
    onClick: () => void
}

const CloseButton = ({onClick}: CloseButtonProps) => 
(
    <button className="modal__close" onClick={onClick}>
        <img
            className="modal__close-icon"
            src={CloseIcon} 
            alt="close modal" 
        />
    </button>
)
export default CloseButton;