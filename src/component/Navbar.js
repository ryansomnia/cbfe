import {NavLink} from "react-router-dom"

export default function Navbar() {
  return (
    <div as="nav" className="bg-gray-800">
 
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="hidden h-10 w-auto lg:block"
                    src="/logocb.png"
                    alt="Your Company"
                  />
                  <h1 className='text-white text-sm font-medium'>Cerdas Bangsa</h1>
                </div>
                
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                  <NavLink to="/" className = " text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</NavLink>
                  <NavLink to="/profile" className = " text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Profile</NavLink>
                  <NavLink to="/" className = " text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</NavLink>
                  <NavLink to="/" className = " text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</NavLink>
                 <NavLink to="/ppdb" className = "text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">PPDB</NavLink>
                  
                  </div>
                </div>
              </div>
            </div>
          </div>

      
    </div>
    
    )
}
