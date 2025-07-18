import styles from "@/styles/HeroSection.module.scss";

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <h1 className={styles.heading}>Home is worth it.</h1>
        <p className={styles.subheading}>
          Discover your home-buying budget, apply for a mortgage, and search real estate with Better — all in one place.
        </p>
        <div className={styles.buttonGroup}>
          <button className={styles.primaryBtn}>Get started</button>
          <button className={styles.secondaryBtn}>Mortgage calculator</button>
        </div>
      </div>
    </section>
  );
}
