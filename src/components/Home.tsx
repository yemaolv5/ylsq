import { useState, useEffect } from 'react';
import { MapPin, Cloud, ChevronRight, Phone, MessageSquare, ShieldCheck, CreditCard, Key, Microscope, GripVertical } from 'lucide-react';
import { motion, AnimatePresence, Reorder } from 'motion/react';

export default function Home({ onOpenSnapReport }: { onOpenSnapReport: () => void }) {
  const [currentBanner, setCurrentBanner] = useState(0);
  const [sections, setSections] = useState([
    'property_governance',
    'hot_services',
    'announcements',
    'community_dynamics',
    'discussion',
    'phone_dial'
  ]);

  const banners = [
    {
      id: 1,
      title: '智慧社区 · 温暖邻里',
      desc: '科技赋能，让社区生活更美好',
      image: 'https://images.unsplash.com/photo-1577412647305-991150c7d163?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 2,
      title: '全心全意 · 为民服务',
      desc: '您的满意是我们最大的追求',
      image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=600&q=80'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const quickLinks = [
    { id: 1, label: '随手拍', icon: CameraIcon, color: 'bg-blue-50 text-blue-500' },
    { id: 2, label: '物业三双', icon: ShieldCheck, color: 'bg-red-50 text-red-500' },
    { id: 3, label: '物业缴费', icon: CreditCard, color: 'bg-orange-50 text-orange-500' },
    { id: 4, label: '访客通行', icon: Key, color: 'bg-green-50 text-green-500' },
    { id: 5, label: '科普入口', icon: Microscope, color: 'bg-purple-50 text-purple-500' },
  ];

  const news = [
    { id: 1, title: '老缸房社区开展“春季义诊”活动', type: '动态', time: '刚刚', image: 'https://images.unsplash.com/photo-1576091160550-2173599211d0?auto=format&fit=crop&w=400&q=80' },
    { id: 2, title: '社区智慧路灯全面升级完毕', type: '便民', time: '2小时前', image: 'https://images.unsplash.com/photo-1544376798-89aa6b82c6cd?auto=format&fit=crop&w=400&q=80' },
  ];

  const phones = [
    { label: '物业服务', phone: '010-12345678' },
    { label: '居委会', phone: '010-87654321' },
    { label: '卫生站', phone: '010-11223344' },
    { label: '安保中心', phone: '010-55667788' },
  ];

  const renderSection = (id: string) => {
    switch (id) {
      case 'property_governance':
        return (
          <div className="bg-white p-4 rounded-3xl shadow-md shadow-red-50/50 border border-red-50 relative group">
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-30 transition-opacity"><GripVertical size={16} /></div>
            <div className="flex items-center justify-between mb-3 px-1">
               <div className="flex items-center space-x-2">
                  <div className="w-1 h-3.5 bg-red-500 rounded-full" />
                  <h3 className="font-extrabold text-gray-900 text-sm italic">“物业三双”治理专区</h3>
               </div>
               <span className="text-[10px] text-red-500 bg-red-50 px-2 py-0.5 rounded-full font-bold animate-pulse">解决质价不符</span>
            </div>
            <div className="grid grid-cols-3 gap-2">
               {[
                 { label: '双评价', desc: '质量价格评估', icon: '⚖️' },
                 { label: '双公开', desc: '收支透明公示', icon: '📊' },
                 { label: '双履约', desc: '企民合规监管', icon: '📝' }
               ].map((item, i) => (
                 <div key={i} className="bg-gray-50/50 rounded-2xl p-2 text-center border border-gray-50">
                    <div className="text-lg mb-1">{item.icon}</div>
                    <div className="text-[11px] font-black text-gray-800">{item.label}</div>
                    <div className="text-[8px] text-gray-400 mt-0.5 leading-tight">{item.desc}</div>
                 </div>
               ))}
            </div>
            <button className="w-full mt-3 bg-red-500 text-white text-[11px] font-bold py-2 rounded-xl shadow-lg shadow-red-100 flex items-center justify-center space-x-1">
               <span>进入阳光监管平台</span>
               <ChevronRight size={14} />
            </button>
          </div>
        );
      case 'hot_services':
        return (
          <div className="bg-white p-4 rounded-3xl shadow-md shadow-orange-50/30 border border-orange-50/50 relative group">
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-30 transition-opacity"><GripVertical size={16} /></div>
            <div className="flex items-center justify-between mb-4 px-1">
               <div className="flex items-center space-x-2">
                  <div className="w-1 h-3.5 bg-[#FF8C00] rounded-full" />
                  <h3 className="font-extrabold text-gray-900 text-sm">热点服务排行</h3>
               </div>
               <span className="text-[10px] text-gray-400 font-medium">近7日活跃</span>
            </div>
            <div className="flex space-x-4 overflow-x-auto pb-2 scrollbar-hide">
               {[
                 { label: '小小科学家', icon: FlaskConicalIcon, color: 'bg-cyan-50 text-cyan-500' },
                 { label: '活动报名', icon: CalendarIcon, color: 'bg-blue-50 text-blue-500' },
                 { label: '物业报修', icon: WrenchIcon, color: 'bg-red-50 text-red-500' },
                 { label: '场地预约', icon: MapPinIcon, color: 'bg-indigo-50 text-indigo-500' },
                 { label: '社区食堂', icon: UtensilsIcon, color: 'bg-yellow-50 text-yellow-600' }
               ].map((item, i) => (
                 <div key={i} className="flex-shrink-0 flex flex-col items-center relative group">
                    <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center shadow-sm relative`}>
                       <item.icon size={28} />
                       <div className={`absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full border-2 border-white flex items-center justify-center text-[10px] font-black shadow-sm ${
                         i < 3 ? 'bg-[#FF8C00] text-white' : 'bg-gray-100 text-gray-400'
                       }`}>
                          {i + 1}
                       </div>
                    </div>
                    <span className="text-[10px] mt-2 font-bold text-gray-700">{item.label}</span>
                 </div>
               ))}
            </div>
          </div>
        );
      case 'announcements':
        return (
          <div className="relative bg-[#FF8C00]/10 rounded-2xl overflow-hidden border border-[#FF8C00]/20 flex items-center p-3 px-4 group">
            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-30 transition-opacity"><GripVertical size={12} /></div>
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#FF8C00] mr-3 shrink-0 shadow-sm">
               <BellIcon size={16} />
            </div>
            <div className="flex-1 truncate">
              <div className="flex items-center space-x-2 mb-0.5">
                <span className="text-[10px] bg-[#FF8C00] text-white px-1.5 py-0.5 rounded font-bold">公告</span>
                <span className="text-xs font-bold text-[#FF8C00]">今日头条</span>
              </div>
              <p className="text-xs text-gray-700 font-medium truncate">关于本周三社区停水检修的通知...</p>
            </div>
            <ChevronRight size={14} className="text-[#FF8C00] opacity-50 ml-2" />
          </div>
        );
      case 'community_dynamics':
        return (
          <div className="space-y-3.5 relative group">
            <div className="absolute -top-1 right-1 opacity-0 group-hover:opacity-30 transition-opacity"><GripVertical size={16} /></div>
            <div className="flex justify-between items-center px-1">
               <div className="flex items-center space-x-2">
                 <div className="w-1 h-4 bg-green-500 rounded-full" />
                 <h3 className="font-extrabold text-gray-900">社区动态</h3>
               </div>
               <button className="text-[10px] text-gray-400 font-bold hover:text-[#FF8C00]">查看更多</button>
            </div>
            <div className="space-y-3">
               {news.map(item => (
                 <div key={item.id} className="bg-white p-3 rounded-2xl flex space-x-3 border border-gray-50 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] overflow-hidden transition-transform active:scale-[0.99]">
                    <img src={item.image} className="w-20 h-20 rounded-xl object-cover shrink-0" alt="" referrerPolicy="no-referrer" />
                    <div className="flex flex-col justify-between py-1 flex-1">
                       <div>
                          <h4 className="text-sm font-extrabold text-gray-800 line-clamp-1 leading-tight">{item.title}</h4>
                          <div className="flex items-center space-x-2 mt-2">
                             <span className="text-[9px] bg-green-50 text-green-600 px-2 py-0.5 rounded-full font-bold">{item.type}</span>
                             <span className="text-[9px] text-gray-400 font-medium">{item.time}</span>
                          </div>
                       </div>
                       <div className="flex items-center justify-between mt-auto">
                          <div className="flex -space-x-1.5">
                            {[1,2,3].map(i => (
                              <div key={i} className="w-5 h-5 rounded-full border-2 border-white bg-gray-100 overflow-hidden shadow-sm">
                                <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i+20}`} className="w-full h-full" alt="" referrerPolicy="no-referrer" />
                              </div>
                            ))}
                          </div>
                          <div className="text-[9px] text-gray-400 font-bold bg-gray-50 px-2 py-0.5 rounded-full leading-none">126人点赞</div>
                       </div>
                    </div>
                 </div>
               ))}
            </div>
          </div>
        );
      case 'discussion':
        return (
          <div className="bg-white p-5 rounded-3xl shadow-sm border border-gray-100 relative group">
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-30 transition-opacity"><GripVertical size={16} /></div>
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
        );
      case 'phone_dial':
        return (
          <div className="space-y-3 relative group">
            <div className="absolute top-0 right-1 opacity-0 group-hover:opacity-30 transition-opacity"><GripVertical size={16} /></div>
            <div className="flex justify-between items-center px-1">
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
        );
      default:
        return null;
    }
  };

  return (
    <div className="p-4 space-y-6">
      {/* Fixed: Header: Location & Weather */}
      <div className="flex justify-between items-center bg-white p-3 px-4 rounded-2xl shadow-sm border border-gray-50">
        <div className="flex items-center space-x-3 text-gray-800">
          <div className="bg-orange-50 p-1.5 rounded-lg">
            <MapPin size={20} className="text-[#FF8C00]" />
          </div>
          <div className="flex flex-col justify-center">
            <span className="text-base font-extrabold text-[#FF8C00] leading-none mb-1">为民服务</span>
            <div className="flex items-center space-x-1">
              <span className="font-bold text-xs text-gray-500 tracking-tight">老缸房社区</span>
              <span className="text-[9px] bg-gray-100 px-1 py-0.5 rounded text-gray-400 font-normal">自动定位</span>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-2 text-gray-600 bg-gray-50 px-3 py-1.5 rounded-xl">
          <Cloud size={16} className="text-blue-400" />
          <span className="text-xs font-medium">24°C 晴</span>
        </div>
      </div>

      {/* Fixed: Banner Carousel */}
      <div className="relative h-44 rounded-3xl overflow-hidden shadow-lg shadow-orange-100/50">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentBanner}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <img src={banners[currentBanner].image} className="w-full h-full object-cover" alt="" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-5 text-white">
               <h3 className="text-lg font-extrabold tracking-tight">{banners[currentBanner].title}</h3>
               <p className="text-xs text-gray-100 mt-1.5 font-medium opacity-90">{banners[currentBanner].desc}</p>
            </div>
          </motion.div>
        </AnimatePresence>
        <div className="absolute bottom-4 left-5 flex space-x-1.5">
          {banners.map((_, i) => (
            <div key={i} className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${i === currentBanner ? 'bg-[#FF8C00] w-4' : 'bg-white/60'}`} />
          ))}
        </div>
      </div>

      {/* Fixed: Quick Access Grid */}
      <div className="grid grid-cols-5 gap-2">
        {quickLinks.map((link) => (
          <button 
            key={link.id} 
            onClick={() => {
              if (link.label === '随手拍') onOpenSnapReport();
            }}
            className="flex flex-col items-center space-y-1.5 group"
          >
            <div className={`w-12 h-12 ${link.color} rounded-2xl flex items-center justify-center group-active:scale-95 transition-transform shadow-sm`}>
              <link.icon size={22} />
            </div>
            <span className="text-[10px] text-gray-600 font-medium">{link.label}</span>
          </button>
        ))}
      </div>

      {/* Reorderable Sections */}
      <Reorder.Group axis="y" values={sections} onReorder={setSections} className="space-y-6">
        {sections.map((sectionId) => (
          <Reorder.Item 
            key={sectionId} 
            value={sectionId}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            {renderSection(sectionId)}
          </Reorder.Item>
        ))}
      </Reorder.Group>
    </div>
  );
}

function CameraIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
      <circle cx="12" cy="13" r="3" />
    </svg>
  );
}

function BellIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  );
}

function FlaskConicalIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 2v7.5" />
      <path d="M14 2v7.5" />
      <path d="M8.5 2h7" />
      <path d="M14 11.5c.6 0 1.2.2 1.6.6l3.9 4.3c.9 1 1 2.5.2 3.6A3.6 3.6 0 0 1 16.8 22H7.2a3.6 3.6 0 0 1-2.9-1.5c-.8-1.1-.7-2.6.2-3.6l3.9-4.3c.4-.4 1-.6 1.6-.6h4z" />
    </svg>
  );
}

function CalendarIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  );
}

function WrenchIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  );
}

function MapPinIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function UtensilsIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
      <path d="M7 2v20" />
      <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
    </svg>
  );
}
