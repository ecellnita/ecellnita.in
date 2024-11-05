import { Calendar, MapPin, Minus } from 'lucide-react'

export default function HeroText() {
  return (
    <div className="text-white py-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIj48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIxIiBmaWxsPSIjRkZGRkZGIiBvcGFjaXR5PSIwLjE1Ii8+PC9zdmc+')]"></div>
      </div>
      <div className="w-full mx-auto relative">
        <h2 className="text-center text-2xl sm:text-3xl md:text-5xl font-bold mb-2">CyberSecurity</h2>
        <div className="flex justify-center items-center space-x-2 mb-6">
          <span className="text-[#FFA500] text-4xl sm:text-5xl md:text-8xl font-bold">{`{`}</span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold">
            <span className="text-white">HA</span>
            <span className="text-[#FFA500]">C</span>
            <span className="text-white">KATH</span>
            <span className="text-[#FFA500]">ON</span>
          </h1>
          <span className="text-[#FFA500] text-4xl sm:text-5xl md:text-8xl font-bold">{`}`}</span>
        </div>
        <div className="flex flex-col mt-12 sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
          <div className="flex items-center space-x-2">
            <Calendar size={35} className="text-white" />
            <div>
              <p className="font-bold text-lg">5<sup>TH</sup> NOV</p>
              <p className="text-sm font-semibold">Registration Starts</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Minus size={35} className="text-white rotate-90" />
            <div>
              <p className="font-bold text-lg">15<sup>TH</sup> NOV</p>
              <p className="text-sm font-semibold">Finale</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin size={35} className="text-white" />
            <div>
              <p className="font-bold text-lg">NIT AGARTALA</p>
              <p className="text-sm font-semibold">Jirania, Agartala, Tripura 799046</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}