
import { Link } from 'react-router'


const Footer = () => {
 
  return (
    <footer className="bg-black text-white text-sm lg:px-16 mt-10 font-roboto">
      {/* Top Section */}
      <div className=" px-4 flex items-start justify-between py-8 flex-col sm:flex-row gap-8">
        {/* Left Section */}
        <div className="">
           
          <p className="mb-4 text-lg leading-[30px] text-gray-300 font-normal font-poppins w-full max-w-[450px]">
          Zyhp Consulting is your trusted partner for innovative business solutions and strategic growth. We are dedicated to empowering your success with expert consulting services tailored to your unique needs. Let’s build a brighter future together!
          </p>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold mb-4">Company</h3>
          <ul className="space-y-6">
            <li>
              <Link to="/about" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link to="/partnership" className="hover:underline">
                Partnership
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Contact us
              </Link>
            </li>
          </ul>
        </div>

        {/* Help & Support */}
        <div>
          <h3 className="font-semibold mb-4">Help & Support</h3>
          <ul className="space-y-6">
            <li>
              <Link to="/faqs" className="hover:underline">
                FAQs
              </Link>
            </li>
            <li>
              <Link to="/support" className="hover:underline">
                Talk to Support
              </Link>
            </li>
            <li>
              <Link to="/live-chat" className="hover:underline">
                Live Chat
              </Link>
            </li>
            <li>
              <Link to="/language" className="hover:underline">
                Language
              </Link>
            </li>
          </ul>
        </div>

      
      </div>

    

      {/* Bottom Bar */}
      <div className="py-4 border-t border-purple-600">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center text-xs gap-2">
          <p className="text-gray-400 text-center sm:text-left">
            © 2025 Zyhp Consulting. Copyright and rights reserved
          </p>
          <div className="flex justify-center gap-4 text-gray-400">
            <Link to="/terms" className="hover:underline">
              Terms and Conditions
            </Link>
            <span>•</span>
            <Link to="/privacy" className="hover:underline">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
