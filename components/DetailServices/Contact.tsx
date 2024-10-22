'use client';
import { useFormik } from 'formik';
import * as Yup from 'yup';

interface FormValues {
  name: string;
  email: string;
  phone: string;
  projectDescription: string;
  file: File | null;
  nda: boolean;
}

const ConsultationForm: React.FC = () => {
  const formik = useFormik<FormValues>({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      projectDescription: '',
      file: null,
      nda: false,
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string().email('Invalid email').required('Corporate email is required'),
      phone: Yup.string().required('Phone number is required'),
      projectDescription: Yup.string().required('Please describe your project'),
      file: Yup.mixed()
        .test('fileSize', 'File size should be less than 3MB', (value:any) => {
          return !value || (value && value.size <= 3 * 1024 * 1024);
        })
        .test('fileFormat', 'Unsupported format', (value:any) => {
          return (
            !value ||
            [
              'application/pdf',
              'application/msword',
              'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
              'application/vnd.ms-powerpoint',
              'application/vnd.openxmlformats-officedocument.presentationml.presentation',
            ].includes(value.type)
          );
        }),
    }),
    onSubmit: (values) => {
      const formData = new FormData();
      formData.append('name', values.name);
      formData.append('email', values.email);
      formData.append('phone', values.phone);
      formData.append('projectDescription', values.projectDescription);
      if (values.file) formData.append('file', values.file);
      formData.append('nda', values.nda.toString());

      console.log('Form Data:', values);
    },
  });

  return (
    <div className="flex flex-col lg:flex-row  p-10 rounded-lg shadow-lg max-w-6xl mx-auto">
      {/* Left Section */}
      <div className="lg:w-1/2 pr-0 lg:pr-10 mb-10 lg:mb-0 text-white">
        <h2 className="text-2xl font-bold mb-5">Schedule a free IT consultation</h2>
        <ul className="space-y-4 mb-10">
          <li className="flex items-center">
            <div className="w-8 h-8  rounded-full flex justify-center items-center mr-3">1</div>
            <span>An expert contacts you after analyzing your requirements</span>
          </li>
          <li className="flex items-center">
            <div className="w-8 h-8  rounded-full flex justify-center items-center mr-3">2</div>
            <span>If needed, we sign an NDA to ensure privacy</span>
          </li>
          <li className="flex items-center">
            <div className="w-8 h-8  rounded-full flex justify-center items-center mr-3">3</div>
            <span>We submit a comprehensive project proposal</span>
          </li>
        </ul>
        <div>
          <p className="mb-3">Customers who trust us:</p>
          <div className="flex space-x-5">
            <img src="/Fimeal.png" alt="Samsung" className="h-8" />
            <img src="/Educait.webp" alt="Verivox" className="h-8" />
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="lg:w-1/2 text-white">
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-5">
            <label htmlFor="name" className="block text-sm font-bold mb-2">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              className="w-full p-2 outline-none border bg-transparent border-gray-300 rounded-lg"
            />
            {formik.touched.name && formik.errors.name ? <div className="text-red-500 text-sm mt-1">{formik.errors.name}</div> : null}
          </div>

          <div className="mb-5">
            <label htmlFor="email" className="block text-sm font-bold mb-2">Corporate E-mail</label>
            <input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className="w-full p-2 outline-none border bg-transparent border-gray-300 rounded-lg"
            />
            {formik.touched.email && formik.errors.email ? <div className="text-red-500 text-sm mt-1">{formik.errors.email}</div> : null}
          </div>

          <div className="mb-5">
            <label htmlFor="phone" className="block text-sm font-bold mb-2">Phone Number</label>
            <input
              id="phone"
              name="phone"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
              className="w-full p-2 outline-none border bg-transparent border-gray-300 rounded-lg"
            />
            {formik.touched.phone && formik.errors.phone ? <div className="text-red-500 text-sm mt-1">{formik.errors.phone}</div> : null}
          </div>

          <div className="mb-5">
            <label htmlFor="projectDescription" className="block text-sm font-bold mb-2">Describe your project</label>
            <textarea
              id="projectDescription"
              name="projectDescription"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.projectDescription}
              className="w-full p-3 border bg-transparent border-gray-300 rounded-lg"
            />
            {formik.touched.projectDescription && formik.errors.projectDescription ? <div className="text-red-500 text-sm mt-1">{formik.errors.projectDescription}</div> : null}
          </div>

          <div className="mb-5">
            <label htmlFor="file" className="block text-sm font-bold mb-2">Attach File</label>
            <input
              id="file"
              name="file"
              type="file"
              onChange={(event) => formik.setFieldValue('file', event.currentTarget.files?.[0] || null)}
              className="w-full p-3 border bg-transparent border-gray-300 rounded-lg"
            />
            {formik.errors.file && formik.touched.file ? <div className="text-red-500 text-sm mt-1">{(formik.errors.file as any)}</div> : null}
            <p className="text-gray-500 text-xs mt-1">No more than 3MB. Formats: doc, docx, pdf, ppt, pptx.</p>
          </div>

          <div className="mb-5">
            <label className="flex items-center text-sm">
              <input
                id="nda"
                name="nda"
                type="checkbox"
                onChange={formik.handleChange}
                checked={formik.values.nda}
                className="mr-2"
              />
              I want to protect my data by signing an NDA
            </label>
          </div>

          <button type="submit" className="bg-[#6430c2] text-white w-full py-3 font-semibold rounded-lg">Send Request</button>

          <p className="text-sm text-white flex items-center mt-3">
            <span className="material-icons text-[#6430c2] mr-1">&#128274;</span> Your privacy is protected
          </p>
        </form>
      </div>
    </div>
  );
};

export default ConsultationForm;