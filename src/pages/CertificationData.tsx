import React from 'react';
import { Award, Download, Filter, FileText, CheckSquare, BarChart2, TrendingUp, FolderTree } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, Legend, ResponsiveContainer } from 'recharts';

const CERT_DATA = [
  { name: '教育情怀', required: 80, current: 92 },
  { name: '教学能力', required: 85, current: 88 },
  { name: '班级指导', required: 80, current: 82 },
  { name: '综合育人', required: 75, current: 85 },
  { name: '反思发展', required: 80, current: 89 },
];

export default function CertificationData() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center bg-white/60 p-4 rounded-2xl border border-slate-200/60 backdrop-blur shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white shadow-md">
            <Award size={20} />
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-800">师范类专业认证数据支撑中枢</h2>
            <p className="text-xs text-slate-500">已接入教务系统、学工系统与实训平台数据，实时计算毕业要求达成度</p>
          </div>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 bg-white border border-slate-200 text-slate-700 px-4 py-2 rounded-xl text-sm font-medium hover:bg-slate-50 transition-colors">
            <Filter size={16} /> 高级筛选
          </button>
          <button className="flex items-center gap-2 bg-indigo-600 text-white px-5 py-2 rounded-xl text-sm font-bold shadow-md hover:bg-indigo-700 transition-colors">
            <Download size={16} /> 一键导出支撑材料
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Left: Navigation Tree */}
        <div className="glass-card p-5 h-fit">
          <h3 className="text-sm font-bold text-slate-800 mb-4 flex items-center gap-2">
            <FolderTree size={16} className="text-slate-500" />
            指标体系钻取
          </h3>
          <div className="space-y-1">
            <TreeItem level={0} label="2026版师范类专业认证标准" active />
            <TreeItem level={1} label="汉语言文学 (师范)" />
            <TreeItem level={2} label="毕业要求1：师德规范" />
            <TreeItem level={2} label="毕业要求2：教育情怀" />
            <TreeItem level={2} label="毕业要求3：学科素养" />
            <TreeItem level={2} label="毕业要求4：教学能力" active />
            <TreeItem level={3} label="指标点 4.1：教学设计" />
            <TreeItem level={3} label="指标点 4.2：教学实施" />
            <TreeItem level={3} label="指标点 4.3：教学评价" />
            <TreeItem level={1} label="英语 (师范)" />
            <TreeItem level={1} label="数学与应用数学 (师范)" />
          </div>
        </div>

        {/* Right: Charts and Data Files */}
        <div className="lg:col-span-3 space-y-6">
          
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-4">
              <p className="text-xs font-bold text-indigo-600 mb-1">当前专业评级预期</p>
              <h4 className="text-2xl font-black text-indigo-800">通过 (二级)</h4>
            </div>
            <div className="bg-teal-50 border border-teal-100 rounded-xl p-4">
              <p className="text-xs font-bold text-teal-600 mb-1">核心能力达成度均值</p>
              <h4 className="text-2xl font-black text-teal-800">0.86</h4>
            </div>
            <div className="bg-orange-50 border border-orange-100 rounded-xl p-4">
              <p className="text-xs font-bold text-orange-600 mb-1">自动归档材料数</p>
              <h4 className="text-2xl font-black text-orange-800">12,450 <span className="text-sm font-medium text-orange-600">份</span></h4>
            </div>
          </div>

          <div className="glass-card p-6">
            <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
              <BarChart2 className="text-indigo-500" size={20} />
              汉语言文学(师范) 毕业要求达成度分析
            </h3>
            <div className="h-72 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={CERT_DATA} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b'}} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b'}} />
                  <RechartsTooltip 
                    cursor={{fill: '#f8fafc'}}
                    contentStyle={{ borderRadius: '12px', border: '1px solid #e2e8f0' }}
                  />
                  <Legend wrapperStyle={{ paddingTop: '20px' }} />
                  <Bar name="目标达成值" dataKey="required" fill="#cbd5e1" radius={[4, 4, 0, 0]} barSize={30} />
                  <Bar name="实际达成值" dataKey="current" fill="#6366f1" radius={[4, 4, 0, 0]} barSize={30} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="glass-card p-6">
            <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center justify-between">
              <span className="flex items-center gap-2">
                <FileText className="text-teal-500" size={20} />
                自动归档支撑材料清单 (指标点 4.2 教学实施)
              </span>
              <button className="text-sm text-indigo-600 hover:underline">查看全部</button>
            </h3>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="text-xs text-slate-500 border-b border-slate-100 uppercase tracking-wider">
                    <th className="pb-3 font-medium pl-2 w-10">
                      <input type="checkbox" className="rounded border-slate-300" />
                    </th>
                    <th className="pb-3 font-medium">材料名称</th>
                    <th className="pb-3 font-medium">来源系统</th>
                    <th className="pb-3 font-medium">包含数据量</th>
                    <th className="pb-3 font-medium">归档状态</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <MaterialRow 
                    name="2025级汉语言文学微格试讲录像汇总 (抽样20%)" 
                    source="实训生态平台" count="24 份视频" 
                  />
                  <MaterialRow 
                    name="《微格教学实训》课程过程性评价及AI打分表" 
                    source="数据中台" count="120 份记录" 
                  />
                  <MaterialRow 
                    name="教育实习期间公开课评课记录与指导教师评语" 
                    source="教务管理系统" count="120 份文档" 
                  />
                  <MaterialRow 
                    name="师范生粉笔字达标测试成绩单及电子扫描件" 
                    source="三笔字评测系统" count="120 份图片" 
                  />
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

function TreeItem({ level, label, active }: any) {
  const paddingLeft = level * 16 + 8;
  return (
    <div 
      className={`py-2 pr-2 rounded-lg text-sm cursor-pointer transition-colors flex items-center gap-2 ${
        active 
          ? 'bg-indigo-50 text-indigo-700 font-bold border-r-4 border-indigo-500' 
          : 'text-slate-600 hover:bg-slate-50'
      }`}
      style={{ paddingLeft: `${paddingLeft}px` }}
    >
      {level > 0 && <span className="w-2 h-px bg-slate-300 inline-block -ml-3 mr-1"></span>}
      {label}
    </div>
  );
}

function MaterialRow({ name, source, count }: any) {
  return (
    <tr className="border-b border-slate-50 hover:bg-slate-50/50 group">
      <td className="py-3 pl-2">
        <input type="checkbox" className="rounded border-slate-300 opacity-50 group-hover:opacity-100" />
      </td>
      <td className="py-3 font-medium text-slate-700 flex items-center gap-2">
        <FileText size={14} className="text-slate-400" />
        {name}
      </td>
      <td className="py-3">
        <span className="px-2 py-1 bg-slate-100 text-slate-500 text-xs rounded-md">
          {source}
        </span>
      </td>
      <td className="py-3 text-slate-500 text-xs">{count}</td>
      <td className="py-3">
        <span className="flex items-center gap-1 text-xs text-green-600">
          <CheckSquare size={14} /> 已归档
        </span>
      </td>
    </tr>
  );
}
