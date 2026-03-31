'use client'
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const data = [
  { name: 'National Memorial Services', value: 15.5 },
  { name: 'Sunset Gardens Funeral Home', value: 5.3 },
  { name: 'Valley View Funeral & Cremation', value: 4.3 },
  { name: 'Heritage Cremation Services', value: 2.2 },
  { name: 'Oakwood Memorial Chapels', value: 2.2 },
  { name: 'Greenfield Funeral Services', value: 2.0 },
  { name: 'Riverside Memorial Chapel', value: 1.9 },
  { name: 'Other Competitors', value: 66.6 },
]

const COLORS = [
  '#1e40af', '#2563eb', '#3b82f6', '#60a5fa',
  '#93c5fd', '#bfdbfe', '#dbeafe', '#e2e8f0',
]

const RADIAN = Math.PI / 180
const renderCustomLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: any) => {
  if (percent < 0.03) return null
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5
  const x = cx + radius * Math.cos(-midAngle * RADIAN)
  const y = cy + radius * Math.sin(-midAngle * RADIAN)
  return (
    <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central" fontSize={11} fontWeight="600">
      {`${(percent * 100).toFixed(1)}%`}
    </text>
  )
}

export default function MTAMDonut() {
  return (
    <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-8 max-w-xl mx-auto">
      <div className="text-center mb-6">
        <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Minneapolis-St. Paul MSA · Funeral Services</p>
      </div>

      <div className="relative">
        <ResponsiveContainer width="100%" height={320}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={80}
              outerRadius={140}
              dataKey="value"
              labelLine={false}
              label={renderCustomLabel}
            >
              {data.map((_, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip
              formatter={(value: number) => [`${value.toFixed(1)}%`, 'Market Share']}
              contentStyle={{ fontSize: 12, borderRadius: 8 }}
            />
          </PieChart>
        </ResponsiveContainer>
        {/* Center label inside donut hole */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-center">
            <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">mTAM</p>
            <p className="text-2xl font-bold text-gray-900">$150M</p>
          </div>
        </div>
      </div>

      <div className="mt-4 space-y-1.5">
        {data.slice(0, 7).map((item, i) => (
          <div key={i} className="flex items-center gap-2 text-sm">
            <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: COLORS[i] }} />
            <span className="text-gray-700 flex-1">{item.name}</span>
            <span className="text-gray-500 font-medium">{item.value}%</span>
          </div>
        ))}
        <div className="flex items-center gap-2 text-sm">
          <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: COLORS[7] }} />
          <span className="text-gray-700 flex-1">Other Competitors</span>
          <span className="text-gray-500 font-medium">66.6%</span>
        </div>
      </div>
    </div>
  )
}
