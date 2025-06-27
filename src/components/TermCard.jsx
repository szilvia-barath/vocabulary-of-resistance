import { motion } from 'framer-motion';
import ImageFetcher from './ImageFetcher';

function TermCard({ term, definition }) {
  return (
    <motion.div
      key={term}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="max-w-2xl p-6 mx-auto text-black bg-white shadow-lg rounded-xl"
    >
      <h2 className="mb-2 text-2xl font-semibold">{term}</h2>
      <p className="mb-4 text-gray-800">{definition}</p>

    </motion.div>
  );
}

export default TermCard;
