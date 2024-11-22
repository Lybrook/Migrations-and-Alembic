import React from "react";

const ContactForm = () => {
  return (
    <section
      className="relative flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('https://i.pinimg.com/736x/fb/eb/3f/fbeb3f93bd1b260d4054107ea8de2b22.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      <div className="relative z-10 max-w-4xl w-full p-8 rounded-md">
        <h2 className="text-3xl font-bold text-center text-white mb-4">
          WORK WITH US
        </h2>
        <p className="text-center text-white mb-6">
          Fill the form or send us an email to{" "}
          <a
            href="mailto:osalajulius@gmail.com"
            className="text-white "
          >
            osalajulius@gmail.com
          </a>
        </p>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label htmlFor="firstName" className="text-white">
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="firstName"
              className="mt-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              placeholder=""
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="lastName" className="text-white">
              Last Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="lastName"
              className="mt-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              placeholder=""
              required
            />
          </div>
          <div className="col-span-2 flex flex-col">
            <label htmlFor="email" className="text-white">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              className="mt-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              placeholder=""
              required
            />
          </div>
          <div className="col-span-2 flex flex-col">
            <label htmlFor="subject" className="text-white">
              Subject <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="subject"
              className="mt-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              placeholder=""
              required
            />
          </div>
          <div className="col-span-2 flex flex-col">
            <label htmlFor="message" className="text-white">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              rows="4"
              className="mt-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              placeholder=""
              required
            ></textarea>
          </div>
          <div className="col-span-2">
            <button
              type="submit"
              className="w-full py-2 px-4 bg-transparent text-black font-sbold rounded-md hover:bg-white focus:outline-none focus:ring focus:ring-blue-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
