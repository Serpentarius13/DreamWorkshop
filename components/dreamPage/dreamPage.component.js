import styles from "./DreamPage.module.scss";

import React from "react";
import DreamItem from "../dreamItem/dream.component";

const DreamPage = ({ dreams }) => {
  return (
    <div className={styles.pageBox}>
      <div className={styles.reel}>
        {dreams.map((dream) => (
          <DreamItem key={dreams.indexOf(dream)} data={dream} size={true} />
        ))}
      </div>
    </div>
  );
};

export default DreamPage;
