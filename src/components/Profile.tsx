import React, { useState, ReactNode } from 'react';
import { 
  User, Home, Wrench, Calendar, ChevronRight, ChevronDown, ChevronUp, 
  Bell, Shield, Info, QrCode, PlusCircle, Gift, MousePointer2, 
  BookOpen, Layers, Layout, Cpu, HelpCircle, ArrowLeft,
  Navigation, MessageSquare, Star
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface Benefit {
  id: string;
  title: string;
  store: string;
  benefit: string;
  totalCount: number;
  usedCount: number;
  validDate: string;
  theme: string;
  icon: any;
}

export default function Profile() {
  const [benefits, setBenefits] = useState<Benefit[]>([
    {
      id: 'hotel-1',
      title: '住房优惠',
      store: '如家酒店',
      benefit: '8.0折入住',
      totalCount: 3,
      usedCount: 0,
      validDate: '5.1 - 5.30',
      theme: 'from-blue-500 to-indigo-600',
      icon: Home
    },
    {
      id: 'eggs-1',
      title: '社区福利',
      store: '老缸房社区',
      benefit: '免费领取鸡蛋',
      totalCount: 1,
      usedCount: 0,
      validDate: '至 5.09',
      theme: 'from-orange-400 to-red-500',
      icon: Gift
    }
  ]);

  const handleUseBenefit = (id: string) => {
    setBenefits(prev => prev.map(b => {
      if (b.id === id && b.usedCount < b.totalCount) {
        return { ...b, usedCount: b.usedCount + 1 };
      }
      return b;
    }));
  };

  const records = [
    { label: '已完成', count: 12, color: 'text-emerald-500' },
    { label: '处理中', count: 2, color: 'text-blue-500' },
    { label: '待响应', count: 1, color: 'text-orange-500' },
  ];

  const [expandedDates, setExpandedDates] = useState<string[]>(['20260508']);
  const [showProductGuide, setShowProductGuide] = useState(false);

  const toggleDate = (date: string) => {
    setExpandedDates(prev => 
      prev.includes(date) ? prev.filter(d => d !== date) : [...prev, date]
    );
  };

  const updateLogs = [
    {
      date: '20260508',
      items: [
        {
          title: '1. “白事通”殡葬服务指南上线',
          desc: '为方便居民了解身后事宜，服务板块新增“白事通”指南。'
        }
      ]
    },
    {
      date: '20260507',
      items: [
        {
          title: '1. 长者智守护服务上线',
          desc: '携手兴野智汇数字科技，为老服务板块新增“长者智守护”智能安家终端。'
        }
      ]
    }
  ];

  const menuItems = [
    { icon: Bell, label: '消息通知' },
    { icon: Shield, label: '隐私设置' },
    { icon: Info, label: '关于我们', onClick: () => setShowProductGuide(true) },
  ];

  const GuideSection = ({ title, icon: Icon, children }: { title: string, icon: any, children: ReactNode }) => (
    <div className="space-y-4">
      <div className="flex items-center space-x-2 px-1">
        <div className="w-1.5 h-6 bg-orange-500 rounded-full" />
        <Icon className="text-orange-500" size={20} />
        <h3 className="text-base font-black text-slate-800">{title}</h3>
      </div>
      <div className="space-y-3">
        {children}
      </div>
    </div>
  );

  const GuideCard = ({ title, desc, operation }: { title: string, desc: string, operation?: string }) => (
    <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
      <div className="text-sm font-black text-slate-800 mb-1">{title}</div>
      <p className="text-[11px] text-slate-500 mb-2 leading-relaxed">{desc}</p>
      {operation && (
        <div className="flex items-center space-x-1.5 bg-white/80 w-fit px-2 py-1 rounded-lg border border-slate-100">
          <Navigation size={12} className="text-orange-500" />
          <span className="text-[9px] font-bold text-orange-600">操作：{operation}</span>
        </div>
      )}
    </div>
  );

  return (
    <div className="bg-gray-50 flex flex-col min-h-full">
      <AnimatePresence>
        {showProductGuide && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 bg-white z-[100] flex flex-col"
          >
            <div className="bg-white border-b border-slate-100 p-6 flex items-center justify-between sticky top-0 z-10">
              <button 
                onClick={() => setShowProductGuide(false)}
                className="w-10 h-10 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 active:scale-95 transition-transform"
              >
                <ArrowLeft size={20} />
              </button>
              <div className="text-center">
                <h2 className="text-lg font-black text-slate-800">产品导览</h2>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Little Key Community</p>
              </div>
              <div className="w-10" />
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-8 pb-12">
              <GuideSection title="首页功能板块" icon={Home}>
                <div className="grid grid-cols-1 gap-3">
                  <GuideCard title="社区简介" desc="展现社区红图、人口结构与党建文化。" operation="首页顶端" />
                  <GuideCard title="随手拍" desc="反馈社区问题并实时追踪办理进度。" operation="首页模块区" />
                </div>
              </GuideSection>

              <GuideSection title="整体框架" icon={Layout}>
                <div className="bg-slate-900 rounded-3xl p-5 text-white">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-8 h-8 bg-orange-500 rounded-xl flex items-center justify-center">
                      <Layers size={18} />
                    </div>
                    <span className="text-sm font-black">交互体系</span>
                  </div>
                  <div className="space-y-2 text-[11px]">
                    <p><b className="text-orange-400">顶部：</b>状态展示与切换。</p>
                    <p><b className="text-blue-400">中部：</b>核心功能卡片。</p>
                    <p><b className="text-emerald-400">底部：</b>快捷导航。</p>
                  </div>
                </div>
              </GuideSection>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="bg-[#FF8C00] px-6 pt-10 pb-12 rounded-b-[48px] relative shadow-lg">
        <div className="flex items-center space-x-4 relative z-10">
          <div className="w-18 h-18 rounded-full border-4 border-white/30 overflow-hidden bg-white/20">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="avatar" className="w-full h-full" referrerPolicy="no-referrer" />
          </div>
          <div className="text-white">
            <h2 className="text-2xl font-black tracking-tight">陈大文</h2>
            <span className="text-[10px] bg-white/20 px-2.5 py-0.5 rounded-full font-bold">业主居民</span>
          </div>
        </div>
      </div>

      <div className="px-5 -mt-8 space-y-5 pb-8">
        <div className="bg-white rounded-3xl p-6 shadow-md border border-white">
          <div className="flex justify-between items-center mb-5">
            <h3 className="font-extrabold text-gray-900 flex items-center text-base">
              <Home size={20} className="mr-2.5 text-[#FF8C00]" /> 我的房屋
            </h3>
            <button className="w-9 h-9 flex items-center justify-center bg-orange-50 text-[#FF8C00] rounded-xl">
               <QrCode size={20} />
            </button>
          </div>
          <div className="bg-gray-50/80 rounded-2xl p-4 flex justify-between items-center border border-gray-100">
            <div>
              <div className="text-sm font-black text-gray-800">老缸房社区-同心园小区</div>
              <div className="text-xs text-gray-400 mt-1 font-medium font-mono">5号楼 - 1单元 - 1203室</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-md border border-white">
          <h3 className="font-extrabold text-gray-900 text-base mb-6">我的权益卡</h3>
          <div className="space-y-4">
            {benefits.map((benefit) => (
              <div key={benefit.id} className="relative overflow-hidden rounded-3xl border border-gray-50 bg-white p-4 flex">
                <div className={`w-24 h-16 bg-gradient-to-br ${benefit.theme} rounded-2xl flex flex-col items-center justify-center text-white shrink-0 shadow-sm`}>
                  <div className="text-[8px] font-black opacity-80 uppercase tracking-widest">{benefit.title}</div>
                  <div className="text-base font-black">{benefit.benefit}</div>
                </div>
                <div className="ml-4 flex-1 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <h4 className="text-xs font-black text-gray-800">{benefit.store}</h4>
                    <span className="text-[9px] text-gray-400 font-bold">{benefit.validDate}</span>
                  </div>
                  <div className="flex justify-end">
                    <button 
                      onClick={() => handleUseBenefit(benefit.id)}
                      className="px-3 py-1.5 rounded-xl text-[10px] font-black bg-indigo-50 text-indigo-600"
                    >
                      使用权益
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-md border border-white">
          <h3 className="font-extrabold text-gray-900 text-base mb-6">报修记录</h3>
          <div className="grid grid-cols-3 gap-3">
            {records.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center p-3 rounded-2xl bg-gray-50/50">
                <span className={`text-xl font-black ${item.color}`}>{item.count}</span>
                <span className="text-[10px] text-gray-400 mt-1 font-bold">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-[32px] shadow-sm border border-white overflow-hidden">
          {menuItems.map((item, idx) => (
             <button 
               key={idx} 
               onClick={item.onClick}
               className={`w-full flex justify-between items-center px-6 py-5 active:bg-gray-50 transition-colors ${
                 idx !== menuItems.length - 1 ? 'border-b border-gray-50/50' : ''
               }`}
             >
                <div className="flex items-center space-x-3.5">
                   <div className="bg-gray-50 p-2 rounded-lg text-gray-400">
                      <item.icon size={18} />
                   </div>
                   <span className="text-sm font-bold text-gray-700">{item.label}</span>
                </div>
                <ChevronRight size={16} className="text-gray-300" />
             </button>
          ))}
        </div>

        <div className="space-y-4 font-sans">
          {updateLogs.map((log) => (
            <div key={log.date} className="bg-white rounded-[32px] p-6 shadow-sm border border-white">
              <button 
                onClick={() => toggleDate(log.date)}
                className="w-full flex items-center justify-between"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-1.5 h-4 bg-[#FF8C00] rounded-full" />
                  <h3 className="font-extrabold text-gray-900 text-sm whitespace-nowrap">{log.date} 更新日志</h3>
                </div>
                {expandedDates.includes(log.date) ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
              <AnimatePresence>
                {expandedDates.includes(log.date) && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}>
                    <div className="space-y-4 pt-6 overflow-hidden">
                      {log.items.map((item, i) => (
                        <div key={i} className="border-l-2 border-orange-100 pl-4 py-1">
                          <h4 className="text-xs font-black text-gray-800 mb-1">{item.title}</h4>
                          <p className="text-[10px] text-gray-500">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
