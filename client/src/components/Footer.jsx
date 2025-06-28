import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'motion/react';

const Footer = () => {
  return (
    <motion.footer 
    initial= {{y: 30, opacity:0}}
    whileInView= {{y:0, opacity:1}}
    transition={{duration: 0.6}}
    className="px-6 md:px-16 lg:px-36 mt-20 w-full text-gray-300">
            <motion.div 
            initial= {{y: 20, opacity:0}}
            whileInView= {{y:0, opacity:1}}
            transition={{duration: 0.6, delay: 0.2}}
            className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500 pb-14">
                <div className="md:max-w-96">
                    <motion.img 
                    initial= {{opacity:0}}
                    whileInView= {{opacity:1}}
                    transition={{duration: 0.5, delay: 0.3}}
                    className="w-36 h-auto" src={assets.logo} alt="logo" />
                    <motion.p 
                    initial= {{opacity:0}}
                    whileInView= {{opacity:1}}
                    transition={{duration: 0.5, delay: 0.4}}
                    className="mt-6 text-sm">
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </motion.p>
                    <motion.div 
                    initial= {{opacity:0}}
                    whileInView= {{opacity:1}}
                    transition={{duration: 0.5, delay: 0.5}}
                    className="flex items-center gap-2 mt-4">
                        <img src={assets.googlePlay} alt="google play" className="h-9 w-auto" />
                        <img src={assets.appStore} alt="app store" className="h-9 w-auto" />
                    </motion.div>
                </div>
                <motion.div
                 initial= {{y: 20, opacity:0}}
                whileInView= {{y:0, opacity:1}}
                transition={{duration: 0.6, delay: 0.4}}
                 className="flex-1 flex items-start md:justify-end gap-20 md:gap-40">
                    <div>
                        <h2 className="font-semibold mb-5">Company</h2>
                        <ul className="text-sm space-y-2">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About us</a></li>
                            <li><a href="#">Contact us</a></li>
                            <li><a href="#">Privacy policy</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-semibold mb-5">Get in touch</h2>
                        <div className="text-sm space-y-2">
                            <p>+1-234-567-890</p>
                            <p>contact@example.com</p>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
            <motion.p 
            initial= {{y: 20, opacity:0}}
                whileInView= {{y:0, opacity:1}}
                transition={{duration: 0.6, delay: 0.6}}
            className="pt-4 text-center text-sm pb-5">
                Copyright {new Date().getFullYear()} © QuickShow. All Right Reserved.
            </motion.p>
        </motion.footer>
  )
}

export default Footer