import React, { useState } from 'react';
import { Search, Calendar, MapPin, CreditCard, Wrench, Key, Utensils, Users, ShoppingBag, Heart, ShieldCheck, Microscope, FlaskConical, Baby, X, Gavel, Star, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const CATEGORIES = [
  { id: 'all', label: '全部' },
  { id: 'life', label: '生活服务' },
  { id: 'gov', label: '政务服务' },
  { id: 'health', label: '健康服务' },
  { id: 'elderly', label: '为老服务' },
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
  { id: 16, label: '法律援助', icon: Gavel, category: 'gov', color: 'bg-slate-50 text-slate-600' },
  
  { id: 11, label: '预约问诊', icon: Heart, category: 'health', color: 'bg-rose-50 text-rose-500' },
  { id: 12, label: '智慧药柜', icon: ShoppingBag, category: 'health', color: 'bg-emerald-50 text-emerald-500' },

  { id: 15, label: '老缸房社区\n为老服务中心', icon: Baby, category: 'elderly', color: 'bg-orange-50 text-orange-600', isPoster: true },
  
  { id: 13, label: '科普预约', icon: Microscope, category: 'special', color: 'bg-violet-50 text-violet-500' },
  { id: 14, label: '小小科学家', icon: FlaskConical, category: 'special', color: 'bg-cyan-50 text-cyan-500' },
  { id: 17, label: '特约维修', icon: Wrench, category: 'life', color: 'bg-blue-50 text-blue-600' },
  { id: 18, label: '共享维修\n服务价目', icon: Wrench, category: 'life', color: 'bg-orange-50 text-orange-600', posterType: 'maintenance' },
  { id: 19, label: '社区达人\n申请', icon: Star, category: 'special', color: 'bg-amber-50 text-amber-600', isApplication: true },
];

function CommunityTalentApplication({ onBack }: { onBack: () => void }) {
  const [status, setStatus] = useState<'form' | 'submitting' | 'pending'>('form');
  const [formData, setFormData] = useState({ name: '', role: '', expertise: '', intro: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => setStatus('pending'), 1500);
  };

  if (status === 'submitting') {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-4">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
          className="w-12 h-12 border-4 border-amber-100 border-t-amber-600 rounded-full"
        />
        <p className="text-sm font-bold text-gray-500">正在提交申请...</p>
      </div>
    );
  }

  if (status === 'pending') {
    return (
      <div className="p-8 flex flex-col items-center justify-center min-h-[80vh] text-center space-y-6 text-gray-900">
        <div className="w-24 h-24 bg-amber-50 rounded-full flex items-center justify-center mb-4">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-amber-500"
          >
            <Calendar size={48} />
          </motion.div>
        </div>
        <h2 className="text-2xl font-black">审核中</h2>
        <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
          您的“社区达人”申请已收到，工作人员将在3个工作日内完成资料审核，请耐心等待。
        </p>
        
        <div className="w-full bg-orange-50 p-6 rounded-3xl border border-orange-100 mt-8">
           <p className="text-xs font-bold text-orange-600 mb-4">长时间未审核？可直拨社区热线反映：</p>
           <a 
             href="tel:021-12345678" 
             className="w-full bg-orange-500 text-white py-4 rounded-2xl font-black flex items-center justify-center space-x-2 shadow-lg shadow-orange-100 active:scale-95 transition-transform"
           >
             <Phone size={18} fill="currentColor" />
             <span>联系社区直拨</span>
           </a>
        </div>

        <button onClick={onBack} className="text-sm font-bold text-gray-400 mt-4">返回服务列表</button>
      </div>
    );
  }

  return (
    <div className="p-6 pb-20 text-gray-900">
      <div className="flex items-center space-x-3 mb-8">
         <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center text-amber-600">
            <Star size={20} fill="currentColor" />
         </div>
         <div>
            <h2 className="text-xl font-black">申请社区达人</h2>
            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Share Your Expertise</p>
         </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-500 ml-1">真实姓名</label>
            <input 
              required
              type="text" 
              placeholder="请输入您的姓名"
              className="w-full bg-gray-50 border-none rounded-2xl p-4 text-sm font-bold focus:ring-2 focus:ring-amber-500"
              value={formData.name}
              onChange={e => setFormData({...formData, name: e.target.value})}
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-500 ml-1">擅长类别</label>
            <select 
              required
              className="w-full bg-gray-50 border-none rounded-2xl p-4 text-sm font-bold focus:ring-2 focus:ring-amber-500 appearance-none"
              value={formData.role}
              onChange={e => setFormData({...formData, role: e.target.value})}
            >
              <option value="">请选择类别</option>
              <option value="维修">居家维修</option>
              <option value="健康">健康咨询</option>
              <option value="艺术">文化艺术</option>
              <option value="教育">课业辅导</option>
              <option value="其他">其他特长</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-500 ml-1">专业标签 (逗号分隔)</label>
            <input 
              required
              type="text" 
              placeholder="如：修灯具, 水电维修, 开锁"
              className="w-full bg-gray-50 border-none rounded-2xl p-4 text-sm font-bold focus:ring-2 focus:ring-amber-500"
              value={formData.expertise}
              onChange={e => setFormData({...formData, expertise: e.target.value})}
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-500 ml-1">个人简介</label>
            <textarea 
              required
              rows={4}
              placeholder="介绍一下您的工作经验或社区服务经历..."
              className="w-full bg-gray-50 border-none rounded-2xl p-4 text-sm font-bold focus:ring-2 focus:ring-amber-500"
              value={formData.intro}
              onChange={e => setFormData({...formData, intro: e.target.value})}
            />
          </div>
        </div>

        <div className="bg-amber-50 p-4 rounded-2xl flex items-start space-x-3">
           <ShieldCheck size={18} className="text-amber-600 shrink-0 mt-0.5" />
           <p className="text-[10px] text-amber-700 leading-relaxed font-medium">
             申请通过后，您的资料将展示在“社区共享达人”板块，方便邻里联系。我们承诺保护您的个人隐私信息。
           </p>
        </div>

        <button 
          type="submit"
          className="w-full bg-amber-500 text-white py-5 rounded-[24px] text-sm font-black shadow-xl shadow-amber-100 mt-4 active:scale-95 transition-transform"
        >
          提交认证申请
        </button>
      </form>
    </div>
  );
}

