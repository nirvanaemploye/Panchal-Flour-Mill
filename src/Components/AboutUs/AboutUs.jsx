import React from "react";
import AboutImg from "../../assets/About.jpg"

const AboutUs = () => {
  return (
    <section className="bg-gray-100">
      <div className=" container  py-16">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-8 xl:gap-4 ">
          <div className="flex flex-col space-y-10">
            <h1 className="text-3xl font-bold text-gray-900 text-center">
              About Us
            </h1>
            <p className="lg:text-xl text-lg text-gray-700">
            Panchal flour mill provides our customers with the highest quality products and services. We offer a wide variety of flours and spices to choose from, and we are always happy to help our customers find the perfect products for their needs. We are committed to providing our customers with the best possible experience. We offer competitive prices, fast shipping, and excellent customer service. We are also happy to answer any questions that our customers may have about our products or services. If you are looking for a flour and spices service business that can provide you with the highest quality products and services, then we are the company for you. We look forward to serving you!
            </p>
          </div>
          <div className="lg:p-8 flex justify-center items-center">
            <img src={AboutImg} alt="" className="rounded-xl"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
