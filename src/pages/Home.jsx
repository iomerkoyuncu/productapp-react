import React, { useEffect, useState } from "react"

import AddIcon from "@mui/icons-material/Add"

import { useNavigate } from "react-router-dom"
import CatalogCard from "../components/CatalogCard"

import ProductCard from "../components/ProductCard"

function Home() {
	const navigate = useNavigate()

	return (
		<div className='w-screen h-screen flex justify-center items-start'>
			<div className='w-4/5 '>
				<h1 className='font-bold text-3xl text-center'>Hoşgeldin</h1>

				<h1 className='font-bold text-2xl '>Kategoriler</h1>
				<hr className='border-2 border-black' />

				<div className='flex justify-center flex-wrap'>
					<CatalogCard />
					<CatalogCard />
					<CatalogCard />
					<CatalogCard />
				</div>

				<h1 className='font-bold text-2xl '>Ürünler</h1>
				<hr className='border-2 border-black' />

				<div className='flex justify-center flex-wrap'>
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
				</div>

				{/*
				<div className='flex justify-center items-center'>
					<button
						onClick={() => navigate("/new-catalog")}
						className='flex justify-between items-center px-2 m-2 text-white bg-blue-600 rounded-md transition ease-in-out delay-150 hover:scale-110 duration-300 cursor-pointer'>
						<AddIcon />
						<h4 className='p-2 '>Yeni Katalog Oluştur!</h4>
					</button>
				</div>
				

				<div className='flex justify-center items-center'>
					<h1>Görünürde hiç katalog yok.</h1>
				</div>
				*/}
			</div>
		</div>
	)
}

export default Home
