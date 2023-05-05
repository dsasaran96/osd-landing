import NotFound from "@layouts/404";
import Base from "@layouts/Baseof";
import { getRegularPage } from "@lib/contentParser";

import { motion } from "framer-motion";

const notFound = ({ data }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -200 }}
      transition={{ duration: 0.5 }}
    >
      <Base>
        <NotFound data={data} />
      </Base>
    </motion.div>
  );
};

// get 404 page data
export const getStaticProps = async () => {
  const notFoundData = await getRegularPage();
  return {
    props: {
      data: notFoundData,
    },
  };
};

export default notFound;
