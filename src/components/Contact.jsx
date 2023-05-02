import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { ContactWrapper } from "../hoc";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_c8jg2da',
        'template_bgiii3j',
        {
          from_name: form.name,
          to_name: "Makenna Martin",
          from_email: form.email,
          to_email: "makennamartin97@gmail.com",
          message: form.message,
        },
        'HNQ9QQSkgLMbgSnu3'
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    // <>
    //   <div
    //     variants={slideIn("down", "tween", 0.2, 1)}
    //     className='bg-black-100 p-5 lg:p-10 rounded-2xl w-full  sm:p-6 w-[270px] xs:w-[370px] sm:w-[390px] md:w-[470px] lg:w-[560px]'
    //   >
    //     <p className={styles.sectionSubText}>Get in touch</p>
    //     <h3 className={styles.sectionHeadText}>Contact.</h3>

    //     <form
    //       ref={formRef}
    //       onSubmit={handleSubmit}
    //       className='mt-12 flex flex-col gap-2 justify-center pointer-events-auto'
    //     >
    //       <label className='flex flex-col'>
    //         <span className='text-white font-medium mb-4'>Name</span>
    //         <input
    //           type='text'
    //           name='name'
    //           value={form.name}
    //           onChange={handleChange}
    //           className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
    //         />
    //       </label>
    //       <label className='flex flex-col'>
    //         <span className='text-white font-medium mb-4'>Email</span>
    //         <input
    //           type='email'
    //           name='email'
    //           value={form.email}
    //           onChange={handleChange}
    //           className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
    //         />
    //       </label>
    //       <label className='flex flex-col'>
    //         <span className='text-white font-medium mb-4'>Message</span>
    //         <textarea
    //           rows={7}
    //           name='message'
    //           value={form.message}
    //           onChange={handleChange}
    //           className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
    //         />
    //       </label>

    //       <button
    //         type='submit'
    //         className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
    //       >
    //         {loading ? "Sending..." : "Send"}
    //       </button>
    //     </form>
    //   </div>


    // </>
    <div
    className={`bg-black-100 p-5 lg:p-10 rounded-2xl w-full sm:p-6 w-auto`}
  >
      <p className={styles.sectionSubText}>Get in touch</p>
      <h3 className={styles.sectionHeadText}>Contact.</h3>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className='mt-12 flex flex-col gap-2 justify-center pointer-events-auto'
      >
        <label className='flex flex-col'>
          <span className='text-white font-medium mb-4'>Name</span>
          <input
            type='text'
            name='name'
            value={form.name}
            onChange={handleChange}
            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
          />
        </label>
        <label className='flex flex-col'>
          <span className='text-white font-medium mb-4'>Email</span>
          <input
            type='email'
            name='email'
            value={form.email}
            onChange={handleChange}
            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
          />
        </label>
        <label className='flex flex-col'>
          <span className='text-white font-medium mb-4'>Your Message</span>
          <textarea
            rows={7}
            name='message'
            value={form.message}
            onChange={handleChange}
            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
          />
        </label>

        <button
          type='submit'
          className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
        >
          {loading ? "Sending..." : "Send"}
        </button>
      </form>
  </div>
  );
};

export default ContactWrapper(Contact, "contact");
