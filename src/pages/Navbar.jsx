import {Link} from "react-router-dom"
import logo from "../assets/b.png"
import { GiHamburgerMenu } from 'react-icons/gi';

import { FiSun, FiMoon } from 'react-icons/fi';
import {useState} from "react"


function Navbar() {
    const [mode , setMode] = useState(true);
    const [NavDrop , setDrop] = useState(false)

    let size = 40 ;
    const app = document.querySelector(".App")
    const ChangMode = () => {
        setMode(!mode)
        app.classList.toggle("dark")
        console.log(app)

    }
    const Dropmenu = () => {
        setDrop(!NavDrop)
    }

    
    
    return (
        <div  className="Navbar fixed  w-full z-[999] bg-gray-200  dark:bg-gray-700 dark:border-b-[1px] dark:border-gray-400 "> 
            <div className="container  px-4 h-[60px] m-auto Fb justify-between">
                    <div className="Navbar-logo Fb gap-2 ">
                        <img src={logo}  className="w-[30px]"   alt="" />
                        <h1 className=" font-bold text-sm dark:text-orange-500  ">Crypto <span className="text-orange-500 dark:text-white ">News .</span></h1>
                    </div>
                    <ul className=" hidden sm:Fb gap-2 ">
                        <li  className="border-[1px] border-gray-300 hover:border-none   px-4 py-2 rounded-md  hover:bg-orange-500 hover:text-white  text-orange-500  "> <Link to= "/" > Home</Link></li>
                        <li className=" border-[1px] border-gray-300 hover:border-none  px-4 py-2 rounded-md  hover:bg-orange-500 hover:text-white  text-orange-500 "> <Link to="/crypto">Cryptocurenci </Link></li>
                        <li className=" border-[1px] border-gray-300 hover:border-none px-4 py-2 rounded-md  hover:bg-orange-500 hover:text-white  text-orange-500 "> <Link to="/news">News</Link></li>
                    </ul>  
                    <div className="right Fb ">
                      
                        <div className="mode hidden sm:block" onClick={ChangMode}>
                            {mode?<FiSun className="p-2  hover:bg-orange-500 hover:text-white dark:text-white  " size={size} /> : <FiMoon  className="p-2 hover:bg-orange-500 hover:text-white" size={size}/>}
                        </div>
                        <GiHamburgerMenu className= "p-2 sm:hidden hover:bg-orange-500 hover:text-white" onClick={Dropmenu} size={size} />
                    </div> 

                    {/*drop navbar for mobile */} 
                    <div className={NavDrop?" h-auto  transition duration-1000 ease-in-out sm:hidden Navbar-drop border-[1px] border-b-orange-500 fixed left-0 w-full z-[900] flex flex-col   top-[71px]":"top-[-100%] fixed"}>
                        <ul>
                        <li  className=" w-100 p-4  text-center mb-2 text-lg text-orange hover:bg-gray-300 "> <Link to= "/" > Home</Link></li>
                            <li className=" w-100 p-4    text-center mb-2 text-lg text-orange hover:bg-gray-300 "> <Link  to="/crypto">Cryptocurenci </Link></li>
                            <li className=" w-100 p-4   text-center mb-2 text-lg text-orange hover:bg-gray-300 "> <Link to="/news">News</Link></li>
                        </ul>
                        <button className="btn bg-orange-500  font-bold text-white">creat a  account </button>

                    </div>               
            </div>
        </div>
    )
}

export default Navbar