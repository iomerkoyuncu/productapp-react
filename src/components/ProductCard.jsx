import React from "react"
import { useNavigate } from "react-router-dom"

import EastIcon from "@mui/icons-material/East"

import { IconButton } from "@mui/material"

function ProductCard(product) {
	const navigate = useNavigate()
	return (
		<div className='w-72 flex flex-col justify-between  border-4 border-black rounded-lg p-3 m-3 '>
			<div className='flex justify-center m-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer'>
				<img
					className='w-32 h-32'
					src={
						product.product.imgURL
							? product.product.imgURL
							: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiTw9vKUkfzdUkGVByistee-qWWG21sxiU8IT8cSjfBw&s"
					}
					alt='product'
				/>
			</div>
			<div>
				<div className='text-left m-2'>
					<h3 className='font-semibold'>{product.product.name}</h3>
					<h3 className='font-semibold'>{product.product.description}</h3>
				</div>
				<div className='flex text-center justify-between m-2'>
					<div className='flex flex-col text-left'>
						<p>Fiyat: {product.product.price}</p>
						<p>Miktar: {product.product.quantity}</p>
					</div>

					<button
						onClick={() => {
							navigate(`/product/${product.product.id}`)
						}}>
						<IconButton>
							<EastIcon />
						</IconButton>
					</button>
				</div>
			</div>
		</div>
	)
}

export default ProductCard
