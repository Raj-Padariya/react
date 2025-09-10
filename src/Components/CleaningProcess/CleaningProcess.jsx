

const steps = [
  {
    id: 1,
    title: "Book",
    desc: "Book A Cleaning In 60 Secs. Get A Quick Quote.",
  },
  {
    id: 2,
    title: "Clean",
    desc: "Expert Cleaners You Can Trust.",
  },
  {
    id: 3,
    title: "Repeat",
    desc: "Save When You Book Recurring Cleans.",
  },
];

export default function CleaningProcess() {
  return (
   <section className="py-16 px-6 lg:px-20">
      <div className="bg-[#fdfaf8] rounded-2xl shadow-sm p-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
        
        {/* Left Content */}
        <div className="max-w-xs">
          <h2 className="text-2xl font-semibold mb-6">
            Our Cleaning <br /> Process.
          </h2>
          <button className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-3 rounded-lg shadow-md hover:opacity-90 transition">
            Book Now
          </button>
        </div>

        {/* Steps */}
        <div className="flex-1">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between relative">
            
            {steps.map((step, index) => (
              <div key={step.id} className="flex flex-col items-center text-center lg:w-1/3 relative">
                
                {/* Step Circle */}
                <div className="flex items-center justify-center w-10 h-10 bg-black text-white rounded-full text-sm font-bold mb-4 relative z-10">
                  {step.id}
                </div>

                {/* Line Connector */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-5 left-1/2 w-full border-t border-dashed border-gray-400 -z-0"></div>
                )}

                {/* Text */}
                <h3 className="text-lg font-semibold">{step.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{step.desc}</p>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  )
}