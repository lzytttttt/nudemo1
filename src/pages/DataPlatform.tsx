import React from 'react';
import { Database, Network, ArrowRightLeft, ShieldCheck, Cpu, HardDrive } from 'lucide-react';

export default function DataPlatform() {
  return (
    <div className="space-y-6">
      {/* Top metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <MetricCard title="数据接入总量" value="12.5 TB" trend="+2.4GB" color="blue" />
        <MetricCard title="接口运行数" value="142 个" trend="100% 正常" color="teal" />
        <MetricCard title="今日数据增量" value="56,230 条" trend="较昨日持平" color="purple" />
        <MetricCard title="数据质量评分" value="98.5 分" trend="极佳" color="green" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Architecture Flow */}
        <div className="lg:col-span-2 glass-card p-6 flex flex-col justify-center">
          <h3 className="text-lg font-bold text-slate-800 mb-4">全息校园节点分布</h3>
          <div className="flex-1 w-full bg-slate-50/50 rounded-2xl border border-slate-100/50 flex items-center justify-center p-4">
            <svg viewBox="0 0 800 400" className="w-full h-full max-h-[300px] drop-shadow-md">
              <defs>
                <linearGradient id="buildingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#60a5fa" />
                  <stop offset="100%" stopColor="#2dd4bf" />
                </linearGradient>
                <linearGradient id="roadGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#e2e8f0" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#cbd5e1" stopOpacity="0.5" />
                </linearGradient>
              </defs>
              {/* Roads */}
              <path d="M 100 200 L 700 200 M 400 50 L 400 350 M 250 100 L 250 300" stroke="url(#roadGrad)" strokeWidth="40" strokeLinecap="round" />
              <path d="M 100 200 L 700 200 M 400 50 L 400 350 M 250 100 L 250 300" stroke="#f8fafc" strokeWidth="2" strokeDasharray="10,10" fill="none" />
              
              {/* Buildings / Zones */}
              <g transform="translate(150, 100)">
                <rect width="80" height="60" rx="8" fill="url(#buildingGrad)" opacity="0.9" />
                <circle cx="40" cy="30" r="15" fill="#ffffff" opacity="0.4" />
                <text x="40" y="80" textAnchor="middle" fill="#475569" fontSize="12" fontWeight="bold">综合实训楼A</text>
                <circle cx="80" cy="0" r="6" fill="#10b981" />
                <circle cx="80" cy="0" r="6" fill="#10b981" className="animate-ping" />
              </g>

              <g transform="translate(450, 80)">
                <rect width="100" height="70" rx="12" fill="url(#buildingGrad)" opacity="0.9" />
                <rect x="20" y="20" width="60" height="30" rx="4" fill="#ffffff" opacity="0.4" />
                <text x="50" y="90" textAnchor="middle" fill="#475569" fontSize="12" fontWeight="bold">数据中台中心</text>
                <circle cx="100" cy="0" r="6" fill="#10b981" />
                <circle cx="100" cy="0" r="6" fill="#10b981" className="animate-ping" />
              </g>

              <g transform="translate(280, 240)">
                <polygon points="40,0 80,40 40,80 0,40" fill="url(#buildingGrad)" opacity="0.8" />
                <text x="40" y="100" textAnchor="middle" fill="#475569" fontSize="12" fontWeight="bold">微格教室群</text>
                <circle cx="80" cy="40" r="6" fill="#3b82f6" />
                <circle cx="80" cy="40" r="6" fill="#3b82f6" className="animate-ping" />
              </g>

              <g transform="translate(550, 260)">
                <circle cx="40" cy="40" r="40" fill="url(#buildingGrad)" opacity="0.8" />
                <circle cx="40" cy="40" r="20" fill="#ffffff" opacity="0.3" />
                <text x="40" y="100" textAnchor="middle" fill="#475569" fontSize="12" fontWeight="bold">板书长廊实训区</text>
                <circle cx="70" cy="10" r="6" fill="#f59e0b" />
                <circle cx="70" cy="10" r="6" fill="#f59e0b" className="animate-ping" />
              </g>

              {/* Connections/Data flow */}
              <path d="M 230 130 Q 340 100 450 115" fill="none" stroke="#3b82f6" strokeWidth="2" strokeDasharray="5,5">
                <animate attributeName="stroke-dashoffset" from="100" to="0" dur="2s" repeatCount="indefinite" />
              </path>
              <path d="M 360 280 Q 450 250 550 300" fill="none" stroke="#2dd4bf" strokeWidth="2" strokeDasharray="5,5">
                <animate attributeName="stroke-dashoffset" from="100" to="0" dur="2s" repeatCount="indefinite" />
              </path>
              <path d="M 500 150 Q 480 200 320 240" fill="none" stroke="#8b5cf6" strokeWidth="2" strokeDasharray="5,5">
                <animate attributeName="stroke-dashoffset" from="0" to="100" dur="2s" repeatCount="indefinite" />
              </path>
            </svg>
          </div>
        </div>

        {/* AI Algorithms */}
        <div className="glass-card p-6">
          <h3 className="text-lg font-bold text-slate-800 mb-6">AI算法引擎</h3>
          <div className="space-y-3">
            <AlgorithmCard name="多模态语音测评" status="运行中" reqs="12.5k 次/天" />
            <AlgorithmCard name="板书自动识别与评价" status="运行中" reqs="8.2k 次/天" />
            <AlgorithmCard name="教学行为动态分析" status="运行中" reqs="4.1k 次/天" />
            <AlgorithmCard name="PPT讲解节奏分析" status="运行中" reqs="5.6k 次/天" />
            <AlgorithmCard name="综合能力诊断模型" status="运行中" reqs="1.2k 次/天" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* System Integrations */}
        <div className="glass-card p-6">
          <h3 className="text-lg font-bold text-slate-800 mb-4">接入系统状态</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="text-sm text-slate-500 border-b border-slate-100">
                  <th className="pb-3 font-medium">系统名称</th>
                  <th className="pb-3 font-medium">接入状态</th>
                  <th className="pb-3 font-medium">同步频率</th>
                  <th className="pb-3 font-medium">最近同步时间</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <SystemRow name="微格教学系统" status="normal" freq="实时" time="10分钟前" />
                <SystemRow name="三笔字智能评测" status="normal" freq="按需" time="半小时前" />
                <SystemRow name="口语表达训练平台" status="normal" freq="实时" time="2分钟前" />
                <SystemRow name="板书长廊实训平台" status="normal" freq="每日" time="02:00:00" />
                <SystemRow name="班主任情景实训系统" status="normal" freq="实时" time="5分钟前" />
                <SystemRow name="微课制作云平台" status="warning" freq="每小时" time="1小时前" />
              </tbody>
            </table>
          </div>
        </div>

        {/* Data Standards */}
        <div className="glass-card p-6">
          <h3 className="text-lg font-bold text-slate-800 mb-4">数据标准管理</h3>
          <div className="grid grid-cols-2 gap-4">
            <StandardCard name="学生全息数据" count="128 项元数据" />
            <StandardCard name="教师画像数据" count="86 项元数据" />
            <StandardCard name="场室物联数据" count="240 项元数据" />
            <StandardCard name="设备运行数据" count="312 项元数据" />
            <StandardCard name="能力评价模型数据" count="56 项元数据" />
            <StandardCard name="教务排课协同数据" count="45 项元数据" />
          </div>
        </div>
      </div>
    </div>
  );
}

