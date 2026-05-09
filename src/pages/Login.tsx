import React, { useState } from 'react';
import { GraduationCap, BookOpen, ShieldCheck, ArrowRight } from 'lucide-react';
import type { Role } from '../App';

interface LoginProps {
  onLogin: (role: Role) => void;
}

export default function Login({ onLogin }: LoginProps) {
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);
  const [isEntering, setIsEntering] = useState(false);

  const handleRoleSelect = (role: Role) => {
    setSelectedRole(role);
    setIsEntering(true);
    setTimeout(() => {
      onLogin(role);
    }, 1000); // Wait 1 second for animation
  };

  return (
    <div className={`min-h-screen bg-slate-50 flex flex-col relative overflow-hidden transition-all duration-700 ${isEntering ? 'opacity-0 scale-105 blur-sm' : 'opacity-100 scale-100 blur-0'}`}>
      {/* Entering Overlay */}
      {isEntering && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white/60 backdrop-blur-lg transition-opacity duration-300">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-6 shadow-lg shadow-blue-500/20"></div>
          <h2 className="text-2xl font-bold text-slate-800 tracking-wider mb-2">
            正在进入{selectedRole === 'admin' ? '全局态势' : selectedRole === 'teacher' ? '教师' : '师范生'}工作台...
          </h2>
          <p className="text-slate-500 text-sm animate-pulse">正在同步全息数据与权限配置</p>
        </div>
      )}

      {/* Decorative Background */}
      <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-blue-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-teal-400/10 rounded-full blur-3xl" />
      
      {/* Header */}
      <header className="p-8 z-10">
        <div className="max-w-7xl mx-auto flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-teal-500 flex items-center justify-center text-white font-bold shadow-lg">
            A
          </div>
          <span className="font-bold text-slate-800 text-2xl tracking-tight">AVA智慧师范实训平台</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center p-8 z-10">
        <div className="max-w-5xl w-full">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tight mb-4">
              欢迎访问 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">智慧师范实训生态</span>
            </h1>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              全息数据驱动，沉浸式实训体验。请选择您的专属身份进入系统。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <RoleCard 
              role="student"
              title="师范生"
              desc="实训预约 / 成长画像 / 技能诊断"
              icon={GraduationCap}
              color="blue"
              onClick={() => handleRoleSelect('student')}
            />
            <RoleCard 
              role="teacher"
              title="指导教师"
              desc="任务下发 / 随堂评测 / 教学洞察"
              icon={BookOpen}
              color="teal"
              onClick={() => handleRoleSelect('teacher')}
            />
            <RoleCard 
              role="admin"
              title="校领导 / 管理员"
              desc="全局态势 / 资源调配 / 决策分析"
              icon={ShieldCheck}
              color="purple"
              onClick={() => handleRoleSelect('admin')}
            />
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="p-6 text-center text-slate-400 text-sm z-10">
        &copy; 2026 师范大学智慧师范实训平台. All rights reserved.
      </footer>
    </div>
  );
}

function RoleCard({ title, desc, icon: Icon, color, onClick }: any) {
  const colorStyles = {
    blue: 'hover:border-blue-300 hover:shadow-blue-500/10 group-hover:bg-blue-50 group-hover:text-blue-600',
    teal: 'hover:border-teal-300 hover:shadow-teal-500/10 group-hover:bg-teal-50 group-hover:text-teal-600',
    purple: 'hover:border-purple-300 hover:shadow-purple-500/10 group-hover:bg-purple-50 group-hover:text-purple-600',
  }[color as string];

  return (
    <button 
      onClick={onClick}
      className={`group glass-card p-8 text-left transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${colorStyles}`}
    >
      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-colors bg-slate-50 text-slate-400 ${colorStyles.split(' ')[2]} ${colorStyles.split(' ')[3]}`}>
        <Icon size={32} />
      </div>
      <h3 className="text-2xl font-bold text-slate-800 mb-2">{title}</h3>
      <p className="text-slate-500 text-sm mb-8">{desc}</p>
      <div className="flex items-center text-sm font-semibold text-slate-400 group-hover:text-slate-700 transition-colors">
        进入工作台
        <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
      </div>
    </button>
  );
}
