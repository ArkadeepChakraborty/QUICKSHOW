import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FcCamera } from 'react-icons/fc';
import {
  LayoutDashboardIcon,
  ListCollapseIcon,
  ListIcon,
  PlusSquareIcon,
} from 'lucide-react';
import { assets } from '../../assets/assets';
import axios from 'axios';
import toast from 'react-hot-toast';

const AdminSidebar = () => {
  const [owner, setOwner] = useState(null);
  const [loading, setLoading] = useState(false);

  const adminNavlinks = [
    { name: 'Dashboard', path: '/admin', icon: LayoutDashboardIcon },
    { name: 'Add Shows', path: '/admin/add-shows', icon: PlusSquareIcon },
    { name: 'List Shows', path: '/admin/list-shows', icon: ListIcon },
    { name: 'List Bookings', path: '/admin/list-bookings', icon: ListCollapseIcon },
  ];

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

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setLoading(true);

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'dish_platter_preset');

    try {
      const cloudinaryRes = await axios.post(
        'https://api.cloudinary.com/v1_1/de5oqwevm/image/upload',
        formData
      );

      const imageUrl = cloudinaryRes.data.secure_url;

      const updateRes = await axios.put('/api/owner/upload-image', { imageUrl });

      if (updateRes.data.imageUrl) {
        setOwner((prev) => ({ ...prev, imageUrl: updateRes.data.imageUrl }));
        toast.success('Image uploaded successfully!');
      } else {
        toast.error('Image update failed!');
      }
    } catch (err) {
      console.error(err);
      toast.error('Failed to upload image');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-[calc(100vh-64px)] md:flex flex-col items-center pt-8 max-w-13 md:max-w-60 w-full border-r border-gray-300/20 text-sm">
      {/* Profile image with upload icon */}
      <label className="relative cursor-pointer group">
        <img
          className="h-9 md:h-14 w-9 md:w-14 rounded-full mx-auto object-cover"
          src={owner?.imageUrl || assets.profile}
          alt="owner"
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden"
        />
        <div className="absolute bottom-0 right-0 bg-white rounded-full p-0.5 shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <FcCamera className="w-4 h-4" />
        </div>
      </label>

      <p className="mt-2 text-base max-md:hidden text-white">
        {owner?.name || 'Loading...'}
      </p>

      {loading && <p className="text-xs text-gray-400 mt-2">Uploading...</p>}

      <div className="w-full">
        {adminNavlinks.map((link, index) => (
          <NavLink
            key={index}
            to={link.path}
            end
            className={({ isActive }) =>
              `relative flex items-center max-md:justify-center gap-2 w-full py-2.5 min-md:pl-10 first:mt-6 text-gray-400 ${
                isActive ? 'bg-primary/15 text-primary group' : ''
              }`
            }
          >
            {({ isActive }) => (
              <>
                <link.icon className="w-5 h-5" />
                <p className="max-md:hidden">{link.name}</p>
                <span
                  className={`w-1.5 h-10 rounded-1 right-0 absolute ${
                    isActive ? 'bg-primary' : ''
                  }`}
                />
              </>
            )}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default AdminSidebar;
