import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/53b4ae3c-83cf-4faa-8e67-c784e7175807"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-blue-400 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">Shoot me an email 📧</p>
        </div>
        <input
          className="p-2 bg-[#ccd6f6]"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className=" bg-[#ccd6f6] p-2 mb-6"
          placeholder="Message"
          name="message"
          rows="10"
        ></textarea>
        <button className="text-white border-2 hover:bg-blue-400 hover:border-blue-400 px-4 py-3 mx-auto flex items-center">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
