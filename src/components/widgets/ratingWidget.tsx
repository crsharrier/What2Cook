export default function RatingWidget({
    rating,
    onRate,
}: {
    rating: number
    onRate?: (newRating: number) => void
}) {
    return (
        <div className="flex items-center border-b border-transparent hover:border-gray-100">
            {/* stars */}
            {[...Array(5)].map((_, index) => (
                <span
                    key={index}
                    className={`material-icons-outlined cursor-pointer  ${
                        index < rating ? 'text-yellow-500' : 'text-gray-300'
                    }`}
                    onClick={() => (onRate ? onRate(index + 1) : undefined)}
                >
                    star
                </span>
            ))}
        </div>
    )
}
