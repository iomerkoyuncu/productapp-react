import React, { useEffect, useState } from "react"

import FormControl from "@mui/material/FormControl"
import Input from "@mui/material/Input"
import InputLabel from "@mui/material/InputLabel"
import IconButton from "@mui/material/IconButton"
import InputAdornment from "@mui/material/InputAdornment"

import { toast } from "react-toastify"

import WestIcon from "@mui/icons-material/West"
import { useNavigate, useParams } from "react-router-dom"
import { updateProduct, getProductById } from "../features/product/productSlice"

import { useDispatch, useSelector } from "react-redux"
function EditProduct() {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const params = useParams()

	useEffect(() => {
		dispatch(getProductById(params.id))
	}, [dispatch, params.id])

	const { product } = useSelector((state) => state.product)

	const { name, description, price, quantity, imgURL, catalogId } =
		product.value || {}

	const [formdata, setFormdata] = useState({
		name: name || "",
		description: description || "",
		price: price || 0,
		quantity: quantity || 0,
		imgURL: imgURL || "",
	})

	const handleChange = (e) => {
		setFormdata({ ...formdata, [e.target.name]: e.target.value })
	}

	const handleSubmit = (e) => {
		e.preventDefault()

		dispatch(updateProduct({ ...formdata, id: params.id }))

		toast.success("Ürün güncellendi!")
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

							<h1 className='p-3 text-xl'>Ürünü Düzenle</h1>
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
									value={formdata.name}
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
									value={formdata.description}
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
									value={formdata.price}
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
									value={formdata.quantity}
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
									value={formdata.imgURL}
								/>
							</FormControl>
							<FormControl fullWidth sx={{ m: 1 }} variant='standard'>
								<Input
									disabled
									id='standard-adornment-amount'
									name='catalogId'
									onChange={handleChange}
									value={catalogId}
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

export default EditProduct
