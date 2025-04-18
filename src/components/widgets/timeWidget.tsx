export default function TimeWidget({ time }: { time: string }) {
    return (
        <div className="flex items-center">
            {/* clock icon */}
            <span className="material-icons-outlined text-3xl">
                access_time
            </span>
            {/* time input */}
            <div className=" p-1">{time}</div>
        </div>
    )
}
