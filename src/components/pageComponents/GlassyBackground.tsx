import { isValidMotionProp, motion, } from 'framer-motion'
import type { Transition } from 'framer-motion';
import { chakra } from '@chakra-ui/react';
import { smallMotions } from '@/configs/animationDrop';

const customShouldForwardProp = (prop: string) => {
    if(isValidMotionProp(prop)) return true;

    return !["transition", "animate", "exit", "initial", "whileHover", "whileTap", "whileDrag"].includes(prop)
}

const MotionBox = chakra(motion.div, {
  shouldForwardProp: customShouldForwardProp,
} as any);

const transition: Transition = {
  duration: 10,
  repeat: Infinity,
  repeatType: "loop",
  ease: "easeInOut"
};

// const smallMotions = [
//     {
//     position: 'absolute',
//     top: '20%',
//     left: '10%',
//     width: '10px',
//     height: '10px',
//     bg: 'blue.400',
//     opacity: 0.3,
//     borderRadius: 'full',
//     zIndex: 0,
//     animate: {
//       x: [0, -30, 20, 0],
//       y: [0, 30, -20, 0],
//       transition,
//     },
//   },
//   {
//     position: 'absolute',
//     top: '20%',
//     left: '10%',
//     width: '10px',
//     height: '10px',
//     bg: 'green.400',
//     opacity: 0.3,
//     borderRadius: 'full',
//     zIndex: 0,
//     animate: {
//       x: [0, 10, -20, 0],
//       y: [0, -90, -20, 0],
//       transition,
//     },
//   },
//   {
//     position: 'absolute',
//     top: '20%',
//     left: '10%',
//     width: '10px',
//     height: '10px',
//     bg: 'green.400',
//     opacity: 0.3,
//     borderRadius: 'full',
//     zIndex: 0,
//     animate: {
//       x: [0, -30, -20, 0],
//       y: [0, 30, 20, 0],
//       transition,
//     },
//   },
//   {
//     position: 'absolute',
//     top: '20%',
//     left: '10%',
//     width: '10px',
//     height: '10px',
//     bg: 'green.400',
//     opacity: 0.3,
//     borderRadius: 'full',
//     zIndex: 0,
//     animate: {
//       x: [0, -30, -20, 0],
//       y: [0, 30, -20, 0],
//       transition,
//     },
//   },
// ]

const motionConfigs = [
  {
    position: 'absolute',
    top: '20%',
    left: '10%',
    width: '300px',
    height: '300px',
    bg: 'green.400',
    filter: 'blur(160px)',
    opacity: 0.3,
    borderRadius: 'full',
    zIndex: 0,
    animate: {
      x: [0, 30, -20, 0],
      y: [0, 30, -20, 0],
      transition,
    },
  },
  {
    position: 'absolute',
    top: '20%',
    left: '10%',
    width: '10px',
    height: '10px',
    bg: 'green.400',
    opacity: 0.3,
    borderRadius: 'full',
    zIndex: 0,
    animate: {
      x: [0, 30, -20, 0],
      y: [0, 30, -20, 0],
      transition,
    },
  },
  {
    position: 'absolute',
    bottom: '15%',
    right: '5%',
    width: '400px',
    height: '400px',
    bg: 'teal.500',
    filter: 'blur(180px)',
    opacity: 0.25,
    borderRadius: 'full',
    zIndex: 0,
    animate: {
      x: [0, -40, 20, 0],
      y: [0, -40, 20, 0],
      transition,
    },
  },
  {
    position: 'absolute',
    top: '50%',
    right: '40%',
    width: '200px',
    height: '200px',
    bg: 'lime.300',
    filter: 'blur(100px)',
    opacity: 0.2,
    borderRadius: 'full',
    zIndex: 0,
    animate: {
      x: [0, 15, -15, 0],
      transition,
    },
  },
];

const GlassyBackground = () => {
  return (
    <>
      {motionConfigs.map((config, index) => (
        <MotionBox key={index} {...config} />
      ))}
      {smallMotions.map((config,index) => (
        <MotionBox key={index} {...config}/>
      ))}
    </>
  );
};

export default GlassyBackground;