'use client'

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { sidebarLinks } from "@/constants"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Footer from "./Footer"

const MobileNav = ({ user }: MobileNavProps) => {
    const pathname = usePathname()
    return (
        <section className="w-full max-w-[264px]">
            <Sheet>
                <SheetTrigger>
                    <Image src='/icons/hamburger.svg' width={30} height={30} alt='menu' className="cursor-pointer" />
                </SheetTrigger>
                <SheetContent side="left" className="border-none bg-white">
                    <SheetHeader>
                        <SheetTitle>
                            <Link href="/" className="flex cursor-pointer item-center gap-1 px-4">
                                <Image src="/icons/logo.svg" alt="Horizon Logo" width={34} height={34} />
                                <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">Horizon</h1>
                            </Link>
                        </SheetTitle>
                        <SheetDescription className="header-box-subtext">
                            Modern Online Banking for Your Financial Needs.
                        </SheetDescription>
                    </SheetHeader>
                    <div className="mobilenav-sheet">
                        <SheetClose asChild>
                            <nav className="flex h-ful flex-col gap-6 pt-16 text-white">
                                {sidebarLinks.map((link) => {
                                    const isActive = link.route === pathname || pathname.startsWith(`${link.route}/`)
                                    return (
                                        <SheetClose asChild key={link.label}>
                                            <Link
                                                href={link.route}
                                                key={link.label}
                                                className={cn('mobilenav-sheet_close w-full', { 'bg-bank-gradient': isActive })}
                                            >
                                                <div className="relative size-6">
                                                    <Image
                                                        src={link.imgURL}
                                                        alt={link.label}
                                                        width={20}
                                                        height={20}
                                                        className={cn({
                                                            'brightness-[3] invert-0': isActive
                                                        })}
                                                    />
                                                </div>
                                                <p className={cn('text-16 font-semibold text-black-2', {
                                                    'text-white': isActive
                                                })}>{link.label}</p>
                                            </Link>
                                        </SheetClose>
                                    )
                                })}
                            </nav>
                        </SheetClose>
                        <SheetFooter>
                            <Footer user={user} type="mobile" />
                        </SheetFooter>
                    </div>
                </SheetContent>
            </Sheet>

        </section>
    )
}

export default MobileNav