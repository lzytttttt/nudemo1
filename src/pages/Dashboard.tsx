import React from 'react';
import { Users, Monitor, Brain, Activity, Clock, CheckCircle } from 'lucide-react';
import type { Role } from '../App';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer,
  BarChart, Bar, Legend
} from 'recharts';

const TREND_DATA = [
  { name: '9月', score: 65 },
  { name: '10月', score: 72 },
  { name: '11月', score: 78 },
  { name: '12月', score: 85 },
  { name: '1月', score: 89 },
  { name: '2月', score: 92 },
];

const BAR_DATA = [
  { name: '教育学院', rate: 95 },
  { name: '文学院', rate: 88 },
  { name: '理学院', rate: 92 },
  { name: '外国语学院', rate: 85 },
  { name: '艺术学院', rate: 90 },
];

interface DashboardProps {
  role: Role;
}

export default function Dashboard({ role }: DashboardProps) {
  return (
    <div className="space-y-6">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <KPICard title="今日预约数" value="342" subtitle="较昨日 +12%" icon={Clock} color="blue" />
        <KPICard title="当前实训人数" value="1,208" subtitle="实时在线" icon={Users} color="teal" />
        <KPICard title="AI分析报告数" value="8,902" subtitle="本周生成 450 份" icon={Brain} color="purple" />
        <KPICard title="能力达标率" value="92.4%" subtitle="全校平均" icon={CheckCircle} color="green" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Chart Area */}
        <div className="lg:col-span-2 glass-card p-6 flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold text-slate-800">师范生能力发展趋势</h3>
            <select className="bg-slate-50 border border-slate-200 rounded-lg px-3 py-1 text-sm text-slate-600 outline-none">
              <option>2025-2026学年</option>
              <option>2024-2025学年</option>
            </select>
          </div>
          <div className="flex-1 min-h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={TREND_DATA} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8'}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8'}} />
                <RechartsTooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}
                />
                <Area type="monotone" dataKey="score" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorScore)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Side Panel */}
        <div className="glass-card p-6 flex flex-col">
          <h3 className="text-lg font-bold text-slate-800 mb-6">各学院能力达标率</h3>
          <div className="flex-1 min-h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={BAR_DATA} layout="vertical" margin={{ top: 0, right: 0, left: 30, bottom: 0 }}>
                <XAxis type="number" hide />
                <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 13}} width={80} />
                <RechartsTooltip cursor={{fill: '#f1f5f9'}} />
                <Bar dataKey="rate" fill="#48C9B0" radius={[0, 4, 4, 0]} barSize={24} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Heatmap / Usage Area */}
        <div className="glass-card p-6">
          <h3 className="text-lg font-bold text-slate-800 mb-4">实训室使用率排行</h3>
          <div className="space-y-4 mt-6">
            <UsageBar name="微格教室 (A区)" usage={95} />
            <UsageBar name="口语训练室 (C区)" usage={82} />
            <UsageBar name="微课制作室 (D区)" usage={78} />
            <UsageBar name="三笔字实训室 (B区)" usage={65} />
            <UsageBar name="班主任情景实训室 (E区)" usage={45} />
            <UsageBar name="板书长廊实训室 (F区)" usage={30} />
          </div>
        </div>

        {/* Device Status & Timeline */}
        <div className="glass-card p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold text-slate-800">设备健康与运行状态</h3>
            <span className="text-sm text-blue-600 font-medium cursor-pointer hover:underline">查看全部</span>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span className="text-sm font-medium text-slate-600">在线设备</span>
              </div>
              <span className="text-lg font-bold text-slate-800">1,245</span>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-red-500"></div>
                <span className="text-sm font-medium text-slate-600">异常/离线</span>
              </div>
              <span className="text-lg font-bold text-slate-800">12</span>
            </div>
          </div>

          <h4 className="text-sm font-bold text-slate-700 mb-4">今日实训动态</h4>
          <div className="space-y-4 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
            <TimelineItem time="10:30" content="2025级师范1班完成了《微格试讲》作业" status="success" />
            <TimelineItem time="09:45" content="微课制作室 D204 报修：录音麦克风无声" status="warning" />
            <TimelineItem time="08:00" content="今日共有 45 个场室开放预约，1200 名学生参与实训" status="info" />
          </div>
        </div>
      </div>
    </div>
  );
}

function KPICard({ title, value, subtitle, icon: Icon, color }: any) {
  const colorMap: Record<string, string> = {
    blue: 'bg-blue-50 text-blue-600',
    teal: 'bg-teal-50 text-teal-600',
    purple: 'bg-purple-50 text-purple-600',
    green: 'bg-green-50 text-green-600',
  };

  return (
    <div className="glass-card p-6 flex items-center gap-4">
      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${colorMap[color]}`}>
        <Icon size={28} />
      </div>
      <div>
        <p className="text-sm font-medium text-slate-500 mb-1">{title}</p>
        <h4 className="text-2xl font-bold text-slate-800">{value}</h4>
        <p className="text-xs text-slate-400 mt-1">{subtitle}</p>
      </div>
    </div>
  );
}

function UsageBar({ name, usage }: { name: string, usage: number }) {
  return (
    <div>
      <div className="flex justify-between text-sm mb-1.5">
        <span className="text-slate-600 font-medium">{name}</span>
        <span className="text-slate-800 font-bold">{usage}%</span>
      </div>
      <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-blue-400 to-teal-400 rounded-full" 
          style={{ width: `${usage}%` }}
        />
      </div>
    </div>
  );
}

function TimelineItem({ time, content, status }: any) {
  const statusColor = {
    success: 'bg-green-500 border-green-100',
    warning: 'bg-orange-500 border-orange-100',
    info: 'bg-blue-500 border-blue-100'
  }[status as string];

  return (
    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
      <div className="flex items-center justify-center w-5 h-5 rounded-full border-2 bg-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 relative z-10">
        <div className={`w-2 h-2 rounded-full ${statusColor}`}></div>
      </div>
      <div className="w-[calc(100%-2rem)] md:w-[calc(50%-1.5rem)] bg-white/60 p-3 rounded-xl border border-slate-100 shadow-sm ml-4 md:ml-0">
        <div className="flex items-center justify-between mb-1">
          <time className="text-xs font-medium text-slate-400">{time}</time>
        </div>
        <div className="text-sm text-slate-700">{content}</div>
      </div>
    </div>
  );
}
