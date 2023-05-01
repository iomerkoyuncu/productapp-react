import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { toast } from "react-toastify"
import { IconButton } from "@mui/material"
import FormControl from "@mui/material/FormControl"
import Input from "@mui/material/Input"
import InputLabel from "@mui/material/InputLabel"
import InputAdornment from "@mui/material/InputAdornment"

import WestIcon from "@mui/icons-material/West"
import { getCatalogById, updateCatalog } from "../features/catalog/catalogSlice"
import {
	getProductsByCatalogId,
	createProduct,
} from "../features/product/productSlice"
import SmallProductCard from "../components/SmallProductCard"

function NewCatalog() {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const params = useParams()

	useEffect(() => {
		dispatch(getCatalogById(params.id))
		dispatch(getProductsByCatalogId(params.id))
	}, [dispatch, params.id])

	const { catalog } = useSelector((state) => state.catalog)
	const { productsInCatalog } = useSelector((state) => state.product)

	const { name, description } = catalog.value || {}

	const [formdata, setFormdata] = useState({
		name: name || "",
		description: description || "",
	})

	const [productData, setProductData] = useState({
		name: "",
		description: "",
		price: "",
		quantity: "",
		imgURL: "",
		catalogId: params.id,
	})

	const handleChange = (e) => {
		setFormdata({ ...formdata, [e.target.name]: e.target.value })
	}

	const handleChange2 = (e) => {
		setProductData({ ...productData, [e.target.name]: e.target.value })
	}

	const handleSubmit = (e) => {
		e.preventDefault()

		dispatch(createProduct(productData))
		toast.success("Yeni ürün eklendi!")
		navigate("/")
	}

	const handleUpdateSubmit = (e) => {
		e.preventDefault()

		dispatch(
			updateCatalog({
				id: params.id,
				name: formdata.name,
				description: formdata.description,
			})
		)
		toast.success("Katalog güncellendi!")
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
									<Input
										id='standard-adornment-amount'
										name='name'
										value={formdata.name}
										onChange={handleChange}
									/>
								</FormControl>
								<FormControl fullWidth sx={{ m: 1 }} variant='standard'>
									<InputLabel htmlFor='standard-adornment-amount'>
										Detaylar
									</InputLabel>
									<Input
										id='standard-adornment-amount'
										name='description'
										value={formdata.description}
										onChange={handleChange}
									/>
								</FormControl>
							</div>
							<div className=' flex justify-end m-2 '>
								<div className=' p-2 flex justify-between '>
									<button
										onClick={handleUpdateSubmit}
										className='flex justify-between items-center px-2 mx-2 text-white bg-blue-600 rounded-md transition ease-in-out delay-150 hover:scale-110 duration-300 cursor-pointer'>
										<h4 className='p-2 '>Değişiklikleri Kaydet</h4>
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
								{productsInCatalog.value &&
								productsInCatalog.value.length > 0 ? (
									productsInCatalog.value.map((product) => (
										<SmallProductCard product={product} />
									))
								) : (
									<div className='flex flex-col p-2'>
										<div className='flex justify-center items-center'>
											<h1>Görünürde hiç ürün yok.</h1>
										</div>
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='flex justify-center items-center font-bold px-10 py-5'>
				<div className='bg-white min-w-full shadow-md'>
					<div className='flex flex-col px-10 py-5'>
						<div className='flex items-center'>
							<h1 className='p-3 text-xl'>Kataloğa Yeni Ürün Ekle</h1>
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
										onChange={handleChange2}
										value={productData.name}
									/>
								</FormControl>
								<FormControl fullWidth sx={{ m: 1 }} variant='standard'>
									<InputLabel htmlFor='standard-adornment-amount'>
										Detaylar
									</InputLabel>
									<Input
										id='standard-adornment-amount'
										name='description'
										onChange={handleChange2}
										value={productData.description}
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
										onChange={handleChange2}
										value={productData.price}
									/>
								</FormControl>
								<FormControl fullWidth sx={{ m: 1 }} variant='standard'>
									<InputLabel htmlFor='standard-adornment-amount'>
										Miktar
									</InputLabel>
									<Input
										id='standard-adornment-amount'
										name='quantity'
										onChange={handleChange2}
										value={productData.quantity}
									/>
								</FormControl>
								<FormControl fullWidth sx={{ m: 1 }} variant='standard'>
									<InputLabel htmlFor='standard-adornment-amount'>
										Resim URL'si
									</InputLabel>
									<Input
										id='standard-adornment-amount'
										name='imgURL'
										onChange={handleChange2}
										value={productData.imgURL}
									/>
								</FormControl>
								<FormControl fullWidth sx={{ m: 1 }} variant='standard'>
									<InputLabel htmlFor='standard-adornment-amount'>
										Katalog ID
									</InputLabel>
									<Input
										id='standard-adornment-amount'
										name='catalogId'
										onChange={handleChange2}
										value={productData.catalogId}
									/>
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
