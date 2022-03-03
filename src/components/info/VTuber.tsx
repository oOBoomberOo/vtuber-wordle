import { vtuber } from "../../lib/words";

export const VTuber = () => {
	const url = `https://www.youtube.com/channel/${vtuber?.id}`;
	return <div className='flex flex-col items-center justify-center'>
		<img src={vtuber?.photo} alt={vtuber?.name} className='rounded-full border-2 border-gray-300 w-28' />
		<a target="_blank" rel="noreferrer" href={url} className='text-sm underline text-blue-600 hover:text-blue-800 visited:text-purple-600'>{vtuber?.name}</a>
	</div>
}
