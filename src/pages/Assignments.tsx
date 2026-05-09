import { Layers, Plus, BookOpen, PenTool, LayoutTemplate, MessageSquarePlus, PieChart } from 'lucide-react';

export default function Assignments() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
          <Layers className="text-blue-500" /> 
          实训作业管理
        </h2>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-sm hover:bg-blue-700 transition-colors flex items-center gap-2">
          <Plus size={16} /> 创建新作业
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Left: Templates */}
        <div className="glass-card p-6 h-fit">
          <h3 className="text-sm font-bold text-slate-800 mb-4 flex items-center gap-2">
            <LayoutTemplate size={16} className="text-indigo-500" />
            作业模板库
          </h3>
          <div className="space-y-3">
            <TemplateCard name="微格试讲作业" type="视频 + AI分析" icon={BookOpen} color="blue" />
            <TemplateCard name="说课训练" type="视频/音频" icon={MessageSquarePlus} color="purple" />
            <TemplateCard name="粉笔字练习" type="图片上传" icon={PenTool} color="teal" />
            <TemplateCard name="班主任案例分析" type="文档" icon={Layers} color="orange" />
          </div>
        </div>

        {/* Right: Assignments List & Stats */}
        <div className="lg:col-span-3 space-y-6">
          {/* Stats overview */}
          <div className="grid grid-cols-4 gap-4">
            <StatCard label="运行中作业" value="12" />
            <StatCard label="待批阅总数" value="45" />
            <StatCard label="本周已批阅" value="128" />
            <StatCard label="平均提交率" value="94%" />
          </div>

          <div className="glass-card p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold text-slate-800">近期作业列表</h3>
              <div className="flex gap-2">
                <select className="bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5 text-sm outline-none">
                  <option>所有课程</option>
                  <option>教育学基础</option>
                  <option>微格实训</option>
                </select>
              </div>
            </div>

            <div className="space-y-4">
              <AssignmentRow 
                title="《教育学基础》微格试讲第一次作业" 
                class="2025级师范1班" 
                deadline="2026-05-15"
                submitted={38}
                total={40}
                graded={12}
              />
              <AssignmentRow 
                title="钢笔字楷书基本笔画结构练习" 
                class="2025级师范2班" 
                deadline="2026-05-12"
                submitted={40}
                total={40}
                graded={40}
                done
              />
              <AssignmentRow 
                title="班级突发事件处理情景模拟" 
                class="2024级师范3班" 
                deadline="2026-05-20"
                submitted={5}
                total={35}
                graded={0}
              />
            </div>
          </div>

          {/* AI Summary Panel */}
          <div className="glass-card p-6 bg-gradient-to-r from-purple-50/50 to-transparent border-l-4 border-purple-400">
            <h3 className="text-sm font-bold text-purple-800 mb-3 flex items-center gap-2">
              <PieChart size={16} />
              AI 批量摘要与学情反馈 (基于最近批阅)
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed bg-white/60 p-4 rounded-xl border border-purple-100">
              在最近的“《教育学基础》微格试讲”作业中，AI分析显示：<br/>
              1. <span className="font-bold text-green-600">优点</span>：85%的学生教态自然，普通话达标。<br/>
              2. <span className="font-bold text-orange-600">共性问题</span>：超过60%的学生“板书设计”得分较低，主要表现为排版不合理和字迹倾斜。<br/>
              3. <span className="font-bold text-blue-600">建议</span>：针对板书问题，系统已为您生成“一键定向干预”建议，可向分数低于70分的同学派发三笔字专项训练。
            </p>
            <button className="mt-4 bg-purple-100 text-purple-700 px-4 py-2 rounded-lg text-sm font-bold hover:bg-purple-200 transition-colors">
              查看详细学情报告
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function TemplateCard({ name, type, icon: Icon, color }: any) {
  const colorMap: any = {
    blue: 'text-blue-500 bg-blue-50',
    purple: 'text-purple-500 bg-purple-50',
    teal: 'text-teal-500 bg-teal-50',
    orange: 'text-orange-500 bg-orange-50'
  };

  return (
    <div className="p-3 border border-slate-100 rounded-xl hover:border-slate-300 transition-colors cursor-pointer group flex items-center gap-3">
      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${colorMap[color]}`}>
        <Icon size={18} />
      </div>
      <div>
        <h4 className="font-bold text-slate-700 text-sm group-hover:text-blue-600 transition-colors">{name}</h4>
        <p className="text-xs text-slate-400">{type}</p>
      </div>
    </div>
  );
}

function StatCard({ label, value }: any) {
  return (
    <div className="glass-card p-4 text-center">
      <p className="text-2xl font-bold text-slate-800">{value}</p>
      <p className="text-xs text-slate-500 font-medium mt-1">{label}</p>
    </div>
  );
}

function AssignmentRow({ title, class: className, deadline, submitted, total, graded, done }: any) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-4 bg-white/60 border border-slate-100 rounded-xl hover:shadow-sm transition-all gap-4">
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <h4 className="font-bold text-slate-800 text-sm">{title}</h4>
          {done && <span className="px-2 py-0.5 bg-slate-100 text-slate-500 text-[10px] rounded">已结束</span>}
        </div>
        <p className="text-xs text-slate-500">
          对象: {className} · 截止: {deadline}
        </p>
      </div>

      <div className="flex items-center gap-8 text-sm">
        <div className="text-center">
          <p className="font-bold text-slate-700">{submitted}/{total}</p>
          <p className="text-[10px] text-slate-400">已提交</p>
        </div>
        <div className="text-center">
          <p className="font-bold text-orange-500">{submitted - graded}</p>
          <p className="text-[10px] text-slate-400">待批阅</p>
        </div>
        <button className="px-4 py-2 bg-blue-50 text-blue-600 text-xs font-bold rounded-lg hover:bg-blue-100 transition-colors">
          进入批阅
        </button>
      </div>
    </div>
  );
}
