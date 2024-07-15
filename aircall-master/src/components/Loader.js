export default function Loader() {
	return (
		<>
			<div className='h-screen fixed top-0 bottom-0 left-0 right-0 m-auto z-10 flex flex-col'>
				<div
					id='loader'
					className='m-auto border-solid border-[25px] border-teal-500/55 rounded-full border-t-[25px] animate-spin border-t-teal-500 animate-spinner  w-28 h-28'
				/>
				<p className='invisible'>...Flight info is loading</p>
			</div>
			<div className='bg-slate-200/55 fixed h-full left-0 w-full top-0' />
		</>
	);
}
