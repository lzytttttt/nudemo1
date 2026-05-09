import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Users, Zap, Search, SlidersHorizontal, Check } from 'lucide-react';

export default function VenueReservation() {
  const [activeTab, setActiveTab] = useState<'quick' | 'regular'>('quick');

  return (
    <div className="space-y-6">
      {/* Header Tabs */}
      <div className="flex items-center justify-between">
        <div className="bg-white/60 p-1 rounded-xl flex inline-flex border border-slate-200/50 backdrop-blur-md">
          <button 
            onClick={() => setActiveTab('quick')}
            className={`px-6 py-2 rounded-lg text-sm font-semibold transition-all ${
              activeTab === 'quick' ? 'bg-white shadow-sm text-blue-600' : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            快速智能推荐
          </button>
          <button 
            onClick={() => setActiveTab('regular')}
            className={`px-6 py-2 rounded-lg text-sm font-semibold transition-all ${
              activeTab === 'regular' ? 'bg-white shadow-sm text-blue-600' : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            常规周历视图
          </button>
        </div>

        <div className="flex gap-3">
          <button className="glass-card px-4 py-2 flex items-center gap-2 text-sm font-medium text-slate-700 hover:bg-white">
            <SlidersHorizontal size={16} />
            高级筛选
          </button>
          <button className="bg-gradient-to-r from-blue-500 to-teal-400 text-white px-5 py-2 rounded-xl text-sm font-semibold shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5">
            我的预约
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Form Area */}
        <div className="glass-card p-6">
          <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
            <Zap className="text-yellow-500" size={20} />
            极简预约向导
          </h3>
          
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">实训类型</label>
              <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors appearance-none">
                <option>微格教学试讲</option>
                <option>三笔字练习</option>
                <option>口语表达训练</option>
                <option>班主任工作情景模拟</option>
              </select>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">日期</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                  <input type="text" value="2026-05-10" readOnly className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-sm outline-none" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">时间</label>
                <div className="relative">
                  <Clock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                  <select className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-sm appearance-none outline-none">
                    <option>10:00 - 11:30</option>
                    <option>14:00 - 15:30</option>
                  </select>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">使用人数</label>
              <div className="relative">
                <Users className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                <input type="number" defaultValue={4} className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-sm outline-none" />
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <label className="flex items-center gap-3 cursor-pointer">
                <div className="w-5 h-5 rounded border border-blue-500 bg-blue-500 flex items-center justify-center text-white">
                  <Check size={14} />
                </div>
                <span className="text-sm font-medium text-slate-700">开启AI教学辅助诊断</span>
              </label>
              <p className="text-xs text-slate-400 mt-1 ml-8">将自动记录实训过程并生成多维度AI评分报告</p>
            </div>

            <button className="w-full bg-blue-600 text-white rounded-xl py-3 font-semibold shadow-md hover:bg-blue-700 transition-colors mt-6">
              智能匹配场室
            </button>
          </div>
        </div>

        {/* Right Content Area */}
        <div className="lg:col-span-2 space-y-4">
          <h3 className="text-lg font-bold text-slate-800 flex items-center justify-between">
            <span>系统推荐 (3)</span>
            <span className="text-sm font-normal text-slate-500">已自动进行冲突检测</span>
          </h3>

          <RoomCard 
            name="微格教室 A101" 
            type="标准化微格实训室"
            capacity="1-6人"
            features={['4K全景录播', 'AI行为分析', '智能黑板']}
            status="idle"
            score={98}
            recommended
          />
          
          <RoomCard 
            name="微格教室 A205" 
            type="互动微格实训室"
            capacity="1-8人"
            features={['高清录播', '双屏显示']}
            status="idle"
            score={85}
          />

          <RoomCard 
            name="微格教室 B102" 
            type="标准化微格实训室"
            capacity="1-6人"
            features={['4K全景录播', 'AI行为分析']}
            status="maintenance"
            score={0}
          />
        </div>
      </div>
    </div>
  );
}

function RoomCard({ name, type, capacity, features, status, score, recommended }: any) {
  return (
    <div className={`glass-card p-5 relative overflow-hidden border-2 transition-all cursor-pointer ${recommended ? 'border-teal-300 shadow-md' : 'border-transparent hover:border-blue-200'}`}>
      {recommended && (
        <div className="absolute top-0 right-0 bg-teal-500 text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg z-10">
          最佳匹配
        </div>
      )}
      
      <div className="flex justify-between items-start">
        <div className="flex gap-4">
          <div className="w-16 h-16 bg-slate-100 rounded-xl flex items-center justify-center text-slate-400 overflow-hidden relative">
            {/* Mock Image Placeholder */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-indigo-50"></div>
            <MapPin size={24} className="relative z-10 text-blue-400" />
          </div>
          
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h4 className="font-bold text-slate-800 text-lg">{name}</h4>
              {status === 'idle' ? (
                <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-md">空闲</span>
              ) : status === 'maintenance' ? (
                <span className="px-2 py-0.5 bg-orange-100 text-orange-700 text-xs rounded-md">维护中</span>
              ) : null}
            </div>
            <p className="text-sm text-slate-500 mb-2">{type} · 容量: {capacity}</p>
            <div className="flex gap-2">
              {features.map((f: string, i: number) => (
                <span key={i} className="px-2 py-1 bg-slate-50 text-slate-600 text-xs rounded-md border border-slate-100">
                  {f}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="text-right flex flex-col justify-between h-16">
          {score > 0 && <div className="text-xs font-bold text-teal-600 bg-teal-50 px-2 py-1 rounded-lg inline-block self-end">匹配度 {score}%</div>}
          <button 
            disabled={status !== 'idle'}
            className={`px-6 py-2 rounded-xl text-sm font-semibold transition-all mt-auto ${
              status === 'idle' 
                ? 'bg-slate-800 text-white hover:bg-slate-700' 
                : 'bg-slate-100 text-slate-400 cursor-not-allowed'
            }`}
          >
            {status === 'idle' ? '立即预约' : '不可预约'}
          </button>
        </div>
      </div>
    </div>
  );
}
