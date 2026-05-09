import { Play, Volume2, Maximize, MessageSquare, AlertTriangle, CheckCircle, Sparkles } from 'lucide-react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

const RADAR_DATA = [
  { subject: '普通话', A: 92, fullMark: 100 },
  { subject: '语速', A: 75, fullMark: 100 },
  { subject: '音量', A: 88, fullMark: 100 },
  { subject: '仪态', A: 95, fullMark: 100 },
  { subject: '板书', A: 70, fullMark: 100 },
  { subject: '互动', A: 65, fullMark: 100 },
  { subject: '节奏', A: 82, fullMark: 100 },
];

export default function AITeachingAnalysis() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-xl font-bold text-slate-800">李华的《静夜思》微格试讲分析报告</h2>
          <p className="text-sm text-slate-500 mt-1">分析完成时间：2026-05-10 11:45 | 报告编号：REP-20260510-0012</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50">
            导出PDF
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 shadow-sm">
            分享报告
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left: Video Player */}
        <div className="lg:col-span-2 space-y-4">
          <div className="glass-card rounded-2xl overflow-hidden bg-slate-900 border-none shadow-lg">
            <div className="aspect-video relative bg-slate-800 flex items-center justify-center group">
              <img src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80&w=1000" alt="Video cover" className="absolute inset-0 w-full h-full object-cover opacity-60" />
              
              {/* Fake AI overlays */}
              <div className="absolute top-10 left-10 border border-green-400 bg-green-400/20 px-2 py-1 text-green-400 text-xs font-mono rounded">
                Posture: Normal
              </div>
              <div className="absolute top-20 right-20 border border-orange-400 bg-orange-400/20 px-2 py-1 text-orange-400 text-xs font-mono rounded">
                Gaze: Away
              </div>

              <button className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white opacity-80 group-hover:opacity-100 transition-opacity z-10">
                <Play size={32} className="ml-1" />
              </button>

              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <div className="flex items-center gap-4 text-white">
                  <Play size={20} className="cursor-pointer" />
                  <div className="flex-1 h-1.5 bg-white/30 rounded-full relative cursor-pointer">
                    <div className="absolute top-0 left-0 h-full bg-blue-500 rounded-full" style={{ width: '35%' }}></div>
                    {/* Time markers */}
                    <div className="absolute top-[-4px] left-[15%] w-2.5 h-2.5 rounded-full bg-orange-400 border border-white" title="语速过快"></div>
                    <div className="absolute top-[-4px] left-[45%] w-2.5 h-2.5 rounded-full bg-orange-400 border border-white" title="板书倾斜"></div>
                    <div className="absolute top-[-4px] left-[70%] w-2.5 h-2.5 rounded-full bg-red-500 border border-white" title="互动不足"></div>
                  </div>
                  <span className="text-xs font-mono">03:45 / 10:20</span>
                  <Volume2 size={20} className="cursor-pointer" />
                  <Maximize size={20} className="cursor-pointer" />
                </div>
              </div>
            </div>
          </div>

          {/* AI Insights */}
          <div className="glass-card p-6">
            <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
              <Sparkles className="text-purple-500" size={20} />
              AI 智能诊断理答
            </h3>
            
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="text-sm font-bold text-green-600 mb-2 flex items-center gap-1">
                  <CheckCircle size={16} /> 亮点发现
                </h4>
                <ul className="text-sm text-slate-600 space-y-2 list-disc list-inside">
                  <li>声音洪亮，普通话标准 (92分)</li>
                  <li>教态自然，面带微笑，肢体语言丰富</li>
                  <li>课程导入部分设计巧妙，吸引学生注意力</li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-bold text-orange-600 mb-2 flex items-center gap-1">
                  <AlertTriangle size={16} /> 待改进项
                </h4>
                <ul className="text-sm text-slate-600 space-y-2 list-disc list-inside">
                  <li>02:15 - 03:30 语速过快 (280字/分钟)</li>
                  <li>板书略微向右上倾斜，字间距不匀</li>
                  <li>全过程仅有 1 次封闭式提问，缺乏启发式互动</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 bg-purple-50/50 p-4 rounded-xl border border-purple-100">
              <h4 className="text-xs font-bold text-purple-800 mb-2">💡 进阶建议</h4>
              <p className="text-sm text-purple-700 leading-relaxed">
                建议在讲解“举头望明月”时，增加停顿，抛出开放式问题（如：诗人为何只看着月亮？），并留出至少3秒的候答时间。建议您预约【三笔字实训室】进行粉笔字专项强化。
              </p>
            </div>
          </div>
        </div>

        {/* Right: Score & Chat */}
        <div className="space-y-6">
          <div className="glass-card p-6 flex flex-col">
            <div className="text-center mb-4">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-teal-400 text-white shadow-lg text-3xl font-bold border-4 border-white">
                81
              </div>
              <p className="text-xs font-bold text-slate-500 mt-2 uppercase tracking-widest">综合评分</p>
            </div>
            
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="70%" data={RADAR_DATA}>
                  <PolarGrid stroke="#e2e8f0" />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: '#64748b', fontSize: 12 }} />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                  <Radar name="得分" dataKey="A" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.3} />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* AI Chatbot */}
          <div className="glass-card flex flex-col h-[340px]">
            <div className="p-4 border-b border-slate-100 flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center text-white">
                <Sparkles size={16} />
              </div>
              <h3 className="font-bold text-slate-800 text-sm">师途智伴智能体</h3>
            </div>
            
            <div className="flex-1 p-4 overflow-y-auto space-y-4">
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center shrink-0">
                  <Sparkles size={12} className="text-purple-600" />
                </div>
                <div className="bg-slate-100 p-3 rounded-2xl rounded-tl-sm text-sm text-slate-700">
                  我是您的专属教学智伴，针对本次分析报告，您有什么疑问吗？
                </div>
              </div>
              
              <div className="flex gap-3 flex-row-reverse">
                <div className="bg-blue-500 p-3 rounded-2xl rounded-tr-sm text-sm text-white">
                  如何提升我的课堂提问质量？
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center shrink-0">
                  <Sparkles size={12} className="text-purple-600" />
                </div>
                <div className="bg-slate-100 p-3 rounded-2xl rounded-tl-sm text-sm text-slate-700">
                  根据您的录像，我建议：<br/>1. 将“是不是”改为“为什么”<br/>2. 提问后给予至少3-5秒等待时间<br/>3. 运用“追问”技巧深挖学生思路。<br/>您可以查看资源库中《有效课堂提问技巧》微课。
                </div>
              </div>
            </div>

            <div className="p-3 border-t border-slate-100">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="输入问题..." 
                  className="w-full bg-slate-50 border border-slate-200 rounded-full pl-4 pr-10 py-2 text-sm focus:outline-none focus:border-purple-300"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 text-purple-500 p-1 hover:bg-purple-50 rounded-full">
                  <MessageSquare size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
