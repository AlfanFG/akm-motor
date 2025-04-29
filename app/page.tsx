import Image from "next/image";
import {
  Search,
  Heart,
  Shield,
  DollarSign,
  Clock,
  HeadphonesIcon,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Printer,
  SearchIcon,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f0f8f4]">
      {/* Navigation */}
      <nav className="bg-white px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-xl font-bold text-emerald-600">AutoMarket</h1>
          <div className="hidden md:flex ml-10 space-x-6">
            <a href="#" className="font-medium">
              Home
            </a>
            <a href="#" className="font-medium">
              Inventory
            </a>
            <a href="#" className="font-medium">
              Services
            </a>
            <a href="#" className="font-medium">
              About
            </a>
            <a href="#" className="font-medium">
              Contact
            </a>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-gray-600">
            <Search size={20} />
          </button>
          <button className="text-gray-600">
            <Heart size={20} />
          </button>
          <button className="bg-emerald-600 text-white px-4 py-1 rounded-md">
            <Link href={"/auth/login"}>Sign In</Link>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-4 py-8 md:py-12 grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Find Your Dream Car Today
          </h2>
          <p className="text-gray-600 mb-8">
            Browse through our extensive collection of quality vehicles and find
            the perfect match for your lifestyle.
          </p>

          {/* Search Filters */}
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-4">
              <div className="relative">
                <select className="w-full p-2 border rounded-md appearance-none pr-8">
                  <option>Brand</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="relative">
                <select className="w-full p-2 border rounded-md appearance-none pr-8">
                  <option>Model</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="relative">
                <select className="w-full p-2 border rounded-md appearance-none pr-8">
                  <option>Price Range</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="relative">
                <select className="w-full p-2 border rounded-md appearance-none pr-8">
                  <option>Year</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <button className="w-full bg-emerald-600 text-white py-2 rounded-md hover:bg-emerald-700 transition">
              Search Cars
            </button>
          </div>
        </div>
        <div className="hidden md:block">
          <Image
            src="/placeholder.svg?height=500&width=600"
            alt="Luxury car"
            width={600}
            height={500}
            className="rounded-lg object-cover"
          />
        </div>
      </section>

      {/* Featured Vehicles */}
      <section className="px-4 py-8 max-w-7xl mx-auto">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">
          Featured Vehicles
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Car 1 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-sm">
            <div className="relative h-48">
              <Image
                src="/placeholder.svg?height=200&width=300"
                alt="Tesla Model Y"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-bold">2025 Tesla Model Y</h4>
                  <p className="text-sm text-gray-500">Long Range AWD</p>
                </div>
                <button className="text-gray-400 hover:text-red-500">
                  <Heart size={20} />
                </button>
              </div>
              <p className="text-emerald-600 font-bold text-xl mt-2">$45,990</p>
              <div className="flex items-center mt-3 space-x-3">
                <span className="bg-gray-100 text-xs px-2 py-1 rounded flex items-center">
                  <span className="w-2 h-2 bg-gray-500 rounded-full mr-1"></span>
                  Gray
                </span>
                <span className="bg-gray-100 text-xs px-2 py-1 rounded flex items-center">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mr-1"></span>
                  Electric
                </span>
                <span className="bg-gray-100 text-xs px-2 py-1 rounded flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-1"></span>
                  Auto
                </span>
              </div>
            </div>
          </div>

          {/* Car 2 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-sm">
            <div className="relative h-48">
              <Image
                src="/placeholder.svg?height=200&width=300"
                alt="BMW 5 Series"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-bold">2025 BMW 5 Series</h4>
                  <p className="text-sm text-gray-500">530i xDrive</p>
                </div>
                <button className="text-gray-400 hover:text-red-500">
                  <Heart size={20} />
                </button>
              </div>
              <p className="text-emerald-600 font-bold text-xl mt-2">$58,500</p>
              <div className="flex items-center mt-3 space-x-3">
                <span className="bg-gray-100 text-xs px-2 py-1 rounded flex items-center">
                  <span className="w-2 h-2 bg-gray-800 rounded-full mr-1"></span>
                  Black
                </span>
                <span className="bg-gray-100 text-xs px-2 py-1 rounded flex items-center">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-1"></span>
                  Gas
                </span>
                <span className="bg-gray-100 text-xs px-2 py-1 rounded flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-1"></span>
                  Auto
                </span>
              </div>
            </div>
          </div>

          {/* Car 3 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-sm">
            <div className="relative h-48">
              <Image
                src="/placeholder.svg?height=200&width=300"
                alt="Mercedes EQS"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-bold">2025 Mercedes EQS</h4>
                  <p className="text-sm text-gray-500">450+ Sedan</p>
                </div>
                <button className="text-gray-400 hover:text-red-500">
                  <Heart size={20} />
                </button>
              </div>
              <p className="text-emerald-600 font-bold text-xl mt-2">
                $102,310
              </p>
              <div className="flex items-center mt-3 space-x-3">
                <span className="bg-gray-100 text-xs px-2 py-1 rounded flex items-center">
                  <span className="w-2 h-2 bg-gray-100 rounded-full mr-1"></span>
                  White
                </span>
                <span className="bg-gray-100 text-xs px-2 py-1 rounded flex items-center">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mr-1"></span>
                  Electric
                </span>
                <span className="bg-gray-100 text-xs px-2 py-1 rounded flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-1"></span>
                  Auto
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="px-4 py-12 max-w-7xl mx-auto">
        <h3 className="text-2xl font-bold text-gray-800 mb-10 text-center">
          Why Choose AutoMarket
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
              <Shield className="text-emerald-600" size={24} />
            </div>
            <h4 className="font-bold mb-2">Quality Assured</h4>
            <p className="text-gray-600 text-sm">
              All our vehicles undergo rigorous quality checks.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
              <DollarSign className="text-emerald-600" size={24} />
            </div>
            <h4 className="font-bold mb-2">Best Prices</h4>
            <p className="text-gray-600 text-sm">
              Competitive prices and flexible financing options.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
              <Clock className="text-emerald-600" size={24} />
            </div>
            <h4 className="font-bold mb-2">Fast Service</h4>
            <p className="text-gray-600 text-sm">
              Quick and efficient buying process.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
              <HeadphonesIcon className="text-emerald-600" size={24} />
            </div>
            <h4 className="font-bold mb-2">24/7 Support</h4>
            <p className="text-gray-600 text-sm">
              Always here to help you with any questions.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h5 className="font-bold mb-4">AutoMarket</h5>
            <p className="text-gray-400 text-sm">
              Your trusted partner in finding the perfect vehicle for your
              needs.
            </p>
          </div>
          <div>
            <h5 className="font-bold mb-4">Quick Links</h5>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Inventory
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-4">Contact Us</h5>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center">
                <span className="mr-2">📞</span> +1 (555) 123-4567
              </li>
              <li className="flex items-center">
                <span className="mr-2">✉️</span> info@automarket.com
              </li>
              <li className="flex items-center">
                <span className="mr-2">📍</span> 123 Car Street, Auto City
              </li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 py-4 px-4 text-center text-sm text-gray-500">
          <p>© 2025 AutoMarket. All rights reserved.</p>
        </div>
        <div className="fixed bottom-6 right-6 flex flex-col space-y-3">
          <button className="bg-white text-gray-800 w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
            <Printer size={20} />
          </button>
          <button className="bg-white text-gray-800 w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
            <SearchIcon size={20} />
          </button>
        </div>
      </footer>
    </main>
  );
}
