import Link from "next/link"
import Container from "../Container"
import FooterList from "./FooterList"

import {MdFacebook} from 'react-icons/md'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {AiFillYoutube} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'


const Footer = () => {
  return (
    <footer className="bg-slate-700 text-slate-200 text-sm mt-16">
      <Container>
        <div className="flex flex-col md:flex-row 
        pt-16 pb-8 justify-between">
          <FooterList>
            <h3 className="text-base font-bold mb-2">Shop Categories</h3>
                    <Link href={'#'}>Phones</Link>
                    <Link href={'#'}>Laptops</Link>
                    <Link href={'#'}>Deskops</Link>
                    <Link href={'#'}>Watches</Link>
                    <Link href={'#'}>Tvs</Link>
                    <Link href={'#'}>Accesories</Link>
          </FooterList>
          <FooterList>
                    <h3 className='text-base font-bold mb-2'>Customer Services</h3>
                    <Link href={'#'}>Contact Us</Link>
                    <Link href={'#'}>Shipping</Link>
                    <Link href={'#'}>Returns</Link>
                    <Link href={'#'}>Watches</Link>
                    <Link href={'#'}>Tvs</Link>
                    <Link href={'#'}>Accesories</Link>
                </FooterList>
                <div className='w-full md:w-1/3 mb-6 md:mb-0'>
                    <h3 className='text-base font-bold mb-2'>About Us</h3>
                    <p className='mb-2'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                        A exercitationem error pariatur voluptatibus, molestiae eos at, 
                        accusamus iure quae sunt veritatis sed nam? Expedita,
                         earum nemo nihil laboriosam dolorem inventore!
                    </p>
                    <p>&copy; {new Date().getFullYear()}
                        E-shop; All right reserved
                    </p>
                </div>
                <FooterList>
                    <h3 className='text-base font-bold mb-2'>Follow Us</h3>
                    <div className='flex gap-2'>
                        <Link href={"#"}>
                            <MdFacebook size={24}/>
                        </Link>
                        <Link href={"#"}>
                            <AiFillTwitterCircle size={24}/>
                        </Link>
                        <Link href={"#"}>
                            <AiFillInstagram size={24}/>
                        </Link>
                        <Link href={"#"}>
                            <AiFillYoutube size={24}/>
                        </Link>
                    </div>
                </FooterList>      
        </div>
      </Container>
    </footer>
  )
}

export default Footer
