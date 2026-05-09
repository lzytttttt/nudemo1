import React from 'react';
import { Server, Monitor, Video, ShieldAlert, CheckCircle, Clock, Map, Wrench } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, Tooltip as RechartsTooltip, ResponsiveContainer } from 'recharts';

const NETWORK_DATA = [
  { time: '08:00', load: 30 },
  { time: '10:00', load: 85 },
  { time: '12:00', load: 45 },
  { time: '14:00', load: 92 },
  { time: '16:00', load: 78 },
  { time: '18:00', load: 35 },
];

export default function EquipmentMaintenance() {
  return (
    <div className="space-y-6">
      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatusCard title="设备资产总数" value="3,450" icon={Server} color="blue" />
        <StatusCard title="在线运行中" value="3,412" icon={CheckCircle} color="green" />
        <StatusCard title="离线/异常" value="28" icon={ShieldAlert} color="orange" />
        <StatusCard title="维修派单中" value="10" icon={Wrench} color="purple" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left: Map & Alert List */}
        <div className="lg:col-span-2 space-y-6">
          <div className="glass-card p-6 relative overflow-hidden">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                <Map className="text-blue-500" size={20} />
                实训楼设备分布热力图
              </h3>
              <div className="flex gap-2">
                <span className="flex items-center gap-1 text-xs"><span className="w-2 h-2 bg-green-500 rounded-full"></span> 正常</span>
                <span className="flex items-center gap-1 text-xs"><span className="w-2 h-2 bg-orange-500 rounded-full"></span> 告警</span>
              </div>
            </div>
            <div className="h-[280px] bg-slate-100 rounded-xl relative border border-slate-200 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541888052136-11f8e12d46ac?auto=format&fit=crop&q=80&w=1000')] bg-cover bg-center opacity-20 grayscale"></div>
              {/* Mock map nodes */}
              <MapNode x="20%" y="30%" status="normal" label="A区 微格" />
              <MapNode x="45%" y="60%" status="normal" label="B区 三笔字" />
              <MapNode x="70%" y="40%" status="alert" label="C区 口语" />
              <MapNode x="85%" y="75%" status="normal" label="D区 微课" />
            </div>
          </div>

          <div className="glass-card p-6">
            <h3 className="text-lg font-bold text-slate-800 mb-4">实时告警与报修列表</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="text-sm text-slate-500 border-b border-slate-100">
                    <th className="pb-3 font-medium pl-2">级别</th>
                    <th className="pb-3 font-medium">设备名称</th>
                    <th className="pb-3 font-medium">位置</th>
                    <th className="pb-3 font-medium">故障描述</th>
                    <th className="pb-3 font-medium">发生时间</th>
                    <th className="pb-3 font-medium">状态</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <AlertRow 
                    level="high" name="高清云台摄像机" loc="C105 口语室" 
                    desc="画面丢失，设备离线" time="10分钟前" status="已派单" 
                  />
                  <AlertRow 
                    level="medium" name="互动触控黑板" loc="A203 微格室" 
                    desc="右侧屏幕触控不灵敏" time="1小时前" status="待处理" 
                  />
                  <AlertRow 
                    level="low" name="录播主机" loc="D102 微课室" 
                    desc="存储空间剩余不足 10%" time="2小时前" status="处理中" 
                  />
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right: Charts & Lifecycle */}
        <div className="space-y-6">
          <div className="glass-card p-6">
            <h3 className="text-lg font-bold text-slate-800 mb-4">今日网络宽带负载</h3>
            <div className="h-48 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={NETWORK_DATA} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorLoad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 10}} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 10}} />
                  <RechartsTooltip />
                  <Area type="monotone" dataKey="load" stroke="#8b5cf6" strokeWidth={3} fill="url(#colorLoad)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="glass-card p-6">
            <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center justify-between">
              全生命周期台账 
              <button className="text-xs text-blue-600 border border-blue-200 px-2 py-1 rounded bg-blue-50">一键导出</button>
            </h3>
            
            <div className="space-y-3">
              <LifecycleItem icon={Video} name="摄像机批次" time="服役: 3年" health={85} />
              <LifecycleItem icon={Monitor} name="触控一体机" time="服役: 2年" health={92} />
              <LifecycleItem icon={Server} name="数据存储集群" time="服役: 4年" health={78} />
              <LifecycleItem icon={Server} name="录播主机阵列" time="服役: 1年" health={98} />
            </div>
          </div>
          
          <div className="glass-card p-6 bg-gradient-to-r from-blue-600 to-blue-800 text-white border-none shadow-lg">
             <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
               <Wrench size={20} />
               一键报修与智能派单
             </h3>
             <p className="text-sm text-blue-100 mb-4 opacity-90">系统自动诊断故障并匹配最近的维保人员，实现报修闭环。</p>
             <button className="w-full bg-white text-blue-800 font-bold py-2.5 rounded-xl shadow-md hover:bg-blue-50 transition-colors">
               发起人工报修
             </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatusCard({ title, value, icon: Icon, color }: any) {
  const colorMap: any = {
    blue: 'text-blue-500 bg-blue-50',
    green: 'text-green-500 bg-green-50',
    orange: 'text-orange-500 bg-orange-50',
    purple: 'text-purple-500 bg-purple-50'
  };

  return (
    <div className="glass-card p-5 flex items-center gap-4">
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${colorMap[color]}`}>
        <Icon size={24} />
      </div>
      <div>
        <p className="text-xs font-medium text-slate-500">{title}</p>
        <p className="text-xl font-bold text-slate-800 mt-0.5">{value}</p>
      </div>
    </div>
  );
}

function MapNode({ x, y, status, label }: any) {
  const bgColor = status === 'normal' ? 'bg-green-500' : 'bg-orange-500 animate-pulse';
  return (
    <div className="absolute flex flex-col items-center" style={{ left: x, top: y }}>
      <div className={`w-4 h-4 rounded-full border-2 border-white shadow-md z-10 ${bgColor}`}></div>
      <div className="bg-white/90 backdrop-blur text-xs font-bold px-2 py-0.5 rounded shadow-sm mt-1 border border-slate-200">
        {label}
      </div>
    </div>
  );
}

function AlertRow({ level, name, loc, desc, time, status }: any) {
  const levelBadge = {
    high: <span className="bg-red-100 text-red-700 px-2 py-0.5 rounded text-[10px] font-bold">严重</span>,
    medium: <span className="bg-orange-100 text-orange-700 px-2 py-0.5 rounded text-[10px] font-bold">一般</span>,
    low: <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-[10px] font-bold">提示</span>
  }[level as string];

  return (
    <tr className="border-b border-slate-50 hover:bg-slate-50/50">
      <td className="py-3 pl-2">{levelBadge}</td>
      <td className="py-3 font-semibold text-slate-700">{name}</td>
      <td className="py-3 text-slate-500">{loc}</td>
      <td className="py-3 text-slate-600 text-xs">{desc}</td>
      <td className="py-3 text-slate-500 text-xs">{time}</td>
      <td className="py-3">
        <span className="text-xs font-medium px-2 py-1 bg-slate-100 text-slate-600 rounded-lg">
          {status}
        </span>
      </td>
    </tr>
  );
}

function LifecycleItem({ icon: Icon, name, time, health }: any) {
  return (
    <div className="flex items-center justify-between p-3 border border-slate-100 rounded-xl bg-slate-50/50">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-slate-200/50 flex items-center justify-center text-slate-500">
          <Icon size={16} />
        </div>
        <div>
          <p className="text-sm font-bold text-slate-700">{name}</p>
          <p className="text-[10px] text-slate-400">{time}</p>
        </div>
      </div>
      <div className="text-right">
        <p className="text-xs font-bold text-slate-700 mb-1">健康度 {health}%</p>
        <div className="w-16 h-1.5 bg-slate-200 rounded-full overflow-hidden">
          <div 
            className={`h-full rounded-full ${health > 90 ? 'bg-green-500' : health > 80 ? 'bg-teal-500' : 'bg-orange-500'}`}
            style={{ width: `${health}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
