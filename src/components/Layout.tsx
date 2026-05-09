import React, { ReactNode } from 'react';
import { 
  LayoutDashboard, 
  Database, 
  CalendarDays, 
  BrainCircuit, 
  FileEdit, 
  UserCircle, 
  BookOpen, 
  GraduationCap, 
  Wrench, 
  Award,
  Bell,
  Search,
  ChevronDown
} from 'lucide-react';
import type { Role } from '../App';

interface LayoutProps {
  children: ReactNode;
  currentRole: Role;
  setCurrentRole: (role: Role) => void;
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const NAV_ITEMS = [
  { id: 'dashboard', label: '智慧师训总览', icon: LayoutDashboard },
  { id: 'data', label: '数据中台', icon: Database },
  { id: 'venue', label: '场地预约管理', icon: CalendarDays },
  { id: 'ai-analysis', label: 'AI教学技能分析', icon: BrainCircuit },
  { id: 'assignments', label: '实训作业管理', icon: FileEdit },
  { id: 'student-ws', label: '学生成长画像', icon: UserCircle },
  { id: 'teacher-ws', label: '教师工作台', icon: BookOpen },
  { id: 'equipment', label: '设备运维中心', icon: Wrench },
  { id: 'certification', label: '专业认证数据支撑', icon: Award },
];

export default function Layout({ children, currentRole, setCurrentRole, currentPage, setCurrentPage }: LayoutProps) {
  return (
    <div className="flex h-screen overflow-hidden bg-slate-50/50">
      {/* Sidebar */}
      <aside className="w-64 bg-white/80 backdrop-blur-md border-r border-slate-200/60 flex flex-col transition-all duration-300 shadow-[4px_0_24px_rgba(0,0,0,0.02)] z-10">
        <div className="h-16 flex items-center px-6 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-teal-400 flex items-center justify-center text-white font-bold shadow-md">
              A
            </div>
            <span className="font-bold text-slate-800 text-lg tracking-tight">AVA智慧师训</span>
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto py-6 px-3 space-y-1">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 text-sm font-medium ${
                  isActive 
                    ? 'bg-blue-50/80 text-blue-600 shadow-sm' 
                    : 'text-slate-500 hover:bg-slate-50 hover:text-slate-800'
                }`}
              >
                <Icon size={18} className={isActive ? 'text-blue-500' : 'text-slate-400'} />
                {item.label}
              </button>
            );
          })}
        </div>
        
        <div className="p-4 border-t border-slate-100">
          <div className="glass-card p-4 flex items-center gap-3">
             <div className="w-10 h-10 rounded-full bg-slate-100 border-2 border-white shadow-sm overflow-hidden flex items-center justify-center">
                <GraduationCap className="text-slate-400" size={20} />
             </div>
             <div className="flex-1 overflow-hidden">
                <p className="text-sm font-semibold text-slate-700 truncate">
                  {currentRole === 'admin' ? '系统管理员' : currentRole === 'teacher' ? '张老师' : '李同学'}
                </p>
                <p className="text-xs text-slate-400 truncate">
                  {currentRole === 'admin' ? '网络信息中心' : currentRole === 'teacher' ? '教育学院' : '2025级师范1班'}
                </p>
             </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-blue-50/50 to-transparent -z-10" />
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-blue-400/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-teal-400/5 rounded-full blur-3xl -z-10" />

        {/* Header */}
        <header className="h-16 bg-white/40 backdrop-blur-md border-b border-white/40 px-8 flex items-center justify-between z-10 sticky top-0">
          <div className="flex items-center gap-4 flex-1">
            <h1 className="text-xl font-bold text-slate-800 tracking-tight">
              {NAV_ITEMS.find(i => i.id === currentPage)?.label || '智慧师范实训平台'}
            </h1>
            {currentPage === 'dashboard' && (
              <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full border border-green-200">
                系统运行正常
              </span>
            )}
          </div>

          <div className="flex items-center gap-6">
            <div className="relative group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
              <input 
                type="text" 
                placeholder="搜索资源、设备或场室..." 
                className="pl-9 pr-4 py-2 bg-white/60 border border-slate-200/80 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 w-64 transition-all focus:bg-white"
              />
            </div>
            
            <button className="relative text-slate-400 hover:text-slate-600 transition-colors">
              <Bell size={20} />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>

            {/* Role Switcher */}
            <div className="flex items-center gap-2 bg-white/60 px-3 py-1.5 rounded-full border border-slate-200/80">
              <span className="text-xs text-slate-500 font-medium">角色视图:</span>
              <select 
                value={currentRole}
                onChange={(e) => setCurrentRole(e.target.value as Role)}
                className="bg-transparent text-sm font-semibold text-slate-700 focus:outline-none cursor-pointer appearance-none pr-4"
              >
                <option value="admin">校领导/管理员</option>
                <option value="teacher">教师</option>
                <option value="student">学生</option>
              </select>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 overflow-auto p-8 relative scroll-smooth">
          <div className="max-w-7xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}
