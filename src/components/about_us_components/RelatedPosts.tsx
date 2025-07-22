"use client";
import React, { useState } from 'react';
import styles from '@/styles/about_us_styles/RelatedPosts.module.scss';

const postsData = [
  {
    title: "The LGBTQ+ homeownership story in numbers",
    description: "The fight against LGBTQ+ housing discrimination has turned a corner. Learn your rights with the Better.com infographic on LGBTQ+ homeownership.",
  },
  {
    title: "Vishal Garg, Founder and CEO of Better",
    description: "Better.com CEO Vishal Garg has been interested in tech and lending for years. Here’s how he zeroed in on mortgages and made it easier for people to buy a home.",
  },
  {
    title: "The Year of the Home: 2020 in Review",
    description: "In the socially distanced world of 2020, Better helped 88,100+ new clients navigate their homeownership journey with ease, confidence, and a ton of savings.",
  },
  {
    title: "Why I Started Better Mortgage",
    description: "Most founders have a story they pitch when asked about what their company does — something that ties their overall vision to an existing problem. But mine is pretty straightforward. In fact, you might have your own version of it, too.",
  },
  {
    title: "Bringing it home: 2019 in review",
    description: "2019 was a great year for Better Mortgage and our homeowners. Here’s a look at what we did this year and a sneak peek at where we hope to go in 2020.",
  },
  {
    title: "Finding Home: Dan and Louise",
    description: "They didn’t think homeownership was in the cards. Now they’re living a life of leisure in Florida.",
  },
  {
    title: "Finding Home: Taisha",
    description: "A doctor and single parent, forced to downsize after divorce, navigates debt and damaged credit to provide a safe home for her family.",
  },
  {
    title: "Self-employed? Here’s how to get a mortgage",
    description: "Here’s what our underwriters take into consideration when reviewing applications from self-employed borrowers.",
  },
  {
    title: "7/6 ARM: Is it the best option for you? How does it work?",
    description: "Explore the benefits and drawbacks of a 7/6 ARM, learn how it works, and determine if this adjustable-rate mortgage fits your long-term financial goals.",
  },
];

const RelatedPosts = () => {
  const [expandedDescriptions, setExpandedDescriptions] = useState<{[key: number]: boolean}>({});

  const toggleDescription = (index: number) => {
    setExpandedDescriptions(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className={styles.relatedPostsContainer}>
      <h2 className={styles.heading}>Related posts</h2>
      <div className={styles.postsGrid}>
        {postsData.map((post, index) => (
          <div key={index} className={styles.postCard}>
            <h3 className={styles.postTitle}>{post.title}</h3>
            <div 
              className={`${styles.postDescription} ${expandedDescriptions[index] ? styles.expanded : ''}`}
              onClick={() => toggleDescription(index)}
            >
              {expandedDescriptions[index] 
                ? post.description 
                : `${post.description.substring(0, 100)}${post.description.length > 100 ? '...' : ''}`
              }
            </div>
            {/* Removed arrow from JSX */}
            <a href="#" className={styles.readNowLink}>
              Read now
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};



export default RelatedPosts;