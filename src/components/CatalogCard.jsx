import React from "react"

import { useNavigate } from "react-router-dom"

import { useSelector, useDispatch } from "react-redux"
import { deleteCatalog } from "../features/catalog/catalogSlice"

import { toast } from "react-toastify"

function CatalogCard(catalog) {
	const navigate = useNavigate()
	const dispatch = useDispatch()

	return (
		<div className='w-64 border-4 border-black rounded-lg p-3 m-3 '>
			<div>
				<h3 className='text-center font-bold text-[20px]'>
					{catalog.catalog.name}
				</h3>
				<p className='text-justify p-2'>{catalog.catalog.description}</p>
				<p className=' p-2'>Katalog ID: {catalog.catalog.id}</p>
				<p className=' p-2'>
					{new Date(catalog.catalog.createdDate).toLocaleDateString("tr-TR")}{" "}
					tarihinde oluşturuldu.
				</p>
			</div>
			<div className='flex justify-center items-center'>
				<button onClick={() => navigate(`/catalog/${catalog.catalog.id}`)}>
					<h4 className='text-white bg-black rounded-md p-2 transition ease-in-out delay-150 hover:scale-105 duration-300'>
						İncele
					</h4>
				</button>
				<button
					onClick={() => {
						dispatch(
							deleteCatalog({
								id: catalog.catalog.id,
							})
						)
						toast.success("Katalog silindi!")
						window.location.reload()
					}}
					className='px-2'>
					<h4 className='text-white bg-red-600 rounded-md py-2 px-3 transition ease-in-out delay-150 hover:scale-105 duration-300'>
						Sil
					</h4>
				</button>
				<button onClick={() => navigate(`/edit-catalog/${catalog.catalog.id}`)}>
					<h4 className='text-white bg-blue-600 rounded-md p-2 transition ease-in-out delay-150 hover:scale-105 duration-300'>
						Düzenle
					</h4>
				</button>
			</div>
		</div>
	)
}

export default CatalogCard
