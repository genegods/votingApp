import React,{useState} from 'react'

const MainPage = () => {
    const [number, setNumber] = useState("");
    const [result, setResult] = useState("");

    const handleOnChange = (event) => {
        setNumber(event.target.value.replace(/\D/g, ''));
      };
      
      console.log('number', number)

      const checkEligibility = () => {
        if (number > 17) {
            setResult('Eligible');
          } else {
            setResult('Not Eligible');
          }
      }
  return (
    <React.Fragment>
    <main className="bg-blue-900 h-60 flex flex-col justify-center mx-5 px-3 mt-40 md:w-5/12 md:mx-auto md:pl-14">
      <div className="h-14 grid grid-cols-2">
        <div className="flex items-center">
        <p className="text-3xl capitalize font-bold text-white">Enter age:</p>
        </div>
        <div className="flex items-center">
        <input
          value={number}
          onChange={handleOnChange}
            type="number"
            className="w-40 h-14 text-3xl rounded"
          />
        </div>
      </div>

      {/* button section */}
      <div className="h-14 grid grid-cols-2">
        <div className="flex items-center">
        <p className="text-3xl capitalize font-bold text-white"></p>
        </div>
        <div className="flex items-center">
        <button
             onClick={checkEligibility}
             className="py-2 px-5 w-40 bg-green-500 text-white rounded font-bold capitalize">
              check eligibility
            </button>
        </div>
      </div>

      {/* status section */}
      <div className="h-14 grid grid-cols-2">
        <div className="flex items-center">
        <p className="text-3xl capitalize font-bold text-white">Status:</p>
        </div>
        <p className="flex items-center text-2xl text-white font-bold">
       {result}
        </p>
      </div>
    </main>
  </React.Fragment>
  
  )
}

export default MainPage