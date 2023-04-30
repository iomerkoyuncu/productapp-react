import React from "react"

import { useNavigate } from "react-router-dom"

function CatalogCard() {
	const navigate = useNavigate()

	return (
		<div className='w-64 border-4 border-black rounded-lg p-3 m-3 '>
			<div>
				<h3 className='text-center font-bold text-[20px]'>Cihazlar</h3>
				<p className='text-justify p-2'>Mobil Cihazlar, Laptoplar</p>
			</div>
			<div className='flex justify-center items-center'>
				<button onClick={() => navigate("/catalog")}>
					<h4 className='text-white bg-black rounded-md p-2 transition ease-in-out delay-150 hover:scale-105 duration-300'>
						İncele
					</h4>
				</button>
				<button className='px-2'>
					<h4 className='text-white bg-red-600 rounded-md py-2 px-3 transition ease-in-out delay-150 hover:scale-105 duration-300'>
						Sil
					</h4>
				</button>
				<button onClick={() => navigate("/new-catalog")}>
					<h4 className='text-white bg-blue-600 rounded-md p-2 transition ease-in-out delay-150 hover:scale-105 duration-300'>
						Düzenle
					</h4>
				</button>
			</div>
		</div>
	)
}

export default CatalogCard
