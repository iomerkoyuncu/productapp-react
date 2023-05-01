import React, { useEffect, useState } from "react"
import AddIcon from "@mui/icons-material/Add"
import { useNavigate, useParams } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"

import { getCatalogById } from "../features/catalog/catalogSlice"
import { getProductsByCatalogId } from "../features/product/productSlice"

import ProductCard from "../components/ProductCard"

function Catalog() {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const params = useParams()

	const { catalog } = useSelector((state) => state.catalog)
	const { productsInCatalog } = useSelector((state) => state.product)

	useEffect(() => {
		dispatch(getCatalogById(params.id))
		dispatch(getProductsByCatalogId(params.id))
	}, [dispatch, params.id])

	return (
		<div className='w-screen  flex justify-center items-start'>
			<div className='w-4/5 '>
				<h1 className='font-bold text-3xl text-center'>
					{catalog.value && catalog.value.name}
				</h1>

				<div className='flex justify-between items-center'>
					<h1 className='font-bold text-2xl '>Ürünler</h1>
					<p>{catalog.value && catalog.value.id}</p>
				</div>
				<hr className='border-2 border-black' />

				<div className='flex justify-center flex-wrap'>
					{productsInCatalog.value && productsInCatalog.value.length > 0 ? (
						productsInCatalog.value.map((product) => (
							<ProductCard product={product} />
						))
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

export default Catalog
