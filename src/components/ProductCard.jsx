import React from "react"
import { useNavigate } from "react-router-dom"

import EastIcon from "@mui/icons-material/East"

import { IconButton } from "@mui/material"

function ProductCard() {
	const navigate = useNavigate()
	return (
		<div className='flex justify-center w-64 h-64 flex-col product-bg p-5 m-3'>
			<div className='flex justify-center m-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer'>
				<img
					className='w-32 h-32'
					src={
						"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8eUiYLvcDTnmvYGMuMjuuQChlnxEaTP4cKuLVO7BBhROOjlm67_U6mB-go6ghpbdZjIQ&usqp=CAU"
					}
					alt='product'
				/>
			</div>
			<div>
				<div className='text-left m-2'>
					<h3 className='font-semibold'>{"Title"}</h3>
				</div>
				<div className='flex text-center justify-between m-2'>
					<p>13 $</p>
					<button
						onClick={() => {
							navigate("/product")
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
