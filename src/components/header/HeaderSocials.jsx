import React from 'react'
import { BsLinkedin} from 'react-icons/bs'
import { BsGithub} from 'react-icons/bs'
import { BsFacebook} from 'react-icons/bs'



const HeaderSocials = () => {
  return (
	<div className='header__socials'>
		<a href="https://atifhossainkhan.vercel.app/" target='_blank' rel="noopener noreferrer" ><BsLinkedin/></a>
		<a href="https://atifhossainkhan.vercel.app/#" target='_blank'  rel="noopener noreferrer"><BsGithub/></a>
		<a href="https://atifhossainkhan.vercel.app/#" target='_blank' rel="noopener noreferrer"><BsFacebook/></a>
	</div>
  )
}

export default HeaderSocials