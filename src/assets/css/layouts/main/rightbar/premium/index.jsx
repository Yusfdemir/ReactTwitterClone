import React from 'react'
import Button from "../../../../../../components/button"
const Premium = () => {
  return (
    <div className='bg-[#16181c] mb-4 rounded-2xl border border-[#16181c] py-3 px-4 flex flex-col gap-2.5'>
        <h6>Premium'a Abone Ol</h6>
        <p className="leading-5 font-bold">
				Yeni özellikleri açmak için abone ol ve uygun olman durumunda reklam geliri payı kazan.
			</p>
			<div className="self-start">
				<Button>Abone Ol</Button>
			</div>
    </div>
  )
}

export default Premium