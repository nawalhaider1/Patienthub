
import React, { useState } from 'react';
import './BookingSection.css';
import { useNavigate } from 'react-router-dom';


function BookingSection() {
  const initialBookings = [
    'تنظيف اسنان',
    'تبييض اسنان',
    'فحص الاطفال',
    'فحص البالغين'
  ];

  const additionalBookings = [
     'حشوة اسنان',
     'قلع اسنان',
    'تقويم اسنان'
    
  ];
  const navigate = useNavigate();

  const [bookings, setBookings] = useState(initialBookings);
  const [showAdditional, setShowAdditional] = useState(false);

  const handleLoadMore = () => {
    setBookings(prevBookings => [...prevBookings, ...additionalBookings]);
    setShowAdditional(true);
  };

  const handleToggleAdditional = () => {
    if (showAdditional) {
      setBookings(initialBookings);
    }
    setShowAdditional(!showAdditional);
  };
  const handleBookNow = (navigate, selectedService) => {
    navigate('/booking', { state: { selectedService } });
  };
  return (
    <div className="container">
      <h2 className="title">احجز خدمة</h2>
      <div className="title-divider" />
      <div className="bookings-container">
        {bookings.map((booking, index) => (
          <React.Fragment key={index}>
            {index > 0 && <hr className="divider" />}
            <div className="booking-item">
              <div className="button-container">
                <button className="book-now-button" onClick={() => handleBookNow(navigate , booking)}
>احجز الآن</button>
              </div>
              <div className="booking-text">{booking}</div>
            </div>
          </React.Fragment>
        ))}
      </div>
      {!showAdditional ? (
        <button onClick={handleLoadMore} className="load-more-button">
          ... المزيد
        </button>
      ) : (
        <button onClick={handleToggleAdditional} className="load-more-button">
          تقليص
        </button>
      )}
      
                            
<br></br>
  </div>
    
  );
}

export default BookingSection;
