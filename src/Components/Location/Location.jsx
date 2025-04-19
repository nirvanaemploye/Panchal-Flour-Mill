import React from "react";
import { MdCall } from "react-icons/md";

const Location = () => {
  return (
    <section className="bg-gray-100">
      <div className="container py-12">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-3xl font-extrabold text-gray-900">
            Visit Our Location
          </h1>
          <p className="text-lg text-gray-400">Let us serve you the best</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 py-16">
          <div className="rounded-lg overflow-hidden">
          <iframe className="w-full h-96" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119146.66991834927!2d72.75688414335941!3d21.059340799999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be059fd11c869b3%3A0x46b885db453c2a8e!2sPanchal%20flour%20mill!5e0!3m2!1sen!2sin!4v1744970984645!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div className="flex flex-col items-start justify-center space-y-5">
            <div className="flex flex-col space-y-1 border-t border-gray-300 w-full py-1">
              <p className="text-lg  font-bold text-gray-900">Contact</p>
              <p className="font-semibold text-gray-500 pb-1">
                Phone: +91 123456789
              </p>
              <button className="hover:scale-95 translation duration-100 flex justify-center items-center w-32 gap-1 bg-indigo-600 rounded-md p-2 text-white">
                <span>
                  <MdCall className="text-xl" />
                </span>
                Call Now
              </button>
            </div>
            <div>
                <h1 className="text-lg  font-bold text-gray-900">Our Address</h1>
                <p className="font-semibold text-gray-500 pb-1">Ghanti maholla Rd, Lajpur, Gujrat</p>
            </div>
            <div className="pt-3 border-t border-gray-300 w-full">
                <p className="text-lg  font-bold text-gray-900">Hours</p>
                <p className="font-semibold text-gray-500 pb-1">Monday - Sunday : 2pm - 9pm</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
