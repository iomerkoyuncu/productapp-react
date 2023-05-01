import React, { useEffect, useState } from "react"
import AddIcon from "@mui/icons-material/Add"
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"

import { getAllCatalogs, reset } from "../features/catalog/catalogSlice"
import { getAllProducts } from "../features/product/productSlice"

import CatalogCard from "../components/CatalogCard"
import ProductCard from "../components/ProductCard"

function Home() {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const { catalogs } = useSelector((state) => state.catalog)
	const { products } = useSelector((state) => state.product)

	useEffect(() => {
		dispatch(getAllCatalogs())
		dispatch(getAllProducts())
	}, [dispatch])

	return (
		<div className='w-screen  flex justify-center items-start'>
			<div className='w-4/5 '>
				<h1 className='font-bold text-3xl text-center'>Hoşgeldin!</h1>
				<div className='flex justify-between items-center'>
					<h1 className='font-bold text-2xl '>Kategoriler</h1>
					<div className='flex justify-center items-center'>
						<button
							onClick={() => navigate("/new-catalog")}
							className='flex justify-between items-center px-2 m-2 text-white bg-blue-600 rounded-md transition ease-in-out delay-150 hover:scale-110 duration-300 cursor-pointer'>
							<AddIcon />
							<h4 className='p-2 '>Yeni Kategori Oluştur!</h4>
						</button>
					</div>
				</div>
				<hr className='border-2 border-black' />

				<div className='flex justify-center flex-wrap'>
					{catalogs.value && catalogs.value.length > 0 ? (
						catalogs.value.map((catalog) => <CatalogCard catalog={catalog} />)
					) : (
						<div className='flex flex-col p-2'>
							<div className='flex justify-center items-center'>
								<h1>Görünürde hiç katalog yok.</h1>
							</div>

							<div className='flex justify-center items-center'>
								<button
									onClick={() => navigate("/new-catalog")}
									className='flex justify-between items-center px-2 m-2 text-white bg-blue-600 rounded-md transition ease-in-out delay-150 hover:scale-110 duration-300 cursor-pointer'>
									<AddIcon />
									<h4 className='p-2 '>Yeni Katalog Oluştur!</h4>
								</button>
							</div>
						</div>
					)}
				</div>

				<div className='flex justify-between items-center'>
					<h1 className='font-bold text-2xl '>Ürünler</h1>
					<div className='flex justify-center items-center'>
						<button
							onClick={() => navigate("/new-product")}
							className='flex justify-between items-center px-2 m-2 text-white bg-blue-600 rounded-md transition ease-in-out delay-150 hover:scale-110 duration-300 cursor-pointer'>
							<AddIcon />
							<h4 className='p-2 '>Yeni Ürün Oluştur!</h4>
						</button>
					</div>
				</div>
				<hr className='border-2 border-black' />

				<div className='flex justify-center flex-wrap'>
					{products.value && products.value.length > 0 ? (
						products.value.map((product) => <ProductCard product={product} />)
					) : (
						<div className='flex flex-col p-2'>
							<div className='flex justify-center items-center'>
								<h1>Görünürde hiç ürün yok.</h1>
							</div>
							<div className='flex justify-center items-center'>
								<button
									onClick={() => navigate("/new-product")}
									className='flex justify-between items-center px-2 m-2 text-white bg-blue-600 rounded-md transition ease-in-out delay-150 hover:scale-110 duration-300 cursor-pointer'>
									<AddIcon />
									<h4 className='p-2 '>Yeni Ürün Oluştur!</h4>
								</button>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	)
}

export default Home
