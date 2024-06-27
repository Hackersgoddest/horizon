import Image from 'next/image'
import React from 'react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip'
import { TooltipPortal } from '@radix-ui/react-tooltip'
import { signOut } from '@/lib/actions/user.actions'
import { useRouter } from 'next/navigation'

const Footer = ({ user, type = "desktop" }: FooterProps) => {
  const router = useRouter()
  const handleSignOut = async () => {
    try {
      await signOut()
      router.push('/sign-in')
    } catch (error) {
      console.error("Error", error)
    }
  }
  return (
    <footer className="footer">
      <div className={type === 'mobile' ? "footer_name-mobile" : "footer_name"}>
        <p className='text-xl font-bold text-gray-700'>{user?.name[0]}</p>
      </div>
      <div className={type === 'mobile' ? "footer_email-mobile" : "footer_email"}>
        <h1 className='text-14 truncate font-semibold text-gray-700'>{user?.name}</h1>
        <p className='text-14 truncate font-normal text-gray-600'>{user?.email}</p>
      </div>
      <div className={type === 'mobile' ? "footer_image-mobile" : "footer_image"} onClick={handleSignOut}>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Image src="/icons/logout.svg" fill alt='fok' />
            </TooltipTrigger>
            <TooltipContent>
              <p className='text-14 font-normal text-gray-600'>Logout</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

      </div>
    </footer>
  )
}

export default Footer