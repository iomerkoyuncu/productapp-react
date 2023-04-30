import React, { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import { useParams } from "react-router-dom"
import WestIcon from "@mui/icons-material/West"

import { toast } from "react-toastify"

import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline"
import { IconButton } from "@mui/material"

function Product() {
	const navigate = useNavigate()

	const params = useParams()

	return (
		<div className='my-container'>
			<div className='w-4/5'>
				<div className='p-2 flex'>
					<IconButton
						sx={{
							color: "blue",
							"&:hover": {
								color: "blue",
							},
							backgroundColor: "#e0e0e0",
						}}
						onClick={() => navigate(-1)}>
						<WestIcon />
					</IconButton>
					<p className='p-2'>
						Back to previous page | Listed in Category:{" "}
						<span className='underline '>Products</span>
					</p>
				</div>
				<div className='flex p-2'>
					<div className='p-2'>
						<img
							className='w-96 h-96 p-2'
							src={
								"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8eUiYLvcDTnmvYGMuMjuuQChlnxEaTP4cKuLVO7BBhROOjlm67_U6mB-go6ghpbdZjIQ&usqp=CAU"
							}
							alt=''
						/>
					</div>
					<div className='flex flex-col justify-evenly p-2'>
						<div>
							<h1 className='text-[24px]'>Başlık</h1>
							<small>Free 2 days shipping | 1 year warranty</small>
						</div>
						<h1>Description</h1>
						<div className='flex'>
							<h1>$</h1>
							<h1 className='p-2 text-[36px]'>price</h1>
						</div>
						<ul className='p-2'>
							<li className='flex p-2'>
								<CheckCircleOutlineIcon />
								<p className='px-2'>Free Return</p>
							</li>
							<li className='flex p-2'>
								<CheckCircleOutlineIcon />
								<p className='px-2'>Chat with us 24 hours</p>
							</li>
							<li className='flex p-2'>
								<CheckCircleOutlineIcon />
								<p className='px-2'>Comes with a package</p>
							</li>
							<li className='flex p-2'>
								<CheckCircleOutlineIcon />
								<p className='px-2'>Comes with a package</p>
							</li>
						</ul>
						<div className='flex p-2'>
							<button className='p-2 m-2 w-64 bg-blue-500 text-white rounded'>
								Buy it Now
							</button>
							<button className='p-2 m-2 w-64 bg-blue-200 text-blue rounded'>
								Add to Cart
							</button>
						</div>
					</div>
				</div>
				<div></div>
			</div>
		</div>
	)
}

export default Product
