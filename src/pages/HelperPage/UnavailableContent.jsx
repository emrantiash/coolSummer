import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function UnvailableContent() {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col items-center justify-center mx-10 md:mx-16 mb-10 mt-5 py-10 bg-gray-50 rounded-md text-suitefontblack"
      data-testid="not-found"
    >
      <motion.ellipse>
        <lord-icon
          className="inline-block"
          src="https://cdn.lordicon.com/ltgbpeiv.json"
          trigger="loop"
          delay="0"
          style={{ width: "200px", height: "200px" }}
        ></lord-icon>
      </motion.ellipse>
      <motion.h3
        className="text-4xl font-bold"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        404
      </motion.h3>
      <motion.h2
        className="text-2xl font-medium"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Page Not Found
      </motion.h2>
      <motion.p
        className="text-lg"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        The page you are looking for does not exist or has been moved.
      </motion.p>
      <button
        // go back to previous page
        onClick={() => navigate(-1)}
        className="mt-5 px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900"
      >
        Go Back
      </button>
    </div>
  );
}
