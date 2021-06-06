import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRouteMatch } from "react-router";
import CircularProgress from "@material-ui/core/CircularProgress";
import { cardPageStyle } from "./CardPageJss";
import { motion } from "framer-motion";

function CardPage() {
  const classes = cardPageStyle();
  const [data, setData] = useState([]);
  const dataMatch = useRouteMatch();
  const [temp, setTemp] = useState(false);
  console.log(dataMatch.params.id);
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  useEffect(async () => {
    setTemp(true);
    axios
      .get(
        `https://jsonplaceholder.typicode.com/photos?id=${dataMatch.params.id}`
      )
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    await sleep(1500);
    setTemp(false);
  }, []);

  const renderCardInfo = () => {
    return (
      <div>
        {data
          ? data.map((myData) => {
              return (
                <div>
                  <div className={classes.text}>
                    <h2 key={myData.id}>{myData.title}</h2>
                  </div>

                  <div className={classes.imageDiv}>
                    <img
                      key={myData.id}
                      className={classes.image}
                      src="https://via.placeholder.com/600/92c952"
                      alt="square"
                    />
                  </div>
                </div>
              );
            })
          : ""}
      </div>
    );
  };

  const pageVariants = {
    in: {
      opacity: 1,
      x:0,
      scale: 1
    },
    out: {
      opacity: 0,
      x:"-100vw",
      scale: 0.5
    },
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: "1"
  }

  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className={classes.root}
    >
      <div>
        {temp ? (
          <CircularProgress
            thickness={3}
            size="70px"
            className={classes.loading}
            color="primary"
          />
        ) : (
          renderCardInfo()
        )}
      </div>
    </motion.div>
  );
}

export default CardPage;
