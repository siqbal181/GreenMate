import React from 'react';
import Badge from './Badge';
import AwardImg1 from '../assets/award1.png';
import AwardImg2 from '../assets/award2.png';
import AwardImg3 from '../assets/award3.png';
import AwardImg4 from '../assets/award4.png';
import LockedImg1 from '../assets/locked1.png';
import LockedImg2 from '../assets/locked2.png';
import LockedImg3 from '../assets/locked3.png';

const AchievementPage = () => {
  const myBadges = [
    { id: 1, name: 'Green Start', imageUrl: AwardImg1 },
    { id: 2, name: 'Eco Progress', imageUrl: AwardImg2 },
    { id: 3, name: 'Carbon Champion', imageUrl: AwardImg3 },
    { id: 4, name: 'Sustainability Steps', imageUrl: AwardImg4 }
  ];

  const unlockedBadges = [
    { id: 1, name: 'Eco Achiever', imageUrl: LockedImg1 },
    { id: 2, name: 'Carbon Offset', imageUrl: LockedImg2 },
    { id: 3, name: 'Green Trailblazer', imageUrl: LockedImg3 }
  ];

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.title}>Achievements</h1>
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>My Badges</h2>
          <div style={styles.badgeContainer}>
            {myBadges.map(badge => <Badge key={badge.id} badge={badge} />)}
          </div>
        </section>
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Locked Badges</h2>
          <div style={styles.badgeContainer}>
            {unlockedBadges.map(badge => <Badge key={badge.id} badge={badge} />)}
          </div>
        </section>
      </div>
    </div>
  );
};

const styles = {
  page: {
    padding: '8px',
    display: 'flex',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#f0f0f0',
    padding: '5px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '800px',
    width: '100%',
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  section: {
    marginBottom: '10px',
  },
  sectionTitle: {
    fontSize: '1.5em',
    marginBottom: '10px',
  },
  badgeContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
    justifyContent: 'center',
  },
};

export default AchievementPage;
