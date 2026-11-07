import styles from "./StarryNight.module.css";

// Seeded so the server and client always render the same sky.
function seededRandom(seed: number) {
  return () => {
    seed = (seed * 16807) % 2147483647;
    return (seed - 1) / 2147483646;
  };
}

const random = seededRandom(20220801);

const stars = Array.from({ length: 170 }, (_, id) => ({
  id,
  top: random() * 100,
  left: random() * 100,
  size: random() * 2.5 + 0.5,
  delay: random() * 6,
  duration: random() * 3 + 2,
  opacity: random() * 0.7 + 0.3,
}));

const shootingStars = Array.from({ length: 5 }, (_, id) => ({
  id,
  top: random() * 40 + 5,
  left: random() * 60 + 12,
  delay: id * 4 + random() * 3,
}));

/** Fixed night sky that sits behind the whole page. */
export default function StarryNight() {
  return (
    <div className={styles.scene} aria-hidden="true">
      <div className={styles.sky} />
      <div className={styles.skyGlow} />

      {stars.map((s) => (
        <div
          key={s.id}
          className={styles.star}
          style={
            {
              top: `${s.top}%`,
              left: `${s.left}%`,
              width: `${s.size}px`,
              height: `${s.size}px`,
              animationDelay: `${s.delay}s`,
              animationDuration: `${s.duration}s`,
              "--opacity": s.opacity,
            } as React.CSSProperties
          }
        />
      ))}

      {shootingStars.map((s) => (
        <div
          key={s.id}
          className={styles.shootingStar}
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            animationDelay: `${s.delay}s`,
          }}
        />
      ))}

      <div className={styles.milkyWay} />
    </div>
  );
}

/** The moon scrolls away with the hero so it never sits behind body text. */
export function Moon() {
  return (
    <div className={styles.moonContainer} aria-hidden="true">
      <div className={styles.moon}>
        <div className={styles.moonCrater1} />
        <div className={styles.moonCrater2} />
        <div className={styles.moonCrater3} />
      </div>
      <div className={styles.moonHalo} />
    </div>
  );
}