function MetricCard({ title, value, trend, color }: any) {
  return (
    <div className="glass-card p-5">
      <h4 className="text-sm text-slate-500 mb-2">{title}</h4>
      <div className="flex items-end gap-2">
        <span className="text-2xl font-bold text-slate-800">{value}</span>
        <span className="text-xs text-blue-500 mb-1">{trend}</span>
      </div>
    </div>
  );
}

function FlowStep({ icon: Icon, title, subtitle, active }: any) {
  return (
    <div className="flex flex-col items-center gap-2 group cursor-pointer">
      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all ${
        active 
          ? 'bg-gradient-to-br from-blue-500 to-teal-400 text-white shadow-lg scale-110' 
          : 'bg-white text-slate-400 shadow-sm border border-slate-100 group-hover:border-blue-300'
      }`}>
        <Icon size={24} />
      </div>
      <div className="text-center">
        <span className="block text-[10px] font-bold text-blue-500 mb-0.5">{subtitle}</span>
        <span className={`text-xs font-medium ${active ? 'text-slate-800' : 'text-slate-500'}`}>{title}</span>
      </div>
    </div>
  );
}

function FlowArrow() {
  return <ArrowRightLeft size={20} className="text-slate-300 hidden md:block" />;
}

function AlgorithmCard({ name, status, reqs }: any) {
  return (
    <div className="flex items-center justify-between p-3 bg-white/60 rounded-xl border border-slate-100 hover:border-teal-200 transition-colors">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-500">
          <Cpu size={16} />
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-700">{name}</p>
          <p className="text-xs text-slate-400">调用量: {reqs}</p>
        </div>
      </div>
      <span className="px-2.5 py-1 bg-green-100 text-green-700 text-xs rounded-full border border-green-200">
        {status}
      </span>
    </div>
  );
}

function SystemRow({ name, status, freq, time }: any) {
  return (
    <tr className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
      <td className="py-3 font-medium text-slate-700">{name}</td>
      <td className="py-3">
        {status === 'normal' ? (
          <span className="inline-flex items-center gap-1 text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> 正常
          </span>
        ) : (
          <span className="inline-flex items-center gap-1 text-xs text-orange-600 bg-orange-50 px-2 py-1 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span> 延迟
          </span>
        )}
      </td>
      <td className="py-3 text-slate-500">{freq}</td>
      <td className="py-3 text-slate-500">{time}</td>
    </tr>
  );
}

function StandardCard({ name, count }: any) {
  return (
    <div className="p-3 bg-slate-50/80 rounded-xl border border-slate-100 border-dashed hover:border-solid hover:border-blue-200 transition-all cursor-pointer">
      <h4 className="text-sm font-semibold text-slate-700">{name}</h4>
      <p className="text-xs text-slate-400 mt-1">{count}</p>
    </div>
  );
}
