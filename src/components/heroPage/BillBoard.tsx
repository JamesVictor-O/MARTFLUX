import { motion } from "framer-motion"
import billBoard from "/public/assets/Frame.png"
import bilBoard2 from "/public/assets/Still life of hanging  bag.png"
import billBoard3 from "/public/assets/Frame.png"
const BillBoard = () => {
   const animations = [
      { x: -100, opacity: 0 }, // first product from left
      { y: -100, opacity: 0 }, // second product from top
      { x: 100, opacity: 0 },  // third product from right
    ];
  return (
   <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-20">
      {/* first product */}
      <motion.div
        className="h-[10rem] w-[10rem] md:w-[20rem] md:h-[20rem] rounded-2xl"
        initial={animations[0]}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <img src={billBoard} alt="" className="w-full h-full object-fit overflow-hidden" />
      </motion.div>

      {/* second product */}
      <motion.div
        className="h-[10rem] w-[10rem] md:w-[20rem] md:h-[20rem] rounded-2xl"
        initial={animations[1]}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
      >
        <img src={bilBoard2} alt="" className="w-full h-full object-fit overflow-hidden" />
      </motion.div>

      {/* third product */}
      <motion.div
        className="hidden md:block relative w-[20rem] h-[20rem] rounded-2xl"
        initial={animations[2]}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
      >
        <img src={billBoard3} alt="" className="w-full h-full object-fit overflow-hidden" />
      </motion.div>
    </div>
  )
}

export default BillBoard
