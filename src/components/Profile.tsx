import { User, Home, Wrench, Calendar, Settings, ChevronRight, Bell, Shield, Info, QrCode, PlusCircle } from 'lucide-react';

export default function Profile() {
  const records = [
    { label: '处理中', count: 2, color: 'text-blue-500' },
    { label: '已完成', count: 12, color: 'text-green-500' },
    { label: '已评价', count: 10, color: 'text-gray-400' },
  ];

  const menuItems = [
    { icon: Bell, label: '消息通知' },
    { icon: Shield, label: '隐私设置' },
    { icon: Info, label: '关于我们' },
  ];

  return (
    <div className="flex flex-col h-full bg-gray-50 pb-20 overflow-y-auto">
      {/* Header */}
      <div className="bg-[#FF8C00] px-6 pt-12 pb-8 rounded-b-[40px] relative overflow-hidden">
        {/* Decorative Circle */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
        <div className="absolute top-20 -left-10 w-24 h-24 bg-white/5 rounded-full blur-xl" />
        
        <div className="flex items-center space-x-4 relative z-10">
          <div className="w-16 h-16 rounded-full border-2 border-white/50 overflow-hidden bg-white/20">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="avatar" />
          </div>
          <div className="text-white">
            <h2 className="text-xl font-bold">陈大文</h2>
            <div className="flex space-x-2 mt-1">
              <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded-full backdrop-blur-sm">业主居民</span>
              <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded-full backdrop-blur-sm">5号楼楼长</span>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 -mt-6 space-y-4">
        {/* My House */}
        <div className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-gray-900 flex items-center">
              <Home size={18} className="mr-2 text-[#FF8C00]" /> 我的房屋
            </h3>
            <button className="p-1 px-2 bg-orange-50 text-[#FF8C00] rounded-lg">
               <QrCode size={16} />
            </button>
          </div>
          <div className="bg-gray-50 rounded-2xl p-4 flex justify-between items-center">
            <div>
              <div className="text-sm font-bold text-gray-800">亿利国际社区</div>
              <div className="text-xs text-gray-400 mt-0.5">5号楼 - 1单元 - 1203室</div>
            </div>
            <button className="text-[#FF8C00] text-xs font-bold flex items-center">
              <PlusCircle size={16} className="mr-1" /> 添加成员
            </button>
          </div>
        </div>

        {/* Records */}
        <div className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-gray-900">报修/上报记录</h3>
            <button className="text-xs text-gray-400 flex items-center">查看全部 <ChevronRight size={14} /></button>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {records.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <span className={`text-xl font-bold ${item.color}`}>{item.count}</span>
                <span className="text-xs text-gray-500 mt-1">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Lists */}
        <div className="space-y-3">
           <button className="w-full bg-white px-5 py-4 rounded-3xl flex justify-between items-center shadow-sm border border-gray-100 active:bg-gray-50 transition-colors">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center mr-3">
                  <Calendar size={18} />
                </div>
                <span className="text-sm font-bold text-gray-800">我的活动报名</span>
              </div>
              <div className="flex items-center text-xs text-gray-400">
                 3个进行中 <ChevronRight size={14} className="ml-1" />
              </div>
           </button>

           <button className="w-full bg-white px-5 py-4 rounded-3xl flex justify-between items-center shadow-sm border border-gray-100 active:bg-gray-50 transition-colors">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-purple-50 text-purple-500 flex items-center justify-center mr-3">
                  <Wrench size={18} />
                </div>
                <span className="text-sm font-bold text-gray-800">报修工单评价</span>
              </div>
              <ChevronRight size={14} className="text-gray-300" />
           </button>
        </div>

        {/* Settings */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden mb-6">
          {menuItems.map((item, idx) => (
             <button 
               key={idx} 
               className={`w-full flex justify-between items-center px-5 py-4 active:bg-gray-50 transition-colors ${
                 idx !== menuItems.length - 1 ? 'border-b border-gray-50' : ''
               }`}
             >
                <div className="flex items-center space-x-3">
                   <item.icon size={18} className="text-gray-400" />
                   <span className="text-sm text-gray-700">{item.label}</span>
                </div>
                <ChevronRight size={14} className="text-gray-300" />
             </button>
          ))}
        </div>
      </div>
    </div>
  );
}
