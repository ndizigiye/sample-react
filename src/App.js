import React from "react";
import "./App.css";
import { motion } from "framer-motion";
import {Paper} from "@mui/material";

export default function App() {
  return (
    <div className="bg-blue-500 min-h-screen flex items-center justify-center flex-col">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 2 }}
        transition={{ duration: 0.3 }}>
        <Paper className="paper" elevation={10}>
          <dotlottie-player src="https://lottie.host/228411c6-7cc7-4184-9189-cfe7a70e8f4c/0kJMnzc3DQ.json" background="transparent" speed="1" loop autoplay></dotlottie-player>
        </Paper>
      </motion.div>
    </div>
  );
}
