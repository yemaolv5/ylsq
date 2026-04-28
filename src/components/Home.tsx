import { MapPin, Cloud, ChevronRight, Phone, MessageSquare, ShieldCheck, CreditCard, Key, Microscope } from 'lucide-react';
import { motion } from 'motion/react';

export default function Home() {
  const quickLinks = [
    { id: 1, label: '随手拍', icon: CameraIcon, color: 'bg-blue-50 text-blue-500' },
    { id: 2, label: '红色物业', icon: ShieldCheck, color: 'bg-red-50 text-red-500' },
    { id: 3, label: '物业缴费', icon: CreditCard, color: 'bg-orange-50 text-orange-500' },
    { id: 4, label: '访客通行', icon: Key, color: 'bg-green-50 text-green-500' },
    { id: 5, label: '科普入口', icon: Microscope, color: 'bg-purple-50 text-purple-500' },
  ];

  const phones = [
    { label: '物业服务', phone: '010-12345678' },
    { label: '居委会', phone: '010-87654321' },
    { label: '卫生站', phone: '010-11223344' },
    { label: '安保中心', phone: '010-55667788' },
  ];

  return (
    <div className="p-4 space-y-6">
      {/* Header: Location & Weather */}
      <div className="flex justify-between items-center bg-white p-3 px-4 rounded-2xl shadow-sm border border-gray-50">
        <div className="flex items-center space-x-3 text-gray-800">
          <div className="bg-orange-50 p-1.5 rounded-lg">
            <MapPin size={20} className="text-[#FF8C00]" />
          </div>
          <div className="flex flex-col justify-center">
            <span className="text-base font-extrabold text-[#FF8C00] leading-none mb-1">为民服务</span>
            <div className="flex items-center space-x-1">
              <span className="font-bold text-xs text-gray-500 tracking-tight">亿利社区</span>
              <span className="text-[9px] bg-gray-100 px-1 py-0.5 rounded text-gray-400 font-normal">自动定位</span>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-2 text-gray-600 bg-gray-50 px-3 py-1.5 rounded-xl">
          <Cloud size={16} className="text-blue-400" />
          <span className="text-xs font-medium">24°C 晴</span>
        </div>
      </div>

      {/* Quick Access Grid */}
      <div className="grid grid-cols-5 gap-2">
        {quickLinks.map((link) => (
          <button key={link.id} className="flex flex-col items-center space-y-1.5 group">
            <div className={`w-12 h-12 ${link.color} rounded-2xl flex items-center justify-center group-active:scale-95 transition-transform shadow-sm`}>
              <link.icon size={22} />
            </div>
            <span className="text-[10px] text-gray-600 font-medium">{link.label}</span>
          </button>
        ))}
      </div>

      {/* Announcements Carousel */}
      <div className="relative h-24 bg-[#FF8C00]/10 rounded-2xl overflow-hidden border border-[#FF8C00]/20 flex items-center p-4">
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-1">
            <span className="text-[10px] bg-[#FF8C00] text-white px-1.5 py-0.5 rounded font-bold uppercase tracking-wider">Notice</span>
            <span className="text-xs font-semibold text-[#FF8C00]">社区公告</span>
          </div>
          <p className="text-xs text-gray-700 font-medium truncate">关于本周三社区停水检修的通知...</p>
        </div>
        <div className="w-16 h-16 bg-white/50 rounded-lg flex items-center justify-center text-[#FF8C00]">
           <MessageSquare size={24} />
        </div>
      </div>

      {/* Discussion Card */}
      <div className="bg-white p-5 rounded-3xl shadow-sm border border-gray-100">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-gray-900 border-l-4 border-[#FF8C00] pl-3">社区议事厅</h3>
          <button className="text-[10px] text-gray-400 flex items-center">更多 <ChevronRight size={12} /></button>
        </div>
        <div className="bg-gray-50 rounded-2xl p-4 border border-dashed border-gray-200">
          <h4 className="text-sm font-bold text-gray-800 mb-2">关于老旧电梯更新方案的讨论</h4>
          <p className="text-xs text-gray-500 mb-4 leading-relaxed">为了改善居民出行体验，业委会提议对1号、2号楼电梯进行节能化改造，欢迎参与讨论...</p>
          <button className="w-full bg-[#FF8C00] text-white text-xs py-2.5 rounded-xl font-bold shadow-md shadow-orange-100 active:scale-[0.98] transition-transform">
            去参与讨论
          </button>
        </div>
      </div>

      {/* Phone Quick Dial */}
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-gray-900 text-sm">便民电话速拨</h3>
        </div>
        <div className="flex space-x-3 overflow-x-auto pb-2 scrollbar-hide -mx-1 px-1">
          {phones.map((item, idx) => (
             <button key={idx} className="flex-shrink-0 flex items-center bg-white px-4 py-3 rounded-2xl shadow-sm border border-gray-50 space-x-3 active:bg-gray-50 transition-colors">
                <div className="w-8 h-8 bg-green-50 text-green-500 rounded-full flex items-center justify-center">
                  <Phone size={16} />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-gray-800">{item.label}</div>
                  <div className="text-[10px] text-gray-400">{item.phone}</div>
                </div>
             </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function CameraIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
      <circle cx="12" cy="13" r="3" />
    </svg>
  );
}
