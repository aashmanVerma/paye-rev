"use client"
import { useRef, useState } from "react"
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import Link from "next/link";
  
  



export default function Land() {

    const [toggle,setToggle] = useState(false);
    const aboutRef = useRef(null);
    const contactRef = useRef(null);
    const priceRef = useRef(null);

  return (
    <div className="">

        {/* navbar below */}
        <div className="navbar py-4 lg:py-6 flex justify-between w-[85%] mx-auto bg-white sticky top-0 z-10">
            <div className="flex items-center gap-x-2">
                <svg width="30px" height="30px" viewBox="0 0 24 24" strokeWidth="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M15 21.5c4-5.5 4-13.5 0-19M11.5 20c3.5-5 3.5-11 0-16M8.5 18c2.667-3.75 2.667-8.25 0-12M5.5 16c1.5-2.5 1.5-5.5 0-8" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                <span className="font-medium">PayE</span>
            </div>
            <div className="lg:hidden" onClick={()=>setToggle(!toggle)}>
                {
                    !toggle ? <svg width="30px" height="30px" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M3 5h18M3 12h18M3 19h18" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                    :
                    <svg width="30px" height="30px" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M6.758 17.243L12.001 12m5.243-5.243L12 12m0 0L6.758 6.757M12.001 12l5.243 5.243" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                }
            </div>
            <div className="lg:flex gap-x-4 hidden">
                <span className="text-lg font-medium cursor-pointer px-2 py-1 hover:bg-gray-200 rounded duration-300" onClick={()=>aboutRef.current.scrollIntoView({behavior:"smooth"})}>About</span>
                <span className="text-lg font-medium cursor-pointer px-2 py-1 hover:bg-gray-200 rounded duration-300" onClick={()=>contactRef.current.scrollIntoView({behavior:"smooth"})}>Contact</span>
                <span className="text-lg font-medium cursor-pointer px-2 py-1 hover:bg-gray-200 rounded duration-300" onClick={()=>priceRef.current.scrollIntoView({behavior:"smooth"})}>Pricing</span>
            </div>
        </div>
        <div className="sticky top-14">
            <AnimatePresence>
            {
                toggle && <motion.div className="w-[100%] flex lg:hidden flex-col gap-y-2 py-4 px-[7.5%] absolute bg-white"
                initial={{x:-50, opacity:0}}
                animate={{x:0, opacity:1}}
                exit={{x:-50, opacity:0}}
                >
                    <span className="px-2 py-1 hover:bg-gray-200 rounded cursor-pointer duration-300" onClick={()=>{
                        aboutRef.current.scrollIntoView({behavior:"smooth"})
                        setToggle(false)
                    }}>About</span>
                    <span className="px-2 py-1 hover:bg-gray-200 rounded cursor-pointer duration-300" onClick={()=>{
                        contactRef.current.scrollIntoView({behavior:"smooth"})
                        setToggle(false)
                    }}>Contact</span>
                    <span className="px-2 py-1 hover:bg-gray-200 rounded cursor-pointer duration-300" onClick={()=>{
                        priceRef.current.scrollIntoView({behavior:"smooth"})
                        setToggle(false)
                    }}>Pricing</span>
                </motion.div>
            }
            </AnimatePresence>
        </div>

        {/* hero section */}
        <div className="my-14 w-[85%] mx-auto">
            <div className="flex flex-col gap-y-2 lg:flex-row lg:justify-between lg:flex-wrap lg:items-center">
                <div className="px-4 text-center lg:w-[45%] lg:flex lg:flex-col lg:gap-y-3">
                    <span className="font-semibold text-xl md:text-2xl lg:text-3xl">Effortless Payroll Management and Employee Tracking</span>
                    <span className="hidden text-base md:text-xl lg:block">Join with us today!</span>
                    <div className="hidden lg:flex lg:gap-x-2 lg:justify-center">
                            <Button>
                                <Link href="/auth/singup">Sign up</Link>
                            </Button>
                            <Button>
                                <Link href="/auth/login">Log in</Link>
                            </Button>
                    </div>
                    <div className="hidden social-link lg:flex gap-x-3 mt-8 justify-center">
                        <div className="">
                            <a href="https://twitter.com/verma_aashman" target="_blank">
                                <svg width="35px" height="35px" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M23 3.01s-2.018 1.192-3.14 1.53a4.48 4.48 0 00-7.86 3v1a10.66 10.66 0 01-9-4.53s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5 0-.278-.028-.556-.08-.83C21.94 5.674 23 3.01 23 3.01z" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                            </a>
                        </div>
                        <div>
                            <a href="https://github.com/elite16op" target="_blank">
                                <svg width="35px" height="35px" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M16 22.027v-2.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7a5.44 5.44 0 00-1.5-3.75 5.07 5.07 0 00-.09-3.77s-1.18-.35-3.91 1.48a13.38 13.38 0 00-7 0c-2.73-1.83-3.91-1.48-3.91-1.48A5.07 5.07 0 005 5.797a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 00-.94 2.58v2.87M9 20.027c-3 .973-5.5 0-7-3" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mx-auto lg:w-[45%] lg:mx-0">
                    <Image
                        alt="hero-pic"
                        src="/hero.svg"
                        height={300}
                        width={300}
                        className="lg:w-[25rem]"
                    />
                </div>
                <div className="text-center lg:hidden flex flex-col gap-y-2 my-4">
                    <span className="lg:hidden text-base md:text-xl block">Join with us today!</span>
                    <div className="lg:hidden flex gap-x-2 justify-center">
                            <Button>
                                <Link href="/auth/singup">Sign up</Link>
                            </Button>
                            <Button>
                                <Link href="/auth/login">Log in</Link>
                            </Button>
                    </div>
                    <div className="social-link flex gap-x-3 mt-6 justify-center">
                        <div className="">
                            <a href="https://twitter.com/verma_aashman" target="_blank">
                                <svg width="35px" height="35px" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M23 3.01s-2.018 1.192-3.14 1.53a4.48 4.48 0 00-7.86 3v1a10.66 10.66 0 01-9-4.53s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5 0-.278-.028-.556-.08-.83C21.94 5.674 23 3.01 23 3.01z" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                            </a>
                        </div>
                        <div>
                            <a href="https://github.com/elite16op" target="_blank">
                                <svg width="35px" height="35px" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M16 22.027v-2.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7a5.44 5.44 0 00-1.5-3.75 5.07 5.07 0 00-.09-3.77s-1.18-.35-3.91 1.48a13.38 13.38 0 00-7 0c-2.73-1.83-3.91-1.48-3.91-1.48A5.07 5.07 0 005 5.797a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 00-.94 2.58v2.87M9 20.027c-3 .973-5.5 0-7-3" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div ref={aboutRef} className="h-10 w-10"></div>

        {/* about section */}
        <div className="my-10 flex-col flex gap-y-10 w-[85%] mx-auto">
            <div className="text-center">
                <span className="font-medium text-lg md:text-xl md:font-semibold lg:text-3xl">About</span>
            </div>
            <div className="flex flex-col gap-y-2 lg:flex-row lg:justify-around">
                <div className="mx-auto lg:w-[45%]">
                    <Image 
                        alt="watch-pic"
                        src="/watch1.avif"
                        height={300}
                        width={300}
                        className="rounded-md lg:w-[20rem] lg:rounded-xl"
                    />
                </div>
                <div className="flex flex-col gap-y-2 justify-center px-3 mt-4 lg:w-[45%]">
                    <span className="text-xl font-medium block lg:text-2xl lg:font-semibold">Effortless Salary Calculation and Payroll Generation</span>
                    <span className="mt-2 block lg:text-lg">Waving goodbye to manual calculations and spreadsheets, Paye automates salary calculations while generating customizable, professional payrolls with minimal effort.</span>
                </div>
            </div>
            <div className="flex flex-col gap-y-2 lg:flex-row lg:justify-around">
                <div className="hidden lg:flex flex-col gap-y-2 justify-center px-3 mt-4 lg:w-[45%]">
                    <span className="text-xl font-medium block lg:text-2xl lg:font-semibold">Empower Employee Tracking and Business Growth</span>
                    <span className="mt-2 block lg:text-lg">Monitor employees records and progress in real-time. Focus on your company's growth while Paye keeps track of your workforce.</span>
                </div>
                <div className="flex justify-center lg:w-[45%]">
                    <Image 
                        alt="watch-pic"
                        src="/abt1.jpg"
                        height={300}
                        width={300}
                        className="rounded-md lg:w-[20rem] lg:rounded-xl"
                    />
                </div>
                <div className="flex lg:hidden flex-col gap-y-2 justify-center px-3 mt-4 lg:w-[45%]">
                    <span className="text-xl font-medium block lg:text-2xl lg:font-semibold">Empower Employee Tracking and Business Growth</span>
                    <span className="mt-2 block lg:text-xl">Monitor employees records and progress in real-time. Focus on your company's growth while Paye keeps track of your workforce.</span>
                </div>
            </div>
        </div>

            <div className="h-10 w-10" ref={priceRef}></div>

        {/* pricing section */}
        <div className="my-10 flex-col flex gap-y-10 w-[85%] mx-auto">
            <div className="text-center">
                <span className="font-medium text-lg md:text-xl md:font-semibold lg:text-3xl">Pricing</span>
            </div>
            <div className="flex flex-col gap-y-4 justify-center lg:flex-row lg:justify-between">
                <div className="w-[20rem]">
                    <Card>
                        <CardHeader>
                            <CardDescription>Starter</CardDescription>
                            <CardTitle>$19.99/month</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul>
                                <li>- Basic Payroll</li>
                                <li>- Timesheets</li>
                                <li>- 2 Employees</li>
                                <li>- Email support</li>
                            </ul>
                        </CardContent>
                        <CardFooter>
                            <Button>
                                <Link href="/auth/singup">Sign up</Link>
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
                <div className="w-[20rem]">
                    <Card>
                        <CardHeader>
                            <CardDescription>Pro</CardDescription>
                            <CardTitle>$49.99/month</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul>
                                <li>- Advanced Payroll</li>
                                <li>- Timeoff Management</li>
                                <li>- Unlimited Employees</li>
                                <li>- Priority support</li>
                            </ul>
                        </CardContent>
                        <CardFooter>
                            <Button>
                                <Link href="/auth/singup">Sign up</Link>
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
                <div className="w-[20rem]">
                    <Card>
                        <CardHeader>
                            <CardDescription>Enterprise</CardDescription>
                            <CardTitle>Custom</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul>
                                <li>- Custom solutions</li>
                                <li>- Advance analytics</li>
                                <li>- In-depth reporting</li>
                                <li>- Dedicated support</li>
                            </ul>
                        </CardContent>
                        <CardFooter>
                            <Button>Get a quote</Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </div>





        {/* footer section */}
        <div className="bg-[#0F172A] pt-10" ref={contactRef}>
            <div className="text-white w-[85%] lg:w-[50%] mx-auto">
            <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger>What is billing timecycle?</AccordionTrigger>
                    <AccordionContent>
                    Per month from the day purchase is made.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger>Maker of this website?</AccordionTrigger>
                    <AccordionContent>
                    Made by Aashman.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
            </div>
            <div className="text-white w-[85%] mx-auto mt-8">
                <div className="text-center flex flex-col gap-y-2 lg:flex-row lg:gap-x-2 justify-center items-center">
                    <span>Any trouble?</span>
                    <Button variant="secondary">
                        <a href={process.env.MAIL} target="_blank">Mail</a>
                    </Button>
                </div>
                <span className="mt-14 pb-5 block">2023 Paye. All Rights Reserved</span>
            </div>
        </div>

    </div>
  )
}
