// ./src/components/about_us_components/StatusCard.tsx
"use client"
import React, { useState } from "react";
import styles from "@/styles/about_us_styles/StatusCard.module.scss";
import Image from "next/image";

const StatusCard = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const openVideo = () => setIsVideoOpen(true);
  const closeVideo = () => setIsVideoOpen(false);

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        {/* Left Content */}
        <div className={styles.left}>
          <h2 className={styles.heading}>The status quo is broken</h2>
          <p className={styles.paragraph}>
            The traditional processes around homeownership are opaque and stressful. Fees aren&rsquo;t transparent and some are simply outrageous in size. Traditional mortgage lending is rife with unnecessary fees and slow, painful processes. It&rsquo;s a system set up to benefit insiders &mdash; not you. Better.com CEO, Vishal Garg, set out to change that.
          </p>
          <button className={styles.button}>Read Vishal&rsquo;s story</button> {/* Also fixed the button text */}
        </div>

        {/* Right Content (Video Card) */}
        <div className={styles.right}>
          <div className={styles.videoThumbnail} onClick={openVideo}>
            {/* Using Image component as intended */}
            <Image
              src="/vishal-mission.jpg"
              alt="Video thumbnail"
              fill // Use fill to make it cover the parent
              sizes="(max-width: 768px) 100vw, 50vw" // Add sizes prop for optimization
              style={{ objectFit: 'cover' }} // objectFit directly on style prop
            />
            <div className={styles.playIcon}>▶</div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoOpen && (
        <div className={styles.modalOverlay} onClick={closeVideo}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            {/* This YouTube URL looks incorrect. It should be a proper embed URL. */}
            {/* Example: https://www.youtube.com/embed/YOUR_VIDEO_ID */}
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" // Example YouTube embed URL with autoplay
              title="Vishal's Story"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" // Enhanced allow attributes
              allowFullScreen
            ></iframe>
            <button className={styles.closeButton} onClick={closeVideo}>×</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default StatusCard;