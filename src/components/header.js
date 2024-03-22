import React, { useState } from "react";

const Header = () => {
    const [showProductsMenu, setShowProductsMenu] = useState(false);
    const [showAboutMenu, setShowAboutMenu] = useState(false);
    const [showSearchBar, setShowSearchBar] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        console.log("Search query:", searchQuery);
    };

    return (
        <div className="bg-black w-full h-16 flex fixed text-white font-bold text-sm items-center flex-row justify-between">
            <div className="flex-initial ml-24 w-56">
                <button className=" items-center object-fill" onClick={() => router.push('/home')}>
                    <img className="object-fill" src="/images/big-logo.png" alt="Big Logo" />
                </button>
            </div>
            <div 
            onMouseEnter={() => setShowAboutMenu(true)}
            onMouseLeave={() => setShowAboutMenu(false)}
            className="h-14 flex items-center text-light-gray flex-initial">
                <div className="items-center gap-6 md:text-md pl-10 font-bold text-md text-light-gray">
                    <div className="relative">
                        <a className="cursor-pointer hover:text-white" onClick={() => router.push('/about-holding')}>
                            About Holding
                        </a>
                        {showAboutMenu && (
                            <div className="fixed left-0 w-screen top-16 h-auto bg-opacity-50 bg-black text-white flex flex-row text-lg font-thin">
                                <div className="flex-1 pl-24 flex flex-col">
                                    <a className="hover:text-red py-6" href="#">Kalashnikov Concern</a>
                                    <a className="hover:text-red pb-6" href="#">Nobel Brothers Shipyard</a>
                                    <a className="hover:text-red pb-6" href="#">Kalashnikov Academy</a>
                                    <a className="hover:text-red pb-6" href="#">IzhBS SPA</a>
                                    <a className="hover:text-red pb-6" href="#">Triada-TKO</a>
                                </div>
                                <div className="flex-1 flex flex-col">
                                    <a className="hover:text-red py-6" href="#">Izhevsk Mechanical Plant</a>
                                    <a className="hover:text-red pb-6" href="#">UVS Avia</a>
                                    <a className="hover:text-red pb-6" href="#">Kalashnikov Industrial Cluster</a>
                                    <a className="hover:text-red pb-6" href="#">MMZ</a>
                                </div>
                                <div className="flex-1 flex flex-col">
                                    <a className="hover:text-red py-6" href="#">Rybinsk Shipyard</a>
                                    <a className="hover:text-red pb-6" href="#">Research Institute of Steel</a>
                                    <a className="hover:text-red pb-6" href="#">Russian Small Arms</a>
                                    <a className="hover:text-red pb-6" href="#">TsNIITochMash</a>
                                </div>
                                <div className="flex-1 p-4">
                                    
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div 
            onMouseEnter={() => setShowProductsMenu(true)}
            onMouseLeave={() => setShowProductsMenu(false)}
            className="h-14 flex items-center text-light-gray flex-initial">
                <div className="items-center gap-6 md:text-md pl-10 font-bold text-md text-light-gray">
                    <div className="relative">
                        <a className="cursor-pointer hover:text-white" onClick={() => router.push('/products')}>
                            Products
                        </a>
                        {showProductsMenu && (
                            <div className="fixed left-0 w-screen top-16 h-auto bg-opacity-50 bg-black text-white flex flex-row text-lg font-thin">
                                <div className="flex-1 pl-24 flex flex-col">
                                    <a className="hover:text-red py-6" href="#">Combat line of products</a>
                                    <a className="hover:text-red pb-6" href="#">Branded apparel and accessories</a>
                                    <a className="hover:text-red pb-6" href="#">Non-weapon production</a>
                                </div>
                                <div className="flex-1 flex flex-col">
                                    <a className="hover:text-red py-6" href="#">Civilian small arms</a>
                                    <a className="hover:text-red pb-6" href="#">Shipbuilding</a>
                                    <a className="hover:text-red pb-6" href="#">Unmanned aerial vehicles</a>
                                </div>
                                <div className="flex-1 flex flex-col">
                                    <a className="hover:text-red py-6" href="#">Rocket and artillery weapons</a>
                                    <a className="hover:text-red pb-6" href="#">Special equipment</a>
                                    <a className="hover:text-red pb-6" href="#">Advanced developments</a>
                                </div>
                                <div className="flex-1 p-4">
                                    
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="h-14 flex items-center text-light-gray flex-initial">
                <div className="items-center gap-6 md:text-md pl-10 font-bold text-md text-light-gray">
                    <div className="relative">
                        <a className="cursor-pointer hover:text-white" onClick={() => router.push('/photo')}>
                            Photo
                        </a>
                    </div>
                </div>
            </div>
            <div className="w-7 h-7 flex-initial ml-auto">
                <button className="">
                    <img
                    src="/images/vkwhite.png"
                    alt="VK" 
                    onMouseOver={(e) => e.currentTarget.src = '/images/vkred.png'}
                    onMouseOut={(e) => e.currentTarget.src = '/images/vkwhite.png'}
                    >
                    </img>
                    
                </button>
            </div>
            <div className=" mr-24 w-5 h-5 flex-initial ml-6">
                <button className="">
                    <img
                    src="/images/human.png"
                    alt="human" 
                    onMouseOver={(e) => e.currentTarget.src = '/images/humanred.png'}
                    onMouseOut={(e) => e.currentTarget.src = '/images/human.png'}
                    >
                    </img>
                    
                </button>
            </div>
            {/* <div className="">
                <div className="relative">
                    {!showSearchBar && (
                        <button className="absolute right-0 top-0 mt-2 mr-2 bg-transparent border-none" onClick={() => setShowSearchBar(true)}>
                            <i className="fas fa-search text-white"></i>
                        </button>
                    )}
                    {showSearchBar && (
                        <form onSubmit={handleSearchSubmit} className="flex">
                            <input
                                type="text"
                                placeholder="Search"
                                value={searchQuery}
                                onChange={handleSearchChange}
                                className="bg-gray-700 text-white px-4 py-2 rounded-l-md"
                            />
                            <button type="submit" className="bg-gray-700 text-white px-4 py-2 rounded-r-md">
                                Search
                            </button>
                        </form>
                    )}
                </div> 
            </div>    */}
        </div>
        
    );
};

export default Header;
