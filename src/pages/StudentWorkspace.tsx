import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { Trophy, Target, History, CalendarCheck, BookOpen, AlertCircle, ArrowRight } from 'lucide-react';

const STUDENT_RADAR_DATA = [
  { subject: '教学设计', student: 85, average: 75, fullMark: 100 },
  { subject: '板书书写', student: 60, average: 80, fullMark: 100 },
  { subject: '语言表达', student: 90, average: 82, fullMark: 100 },
  { subject: '教学仪态', student: 88, average: 85, fullMark: 100 },
  { subject: '课堂互动', student: 75, average: 78, fullMark: 100 },
  { subject: '信息技术应用', student: 92, average: 80, fullMark: 100 },
];

export default function StudentWorkspace() {
  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="glass-card p-6 flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-teal-50 to-transparent">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-teal-100 border-4 border-white shadow-sm flex items-center justify-center overflow-hidden">
            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200" alt="Student" className="w-full h-full object-cover" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-800">你好，李同学！</h2>
            <p className="text-sm text-slate-500 mt-1">2025级师范1班 | 汉语言文学专业</p>
          </div>
        </div>
        <div className="mt-4 md:mt-0 flex gap-6">
          <div className="text-center px-4 border-r border-slate-200">
            <div className="flex items-center justify-center gap-1">
              <Trophy size={18} className="text-yellow-500" />
              <p className="text-2xl font-bold text-slate-800">85<span className="text-sm font-normal text-slate-500">分</span></p>
            </div>
            <p className="text-xs text-slate-500 font-medium mt-1">综合能力分</p>
          </div>
          <div className="text-center px-4">
            <p className="text-2xl font-bold text-teal-600">Top 15%</p>
            <p className="text-xs text-slate-500 font-medium mt-1">专业排名</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Radar Chart */}
        <div className="glass-card p-6 flex flex-col items-center relative overflow-hidden">
          {/* Decorative background */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full blur-2xl -mr-10 -mt-10"></div>
          
          <h3 className="text-lg font-bold text-slate-800 mb-2 w-full text-left flex items-center gap-2">
            <Target className="text-teal-500" size={20} />
            能力雷达画像
          </h3>
          
          {/* Legend */}
          <div className="flex gap-4 mb-2 text-xs font-medium w-full px-4 justify-end z-10">
            <div className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-sm bg-teal-500/80"></span>我的水平</div>
            <div className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-sm border-2 border-slate-300 border-dashed"></span>专业平均</div>
          </div>

          <div className="h-64 w-full z-10">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="70%" data={STUDENT_RADAR_DATA}>
                <PolarGrid stroke="#e2e8f0" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#475569', fontSize: 12, fontWeight: 500 }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                {/* Average baseline */}
                <Radar name="专业平均" dataKey="average" stroke="#94a3b8" strokeWidth={2} strokeDasharray="3 3" fill="none" />
                {/* Student score */}
                <Radar name="我的得分" dataKey="student" stroke="#14b8a6" strokeWidth={2} fill="#14b8a6" fillOpacity={0.3} />
              </RadarChart>
            </ResponsiveContainer>
          </div>

          <div className="w-full mt-4 bg-orange-50/80 p-3 rounded-xl border border-orange-100 flex items-start gap-3 z-10">
            <AlertCircle size={18} className="text-orange-500 shrink-0 mt-0.5" />
            <div>
              <p className="text-xs text-orange-800 font-medium">画像指引：</p>
              <p className="text-xs text-orange-700 leading-relaxed mt-1">
                您的<span className="font-bold">板书书写</span>(60分)明显低于专业平均水平(80分)。建议您尽快前往【三笔字实训室】完成强化训练任务。
              </p>
            </div>
          </div>
        </div>

        {/* Task Pool */}
        <div className="lg:col-span-2 space-y-6">
          <div className="glass-card p-6">
            <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center justify-between">
              <span className="flex items-center gap-2"><BookOpen className="text-blue-500" size={20} /> 常规课程任务</span>
              <span className="text-sm font-normal text-slate-500">2个待完成</span>
            </h3>
            <div className="space-y-4">
              <TaskCard 
                title="《教育学基础》期中微格试讲" 
                deadline="明天 23:59"
                status="pending"
                type="video"
              />
              <TaskCard 
                title="钢笔字《滕王阁序》抄写" 
                deadline="周五 18:00"
                status="pending"
                type="image"
              />
            </div>
          </div>

          <div className="glass-card p-6 border-l-4 border-orange-400">
            <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center justify-between">
              <span className="flex items-center gap-2"><Target className="text-orange-500" size={20} /> 定向强化任务 (教师派单)</span>
              <span className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded-full font-bold">1个新任务</span>
            </h3>
            <div className="space-y-4">
              <div className="bg-white border border-orange-200 rounded-xl p-4 shadow-sm relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-16 h-16 bg-orange-50 rounded-bl-full -z-10 transition-transform group-hover:scale-150"></div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <span className="text-xs font-bold text-orange-600 bg-orange-50 px-2 py-0.5 rounded mr-2">张老师 派发</span>
                    <h4 className="font-bold text-slate-800 text-base inline">粉笔字专项突破</h4>
                  </div>
                  <span className="text-xs text-slate-500">截止: 05-15</span>
                </div>
                <p className="text-sm text-slate-600 mb-4 bg-slate-50 p-2 rounded-lg border border-slate-100">
                  "请在下次微格试讲前，前往B区实训室完成5张粉笔字板书练习。注意字形结构。"
                </p>
                <div className="flex gap-3">
                  <button className="flex-1 bg-slate-800 text-white text-sm font-semibold py-2 rounded-lg hover:bg-slate-700 transition-colors">
                    去预约实训室
                  </button>
                  <button className="flex-1 bg-white border border-slate-300 text-slate-700 text-sm font-semibold py-2 rounded-lg hover:bg-slate-50 transition-colors">
                    去提交作业
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Timeline */}
        <div className="glass-card p-6">
          <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
            <CalendarCheck className="text-indigo-500" size={20} />
            个人实训安排
          </h3>
          <div className="space-y-4 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-slate-200">
            <TimelineItem day="今天" time="14:00-15:30" content="微格教室A101 - 试讲录制" active />
            <TimelineItem day="明天" time="10:00-11:30" content="三笔字实训室B203 - 粉笔字练习" />
            <TimelineItem day="周四" time="16:00-17:00" content="口语训练室C105 - 朗读训练" />
          </div>
        </div>

        {/* Portfolio */}
        <div className="glass-card p-6 flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
              <History className="text-purple-500" size={20} />
              电子成长档案
            </h3>
            <button className="text-sm text-blue-600 font-medium hover:underline flex items-center gap-1">
              查看全部 <ArrowRight size={14} />
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4 flex-1">
            <PortfolioCard title="《静夜思》试讲" date="2026-05-10" tag="优秀试讲" />
            <PortfolioCard title="AI诊断报告" date="2026-05-10" tag="能力提升" />
            <PortfolioCard title="粉笔字期中考" date="2026-04-25" tag="作品留档" />
            <PortfolioCard title="教师学期评语" date="2026-01-15" tag="评价反馈" />
          </div>
        </div>
      </div>
    </div>
  );
}

