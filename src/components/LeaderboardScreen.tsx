import React, { useState } from "react";
import "./LeaderboardScreen.css";

interface LeaderboardItem {
  id: number;
  username: string;
  score: number;
  correct: number;
  incorrect: number;
}

const Leaderboard: React.FC = () => {
  // Sample leaderboard data (you can replace it with your actual data)
  const leaderboard: LeaderboardItem[] = [
    { id: 1, username: "JohnDoe", score: 100, correct: 20, incorrect: 5 },
    { id: 2, username: "JaneSmith", score: 90, correct: 18, incorrect: 7 },
    { id: 3, username: "AliceW", score: 80, correct: 16, incorrect: 9 },
    { id: 4, username: "BobBrown", score: 70, correct: 14, incorrect: 10 },
    { id: 5, username: "CharlieD", score: 60, correct: 12, incorrect: 12 },
  ];

  const [expandedItemId, setExpandedItemId] = useState<number | null>(null);

  const getRankStyle = (index: number) => {
    switch (index) {
      case 0:
        return { color: "#FFD700", label: "1st" }; // Gold
      case 1:
        return { color: "#C0C0C0", label: "2nd" }; // Silver
      case 2:
        return { color: "#CD7F32", label: "3rd" }; // Bronze
      default:
        return { color: "#666666", label: `${index + 1}th` };
    }
  };

  const handleItemClick = (id: number) => {
    setExpandedItemId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="leaderboard-container">
      <h1 className="leaderboard-header">Leaderboard</h1>
      <div className="leaderboard-list">
        {leaderboard
          .sort((a, b) => b.score - a.score)
          .map((item, index) => {
            const rankStyle = getRankStyle(index);
            return (
              <div className="leaderboard-item" key={item.id}>
                <div
                  className="leaderboard-item-container"
                  onClick={() => handleItemClick(item.id)}
                >
                  <div
                    className="rank-container"
                    style={{ backgroundColor: `${rankStyle.color}20` }}
                  >
                    <span style={{ color: rankStyle.color }} className="rank-text">
                      {rankStyle.label}
                    </span>
                  </div>
                  <div className="user-info-container">
                    <span className="username">{item.username}</span>
                    <span className="score">{item.score} pts</span>
                  </div>
                </div>
                {expandedItemId === item.id && (
                  <div className="additional-info">
                    <p>Correct: {item.correct}</p>
                    <p>Incorrect: {item.incorrect}</p>
                  </div>
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Leaderboard;
// Optimize learningModules.js imports - 2025-04-04
// Add comments for maintainability - 2025-04-04
// Fix types in Learn.tsx - 2025-04-05
// Fix types in Learn.tsx - 2025-04-05
// Add comments for maintainability - 2025-04-05
// Add link to RugPullBasics page - 2025-04-05
// Add comments for maintainability - 2025-04-06
// Add fallback UI for Analyze.tsx - 2025-04-06
// Adjust RedFlagsList spacing - 2025-04-08
// Adjust RedFlagsList spacing - 2025-04-10
// Add loading state to dashboard - 2025-04-12
// Add fallback UI for Analyze.tsx - 2025-04-13
// Improve UX on MemecoinPage - 2025-04-14
// Add link to RugPullBasics page - 2025-04-15
// Add loading state to dashboard - 2025-04-17
// Improve wallet connection reliability - 2025-04-18
// Fix types in Learn.tsx - 2025-04-19
// Optimize learningModules.js imports - 2025-04-19
// Add link to RugPullBasics page - 2025-04-20
// Improve UX on MemecoinPage - 2025-04-20
// Adjust RedFlagsList spacing - 2025-04-21
// Fix header alignment issue - 2025-04-21
// Handle edge cases in transaction data - 2025-04-22
// Add link to RugPullBasics page - 2025-04-22
// Handle edge cases in transaction data - 2025-04-22
// Handle edge cases in transaction data - 2025-04-23
// Fix types in Learn.tsx - 2025-04-25
// Enhance leaderboard data fetch - 2025-04-25
// Fix types in Learn.tsx - 2025-04-25
// Handle edge cases in transaction data - 2025-04-27
// Adjust RedFlagsList spacing - 2025-04-29
// Add fallback UI for Analyze.tsx - 2025-04-30
// Enhance leaderboard data fetch - 2025-04-30
