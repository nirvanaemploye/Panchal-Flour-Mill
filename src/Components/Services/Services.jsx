import React from "react";
import ServiceImg1 from "../../assets/Services/S1.jpg";
import ServiceImg2 from "../../assets/Services/S2.jpg";
import ServiceImg3 from "../../assets/Services/S3.jpg";
import ServiceImg4 from "../../assets/Services/S4.jpg";
import ServiceImg5 from "../../assets/Services/S5.jpg";
import ServiceImg6 from "../../assets/Services/S6.jpg";

const serviceData = [
  {
    id: 1,
    name: "Wheat Flour Grinding",
    text: "Our wheat flour grinding service provides fresh, high-quality flour to businesses and individuals in the area. We use state-of-the-art equipment to grind wheat into flour, and we offer a variety of flours to meet the needs of our customers.",
    img: ServiceImg1,
  },
  {
    id: 2,
    name: "Gram Flour Grinding",
    text: "Our gram flour is perfect for a variety of uses, including baking, cooking, and making snacks. It is also a good source of protein and fiber.Our gram flour grinding service is a convenient and affordable way to get the freshest gram flour possible.",
    img: ServiceImg2,
  },
  {
    id: 3,
    name: "Jowar Flour Grinding",
    text: "Our jowar grinding service is a convenient and affordable way to get fresh, high-quality jowar flour. We use state-of-the-art equipment to grind jowar into a fine powder, which is perfect for making roti, bread, and other dishes.",
    img: ServiceImg3,
  },
  {
    id: 4,
    name: "Chilli pounding",
    text: "We specializes in the production of high-quality chili powder. Our chili powder is made from the finest, freshest chilies, and we use traditional pounding methods to ensure that our chili powder retains its full flavor and aroma.",
    img: ServiceImg4,
  },
  {
    id: 5,
    name: "Flavoured Spaghetti",
    text: "Our speciality is Panchal Flour Mill offers a variety of flavored spaghetti dishes that are sure to tantalize your taste buds. We use only the freshest ingredients Our flavors include: Mango, spinach, garlic, and more.",
    img: ServiceImg5,
  },
  {
    id: 6,
    name: "Rice Papad",
    text: "Our company produces high-quality rice papad that is made with the finest ingredients. We use traditional methods to make our papad, which gives it a unique flavor and texture. Our papad is also gluten-free and vegan.",
    img: ServiceImg6,
  },
];

const Services = () => {
  return (
    <section>
      <div className="container py-8">
        <h1 className="text-3xl font-bold text-gray-900 text-center">
          Our Services
        </h1>
      </div>
      <div className="px-4 grid grid-cols-1 sm:grid-cols-3 gap-4 pb-8 xl:container">
        {serviceData.map((item) => (
          <div className="shadow-lg rounded-lg overflow-hidden group hover:shadow-xl ">
            <div className="h-64 flex relative overflow-hidden items-center justify-center">
              <img src={item.img} alt={item.name} className="justify-center w-full group-hover:scale-110 absolute duration-500" />
            </div>
            <div className="p-6 text-center">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                {item.name}
              </h2>
              <p className="text-gray-600">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
