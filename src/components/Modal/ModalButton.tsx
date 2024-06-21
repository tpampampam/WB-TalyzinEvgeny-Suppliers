

type Props = {
    title: string
    type: string
    onClick: () => void
}

export const ModalButton = ({title, type, onClick}: Props) => {

    const className = type === 'submit' ? 'btn-submit' : 'btn-cancel';

    return (
        <button className={className} onClick={onClick}>
            {title}
        </button>
    )
}