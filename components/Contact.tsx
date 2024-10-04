
import React, { useState } from "react";

const Contact: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", { name, email, message });
  };

  return (
    <section className="flex flex-col self-start px-11 pt-24 pb-5 mt-24 w-full bg-blue-600 bg-blend-normal max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col items-center pb-20 w-full bg-blend-normal max-md:max-w-full">
        <h2 className="text-5xl font-bold leading-none text-white max-md:max-w-full max-md:text-4xl">
          Get in Touch
        </h2>
        <p className="mt-2.5 text-base leading-7 text-white max-md:max-w-full">
          Ready to start your next web project? Contact us today for a free
          consultation.
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-full max-w-[600px] mt-10"
        >
          <label htmlFor="name" className="text-white mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="px-4 py-2 mb-4 rounded-md"
          />
          <label htmlFor="email" className="text-white mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="px-4 py-2 mb-4 rounded-md"
          />
          <label htmlFor="message" className="text-white mb-2">
            Message
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="px-4 py-2 mb-4 rounded-md h-32"
          ></textarea>
          <button
            type="submit"
            className="px-8 py-3 text-blue-600 bg-white font-bold rounded-[30px] self-start"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
