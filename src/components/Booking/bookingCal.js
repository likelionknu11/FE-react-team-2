import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
//import 'react-day-picker/dist/style.css';
import { ko } from 'date-fns/esm/locale';

export const BookingCal= () => {

  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setSelectedTime(null);
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };


  const handleReservation = () => {
    if (selectedDate && selectedTime) {
     //버튼 누르면 이동할 페이지
      console.log('예약 정보:', selectedDate, selectedTime);
    } else {
      alert('날짜와 시간을 선택해주세요.');
    }
  };

  return (
    <div className='calendar'>
      {/* <h2>예약 가능한 날짜와 시간 선택</h2> */}
      <DayPicker 
        className='calendar-btn'
        selected={selectedDate} 
        onDayClick={handleDateChange} 
        locale={ko}
        localeUtils={ko.localeUtils}
      />

      <div>
       
        <div >
          <button className='timeBtn' onClick={() => handleTimeChange('10:00')}>10:00</button>
          <button className='timeBtn' onClick={() => handleTimeChange('14:00')}>14:00</button>
          <button className='timeBtn' onClick={() => handleTimeChange('16:00')}>16:00</button>
          {/* 시간표 버튼들을 예약 가능한 시간에 맞게 동적으로 생성하거나 데이터를 기반으로 렌더링할 수 있습니다. */}
        </div>

        <div>
          <button className='bookingBtn' onClick={handleReservation} disabled={!selectedDate || !selectedTime}>
            {selectedDate ? selectedDate.toLocaleDateString() : ''} {selectedTime}  예약하기
          </button>
        </div>
      </div>
    </div>
  );
}


