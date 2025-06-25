import React, { useEffect, useState } from 'react'
import { dummyShowsData } from '../../assets/assets';
import Loading from '../../components/Loading';
import Title from '../../components/admin/Title';
import { CheckIcon, StarIcon, TrashIcon } from 'lucide-react'
import { kConvertor } from '../../lib/kConvertor';
import { useAppContext } from '../../context/AppContext';
import toast from 'react-hot-toast';

const AddShows = () => {

  const { axios, getToken, user, image_base_url } = useAppContext();

  const currency = import.meta.env.VITE_CURRENCY
  
    const [nowPlayingMovies, setNowPlayingsMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [dateTimeSelection, setDateTimeSelection] = useState({});
    const [dateTimeInput, setDateTimeInput] = useState("");
    const [showPrice, setShowPrice] = useState("");
    const [addingShow, setAddingShow] = useState(false);

    const fetchNowPlayingsMovies = async() =>{
      try{
         const { data }= await axios.get('/api/show/now-playing',{
          headers: { Authorization: `Bearer ${await getToken()}`}
         })
         if(data.success){
         setNowPlayingsMovies(data.movies)
         }
      }
      catch{
        console.log("Error fetching now playing movies");
      }
    };

    const handleDateTimeAdd = () => {
      if (!dateTimeInput) return;
      const [date, time] = dateTimeInput.split("T");
      if (!date || !time) return;
      setDateTimeSelection ((prev) => {
      const times = prev [date] || [];
      if (!times.includes (time)) {
      return { ...prev, [date]: [...times, time] };
      }
      return prev;
    });
    };

    const handleRemoveTime = (date, time) => {
      setDateTimeSelection ((prev) => {
        const filteredTimes = prev[date].filter((t) => t !== time);
        if (filteredTimes.length === 0) {
          const {[date]: _, ...rest } = prev;
          return rest;
        }
        return {
          ...prev,
          [date]: filteredTimes,
        };
      });
      };

      const handlesubmit = async () => {
      try {
        setAddingShow(true)

        if (!selectedMovie || Object.keys(dateTimeSelection).length === 0 || !showPrice) {
          setAddingShow(false)
          return toast.error("Missing required fields");
        }

        const showsInput = Object.entries(dateTimeSelection).map(([date, times]) =>
          times.map((time) => ({ date, time }))
        ).flat();

        const payload = {
          movieId: selectedMovie,
          showsInput,
          showPrice: Number(showPrice)
        };

        const { data } = await axios.post('/api/show/add', payload, {
          headers: { Authorization: `Bearer ${await getToken()}` }
        });

        if (data.success) {
          toast.success("Show added successfully");
          // Optionally reset state here
          setSelectedMovie(null);
          setDateTimeSelection({});
          //setDateTimeInput("");
          setShowPrice("");
        } else{
          toast.error(data.message);
        }

      } catch (error) {
        toast.error("Submission Error:", error);
        toast.error("An Error Occured. Please try Again");
      }
        setAddingShow(false);
};


    useEffect(() =>{
      if(user){
        fetchNowPlayingsMovies();
      }
    }, [user]);
  

  return nowPlayingMovies.length > 0 ? (
    <>
     <Title text1="Add" text2="Shows"/>

     <p className="mt-10 text-lg font-medium">Now Playing Movies</p>
      <div className="overflow-x-auto pb-4">
      <div className="group flex flex-wrap gap-4 mt-4 w-max">
      {nowPlayingMovies.map((movie) =>(
      <div key={movie._id} className={`relative max-w-40 cursor-pointer group-hover:not-hover:opacity-40 hover:-translate-y-1 transition duration-300 `} onClick={() =>{setSelectedMovie(movie.id)}}>
      <div className='relative rounded-lg overflow-hidden'>
      <img src={image_base_url + movie.poster_path} alt="" className="w-full object-cover brightness-90" />
      <div className='text-sm flex items-center justify-between p-2 bg-black/70 w-full absolute bottom-0 left-0'>
         <p className='flex items-center gap-1 text-gray-400'>
            <StarIcon className='w-4 h-4 text-primary fill-primary'/>
            {movie.vote_average.toFixed(1)}
         </p>
         <p className='text-gray-300'>{kConvertor(movie.vote_count)}Votes</p>
      </div>
      </div>

      {selectedMovie === movie.id && (
        <div className="absolute top-2 right-2 flex items-center justify-center bg-primary h-6 w-6 rounded">
        <CheckIcon className="w-4 h-4 text-white" strokeWidth={2.5} />
        </div>
      )}
      
      <p className="font-medium truncate">{movie.title}</p>
      <p className="text-gray-400 text-sm">{movie.release_date}</p>
      </div>
      ))}

      </div>
      </div>

      <div className="mt-8">
      <label className="block text-sm font-medium mb-2">Show Price</label>
      <div className="inline-flex items-center gap-2 border border-gray-600 px-3 py-2 rounded-md">
      <p className="text-gray-400 text-sm">{currency}</p>
      <input min={0} type="number" value={showPrice} onChange={(e) => setShowPrice(e.target.value)} placeholder="Enter show price" className="outline-none" />
      </div>
      </div>

      <div className="mt-6">
        <label className="block text-sm font-medium mb-2">Select Date and Time</label>
        <div className="inline-flex gap-5 border border-gray-600 p-1 pl-3 rounded-lg">
          <input type="datetime-local" value={dateTimeInput} onChange={(e) => setDateTimeInput(e.target.value)} className="outline-none rounded-md" />
          <button onClick={handleDateTimeAdd} className="bg-primary/80 text-white px-3 py-2 text-sm rounded-1g hover:bg-primary cursor-pointer" >
          Add Time
          </button>
        </div>
      </div>

      {/* Show selected date/time */}
      {Object.keys(dateTimeSelection).length > 0 && (
        <div className="mt-6">
          <p className="font-medium mb-2">Selected Date-Time:</p>
          {Object.entries(dateTimeSelection).map(([date, times]) => (
            <div key={date} className="mb-3">
              <p className="text-sm font-medium mb-1">{date}</p>
              <div className="flex flex-wrap gap-2">
                {times.map((time) => (
                  <div
                    key={time}
                    className="flex items-center gap-2 border border-gray-500 px-2 py-1 rounded"
                  >
                    <span>{time}</span>
                    <TrashIcon
                      className="w-4 h-4 cursor-pointer text-red-400"
                      onClick={() => handleRemoveTime(date, time)}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      <button onClick={handlesubmit} disabled={addingShow} className='bg-primary text-white px-8 py-2 mt-6 rounded hover:bg-primary/90 transition-all cursor-pointer'>
          Add show
      </button>

    </>
  ): <Loading />
}

export default AddShows