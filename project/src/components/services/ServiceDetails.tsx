import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ServiceDetail {
  title: string;
  description: string;
}

interface ServiceDetailsProps {
  details: ServiceDetail[];
  isVisible: boolean;
}

const ServiceDetails: React.FC<ServiceDetailsProps> = ({ details, isVisible }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {details.map((detail, index) => (
              <motion.div
                key={detail.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-secondary/10 p-6 rounded-lg"
              >
                <h4 className="text-accent font-semibold mb-2">{detail.title}</h4>
                <p className="text-gray-300">{detail.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};