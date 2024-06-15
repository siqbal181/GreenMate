// src/Leaderboard.js
// import React from 'react';
import styled from 'styled-components';

const LeaderboardContainer = styled.div`
  

 min-width: 100vw;
 min-height: calc(var(--page-height) - 20px);
  
  background-color: #f9f9f9;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    margin: 0px;
    padding: 0px;
  }
`;

const LeaderboardHeader = styled.div`
  text-align: center;
  margin-bottom: 20px;
  margin-top: 20px;
  
  
  h1 {
    font-size: 32px;
    color: #333;

    @media (max-width: 768px) {
      font-size: 24px;
    }
  }

  p {
    font-size: 18px;
    color: #666;

    @media (max-width: 768px) {
      font-size: 14px;
    }
  }
`;

const ListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  margin: 10px;
  background-color: #37ab30;
  color: white;
  border-radius: 10px;
  margin-bottom: 10px;

  span {
    font-size: 18px;

    @media (max-width: 768px) {
      font-size: 16px;
    }
  }
`;

const LeaderboardList = styled.ul`
  list-style: none;
  padding: 20px;
`;

const LeaderboardItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-bottom: 15px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 10px;
    margin-bottom: 10px;
  }

  span {
    font-size: 18px;
    color: #333;

    &:first-child {
      font-weight: bold;
    }

    @media (max-width: 768px) {
      font-size: 16px;
    }
  }
`;

const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;

  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
  }
`;

const Leaderboard = () => {
    const leaders = [
        { name: 'John Doe', score: 1500, img: 'https://gravatar.com/avatar/0d41abd29a046248e28d4000e74c1f31?s=400&d=retro&r=pg' },
        { name: 'Jane Smith', score: 1400, img: 'https://gravatar.com/avatar/0d41abd29a046248e28d4000e74c1f31?s=400&d=retro&r=pg' },
        { name: 'Alice Johnson', score: 1300, img: 'https://gravatar.com/avatar/0d41abd29a046248e28d4000e74c1f31?s=400&d=retro&r=pg' },
        { name: 'John Doe', score: 1200, img: 'https://gravatar.com/avatar/0d41abd29a046248e28d4000e74c1f31?s=400&d=retro&r=pg' },
        { name: 'Jane Smith', score: 1100, img: 'https://gravatar.com/avatar/0d41abd29a046248e28d4000e74c1f31?s=400&d=retro&r=pg' },
    ];

    return (
        <LeaderboardContainer>
            <LeaderboardHeader>
                <h1>Leaderboard</h1>
                <p>Top performers of the month</p>
            </LeaderboardHeader>
            <ListHeader>
                <span>User Name</span>
                <span>Rank</span>
            </ListHeader>
            <LeaderboardList>
                {leaders.map((leader, index) => (
                    <LeaderboardItem key={index}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <ProfileImage src={leader.img} alt={`${leader.name}'s profile`} />
                            <span>{leader.name}</span>
                        </div>

                        <span>{index + 1}</span>
                    </LeaderboardItem>
                ))}
            </LeaderboardList>
        </LeaderboardContainer>
    );
};

export default Leaderboard;
