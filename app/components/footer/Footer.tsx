import Link from "next/link";
import Container from "../Container";
import FooterList from "./FooterList";
import { MdFacebook } from "react-icons/md";
import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer id="Footer" className="bg-slate-700 text-slate-200 text-sm mt-16">
      <Container>
        <div className="flex flex-col md:flex-row justify-between pt-16 pb-8">
          <FooterList>
            <h3 className="text-base font-bold mb-2">Membership Plans</h3>
            <Link href="/">Hourly</Link>
            <Link href="/">Daily</Link>
            <Link href="/">Weekly</Link>
            <Link href="/">Monthly</Link>
            <Link href="/">Corporate plans</Link>
            <Link href="/">Flex Plans</Link>
          </FooterList>

          <FooterList>
            {/* Customer service */}
            <h3 className="text-base font-bold mb-2">Customer Services</h3>
            <Link href="/">Contact Us</Link>
            <Link href="/">Terms of Service</Link>
            <Link href="/">Privacy Policy</Link>
            <Link href="/">FAQs</Link>
            <Link href="/">Support Center</Link>
            <Link href="/">Cancellation Policy</Link>
          </FooterList>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-base font-bold mb-2">About Us</h3>
            <p>
              We provide a flexible, comfortable, and productive workspace for
              freelancers, remote workers, and teams. Our plans cater to various
              needs, whether you are looking for a spot for a few hours or a
              dedicated desk for a month. Join us and enhance your work
              experience with our top-notch facilities and supportive community.
            </p>
            <p>&copy; {new Date().getFullYear()} E-Shop. All rights reserved</p>
          </div>

          {/* Contact */}
          <FooterList>
            <h3 className="text-base font-bold mb-2 ml-10">Follow Us</h3>
            <div className="flex gap-2 ml-10">
              <Link href="#">
                <MdFacebook size={24} />
              </Link>
              <Link href="#">
                <AiFillTwitterCircle size={24} />
              </Link>
              <Link href="#">
                <AiFillInstagram size={24} />
              </Link>
              <Link href="#">
                <AiFillYoutube size={24} />
              </Link>
            </div>
          </FooterList>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
