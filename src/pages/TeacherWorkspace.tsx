import React from 'react';
import { Target, Users, AlertCircle, Send, CheckCircle2, FileVideo, Edit3 } from 'lucide-react';

export default function TeacherWorkspace() {
  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="glass-card p-6 flex items-center justify-between bg-gradient-to-r from-blue-50 to-transparent">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-blue-100 border-4 border-white shadow-sm flex items-center justify-center overflow-hidden">
            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200" alt="Teacher" className="w-full h-full object-cover" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-800">早安，张老师！</h2>
            <p className="text-sm text-slate-500 mt-1">您本学期主要负责《教育学基础》与《微格教学实训》课程</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="text-center px-4 border-r border-slate-200">
            <p className="text-2xl font-bold text-blue-600">12</p>
            <p className="text-xs text-slate-500 font-medium mt-1">待批阅作业</p>
          </div>
          <div className="text-center px-4">
            <p className="text-2xl font-bold text-orange-500">5</p>
            <p className="text-xs text-slate-500 font-medium mt-1">预警学生数</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Class Insight */}
        <div className="glass-card p-6">
          <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
            <Target className="text-blue-500" size={20} />
            班级能力洞察
          </h3>
          <div className="bg-blue-50/50 rounded-xl p-4 border border-blue-100 mb-6">
            <p className="text-sm text-slate-700 leading-relaxed">
              <span className="font-bold text-blue-700">AI共性短板识别：</span>
              2025级师范1班在<span className="font-semibold text-orange-600">课堂互动设计</span>方面普遍偏弱，优秀率仅15%。建议发布专项训练任务。
            </p>
          </div>

          <h4 className="text-sm font-bold text-slate-700 mb-3 flex items-center gap-2">
            <AlertCircle className="text-orange-500" size={16} />
            后20%预警名单
          </h4>
          <div className="space-y-3">
            <StudentAlert name="李华" issue="连续两次微格试讲互动得分低于60" />
            <StudentAlert name="王小明" issue="粉笔字连笔严重，结构松散" />
            <StudentAlert name="赵雪" issue="教态紧张，目光逃避" />
          </div>
        </div>

        {/* Action Center - Target Intervention */}
        <div className="glass-card p-6 lg:col-span-2">
          <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
            <Send className="text-teal-500" size={20} />
            定向干预派单 (靶向驱动)
          </h3>
          
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">干预对象</label>
              <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500/20 outline-none">
                <option>预警名单批量派单 (3人)</option>
                <option>选择特定学生...</option>
                <option>全班派发</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">实训类型</label>
              <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500/20 outline-none">
                <option>课堂互动强化训练 (微格)</option>
                <option>粉笔字专项突破 (三笔字)</option>
                <option>语言表达能力训练 (口语)</option>
              </select>
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-slate-700 mb-2">达标要求与指导语</label>
            <textarea 
              className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm focus:ring-2 focus:ring-blue-500/20 outline-none resize-none h-24"
              defaultValue="请在下次微格试讲中，设计至少2个开放式问题，并邀请同学互动。系统将自动检测您的互动环节时长与频次。"
            ></textarea>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-slate-100">
            <div className="flex items-center gap-4">
              <label className="flex items-center gap-2 text-sm text-slate-600">
                <input type="checkbox" className="rounded text-blue-500" defaultChecked />
                要求提交AI分析报告
              </label>
              <label className="flex items-center gap-2 text-sm text-slate-600">
                <input type="date" className="bg-slate-50 border border-slate-200 rounded px-2 py-1 text-xs" defaultValue="2026-05-15" />
                截止日期
              </label>
            </div>
            <button className="bg-gradient-to-r from-teal-500 to-emerald-400 text-white px-8 py-2.5 rounded-xl font-bold shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 flex items-center gap-2">
              <Send size={18} />
              一键下发任务
            </button>
          </div>
        </div>
      </div>

      {/* Quick Grading & Homework */}
      <div className="glass-card p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
            <Edit3 className="text-purple-500" size={20} />
            沉浸式批阅区
          </h3>
          <button className="text-sm text-blue-600 font-medium hover:underline">查看全部作业</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <HomeworkCard 
            title="第一周微格试讲作业" 
            type="视频"
            student="张三" 
            status="待批阅" 
            icon={FileVideo}
          />
          <HomeworkCard 
            title="楷书基本笔画练习" 
            type="图片"
            student="李四" 
            status="待批阅" 
            icon={Edit3}
          />
          <HomeworkCard 
            title="说课教案设计" 
            type="文档"
            student="王五" 
            status="已批阅" 
            icon={CheckCircle2}
            done
          />
        </div>
      </div>
    </div>
  );
}

function StudentAlert({ name, issue }: { name: string, issue: string }) {
  return (
    <div className="flex items-start gap-3 p-3 bg-white/60 border border-orange-100 rounded-xl hover:border-orange-200 transition-colors cursor-pointer group">
      <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-600 shrink-0 text-sm">
        {name[0]}
      </div>
      <div>
        <p className="text-sm font-bold text-slate-700 group-hover:text-blue-600 transition-colors">{name}</p>
        <p className="text-xs text-slate-500 mt-1">{issue}</p>
      </div>
    </div>
  );
}

function HomeworkCard({ title, student, type, status, icon: Icon, done }: any) {
  return (
    <div className="group relative border border-slate-200 rounded-2xl p-5 bg-white/40 hover:bg-white hover:shadow-md hover:border-blue-200 transition-all cursor-pointer">
      <div className="flex justify-between items-start mb-4">
        <div className={`p-2 rounded-lg ${done ? 'bg-green-50 text-green-600' : 'bg-blue-50 text-blue-600'}`}>
          <Icon size={20} />
        </div>
        <span className={`text-xs font-bold px-2 py-1 rounded-full ${done ? 'bg-slate-100 text-slate-500' : 'bg-orange-100 text-orange-600'}`}>
          {status}
        </span>
      </div>
      <h4 className="font-bold text-slate-800 text-sm mb-1">{title}</h4>
      <p className="text-xs text-slate-500 flex items-center gap-2">
        <Users size={12} /> {student} · {type}
      </p>
      {!done && (
        <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity flex justify-center">
          <button className="bg-slate-800 text-white text-xs font-bold py-2 px-4 rounded-full shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-all">
            快速批阅 (带AI高亮)
          </button>
        </div>
      )}
    </div>
  );
}
