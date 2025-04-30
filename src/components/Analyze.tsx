import React, { useState } from 'react';

// Define the MCQ questions for each module
const learningModulesQuestions = {
  rugPullBasics: [
    {
      question: 'What is a Rug Pull?',
      options: ['A legitimate investment opportunity', 'A type of scam', 'A government regulation', 'A security protocol'],
      answer: 1, // Correct answer is the second option (index 1)
    },
    {
      question: 'What is a common red flag of a Rug Pull?',
      options: ['Clear roadmap', 'No team members listed', 'Transparent code', 'Open-source project'],
      answer: 1, // Correct answer is the second option (index 1)
    },
  ],
  redFlagsDetection: [
    {
      question: 'Which of these is a sign of a potential Rug Pull?',
      options: ['Verified team', 'Anonymous team members', 'Detailed roadmap', 'Open source code'],
      answer: 1, // Correct answer is the second option (index 1)
    },
    {
      question: 'What is the importance of the project’s community in detecting red flags?',
      options: ['High community involvement', 'Low community involvement', 'No community involvement', 'None of the above'],
      answer: 0, // Correct answer is the first option (index 0)
    },
  ],
  advancedProtectionStrategies: [
    {
      question: 'What is a good advanced protection strategy for your crypto investments?',
      options: ['Ignoring market fluctuations', 'Diversifying your investments', 'Investing in single coin only', 'Avoiding new projects'],
      answer: 1, // Correct answer is the second option (index 1)
    },
    {
      question: 'What should you do before investing in a project?',
      options: ['Verify project team and roadmap', 'Invest without research', 'Follow trends blindly', 'Invest only in top coins'],
      answer: 0, // Correct answer is the first option (index 0)
    },
  ],
};

export function Analyze() {
  const [answers, setAnswers] = useState<{ [key: string]: number[] }>({
    rugPullBasics: new Array(learningModulesQuestions.rugPullBasics.length).fill(-1),
    redFlagsDetection: new Array(learningModulesQuestions.redFlagsDetection.length).fill(-1),
    advancedProtectionStrategies: new Array(learningModulesQuestions.advancedProtectionStrategies.length).fill(-1),
  });
  const [submitted, setSubmitted] = useState(false);
  const [report, setReport] = useState('');

  // Handle answer change for each question
  const handleAnswerChange = (module: string, questionIndex: number, answerIndex: number) => {
    const newAnswers = { ...answers };
    newAnswers[module][questionIndex] = answerIndex;
    setAnswers(newAnswers);
  };

  // Handle form submission and report generation
  const handleSubmit = () => {
    let score = 0;

    // Calculate score for each module
    Object.keys(learningModulesQuestions).forEach((module) => {
      learningModulesQuestions[module].forEach((q, index) => {
        if (answers[module][index] === q.answer) {
          score++;
        }
      });
    });

    // Generate report based on score
    const totalQuestions = Object.values(learningModulesQuestions).flat().length;
    const percentage = (score / totalQuestions) * 100;
    setReport(`You answered ${score} out of ${totalQuestions} questions correctly. (${percentage}%)`);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 to-purple-800 text-white py-16">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-12">MCQ Test: Analyze Your Knowledge</h1>

        <div className="space-y-8">
          {Object.keys(learningModulesQuestions).map((module) => (
            <div key={module}>
              <h2 className="text-3xl font-semibold text-center mb-6 text-indigo-200">{module.replace(/([A-Z])/g, ' $1').trim()}</h2>
              {learningModulesQuestions[module].map((q, index) => (
                <div key={index} className="bg-white/10 p-8 rounded-2xl backdrop-blur-xl shadow-xl transition-all hover:bg-white/20 mb-6">
                  <h3 className="text-xl font-medium mb-6">{q.question}</h3>
                  <div className="space-y-4">
                    {q.options.map((option, i) => (
                      <div key={i} className="flex items-center justify-start space-x-4">
                        <input
                          type="radio"
                          name={`question-${module}-${index}`}
                          id={`question-${module}-${index}-option-${i}`}
                          checked={answers[module][index] === i}
                          onChange={() => handleAnswerChange(module, index, i)}
                          className="mr-3 w-5 h-5 accent-indigo-500"
                        />
                        <label htmlFor={`question-${module}-${index}-option-${i}`} className="text-lg font-light">{option}</label>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          {!submitted ? (
            <button
              onClick={handleSubmit}
              className="py-3 px-6 bg-purple-600 hover:bg-purple-700 text-white rounded-full text-xl transition-all transform hover:scale-105"
            >
              Submit Answers
            </button>
          ) : (
            <div className="mt-8 bg-green-800 p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-semibold mb-6">Test Report</h2>
              <p className="text-lg font-light">{report}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Analyze;
// Improve wallet connection reliability - 2025-04-01
// Enhance leaderboard data fetch - 2025-04-03
// Update memoization in CryptoDashboard - 2025-04-03
// Fix header alignment issue - 2025-04-03
// Handle edge cases in transaction data - 2025-04-05
// Handle edge cases in transaction data - 2025-04-05
// Add link to RugPullBasics page - 2025-04-07
// Add comments for maintainability - 2025-04-07
// Update memoization in CryptoDashboard - 2025-04-10
// Adjust RedFlagsList spacing - 2025-04-10
// Add link to RugPullBasics page - 2025-04-10
// Add fallback UI for Analyze.tsx - 2025-04-12
// Add fallback UI for Analyze.tsx - 2025-04-13
// Update memoization in CryptoDashboard - 2025-04-13
// Add loading state to dashboard - 2025-04-14
// Fix types in Learn.tsx - 2025-04-15
// Adjust RedFlagsList spacing - 2025-04-15
// Update memoization in CryptoDashboard - 2025-04-17
// Add comments for maintainability - 2025-04-17
// Enhance leaderboard data fetch - 2025-04-18
// Enhance leaderboard data fetch - 2025-04-20
// Add comments for maintainability - 2025-04-21
// Adjust RedFlagsList spacing - 2025-04-21
// Enhance leaderboard data fetch - 2025-04-22
// Add loading state to dashboard - 2025-04-22
// Refactor GuardianLevels component - 2025-04-22
// Add comments for maintainability - 2025-04-23
// Add link to RugPullBasics page - 2025-04-23
// Improve UX on MemecoinPage - 2025-04-23
// Optimize learningModules.js imports - 2025-04-25
// Optimize learningModules.js imports - 2025-04-25
// Enhance leaderboard data fetch - 2025-04-26
// Update memoization in CryptoDashboard - 2025-04-27
// Handle edge cases in transaction data - 2025-04-28
// Optimize learningModules.js imports - 2025-04-28
// Adjust RedFlagsList spacing - 2025-04-29
// Enhance leaderboard data fetch - 2025-04-30
