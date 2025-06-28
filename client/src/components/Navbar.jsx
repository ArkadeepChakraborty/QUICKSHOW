import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';
import { MenuIcon, SearchIcon, TicketsIcon, XIcon } from 'lucide-react';
import { useClerk, UserButton, useUser } from '@clerk/clerk-react';
import { useAppContext } from '../context/AppContext';
import { motion } from 'motion/react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useUser();
  const { openSignIn } = useClerk();
  const navigate = useNavigate();

  const { favoriteMovies } = useAppContext();

  const handleNavClick = (path) => {
    window.scrollTo(0, 0);
    navigate(path);
  };

  return (
    <motion.div 
    initial= {{y:-20, opacity:0}}
    animate= {{y:-0, opacity:1}}
    transition={{duration: 0.5}}
    className="fixed top-0 left-0 z-50 w-full flex items-center justify-between px-6 md:px-16 lg:px-36 py-4">
      
      <Link to="/" className="max-md:flex-1" onClick={() => window.scrollTo(0, 0)}>
        <motion.img whileHover= {{scale: 1.05}}src={assets.logo} alt="Logo" className="w-36 h-auto" />
      </Link>

      <div className="hidden md:flex bg-white/10 backdrop-blur-md px-6 py-2 rounded-full text-sm text-white gap-6 font-medium">
        <button className="hover:text-primary transition" onClick={() => handleNavClick("/")}>
          Home
        </button>
        <button className="hover:text-primary transition" onClick={() => handleNavClick("/about")}>
          About
        </button>
        <button className="hover:text-primary transition" onClick={() => handleNavClick("/movies")}>
          Movies
        </button>
        {/* <button className="hover:text-primary transition" onClick={() => handleNavClick("/theaters")}>
          Theaters
        </button> */}
        {/* <button className="hover:text-primary transition" onClick={() => handleNavClick("/releases")}>
          Releases
        </button> */}
        {favoriteMovies.length > 0 && <button className="hover:text-primary transition" onClick={() => handleNavClick("/favorite")}>
          Favorites
        </button>}
      </div>

      <div className="flex items-center gap-4">
        <SearchIcon className="w-5 h-5 text-white cursor-pointer" />
        {!user ? (
          <button
            onClick={openSignIn}
            className="px-4 py-1 sm:px-5 bg-primary hover:bg-primary/80 transition rounded-full font-medium text-white text-sm"
          >
            Login
          </button>
        ) : (
          <UserButton>
            <UserButton.MenuItems>
              <UserButton.Action
                label="My Bookings"
                labelIcon={<TicketsIcon width={15} />}
                onClick={() => {
                  window.scrollTo(0, 0);
                  navigate('/my-bookings');
                }}
              />
            </UserButton.MenuItems>
          </UserButton>
        )}
      </div>

      <MenuIcon
        className="ml-4 md:hidden w-6 h-6 text-white cursor-pointer"
        onClick={() => setIsOpen(true)}
      />

      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/80 backdrop-blur flex flex-col items-center justify-center z-50">
          <XIcon
            className="absolute top-6 right-6 w-6 h-6 text-white cursor-pointer"
            onClick={() => setIsOpen(false)}
          />
          <nav className="flex flex-col items-center gap-6 text-white text-xl font-medium">
            <button onClick={() => { setIsOpen(false); handleNavClick("/") }}>Home</button>
            <button onClick={() => { setIsOpen(false); handleNavClick("/movies") }}>Movies</button>
            <button onClick={() => { setIsOpen(false); handleNavClick("/theaters") }}>Theaters</button>
            <button onClick={() => { setIsOpen(false); handleNavClick("/releases") }}>Releases</button>
            <button onClick={() => { setIsOpen(false); handleNavClick("/favorite") }}>Favorites</button>
          </nav>
        </div>
      )}
    </motion.div>
  );
};

export default Navbar;
