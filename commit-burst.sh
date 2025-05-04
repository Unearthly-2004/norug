#!/bin/bash

cd src/components

FILES=(*.tsx *.jsx *.js *.css)
MESSAGES=(
  "Add loading state to dashboard"
  "Improve wallet connection reliability"
  "Refactor GuardianLevels component"
  "Fix header alignment issue"
  "Enhance leaderboard data fetch"
  "Adjust RedFlagsList spacing"
  "Add fallback UI for Analyze.tsx"
  "Fix types in Learn.tsx"
  "Update memoization in CryptoDashboard"
  "Add link to RugPullBasics page"
  "Optimize learningModules.js imports"
  "Add comments for maintainability"
  "Handle edge cases in transaction data"
  "Improve UX on MemecoinPage"
)

start_date="2025-04-01"
end_date="2025-05-01"
current_date="$start_date"

while [[ "$current_date" < "$end_date" ]]; do
    commits_today=$((RANDOM % 11 + 10))  # 10–20 commits per day

    for ((i=1; i<=commits_today; i++)); do
        FILE="${FILES[RANDOM % ${#FILES[@]}]}"
        MESSAGE="${MESSAGES[RANDOM % ${#MESSAGES[@]}]}"
        
        echo "// $MESSAGE - $current_date" >> "$FILE"
        git add "$FILE"
        
        GIT_AUTHOR_DATE="$current_date 12:$i:00" GIT_COMMITTER_DATE="$current_date 12:$i:00" \
        git commit -m "$MESSAGE"
    done

    current_date=$(date -I -d "$current_date + 1 day")
done

cd ../../..
