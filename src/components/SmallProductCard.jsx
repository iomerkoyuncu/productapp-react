import React from "react"

import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { useDispatch, useSelector } from "react-redux"
import { deleteProduct } from "../features/product/productSlice"

function SmallProductCard(product) {
	const navigate = useNavigate()
	const dispatch = useDispatch()

	return (
		<div className='w-full flex flex-row justify-between  border-4 border-black rounded-lg p-3 m-3 '>
			<div>
				<h3 className=' font-bold text-[18px]'>{product.product.name}</h3>
				<p className='text-justify'>{product.product.description}</p>
			</div>
			<div className='flex justify-center items-center'>
				<button
					onClick={() => {
						dispatch(
							deleteProduct({
								id: product.product.id,
							})
						)
						toast.success("Ürün silindi!")
						window.location.reload()
					}}
					className='px-2'>
					<h4 className='text-white bg-red-600 rounded-md py-2 px-3 transition ease-in-out delay-150 hover:scale-105 duration-300'>
						Sil
					</h4>
				</button>
				<button onClick={() => navigate(`/edit-product/${product.product.id}`)}>
					<h4 className='text-white bg-blue-600 rounded-md p-2 transition ease-in-out delay-150 hover:scale-105 duration-300'>
						Düzenle
					</h4>
				</button>
			</div>
		</div>
	)
}

export default SmallProductCard
