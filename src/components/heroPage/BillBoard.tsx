import { motion } from "framer-motion";
import billBoard from "/public/assets/Frame.png";
import bilBoard2 from "/public/assets/Still life of hanging  bag.png";
import billBoard3 from "/public/assets/Frame.png";
const BillBoard = () => {
  const animations = [
    { x: -100, opacity: 0 }, // first product from left
    { y: -100, opacity: 0 }, // second product from top
    { x: 100, opacity: 0 }, // third product from right
  ];
  return (
    <div className="w-full h-[30rem]  p-8 flex flex-row items-center">
      {/* first product */}
      <motion.div
        className="h-full w-[80%]  rounded-2xl"
        initial={animations[0]}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <img
          src={billBoard}
          alt=""
          className="w-full h-full object-cover overflow-hidden"
        />
      </motion.div>

      {/* second product */}
      <div className="flex flex-col w-[30%] justify-between h-full ml-3">
        <motion.div
          className="rounded-2xl h-[46%]"
          initial={animations[1]}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        >
          <img
            src={bilBoard2}
            alt=""
            className="w-full h-full object-fit overflow-hidden"
          />
        </motion.div>

        {/* third product */}
        <motion.div
          className="h-3/6"
          initial={animations[2]}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
        >
          <img
            src={billBoard3}
            alt=""
            className="w-full h-full object-fit overflow-hidden"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default BillBoard;
