

export default function App() {

    const handleSubmit = (e) => {
      e.preventDefault()
    }

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Weather Forecast</h1>
        <form onSubmit={handleSubmit} className='flex space-x-2'>
          <input
            type="textbox"
            className="form-input px-4 py-3 border border-black"
            placeholder="Enter your location..."
            required
          />
          <input 
          type="submit" 
          className="form-input px-4 py-3 bg-slate-300 border border-black hover:bg-white" 

          />
        </form>
      </div>
    </div>
  );
}