function SharedMaintenancePoster() {
  const sections = [
    {
      title: '电路灯具类维修',
      items: [
        { id: 1, name: '更换普通灯泡、节能灯、筒灯灯泡', price: '10', unit: '个', desc: '简单徒手更换，无需接线打孔' },
        { id: 2, name: '更换灯座、灯芯、灯头', price: '20', unit: '个', desc: '含拆旧、基础接线，不含打孔' },
        { id: 3, name: '更换普通开关、五孔插座', price: '25', unit: '个', desc: '含拆旧、接线、固定，不含墙面开槽' },
        { id: 4, name: '更换客厅/卧室/浴霸/厨房灯', price: '40', unit: '个', desc: '含拆旧、接线、固定、调试' },
        { id: 5, name: '更换空气开关、漏电保护器', price: '30', unit: '个', desc: '含接线调试' },
      ]
    },
    {
      title: '水路卫浴类维修',
      items: [
        { id: 1, name: '更换普通单冷水龙头', price: '30', unit: '个', desc: '含拆旧、安装、试水，不含生料带' },
        { id: 2, name: '更换混水龙头、花洒套装', price: '70', unit: '套', desc: '含拆装、试水、调试' },
        { id: 3, name: '更换三角阀、进水软管、厨宝漏水', price: '30', unit: '个', desc: '含拆旧、安装' },
        { id: 4, name: '普通马桶疏通（轻微堵塞）', price: '70', unit: '次', desc: '硬物堵塞、主管道堵塞需加价' },
        { id: 5, name: '马桶水箱维修、更换配件', price: '80', unit: '次', desc: '含拆装配件、试水，不含马桶主体' },
        { id: 6, name: '明管漏水维修、接头更换', price: '70', unit: '次', desc: '不含管材，暗管漏水需额外加价' },
        { id: 7, name: '洗手盆、洗菜盆漏水维修', price: '50', unit: '次', desc: '含密封、调试' },
        { id: 8, name: '清洗暖气滤网', price: '30', unit: '次', desc: '对暖气滤网拆卸、清洗、疏通' },
        { id: 9, name: '更换暖气阀门、分水器', price: '80', unit: '次', desc: '含拆除、更换' },
      ]
    },
    {
      title: '门窗五金类维修',
      items: [
        { id: 1, name: '维修门窗合页、铰链、调试推拉', price: '40', unit: '扇', desc: '含润滑、调试，不含合页更换' },
        { id: 2, name: '更换室内门锁芯、门把手', price: '60', unit: '个', desc: '含拆旧、安装，不含防盗门锁体' },
      ]
    }
  ];

  return (
    <div className="bg-slate-50 p-5 pb-10 min-h-screen font-sans">
      <div className="text-center mb-8 pt-4">
        <div className="inline-flex items-center space-x-2 text-slate-800 mb-2 font-black tracking-widest text-lg uppercase">
          <Wrench size={24} className="text-blue-600" />
          <span>共享维修服务</span>
        </div>
        <div className="text-slate-400 text-[10px] font-bold opacity-80 letter-spacing-[0.2em] mb-4">—— 东 街 物 业 服 务 中 心 ——</div>
        <h1 className="text-3xl font-black text-slate-900 tracking-tighter leading-tight">
          服务价目表
        </h1>
      </div>

      <div className="space-y-8">
        {sections.map((section, idx) => (
          <div key={idx} className="space-y-3">
            <div className="flex items-center space-x-2 px-2">
              <div className="w-1 h-4 bg-blue-600 rounded-full" />
              <h3 className="font-black text-gray-900 text-sm">{section.title}</h3>
            </div>
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 divide-y divide-slate-50">
              {section.items.map((item, i) => (
                <div key={i} className="p-4 flex justify-between items-start space-x-4">
                  <div className="flex-1 space-y-1">
                    <h4 className="font-bold text-gray-800 text-xs leading-relaxed">{item.name}</h4>
                    <p className="text-[10px] text-gray-400 italic">备注：{item.desc}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="font-black text-blue-600 text-sm">¥{item.price}</div>
                    <div className="text-[9px] text-gray-400 font-bold">/{item.unit}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 p-6 bg-white rounded-[40px] border-2 border-blue-100 shadow-xl shadow-blue-50 flex flex-col items-center">
         <div className="text-[10px] font-black text-blue-400 tracking-widest uppercase mb-1">报修联系电话</div>
         <a href="tel:15548837989" className="font-black text-3xl text-blue-600 tabular-nums">15548837989</a>
         <div className="mt-4 flex items-center space-x-2 text-[10px] text-gray-400 font-bold">
            <ShieldCheck size={14} className="text-blue-600" />
            <span>专业技师 • 价格透明 • 售后保障</span>
         </div>
      </div>

      <div className="mt-8 text-center">
        <p className="text-[10px] text-gray-400 font-medium">※ 人工费不含材料费，特殊复杂情况请现场咨询师傅</p>
      </div>
    </div>
  );
}

function ElderlyServicePoster() {
  const categories = [
    { name: '生活照料类', items: [
      { id: 1, name: '日间照料', content: '提供日间托管、餐饮、休息、健康监测等服务', type: '按次', price: '25元／次' },
      { id: 2, name: '助餐服务', content: '提供营养均衡的午餐、晚餐', type: '按次', price: '15元/餐' },
      { id: 3, name: '助浴服务', content: '协助洗澡、擦身、基础护理', type: '按次', price: '40元／次' },
      { id: 4, name: '助洁服务', content: '室内清洁、衣物清洗、整理收纳', type: '按次', price: '30元／次' },
      { id: 5, name: '助行服务', content: '陪同散步、外出就医、代办事务', type: '按次', price: '30元／次' },
    ]},
    { name: '健康护理类', items: [
      { id: 6, name: '健康监测', content: '血压、血糖、体温等基础健康监测', type: '按次', price: '15元／次' },
      { id: 7, name: '陪同就医', content: '陪同挂号、就诊、取药等', type: '按次', price: '60元／次' },
      { id: 8, name: '康复护理', content: '康复训练、术后护理、慢病护理', type: '按时', price: '80元／小时' },
      { id: 9, name: '心理关怀', content: '心理疏导、情绪支持、陪伴聊天', type: '按时', price: '60元／小时' },
    ]},
    { name: '居家服务类', items: [
      { id: 10, name: '家务服务', content: '打扫卫生、整理家务、垃圾清运', type: '按次', price: '40元／次' },
      { id: 11, name: '代购代办', content: '生活用品代购、代取快递、代缴费', type: '按次', price: '20元／次' },
      { id: 12, name: '代买代送', content: '食材、药品代买，送货上门', type: '按次', price: '15元／次' },
      { id: 13, name: '维修服务', content: '水电维修、简单家电维修', type: '按次', price: '50元／次起' },
    ]},
    { name: '精神文化类', items: [
      { id: 14, name: '老年课堂', content: '书法、绘画、手工、智能手机等课程', type: '按次', price: '20元／次' },
      { id: 15, name: '文体活动', content: '棋牌、唱歌、手工、节日活动等', type: '按次', price: '15元／次' },
      { id: 16, name: '志愿陪伴', content: '志愿者上门陪伴、读书、聊天', type: '按时', price: '50元／小时' },
    ]},
    { name: '安全保障类', items: [
      { id: 17, name: '上门巡访', content: '定期上门探访，了解身体状况', type: '按次', price: '20元／次' },
      { id: 18, name: '紧急救助', content: '突发情况紧急救助与紧急联络', type: '按次', price: '免费' },
      { id: 19, name: '安全检查', content: '用电、用气安全检查', type: '按次', price: '30元／次' },
    ]},
  ];

  return (
    <div className="bg-[#FFF9F5] p-5 pb-10 min-h-screen font-sans">
      <div className="text-center mb-8 pt-4">
        <div className="inline-flex items-center space-x-2 text-[#FF8C00] mb-2 font-bold tracking-widest text-lg">
          <Heart size={24} fill="currentColor" />
          <span>老缸房社区</span>
        </div>
        <div className="text-[#FF8C00] text-[10px] font-bold opacity-80 letter-spacing-[0.2em] mb-4">—— 为 老 服 务 中 心 ——</div>
        <h1 className="text-2xl font-black text-[#D35400] tracking-tighter leading-tight flex flex-col">
          <span>为老服务中心</span>
          <span>服务项目</span>
        </h1>
      </div>

      <div className="space-y-6">
        {categories.map((cat, idx) => (
          <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-orange-100/50">
            <div className="bg-gradient-to-r from-[#FF8C00] to-[#FFB347] px-4 py-2 text-white flex items-center justify-between">
              <span className="font-bold text-xs">{cat.name}</span>
            </div>
            <div className="divide-y divide-orange-50">
              {cat.items.map((item) => (
                <div key={item.id} className="p-4 flex space-x-3 items-start">
                  <div className="w-5 h-5 rounded-full bg-orange-50 text-[#FF8C00] flex items-center justify-center text-[10px] font-black shrink-0 mt-0.5">
                    {item.id}
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="flex justify-between items-start">
                      <h4 className="font-bold text-gray-800 text-xs">{item.name}</h4>
                      <span className="text-[#FF8C00] font-black text-[11px] ml-2 shrink-0">{item.price}</span>
                    </div>
                    <p className="text-[10px] text-gray-500 leading-normal italic">{item.content}</p>
                    <div className="inline-block px-1.5 py-0.5 bg-gray-50 text-gray-400 text-[8px] rounded font-bold">
                      {item.type}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 space-y-6 text-center">
        <div className="flex justify-center space-x-3 text-[9px] font-black text-[#D35400] opacity-60">
          <span>专业服务</span>
          <span>•</span>
          <span>贴心陪伴</span>
          <span>•</span>
          <span>诚信为本</span>
          <span>•</span>
          <span>关爱长者</span>
        </div>
        
        <div className="bg-white p-4 rounded-3xl border-2 border-orange-100 shadow-lg shadow-orange-100 flex flex-col items-center">
           <div className="flex items-center space-x-2 mb-1">
              <span className="font-black text-xl text-[#FF8C00]">0471-123456</span>
           </div>
           <div className="text-[9px] font-black text-orange-400 tracking-widest uppercase">24小时服务热线</div>
        </div>

        <div className="space-y-1">
          <p className="text-[#FF8C00] font-bold text-xs tracking-widest">让关爱温暖每一位长者</p>
          <p className="text-orange-300 font-bold text-[10px] tracking-tight">用心服务每一天</p>
        </div>
      </div>
    </div>
  );
}

export default function Service() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activePoster, setActivePoster] = useState<'elderly' | 'maintenance' | 'application' | null>(null);
  const [showToast, setShowToast] = useState(false);

  const filteredServices = activeCategory === 'all' 
    ? SERVICES 
    : SERVICES.filter(s => s.category === activeCategory);

  const isActive = (service: any) => {
    return (
      ('isPoster' in service && service.isPoster) || 
      ('posterType' in service && service.posterType === 'maintenance') || 
      ('isApplication' in service && service.isApplication)
    );
  };

  const handleServiceClick = (service: any) => {
    if ('isPoster' in service && service.isPoster) {
      setActivePoster('elderly');
    } else if ('posterType' in service && service.posterType === 'maintenance') {
      setActivePoster('maintenance');
    } else if ('isApplication' in service && service.isApplication) {
      setActivePoster('application');
    } else {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000);
    }
  };

  return (
    <div className="flex flex-col h-full bg-gray-50 pb-20 relative">
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
              onClick={() => handleServiceClick(service)}
              className="flex flex-col items-center space-y-2 active:scale-95 transition-transform"
            >
              <div className={`w-14 h-14 ${service.color} rounded-2xl flex items-center justify-center shadow-sm ${!isActive(service) ? 'grayscale contrast-50 opacity-60' : ''}`}>
                <service.icon size={28} />
              </div>
              <span className={`text-[11px] font-medium text-center leading-tight whitespace-pre-line ${!isActive(service) ? 'text-gray-400' : 'text-gray-600'}`}>
                {service.label}
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-24 left-1/2 -translate-x-1/2 z-[100] bg-gray-800/90 text-white px-6 py-2.5 rounded-full text-xs font-bold backdrop-blur-md shadow-xl"
          >
            🚧 该功能开发中...
          </motion.div>
        )}
      </AnimatePresence>

      {/* Poster Modal */}
      <AnimatePresence>
        {activePoster && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-white overflow-y-auto"
          >
            <div className="relative">
              <button 
                onClick={() => setActivePoster(null)}
                className="fixed top-6 right-6 z-[60] bg-black/10 hover:bg-black/20 text-black rounded-full p-2 backdrop-blur-md transition-colors"
              >
                <X size={24} />
              </button>
              {activePoster === 'elderly' && <ElderlyServicePoster />}
              {activePoster === 'maintenance' && <SharedMaintenancePoster />}
              {activePoster === 'application' && (
                <div className="bg-white min-h-screen">
                  <CommunityTalentApplication onBack={() => setActivePoster(null)} />
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
