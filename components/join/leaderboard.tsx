"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface LeaderboardEntry {
  rank: number;
  name: string;
  referrals: number;
  badge: string;
}

// Sample leaderboard data - in production, this would come from your database
const leaderboardData: LeaderboardEntry[] = [
  { rank: 1, name: "Sarah J.", referrals: 45, badge: "🏆" },
  { rank: 2, name: "Marcus T.", referrals: 38, badge: "🥈" },
  { rank: 3, name: "Aisha K.", referrals: 32, badge: "🥉" },
  { rank: 4, name: "James L.", referrals: 28, badge: "⭐" },
  { rank: 5, name: "Emma W.", referrals: 24, badge: "⭐" },
];

export function Leaderboard() {
  return (
    <Card className="border-white/20 bg-white/5 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl text-white">
          <span className="text-2xl">🏆</span>
          Top Referrers This Month
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {leaderboardData.map((entry) => (
            <div
              key={entry.rank}
              className={`flex items-center justify-between p-4 rounded-lg transition-all ${
                entry.rank === 1
                  ? "bg-gradient-to-r from-yellow-600/30 to-yellow-700/30 border border-yellow-500/50"
                  : entry.rank === 2
                  ? "bg-gradient-to-r from-gray-400/30 to-gray-500/30 border border-gray-400/50"
                  : entry.rank === 3
                  ? "bg-gradient-to-r from-orange-600/30 to-orange-700/30 border border-orange-500/50"
                  : "bg-white/10 border border-white/20"
              }`}
            >
              <div className="flex items-center gap-4">
                <div className="flex flex-col items-center">
                  <span className="text-2xl">{entry.badge}</span>
                  <span className="text-xs text-gray-300">#{entry.rank}</span>
                </div>
                <div>
                  <p className="font-medium text-white">{entry.name}</p>
                  <p className="text-sm text-gray-300">{entry.referrals} referrals</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-white">
                  {entry.referrals * 10}
                </div>
                <div className="text-xs text-gray-300">points</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-white/10 border border-white/30 rounded-lg">
          <p className="text-sm text-center text-gray-200">
            <span className="font-medium text-white">Join the leaderboard!</span>
            <br />
            Share your referral link and earn 10 points per friend who joins
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
