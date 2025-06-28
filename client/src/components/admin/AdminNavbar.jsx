import React, { useEffect, useState } from 'react'
import { Link} from 'react-router-dom';
import { assets } from '../../assets/assets';
import axios from 'axios';

const AdminNavbar = () => {
  const [owner, setOwner] = useState(null);

   useEffect(() => {
    const fetchOwner = async () => {
      try {
        const res = await axios.get('/api/owner/info');
        setOwner(res.data);
      } catch (err) {
        console.error('Failed to load owner info:', err);
      }
    };
    fetchOwner();
  }, []);


  return (
    <div className='flex items-center justify-between px-6 md:px-10 h-16 border-b border-gray-300/30'>
       <Link to="/">
        <img src={assets.logo} alt="logo" className='w-36 h-auto'/>
       </Link>
       <p className="mt-2 text-base max-md:hidden text-white">
        Welcome,  <span className='text-primary'> {owner?.name || 'Loading...'} </span>
      </p>
    </div>
  )
}

export default AdminNavbar