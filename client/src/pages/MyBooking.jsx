import React, { useEffect, useState } from 'react'
import { dummyBookingData } from '../assets/assets'
import Loading from '../components/Loading'
import BlurCircle from '../components/BlueCircle'
import timeformat from '../lib/timeformat'
import { dateformat } from '../lib/dateformat'
import { useAppContext } from '../context/AppContext'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const MyBooking = () => {
  const currency = import.meta.env.VITE_CURRENCY

  const { axios, getToken, user, image_base_url } = useAppContext();

  const [bookings, setBookings] = useState([])
  const [loading, setLoading] = useState(true)

  const getmybookings = async () => {
    try {
      const { data } = await axios.get('/api/user/bookings', {
        headers: { Authorization: `Bearer ${await getToken()}` }
      })
      if (data.success) {
        setBookings(data.bookings)
      }
    } catch (error) {
      console.log(error)
    }
    setLoading(false)
  }

  useEffect(() => {
    if (user) {
      getmybookings()
    }
  }, [user])

  return !loading ? (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className='relative px-6 md:px-16 lg:px-40 pt-30 md:pt-40 min-h-[80vh]'
    >
      <BlurCircle top="100px" left="100px" />
      <div><BlurCircle bottom="0px" left="600px" /></div>


      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='text-lg font-semibold mb-4'
      >
        My Bookings
      </motion.h1>

  
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15
            }
          }
        }}
      >
        {bookings.map((item, index) => {
          if (!item.show || !item.show.movie) return null;

          return (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.4 }}
              className='flex flex-col md:flex-row justify-between bg-primary/8 border border-primary/20 rounded-lg mt-4 p-2 max-w-3xl'
            >
              <div className='flex flex-col md:flex-row'>
                <img
                  src={image_base_url + item.show.movie.poster_path}
                  alt=""
                  className='md:max-w-45 aspect-video h-auto object-cover object-bottom rounded'
                />

                <div className='flex flex-col p-4'>
                  <p className='text-lg font-semibold'>{item.show.movie.title}</p>
                  <p className='text-gray-400 text-sm'>{timeformat(item.show.movie.runtime)}</p>
                  <p className='text-gray-400 text-sm mt-auto'>{dateformat(item.show.showDateTime)}</p>
                </div>
              </div>

              <div className='flex flex-col md:items-end md:text-right justify-between p-4'>
                <div className='flex items-center gap-4'>
                  <p className='text-2xl font-semibold mb-3'>{currency}{item.amount}</p>
                  {!item.isPaid && (
                    <Link
                      to={item.paymentLink}
                      className='bg-primary px-4 py-1.5 mb-3 text-sm rounded-full font-medium cursor-pointer'
                    >
                      Pay Now
                    </Link>
                  )}
                </div>
                <div className='text-sm'>
                  <p><span className='text-gray-400'>Total Tickets:</span> {item.bookedSeats.length}</p>
                  <p><span className='text-gray-400'>Seat Number:</span> {item.bookedSeats.join(", ")}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  ) : <Loading />
}

export default MyBooking
