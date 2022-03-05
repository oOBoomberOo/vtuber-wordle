import { fixedDate } from "../../lib/words"

export const DayCounter = () => {
	const now = fixedDate(new Date());
	const start = fixedDate(new Date(2022, 2, 2, 0));

	const day = Math.floor((now - start) / (1000 * 60 * 60 * 24));

	return <span className="text-white bg-orange-500 p-1 rounded-md">Day {day}</span>
}
