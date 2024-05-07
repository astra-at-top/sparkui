import logo from "../assets/logo.png"
import  {useState, useEffect} from "react"
import {Button} from "@radix-ui/themes"
import { Modal } from "./Dialoge"
import { Signupform } from "./forms/Signupform"
import { Loginform } from "./forms/Loginform"
function Navbar() {
    let [isOpen, setOpen] = useState(true)
    useEffect(() => {
        function resizeWindow () {
            if(window.innerWidth > 1024){
                setOpen(true)
            }else{
                setOpen(false)
            }
        }
        window.addEventListener("resize",resizeWindow)
        return () => window.removeEventListener("resize", resizeWindow)
    })
    return (<>
        <div className="flex bg-zinc-100 lg:bg-transparent relative justify-between items-center p-2">
            <img src={logo} className="w-20" />
            <ul className={
                isOpen ? " p-3 bg-zinc-100 absolute lg:relative w-full top-24 flex-col lg:flex-row flex lg:flex font-semibold items-center  gap-10 text-black lg:top-0 lg:justify-end lg:bg-transparent lg:left-0" : "hidden"
            }>
                <li>Home</li>
                <li><Modal trigger={
                        <Button>
                            Login
                        </Button>
                    } 
                    title={"Login"}
                    description={"Enter your credintial to login your account"}
                    content={ <Loginform/>}
                    /></li>
                <li >
                    <Modal trigger={
                        <Button className="border border-black px-4 py-2 rounded-xl">Sign up
                        </Button>
                    } 
                    title={"Get started Now"}
                    description={"Enter your credintial to crate your account"}
                    content={<Signupform/>}
                    />
                </li>
            </ul>
            <span onClick={() => {
                setOpen(!isOpen)
            }} className="border lg:hidden text-black p-2 rounded-xl border-black">
                {
                    isOpen ? 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6  h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg> :
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6  h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                    </svg> 
                }
                
            </span>
        </div>
    </>)
}

export {Navbar}