function TaskCard({ title, deadline, status, type }: any) {
  return (
    <div className="flex items-center justify-between p-4 bg-white/60 border border-slate-100 rounded-xl hover:border-blue-200 transition-colors group">
      <div>
        <h4 className="font-bold text-slate-800 text-sm mb-1 group-hover:text-blue-600 transition-colors">{title}</h4>
        <p className="text-xs text-slate-500">截止时间：{deadline} · 形式：{type === 'video' ? '视频上传' : '图片上传'}</p>
      </div>
      <button className="bg-blue-50 text-blue-600 text-xs font-bold px-4 py-2 rounded-lg hover:bg-blue-100 transition-colors">
        去完成
      </button>
    </div>
  );
}

function TimelineItem({ day, time, content, active }: any) {
  return (
    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
      <div className={`flex items-center justify-center w-5 h-5 rounded-full border-2 bg-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 relative z-10 ${active ? 'border-teal-500' : 'border-slate-300'}`}>
        {active && <div className="w-2 h-2 rounded-full bg-teal-500"></div>}
      </div>
      <div className={`w-[calc(100%-2rem)] md:w-[calc(50%-1.5rem)] p-3 rounded-xl border shadow-sm ml-4 md:ml-0 transition-colors ${active ? 'bg-teal-50/50 border-teal-100' : 'bg-white/60 border-slate-100'}`}>
        <div className="flex items-center justify-between mb-1">
          <span className={`text-xs font-bold ${active ? 'text-teal-700' : 'text-slate-600'}`}>{day}</span>
          <time className="text-xs font-medium text-slate-400">{time}</time>
        </div>
        <div className="text-sm text-slate-700">{content}</div>
      </div>
    </div>
  );
}

function PortfolioCard({ title, date, tag }: any) {
  return (
    <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer flex flex-col justify-between">
      <div>
        <span className="text-[10px] font-bold text-slate-500 bg-slate-200/50 px-2 py-1 rounded mb-2 inline-block">{tag}</span>
        <h4 className="font-semibold text-slate-800 text-sm mt-1">{title}</h4>
      </div>
      <p className="text-xs text-slate-400 mt-4 text-right">{date}</p>
    </div>
  );
}
