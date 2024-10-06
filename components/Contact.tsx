import React from "react";
import { FaUser, FaEnvelope, FaPhone, FaMoneyBill, FaBriefcase } from 'react-icons/fa';
import { MdOutlineBusinessCenter } from 'react-icons/md';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      projectType: '',
      budget: '',
      description: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      phone: Yup.string().required('Phone is required'),
      projectType: Yup.string().required('Project type is required'),
      budget: Yup.string().required('Budget is required'),
      description: Yup.string().required('Description is required'),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <>
      <section className="relative z-10 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap lg:justify-between items-start">
            <div className="w-full lg:w-1/3 xl:w-4/12 mb-12">
              <div className="p-8 border-2 border-gray-700 rounded-lg shadow-md transform hover:scale-105 transition duration-300 ease-in-out">
                <h2 className="mb-6 text-3xl font-bold uppercase dark:text-white">
                  Schedule a Consultation
                </h2>
                <h4 className="mb-4 text-xl font-semibold text-primary">
                  What happens next?
                </h4>
                <ul className="mb-6 text-lg leading-relaxed text-body-color dark:text-gray-400">
                  <li className="mb-4 flex items-start">
                    <MdOutlineBusinessCenter className="text-primary mr-3 mt-1" />
                    An expert contacts you after analyzing your requirements.
                  </li>
                  <li className="mb-4 flex items-start">
                    <MdOutlineBusinessCenter className="text-primary mr-3 mt-1" />
                    If needed, we sign an NDA to ensure the highest privacy level.
                  </li>
                  <li className="mb-4 flex items-start">
                    <MdOutlineBusinessCenter className="text-primary mr-3 mt-1" />
                    We submit a comprehensive project proposal with estimates, timelines, CVs, etc.
                  </li>
                </ul>
                <h4 className="mb-2 text-lg font-semibold text-primary">
                  Customers who trust us:
                </h4>
                <ul className="flex space-x-6 items-center text-body-color dark:text-gray-400">
                  <li className="w-20 flex items-center">
                    <img src="/Fimeal.png" alt="Samsung" className="object-contain" />
                  </li>
                  <li className="w-20 flex items-center">
                    <img src="/Educait.webp" alt="Verivox" className="object-contain" />
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-f
            ull lg:w-2/3 xl:w-7/12">


              <div className="p-8 lg:p-8 rounded-lg border-2 text-white shadow-xl border-gray-700 dark:bg-dark-2 transition-transform hover:shadow-2xl">

                <form onSubmit={formik.handleSubmit} className="space-y-6">
                  <ContactInputBox
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    icon={<FaUser />}
                    formik={formik}
                  />
                  <ContactInputBox
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    icon={<FaEnvelope />}
                    formik={formik}
                  />
                  <ContactInputBox
                    type="tel"
                    name="phone"
                    placeholder="Your Phone"
                    icon={<FaPhone />}
                    formik={formik}
                  />
                  <ContactInputBox
                    type="text"
                    name="projectType"
                    placeholder="Project Type (e.g., Website, Mobile App)"
                    icon={<FaBriefcase />}
                    formik={formik}
                  />
                  <ContactInputBox
                    type="text"
                    name="budget"
                    placeholder="Estimated Budget"
                    icon={<FaMoneyBill />}
                    formik={formik}
                  />
                  <ContactTextArea
                    row="6"
                    placeholder="Project Description"
                    name="description"
                    formik={formik}
                  />
                  <div className="flex items-center justify-between mt-8">
                    <button
                      type="submit"
                      className="w-full rounded-lg border-2 border-primary p-4 text-white font-semibold tracking-wide transition-transform transform hover:scale-105 focus:ring focus:ring-primary focus:outline-none"
                    >
                      Schedule Consultation
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

const ContactTextArea = ({ row, placeholder, name, formik }) => {
  return (
    <div className="relative">
      <textarea
        rows={row}
        placeholder={placeholder}
        name={name}
        className={`w-full resize-none rounded-lg bg-transparent border-2 px-6 py-4 text-lg outline-none ${
          formik.touched[name] && formik.errors[name] ? 'border-red-500' : 'border-gray-700'
        } focus:border-primary transition-colors duration-300`}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values[name]}
      />
      {formik.touched[name] && formik.errors[name] ? (
        <p className="text-red-500 text-sm mt-2">{formik.errors[name]}</p>
      ) : null}
    </div>
  );
};

const ContactInputBox = ({ type, placeholder, name, icon, formik }) => {
  return (
    <div className="relative flex items-center mb-8">
      <div className="absolute left-0 pl-4 text-primary">
        {icon}
      </div>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        className={`w-full pl-14 pr-6 py-4 rounded-lg text-lg bg-transparent border-2 border-gray-700 outline-none ${
          formik.touched[name] && formik.errors[name] ? 'border-red-500' : 'focus:border-primary'
        } transition-colors duration-300`}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values[name]}
      />
      {formik.touched[name] && formik.errors[name] ? (
        <p className="text-red-500 text-sm absolute right-0 top-full">{formik.errors[name]}</p>
      ) : null}
    </div>
  );
};
