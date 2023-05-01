import React from "react"

import WestIcon from "@mui/icons-material/West"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { toast } from "react-toastify"
import { IconButton } from "@mui/material"
import FormControl from "@mui/material/FormControl"
import Input from "@mui/material/Input"
import InputLabel from "@mui/material/InputLabel"
import InputAdornment from "@mui/material/InputAdornment"

import { createProduct } from "../features/product/productSlice"

function NewProduct() {
	const navigate = useNavigate()
	const dispatch = useDispatch()

	const [formData, setFormData] = useState({
		name: "",
		description: "",
		price: "",
		quantity: "",
		imgURL: "",
		catalogId: "",
	})

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value })
	}

	const handleSubmit = (e) => {
		e.preventDefault()

		dispatch(createProduct(formData))
		toast.success("Ürün başarıyla eklendi")
		navigate("/")
	}

	return (
		<div className='flex justify-center items-center font-bold px-10 py-5'>
			<div className='bg-white min-w-full shadow-md'>
				<div className='flex flex-col px-10 py-5'>
					<div className='flex items-center'>
						<div className='flex items-center'>
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

							<h1 className='p-3 text-xl'>Yeni Ürün Ekle</h1>
						</div>
					</div>
					<div className=' max-sm:w-auto max-sm:m-2 max-sm:p-2 m-5 p-5 mx-10'>
						<div className='flex flex-col'>
							<FormControl fullWidth sx={{ m: 1 }} variant='standard'>
								<InputLabel htmlFor='standard-adornment-amount'>
									Başlık
								</InputLabel>
								<Input
									id='standard-adornment-amount'
									name='name'
									onChange={handleChange}
									value={formData.name}
								/>
							</FormControl>
							<FormControl fullWidth sx={{ m: 1 }} variant='standard'>
								<InputLabel htmlFor='standard-adornment-amount'>
									Detaylar
								</InputLabel>
								<Input
									id='standard-adornment-amount'
									name='description'
									onChange={handleChange}
									value={formData.description}
								/>
							</FormControl>
							<FormControl fullWidth sx={{ m: 1 }} variant='standard'>
								<InputLabel htmlFor='standard-adornment-amount'>
									Fiyat
								</InputLabel>
								<Input
									id='standard-adornment-amount'
									startAdornment={
										<InputAdornment position='start'>₺</InputAdornment>
									}
									name='price'
									onChange={handleChange}
									value={formData.price}
								/>
							</FormControl>
							<FormControl fullWidth sx={{ m: 1 }} variant='standard'>
								<InputLabel htmlFor='standard-adornment-amount'>
									Miktar
								</InputLabel>
								<Input
									id='standard-adornment-amount'
									name='quantity'
									onChange={handleChange}
									value={formData.quantity}
								/>
							</FormControl>
							<FormControl fullWidth sx={{ m: 1 }} variant='standard'>
								<InputLabel htmlFor='standard-adornment-amount'>
									Resim URL'si
								</InputLabel>
								<Input
									id='standard-adornment-amount'
									name='imgURL'
									onChange={handleChange}
									value={formData.imgURL}
								/>
							</FormControl>
							<FormControl fullWidth sx={{ m: 1 }} variant='standard'>
								<InputLabel htmlFor='standard-adornment-amount'>
									Katalog ID
								</InputLabel>
								<Input
									id='standard-adornment-amount'
									name='catalogId'
									onChange={handleChange}
									value={formData.catalogId}
								/>
							</FormControl>
						</div>
						<div className=' flex justify-end m-2 '>
							<div className=' p-2 flex justify-between '>
								<button className='flex justify-between items-center px-2 mx-2 text-white bg-red-600 rounded-md transition ease-in-out delay-150 hover:scale-110 duration-300 cursor-pointer'>
									<h4 className='p-2 '>İptal</h4>
								</button>
								<button
									onClick={handleSubmit}
									className='flex justify-between items-center px-2 mx-2 text-white bg-blue-600 rounded-md transition ease-in-out delay-150 hover:scale-110 duration-300 cursor-pointer'>
									<h4 className='p-2 '>Kaydet</h4>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default NewProduct
