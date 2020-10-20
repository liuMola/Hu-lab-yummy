import React from 'react';
import { motion } from "framer-motion";

import Button from "./Button";
import Store from "./Store";


function Card() {
  const buttonLetter = "Draw!";
  const path = "/answer";

  return (
    <>
      <motion.div initial={{ y: 1000 }} animate={{ y: 0 }} exit={{ opacity: 0 }} className="card">
        <Store />
        <div className="text">
          Hundreds and thousands of choices are<br />
          waiting here for you!
        </div>
        <div className="button-wrapper">
          <div>
            Save your meal now!
          </div>
          <Button buttonLetter={buttonLetter} path={path} />
        </div>
      </motion.div>
      <div className="jar-tsai">
        ⓒ2020 GinNaLiJarTsai
      </div>

    </>
  );
}

export default Card;
