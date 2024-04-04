import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

export const Item = ({description, image}) => {
return (
    <motion.div className="flex flex-col text-white items-center cursor-pointer"
    whileHover={{ scale: 1.07 }}
        whileTap={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}>
        
        <img className='w-64' src={image} alt="" />
        <span className='p-10'>{description}</span>
    </motion.div>
)
}

Item.propTypes = {
    description: PropTypes.string,
    image: PropTypes.string
}