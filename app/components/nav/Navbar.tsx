"use client"
import { useState } from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { Redressed } from "next/font/google";
import { NavauthData, authLinksData } from "../../../data/NavauthData";
import { FaTimes } from "react-icons/fa";

const redressed = Redressed({ subsets: ["latin"], weight: ["400"] });

// Example user state and role (replace with actual state management)
const isSignedIn = true; // or true
const isAdmin = false; // or true
const userName = "John Doe"; // or undefined

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const links = authLinksData(isSignedIn, isAdmin, userName);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-30">
      <div className="md:container mx-auto px-4 py-4 flex justify-between items-center mb-30">
        <Link href="/" legacyBehavior>
          <a className="text-2xl font-bold text-gray-900">O~B Hub</a>
        </Link>
        <div className="hidden md:flex space-x-4">
          {NavauthData.map((item, index) => (
            item.description && (
              <Link key={index} href={`#${item.description.replace(/\s+/g, "").toLowerCase()}`} legacyBehavior>
                <a className="text-gray-700 hover:text-gray-900">{item.description}</a>
              </Link>
            )
          ))}
        </div>
        <div className="hidden md:block  items-center space-x-4">
          {links.map((link, index) => (
            <Link key={index} href={link.href} legacyBehavior>
              <a className={link.className}>{link.label}</a>
            </Link>
          ))}
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700">
            {isMenuOpen ? <FaTimes /> : <GiHamburgerMenu />} {/* Toggle icons */}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden absolute bg-white w-full px-4 pb-4">
          <div className="flex text-right flex-col space-y-4">
            {NavauthData.map((item, index) => (
              item.description && (
                <Link key={index} href={`#${item.description.replace(/\s+/g, "").toLowerCase()}`} legacyBehavior>
                  <a className="text-gray-700  hover:text-gray-900">{item.description}</a>
                </Link>
              )
            ))}
          </div>
          <div className="flex flex-col mr-auto justify-end items-end  space-y-4 mt-4">
            {links.map((link, index) => (
              <Link key={index} href={link.href} legacyBehavior>
                <a className={link.className}>{link.label}</a>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
