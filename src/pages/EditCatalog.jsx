import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { toast } from "react-toastify"
import { IconButton } from "@mui/material"
import FormControl from "@mui/material/FormControl"
import Input from "@mui/material/Input"
import InputLabel from "@mui/material/InputLabel"
import InputAdornment from "@mui/material/InputAdornment"

import WestIcon from "@mui/icons-material/West"

function NewCatalog() {
	const [formdata, setFormdata] = useState({
		userId: 1,
		id: 1,
		title: "",
		body: "",
	})

	const { userId, id, title, body } = formdata

	const dispatch = useDispatch()
	const navigate = useNavigate()

	const handleChange = (e) => {
		setFormdata({ ...formdata, [e.target.name]: e.target.value })
	}

	const handleSubmit = (e) => {
		e.preventDefault()

		const newPost = {
			userId,
			id,
			title,
			body,
		}

		toast.success("Post created successfully")
		navigate("/")
	}

	return (
		<>
			<div className='mx-5 flex justify-start items-center'>
				<div>
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
				</div>
				<h1 className='p-3 text-xl'>Geri Dön</h1>
			</div>
			<div className='flex justify-center items-center font-bold px-10 py-5'>
				<div className='bg-white min-w-full shadow-md'>
					<div className='flex flex-col px-10 py-5'>
						<div className='flex items-center'>
							<h1 className='p-3 text-xl'>Kataloğu Düzenle</h1>
						</div>
						<div className=' max-sm:w-auto max-sm:m-2 max-sm:p-2 m-5 p-5 mx-10'>
							<div className='flex flex-col'>
								<FormControl fullWidth sx={{ m: 1 }} variant='standard'>
									<InputLabel htmlFor='standard-adornment-amount'>
										Başlık
									</InputLabel>
									<Input id='standard-adornment-amount' />
								</FormControl>
								<FormControl fullWidth sx={{ m: 1 }} variant='standard'>
									<InputLabel htmlFor='standard-adornment-amount'>
										Detaylar
									</InputLabel>
									<Input id='standard-adornment-amount' />
								</FormControl>
							</div>
							<div className=' flex justify-end m-2 '>
								<div className=' p-2 flex justify-between '>
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
			</div>{" "}
			<div className='flex justify-center items-center font-bold px-10 py-5'>
				<div className='bg-white min-w-full shadow-md'>
					<div className='flex flex-col px-10 py-5'>
						<div className='flex items-center'>
							<h1 className='p-3 text-xl'>Katalogdaki Ürünler</h1>
						</div>
						<div className=' max-sm:w-auto max-sm:m-2 max-sm:p-2 m-5 p-5 mx-10'>
							<div className='flex flex-wrap'>
								<div className='w-full flex flex-row justify-between border-4 border-black rounded-lg p-3 m-3 '>
									<div>
										<h3 className=' font-bold text-[18px]'>Iphone X</h3>
										<p className='text-justify '>Mobil Cihaz, Telefon</p>
									</div>
									<div className='flex justify-center items-center'>
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
								<div className='w-full flex flex-row justify-between  border-4 border-black rounded-lg p-3 m-3 '>
									<div>
										<h3 className=' font-bold text-[18px]'>Samsung A32</h3>
										<p className='text-justify'>Mobil Cihazlar, Laptoplar</p>
									</div>
									<div className='flex justify-center items-center'>
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
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='flex justify-center items-center font-bold px-10 py-5'>
				<div className='bg-white min-w-full shadow-md'>
					<div className='flex flex-col px-10 py-5'>
						<div className='flex items-center'>
							<h1 className='p-3 text-xl'>Yeni Ürün Ekle</h1>
						</div>
						<div className=' max-sm:w-auto max-sm:m-2 max-sm:p-2 m-5 p-5 mx-10'>
							<div className='flex flex-col'>
								<FormControl fullWidth sx={{ m: 1 }} variant='standard'>
									<InputLabel htmlFor='standard-adornment-amount'>
										Başlık
									</InputLabel>
									<Input id='standard-adornment-amount' />
								</FormControl>
								<FormControl fullWidth sx={{ m: 1 }} variant='standard'>
									<InputLabel htmlFor='standard-adornment-amount'>
										Detaylar
									</InputLabel>
									<Input id='standard-adornment-amount' />
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
									/>
								</FormControl>
								<FormControl fullWidth sx={{ m: 1 }} variant='standard'>
									<InputLabel htmlFor='standard-adornment-amount'>
										Miktar
									</InputLabel>
									<Input id='standard-adornment-amount' />
								</FormControl>
								<FormControl fullWidth sx={{ m: 1 }} variant='standard'>
									<InputLabel htmlFor='standard-adornment-amount'>
										Resim URL'si
									</InputLabel>
									<Input id='standard-adornment-amount' />
								</FormControl>
							</div>
							<div className=' flex justify-end m-2 '>
								<div className=' p-2 flex justify-between '>
									<button
										onClick={handleSubmit}
										className='flex justify-between items-center px-2 mx-2 text-white bg-blue-600 rounded-md transition ease-in-out delay-150 hover:scale-110 duration-300 cursor-pointer'>
										<h4 className='p-2 '>Ekle</h4>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default NewCatalog
