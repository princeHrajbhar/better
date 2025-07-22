import React from "react";
import styles from "@/styles/about_us_styles/landing_page.module.scss";

const Mission: React.FC = () => {
  return (
    <div className={styles.missionContainer}>
      <h2 className={styles.title}>Our mission</h2>
      <p className={styles.missionText}>
        We’re making homeownership simpler, faster —
        <br />
        and most importantly, more accessible for all
        <br />
        Americans.
      </p>
    </div>
  );
};

export default Mission;
