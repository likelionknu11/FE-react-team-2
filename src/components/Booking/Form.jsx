import { Input } from './components/input'
import { FormProvider, useForm } from 'react-hook-form'
import {
  name_validation,
  desc_validation,
  email_validation,
  num_validation,
  password_validation,
} from './utils/inputValidations'
import { useState } from 'react'
import { GrMail } from 'react-icons/gr'
import { BsFillCheckSquareFill } from 'react-icons/bs'
import { useLocation } from 'react-router-dom';


export const Form = () => {
  const methods = useForm()
  const [success, setSuccess] = useState(false)
  const location = useLocation();
  const selectedDate = location.state?.selectedDate;
  const selectedTime = location.state?.selectedTime;

  const onSubmit = methods.handleSubmit(data => {
    console.log(data)
    methods.reset()
    setSuccess(true)
  })

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={e => e.preventDefault()}
        noValidate
        autoComplete="off"
        className="container"
      >
        <div className="grid gap-5 md:grid-cols-2">
          <Input {...name_validation} />
          <Input {...email_validation} />
          <Input {...num_validation} />
          <Input {...password_validation} />
          <Input {...desc_validation} className="md:col-span-5" />
        </div>
        <div className="mt-5">
          {success && (
            <p className="font-semibold text-green-500 mb-5 flex items-center gap-1">
              <BsFillCheckSquareFill /> {selectedDate} {selectedTime} 예약되었습니다.
            </p>
          )}
          <button
            onClick={onSubmit}
            className="p-5 rounded-md bg-blue-600 font-semibold text-white flex items-center gap-1 hover:bg-blue-800"
          >
            <GrMail />
            예약하기
          </button>
        </div>
      </form>
    </FormProvider>
  )
}

// import { Form } from './Booking/Form'

// function App() {
//   return (
//     <div>
//       <Form />
//     </div>
//   )
// }

// export default App