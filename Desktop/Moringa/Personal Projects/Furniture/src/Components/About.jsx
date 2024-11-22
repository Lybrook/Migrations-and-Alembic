import React from 'react';

const About = () => {
  return (
    <section className="p-8 bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 text-white rounded-lg shadow-xl">
      <div className="container mx-auto">
        <h2 className="text-4xl font-extrabold mb-6 text-center md:text-left">Kosala's Carpentry</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="text-lg leading-relaxed mb-6 text-justify">
              Is a family owned and operated custom-woodwork corporation located in Kitale, Trans-Nzoia. For many generations, superior craftsmanship has been a tradition in the Kosala's Family, our family. Today, Julius Kosalah proudly offers some of the finest handcrafted woodwork. For several years, Kosala's Carpentry has provided its services to a wide variety of Luxury Residences, Hotels & Condominium, Restaurants, Stores, and many more customers throughout the Country. It comprises a team of expert carpenters who specialize in custom furniture and interior designs tailored to your needs.
              Our goal is to bring your vision to life with quality craftsmanship and unique designs.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4 text-lg">
              <li className="hover:text-yellow-300 transition-all duration-300">
                <strong>Email:</strong> contact@carpentryworks.com
              </li>
              <li className="hover:text-yellow-300 transition-all duration-300">
                <strong>Phone:</strong> +254-722-231897
              </li>
              <li className="hover:text-yellow-300 transition-all duration-300">
                <strong>Address:</strong> Gogate Street, Kitale
              </li>
              <li className="hover:text-yellow-300 transition-all duration-300">
                <strong>Business Hours:</strong> Mon-Sat, 9 AM - 5 PM
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
