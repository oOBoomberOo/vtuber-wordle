import { DateTime } from "luxon";

const base = DateTime.fromObject({ year: 2022, month: 3, day: 2 }, { zone: 'Asia/Tokyo' })

export const DayCounter = () => {
	const day = Math.floor(base.diffNow('days').negate().days);
	return <span className="text-white bg-orange-500 p-1 rounded-md">Day {day}</span>
}
