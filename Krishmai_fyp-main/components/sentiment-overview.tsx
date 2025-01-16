"use client"

import { Card } from "@/components/ui/card"
import { Line } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js"
import { Doughnut } from "react-chartjs-2"
import { Mail, MessageSquare, ThumbsUp } from 'lucide-react'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
)

const lineChartData = {
  labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  datasets: [
    {
      label: "Positive",
      data: [52, 51, 50, 48, 47, 50, 51],
      borderColor: "rgb(34, 197, 94)",
      tension: 0.4,
    },
    {
      label: "Neutral",
      data: [25, 28, 32, 35, 45, 35, 35],
      borderColor: "rgb(234, 179, 8)",
      tension: 0.4,
    },
    {
      label: "Negative",
      data: [23, 21, 28, 22, 25, 23, 24],
      borderColor: "rgb(239, 68, 68)",
      tension: 0.4,
    },
  ],
}

const doughnutData = {
  labels: ["Positive", "Neutral", "Negative"],
  datasets: [
    {
      data: [65, 20, 15],
      backgroundColor: ["rgb(34, 197, 94)", "rgb(234, 179, 8)", "rgb(239, 68, 68)"],
    },
  ],
}

const feedbackThemes = [
  { name: "Customer Service", sentiment: "Positive", value: 75 },
  { name: "Product Quality", sentiment: "Neutral", value: 45 },
  { name: "Delivery Time", sentiment: "Negative", value: 25 },
]

const wordFrequency = [
  { word: "Positive", count: 100 },
  { word: "Trust", count: 83 },
  { word: "Anticipation", count: 56 },
  { word: "Joy", count: 54 },
  { word: "Negative", count: 49 },
  { word: "Sadness", count: 40 },
  { word: "Anger", count: 34 },
  { word: "Fear", count: 24 },
  { word: "Surprise", count: 16 },
]

export default function SentimentOverview() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold">Sentiment Analysis</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        <Card className="p-4">
          <div className="text-sm text-muted-foreground">Total Feedback</div>
          <div className="text-2xl font-bold mt-2">1000</div>
        </Card>
        <Card className="p-4 border-l-4 border-l-green-500">
          <div className="flex justify-between items-center">
            <div className="text-sm text-muted-foreground">Positive</div>
            <div className="text-green-500 font-bold">60%</div>
          </div>
          <div className="text-2xl font-bold mt-2">400</div>
          <div className="flex items-center gap-2 mt-2">
            <Mail className="text-red-500" />
          </div>
        </Card>
        <Card className="p-4 border-l-4 border-l-yellow-500">
          <div className="flex justify-between items-center">
            <div className="text-sm text-muted-foreground">Neutral</div>
            <div className="text-yellow-500 font-bold">30%</div>
          </div>
          <div className="text-2xl font-bold mt-2">300</div>
          <div className="flex items-center gap-2 mt-2">
            <MessageSquare className="text-purple-500" />
          </div>
        </Card>
        <Card className="p-4 border-l-4 border-l-red-500">
          <div className="flex justify-between items-center">
            <div className="text-sm text-muted-foreground">Negative</div>
            <div className="text-red-500 font-bold">30%</div>
          </div>
          <div className="text-2xl font-bold mt-2">300</div>
          <div className="flex items-center gap-2 mt-2">
            <ThumbsUp className="text-blue-500" />
          </div>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="p-4">
          <h3 className="font-semibold mb-4">Sentiment Trend Overview</h3>
          <Line data={lineChartData} options={{ responsive: true }} />
        </Card>
        <Card className="p-4">
          <h3 className="font-semibold mb-4">Sentiment Distribution by Channel</h3>
          <div className="grid grid-cols-3 gap-4">
            {["Email", "Chat", "Social Media"].map((channel) => (
              <div key={channel} className="text-center">
                <div className="mb-2 text-sm font-medium">{channel}</div>
                <Doughnut data={doughnutData} options={{ responsive: true }} />
              </div>
            ))}
          </div>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="p-4">
          <h3 className="font-semibold mb-4">Top 3 Feedback Themes/Topics</h3>
          <div className="space-y-4">
            {feedbackThemes.map((theme) => (
              <div key={theme.name}>
                <div className="flex justify-between text-sm mb-1">
                  <span>{theme.name}</span>
                  <span>Sentiment: {theme.sentiment}</span>
                </div>
                <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${
                      theme.sentiment === "Positive"
                        ? "bg-green-500"
                        : theme.sentiment === "Neutral"
                        ? "bg-yellow-500"
                        : "bg-red-500"
                    }`}
                    style={{ width: `${theme.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>
        <Card className="p-4">
          <h3 className="font-semibold mb-4">Word Frequency by Sentiment</h3>
          <div className="space-y-2">
            {wordFrequency.map((item) => (
              <div key={item.word} className="flex items-center gap-2">
                <div className="w-24 text-sm">{item.word}</div>
                <div className="flex-1 h-4 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gray-600"
                    style={{ width: `${(item.count / 100) * 100}%` }}
                  />
                </div>
                <div className="w-8 text-sm text-right">{item.count}</div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}

