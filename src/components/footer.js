import React, { useState } from "react";

const Footer = () => {
    return (
        <div>
            <div className="flex items-center text-light-gray flex-initial absolute bottom-0 w-full bg-mid-gray">
                <div className=" ">
                    <div className="border-y-2 border-white-gray w-screen h-auto text-white flex flex-row text-md font-thin pb-8">
                        <div className="flex-1 pl-24 flex flex-col">
                            <a className="py-8 font-semibold" href="#">The main</a>
                            <a className="hover:text-red pb-4" href="#">Production</a>
                            <a className="hover:text-red pb-4" href="#">News</a>
                            <a className="hover:text-red pb-4" href="#">Media</a>
                            <a className="hover:text-red pb-4" href="#">Photo</a>
                        </div>
                        <div className="flex-1 flex flex-col">
                            <a className="py-8 font-semibold" href="#">About Kalashnikov</a>
                            <a className="hover:text-red pb-4" href="#">Outstanding people</a>
                            <a className="hover:text-red pb-4" href="#">For Supplier</a>
                            <a className="hover:text-red pb-4" href="#">Combating Corruption</a>
                            <a className="hover:text-red pb-4" href="#">Licensing</a>
                            <a className="hover:text-red pb-4" href="#">IMZ Museum</a>
                        </div>
                        <div className="flex-1 flex flex-col">
                            <a className="py-8 font-semibold" href="#">Career</a>
                            <a className="hover:text-red pb-4" href="#">For Students</a>
                            <a className="hover:text-red pb-4" href="#">Contacts</a>
                        </div>
                        <div className="flex-1 flex flex-col">
                            <a className="py-8 font-semibold" href="#">Contacts</a>
                            <a className="hover:text-red pb-4" href="#">Official partners</a>
                            <a className="hover:text-red pb-4" href="#">Services</a>
                            <a className="hover:text-red pb-4" href="#">Museum</a>
                        </div>
                    </div>
                    <div className="w-screen text-white flex flex-row text-md font-thin h-auto items-center">
                    <div className="flex-1 pl-24 flex flex-col py-8 items-start font-normal">
                        <a className="" href="#">© 2024, Kalashnikov Concern JSC,</a>
                        <a className="" href="#">part of the Kalashnikov Group</a>
                    </div>
                    <div className="flex-1 flex flex-col font-normal py-8 items-start">
                        <div className="flex flex-row items-center">
                            <img className="object-fill flex flex-1 pr-5 w-15 h-10" src="/images/small-logo.png" alt="Small Logo" />
                            <div className="flex flex-col">
                                <a className="text-red text-lg" href="#">Anti-Corruption</a>
                                <a className="" href="#">tip line</a>
                            </div>
                        </div>
                        
                        
                    </div>
                    <div className="flex-1 flex flex-col text-xs py-8 items-start">
                        <a className="" href="#">Site is protected reCAPTCHA. By using it you agree to privacy policy and</a>
                        <a className="" href="#">terms of use Google.</a>
                    </div>
                </div>
                    
            </div>     
            </div>
        </div>    
    ); 
};

export default Footer;
