import { useState } from 'react'
import './button.css'

interface Props {
    label: string
    bgColor: string
    onClick: () => void
    inputPlaceholder?: string
}

export default function ExpandableInputButton({
    label,
    bgColor,
    onClick,
    inputPlaceholder,
}: Props) {
    const [isExpanded, setIsExpanded] = useState(false)

    const handleClick = () => {
        setIsExpanded(true)
        onClick()
    }

    return (
        <button
            className={`button heavy-shadow h-12 ${
                isExpanded ? 'w-full' : 'w-12 cursor-pointer'
            } flex items-center rounded-sm pl-1 transition-all duration-500 justify-start
                border-2 border-black text-white ${bgColor}`}
            onClick={handleClick}
        >
            <span
                style={{ fontSize: '36px' }}
                className="material-icons-outlined"
            >
                {label}
            </span>
            {isExpanded && (
                <input
                    className="w-full border-b mx-4"
                    placeholder={inputPlaceholder}
                />
            )}
        </button>
    )
}
