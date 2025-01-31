import './button.css'

interface Props {
    label: string
    bgColor: string
    onClick: () => void
}

export default function Button({ label, bgColor, onClick }: Props) {
    return (
        // button
        <button
            className={`button heavy-shadow h-12 w-12 flex items-center justify-center rounded-sm 
                cursor-pointer border-2 border-black text-white ${bgColor}`}
            onClick={onClick}
        >
            <span
                style={{ fontSize: '36px' }}
                className={`material-icons-outlined`}
            >
                {label}
            </span>
        </button>
    )
}
