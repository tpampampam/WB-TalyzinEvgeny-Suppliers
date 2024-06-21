
interface ModalTitleProps {
    title: string
    number: string
}

const ModalTitle = ({title, number}: ModalTitleProps) => 
(
    <div className="modal__header">
        <h2 className="modal__header-title">{title}</h2>
        <span className="modal__header-subtitle">#{number}</span>
    </div>
)
export default ModalTitle;