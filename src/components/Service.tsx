import { useState } from 'react';
import { Search, Calendar, MapPin, CreditCard, Wrench, Key, Utensils, Users, ShoppingBag, Heart, ShieldCheck, Microscope, FlaskConical } from 'lucide-react';
import { motion } from 'motion/react';

const CATEGORIES = [
  { id: 'all', label: '全部' },
  { id: 'life', label: '生活服务' },
  { id: 'gov', label: '政务服务' },
  { id: 'health', label: '健康服务' },
  { id: 'special', label: '特色服务' },
];

const SERVICES = [
  { id: 1, label: '活动报名', icon: Calendar, category: 'life', color: 'bg-blue-50 text-blue-500' },
  { id: 2, label: '场地预约', icon: MapPin, category: 'life', color: 'bg-indigo-50 text-indigo-500' },
  { id: 3, label: '物业缴费', icon: CreditCard, category: 'life', color: 'bg-orange-50 text-orange-500' },
  { id: 4, label: '物业报修', icon: Wrench, category: 'life', color: 'bg-red-50 text-red-500' },
  { id: 5, label: '手机开门', icon: Key, category: 'life', color: 'bg-green-50 text-green-500' },
  { id: 6, label: '社区食堂', icon: Utensils, category: 'life', color: 'bg-yellow-50 text-yellow-600' },
  { id: 7, label: '社区拼团', icon: ShoppingBag, category: 'life', color: 'bg-pink-50 text-pink-500' },
  { id: 8, label: '邻里互助', icon: Users, category: 'life', color: 'bg-purple-50 text-purple-500' },
  
  { id: 9, label: '政策指南', icon: ShieldCheck, category: 'gov', color: 'bg-blue-50 text-blue-600' },
  { id: 10, label: '办证进度', icon: Calendar, category: 'gov', color: 'bg-teal-50 text-teal-600' },
  
  { id: 11, label: '预约问诊', icon: Heart, category: 'health', color: 'bg-rose-50 text-rose-500' },
  { id: 12, label: '智慧药柜', icon: ShoppingBag, category: 'health', color: 'bg-emerald-50 text-emerald-500' },
  
  { id: 13, label: '科普预约', icon: Microscope, category: 'special', color: 'bg-violet-50 text-violet-500' },
  { id: 14, label: '小小科学家', icon: FlaskConical, category: 'special', color: 'bg-cyan-50 text-cyan-500' },
];

export default function Service() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredServices = activeCategory === 'all' 
    ? SERVICES 
    : SERVICES.filter(s => s.category === activeCategory);

  return (
    <div className="flex flex-col h-full bg-gray-50 pb-20">
      <div className="bg-white px-4 pt-6 pb-4">
        <h1 className="text-xl font-bold mb-4">社区服务</h1>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input 
            type="text" 
            placeholder="搜索您需要的服务" 
            className="w-full bg-gray-100 border-none rounded-xl py-2.5 pl-10 pr-4 text-sm focus:ring-2 focus:ring-[#FF8C00]/20"
          />
        </div>
      </div>

      {/* Category Tabs */}
      <div className="sticky top-0 bg-white z-10 flex space-x-6 px-4 py-3 border-b border-gray-50 overflow-x-auto scrollbar-hide">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`whitespace-nowrap text-sm font-medium transition-colors relative pb-1 ${
              activeCategory === cat.id ? 'text-[#FF8C00]' : 'text-gray-400 font-normal hover:text-gray-600'
            }`}
          >
            {cat.label}
            {activeCategory === cat.id && (
              <motion.div 
                layoutId="active-category" 
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FF8C00] rounded-full" 
              />
            )}
          </button>
        ))}
      </div>

      {/* Services Grid */}
      <div className="p-4 flex-1">
        <div className="grid grid-cols-4 gap-y-6 gap-x-3">
          {filteredServices.map((service) => (
            <motion.button 
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              key={service.id} 
              className="flex flex-col items-center space-y-2 active:scale-95 transition-transform"
            >
              <div className={`w-14 h-14 ${service.color} rounded-2xl flex items-center justify-center shadow-sm`}>
                <service.icon size={28} />
              </div>
              <span className="text-[11px] text-gray-600 font-medium text-center leading-tight">
                {service.label}
              </span>
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
}
