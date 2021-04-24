import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <motion.div
      initial={{ y: 400, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 2 }}
      className="about"
    >
      <div class="gradient-border">
        <h1>About Us</h1>
        <p>
          we are totally dedicated to serve all housewifes and working ladies.
          We are one of the small but most sincere and growing household
          business organisation in the field of stitching, pujan samagri,
          handmade snacks,mixture,etc.
        </p>
      </div>
    </motion.div>
  );
};

export default AboutUs;
