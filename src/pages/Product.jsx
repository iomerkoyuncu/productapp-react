import React, { useContext, useEffect, useState } from "react"

import { useNavigate, useParams, Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import WestIcon from "@mui/icons-material/West"

import { toast } from "react-toastify"

import { getProductById } from "../features/product/productSlice"

import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline"
import { IconButton } from "@mui/material"

function Product() {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const params = useParams()

	const { product } = useSelector((state) => state.product)

	useEffect(() => {
		dispatch(getProductById(params.id))
	}, [dispatch, params.id])

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
						Geri Dön | Bu Kategoride Listeleniyor:{" "}
						<span
							className='underline cursor-pointer'
							onClick={() => {
								navigate(`/catalog/${product.value?.catalogId}`)
							}}>
							{product.value?.catalogId}
						</span>
					</p>
				</div>
				<div className='flex p-2'>
					<div className='p-2'>
						<img
							className='w-96 h-96 p-2'
							src={
								product.value?.imgURL ||
								"https://www.thermaxglobal.com/wp-content/uploads/2020/05/image-not-found.jpg"
							}
							alt=''
						/>
					</div>
					<div className='flex flex-col justify-evenly p-2'>
						<div>
							<h1 className='text-[24px]'>{product.value?.name}</h1>
							<small>ID: {product.value?.id}</small>
						</div>
						<h1>{product.value?.description}</h1>
						<div className='flex'>
							<h1>$</h1>
							<h1 className='p-2 text-[36px]'>{product.value?.price}</h1>
						</div>
						<div className='flex'>
							<h1 className='p-2'>Quantity:</h1>
							<h1 className='p-2'>{product.value?.quantity}</h1>
						</div>
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
