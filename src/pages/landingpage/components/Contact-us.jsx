import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
} from "react-icons/fa";
import { motion } from "framer-motion";
import Sectionwraper from "/src/components/Sectionwraper";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function ContactUs() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      // email: "test@gmail.com",
    },
    resolver: zodResolver(schema),
  });
  const onsubmit = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log(data);

      throw new Error();
    } catch (error) {
      setError("root", {
        type: "manual",
        message: "This email is alrady taken",
      });
    }
  };
  return (
    <div className="bg-white dark:bg-gradient-to-r from-[#0a0a0a] via-[#0d1b34] to-[#020202] ">
      <Sectionwraper>
        <div className="">
          <h1 className="text-center text-5xl font-bold pt-14">Contact Me</h1>
          <div
            id="contact us"
            className="pb-10 pt-20 flex items-center justify-center"
          >
            <div className="bg-white dark:bg-gray-900 shadow-2xl rounded-3xl p-4 md:p-10 flex flex-col lg:flex-row w-full">
              {/* Left Side - Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="lg:w-1/2 p-6 flex flex-col justify-center text-center lg:text-left"
              >
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-10">
                  Let's Connect
                </h2>
                <p className="text-gray-600 dark:text-gray-500 mb-6">
                  Feel free to reach out for collaborations or just a friendly
                  chat.
                </p>
                <div className="space-y-4">
                  <p className="flex items-center justify-center lg:justify-start text-gray-700 dark:text-gray-300">
                    <FaWhatsapp className="mr-2 text-blue-500" /> +92 327
                    0651157
                  </p>
                  <p className="flex items-center justify-center lg:justify-start text-gray-700 dark:text-gray-300">
                    <FaEnvelope className="mr-2 text-blue-500" />{" "}
                    sohailabbasofficial18@gmail.com
                  </p>
                  <p className="flex items-center justify-center lg:justify-start text-gray-700 dark:text-gray-300">
                    <FaMapMarkerAlt className="mr-2 text-blue-500" />{" "}
                    Sargodha,Punjab,Pakistan
                  </p>
                </div>
                <div>
                  <h1 className="text-2xl pt-10 font-bold">Sohail Abbas</h1>
                </div>
              </motion.div>

              {/* Right Side - Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="lg:w-1/2 p-6 bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-xl mt-10 md:mt-0"
              >
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                  Send a Message
                </h3>
                <form onSubmit={handleSubmit(onsubmit)} className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-3 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white border-none outline-none focus:ring-2 focus:ring-blue-500"
                    {...register("name", {
                      required: "Name is required",
                    })}
                  />
                  {errors.password && (
                    <span className=" text-xl  text-red-500">
                      {errors.password.message}
                    </span>
                  )}
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-3 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white border-none outline-none focus:ring-2 focus:ring-blue-500"
                    {...register("email", {
                      required: "Email is required",
                      validate: (value) =>
                        value.includes("@") || "Email must include '@' symbol",
                    })}
                  />
                  {errors.email && (
                    <div className=" text-xl  text-red-500">
                      {errors.email.message}
                    </div>
                  )}
                  <textarea
                    placeholder="Your Message"
                    rows="4"
                    className="w-full p-3 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white border-none outline-none focus:ring-2 focus:ring-blue-500"
                    {...register("message", {
                      required: "Name is required",
                    })}
                  ></textarea>
                  <button
                    disabled={isSubmitting}
                    type="submit"
                    className="w-full p-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
                  >
                    {isSubmitting ? "Loading..." : "Send Message"}
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </Sectionwraper>
    </div>
  );
}
