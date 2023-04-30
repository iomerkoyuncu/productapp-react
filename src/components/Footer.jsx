import React from "react"

import { IconButton } from "@mui/material"
import GitHubIcon from "@mui/icons-material/GitHub"

function Footer() {
	return (
		<div className='w-full h-24 flex justify-evenly p-5'>
			<h4 className=''>ismetomerkoyuncu</h4>
			<div className='flex justify-between'>
				<h4 className='p-[5px]'>2023</h4>
				<a href='https://github.com/iomerkoyuncu/productapp-react'>
					<IconButton
						sx={{
							padding: "5px",
						}}>
						<GitHubIcon />
					</IconButton>
				</a>
			</div>
		</div>
	)
}

export default Footer
