import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Ai = () => {
  const recognitionRef = useRef(null);
  const navigate = useNavigate();
  const [active, setActive] = useState(false);

  function speak(message) {
    const utterance = new SpeechSynthesisUtterance(message);
    window.speechSynthesis.speak(utterance);
  }

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert('Speech Recognition is not supported in your browser');
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';

    recognition.onresult = (e) => {
      const transcript = e.results[0][0].transcript.trim().toLowerCase();
      console.log('You said:', transcript);

      if (transcript.includes('home')) {
        navigate('/');
        speak('Navigating to home page');
      } else if (transcript.includes('open my bookings')) {
        navigate('/my-bookings');
        speak('Navigating to your bookings');
      } else if (transcript.includes('open movies')) {
        navigate('/movies');
        speak('Showing all movies');
      }else if (transcript.includes('open favorites')) {
        navigate('/favorite');
        speak('Showing all favorite movies');
      }else if (transcript.includes('open about')) {
        navigate('/about');
        speak('Here the breif description of our Website');
      }else {
        speak("Sorry, I didn't understand.");
      }
    };

    recognition.onerror = (e) => {
      console.error('Speech recognition error:', e.error);
    };

    recognition.onend = () => {
      setActive(false);
    };

    recognitionRef.current = recognition;

    return () => {
      recognition.stop();
    };
  }, [navigate]);

  const startListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.start();
      setActive(true);
    }
  };

  return (
    <div className='fixed lg:bottom-[20px] md:bottom-[40px] bottom-[80px] left-[2%] z-50'>
      <img
        src="/Aii.jpg"
        alt="AI Assistant"
        className={`w-[70px] cursor-pointer rounded-full ${active ? 'translate-x-[10%] translate-y-[-10%] scale-100' : 'translate-x-[0] translate-y-[0] scale-75'} transition-transform`}
        style={{ filter: `${active ? "drop-shadow(0px 0px 30px #00d2fc)" : "drop-shadow(0px 0px 20px black)"}` }}
        onClick={startListening}
      />
    </div>
  );
};

export default Ai;
