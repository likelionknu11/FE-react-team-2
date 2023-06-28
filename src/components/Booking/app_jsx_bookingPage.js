import { DetailPage } from './Booking/DetailPage'
import { DPTab } from './Booking/DPTab'
import { BookingCal } from './Booking/bookingCal'
import './Booking/css/DetailPage.css';


function BookingPage() {
  return (
    <div>
      <div className='container'>
        <div className='content'>
          <DetailPage />
          <BookingCal />
        </div>
      </div>
      <div className='tab'>
        
        <DPTab />
      </div>
   </div>
  )
}

export default BookingPage;

// import { Form } from './Booking/Form'
// import './Booking/css/Form.css';

// function App() {
//   return (
//     <div>
//       <Form />
//     </div>
//   )
// }

// export default App