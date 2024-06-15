import React from 'react';

const Badge = ({ badge }) => {
  return (
    <div style={styles.badge}>
      <img src={badge.imageUrl} alt={badge.name} style={styles.badgeImage} />
      <p style={styles.badgeName}>{badge.name}</p>
    </div>
  );
};

const styles = {
  badge: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '80px',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    backgroundColor: '#ffffff',
  },
  badgeImage: {
    width: '60px',
    height: '60px',
    marginBottom: '10px',
  },
  badgeName: {
    textAlign: 'center',
    fontSize: '0.9em',
  },
};

export default Badge;
