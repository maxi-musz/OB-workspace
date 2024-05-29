import Link from "next/link";
import Container from "../Container";

import { Redressed } from "next/font/google";

const redressed = Redressed({subsets: ["latin"], weight: ["400"]})

const Navbar = () => {
    return (
        <nav className="bg-white shadow-sm sticky top-0 z-30">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center mb-30">
            <Link href="/" legacyBehavior>
              <a className="text-2xl font-bold text-gray-900">O~B Hub</a>
            </Link>
            <div className="hidden md:flex space-x-4">
              <Link href="/products" legacyBehavior><a className="text-gray-700 hover:text-gray-900">Home</a></Link>
              <Link href="/resources" legacyBehavior><a className="text-gray-700 hover:text-gray-900">Workspace Amenities</a></Link>
              <Link href="/solutions" legacyBehavior><a className="text-gray-700 hover:text-gray-900">About Us</a></Link>
              <Link href="/company" legacyBehavior><a className="text-gray-700 hover:text-gray-900">Pricing</a></Link>
              <Link href="/pricing" legacyBehavior><a className="text-gray-700 hover:text-gray-900">Support</a></Link>
              <Link href="/pricing" legacyBehavior><a className="text-gray-700 hover:text-gray-900">Blog/News</a></Link>
              <Link href="/pricing" legacyBehavior><a className="text-gray-700 hover:text-gray-900">Policy</a></Link>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <Link href="/support" legacyBehavior><a className="text-gray-700 hover:text-gray-900">FAQs</a></Link>
              <Link href="/signin" legacyBehavior><a className="text-gray-700 hover:text-gray-900">Sign In</a></Link>
              <Link href="/signup" legacyBehavior><a className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600">Try Free</a></Link>
            </div>
            <div className="md:hidden">
              <button className="text-gray-700">
                {/* Icon for mobile menu */}
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
              </button>
            </div>
          </div>
        </nav>
    );
}
 
export default Navbar;