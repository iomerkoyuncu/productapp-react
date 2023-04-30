import React from "react"

import FormControl from "@mui/material/FormControl"
import Input from "@mui/material/Input"
import InputLabel from "@mui/material/InputLabel"
import IconButton from "@mui/material/IconButton"
import InputAdornment from "@mui/material/InputAdornment"

import WestIcon from "@mui/icons-material/West"
import { useNavigate } from "react-router-dom"

function EditProduct() {
	const navigate = useNavigate()

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
								<button className='flex justify-between items-center px-2 mx-2 text-white bg-red-600 rounded-md transition ease-in-out delay-150 hover:scale-110 duration-300 cursor-pointer'>
									<h4 className='p-2 '>İptal</h4>
								</button>
								<button className='flex justify-between items-center px-2 mx-2 text-white bg-blue-600 rounded-md transition ease-in-out delay-150 hover:scale-110 duration-300 cursor-pointer'>
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
