import React, { useState } from 'react';
import { Search, Calendar, MapPin, CreditCard, Wrench, Key, Utensils, Users, ShoppingBag, Heart, ShieldCheck, Microscope, FlaskConical, Baby, X, Gavel, Star, Phone, Stethoscope, Clock, Activity, Coffee, Hotel, Store, Navigation } from 'lucide-react';
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
  { id: 20, label: '15分钟\n生活圈', icon: Navigation, category: 'life', color: 'bg-indigo-50 text-indigo-600', isLifeCircle: true },
  { id: 3, label: '物业缴费', icon: CreditCard, category: 'life', color: 'bg-orange-50 text-orange-500' },
  { id: 4, label: '物业报修', icon: Wrench, category: 'life', color: 'bg-red-50 text-red-500' },
  { id: 5, label: '手机开门', icon: Key, category: 'life', color: 'bg-green-50 text-green-500' },
  { id: 6, label: '社区食堂', icon: Utensils, category: 'life', color: 'bg-yellow-50 text-yellow-600' },
  { id: 7, label: '社区拼团', icon: ShoppingBag, category: 'life', color: 'bg-pink-50 text-pink-500' },
  { id: 8, label: '邻里互助', icon: Users, category: 'life', color: 'bg-purple-50 text-purple-500' },
  
  { id: 9, label: '政策指南', icon: ShieldCheck, category: 'gov', color: 'bg-blue-50 text-blue-600' },
  { id: 10, label: '办证进度', icon: Calendar, category: 'gov', color: 'bg-teal-50 text-teal-600' },
  { id: 16, label: '法律援助', icon: Gavel, category: 'gov', color: 'bg-slate-50 text-slate-800', isLegalAid: true },
  
  { id: 21, label: '爱心助残\n超市', icon: ShoppingBag, category: 'life', color: 'bg-indigo-50 text-indigo-600', isCharityStore: true },
  { id: 22, label: '社区食堂', icon: Utensils, category: 'life', color: 'bg-orange-50 text-orange-500', isCanteen: true },

  { id: 11, label: '社区诊所', icon: Stethoscope, category: 'health', color: 'bg-rose-50 text-rose-500', isClinic: true },
  { id: 12, label: '智慧药柜', icon: ShoppingBag, category: 'health', color: 'bg-emerald-50 text-emerald-500' },

  { id: 15, label: '老缸房社区\n为老服务中心', icon: Baby, category: 'elderly', color: 'bg-orange-50 text-orange-600', isPoster: true },
  
  { id: 13, label: '科普预约', icon: Microscope, category: 'special', color: 'bg-violet-50 text-violet-500' },
  { id: 14, label: '小小科学家', icon: FlaskConical, category: 'special', color: 'bg-cyan-50 text-cyan-500' },
  { id: 23, label: '特约维修', icon: Wrench, category: 'life', color: 'bg-blue-50 text-blue-600' },
  { id: 24, label: '共享维修\n服务价目', icon: Wrench, category: 'life', color: 'bg-orange-50 text-orange-600', posterType: 'maintenance' },
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

function SharedMaintenancePoster({ onBack }: { onBack: () => void }) {
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
    <div className="bg-slate-50 p-5 pb-10 min-h-screen font-sans relative">
      <button 
        onClick={onBack}
        className="absolute top-4 right-4 p-2 bg-white/50 hover:bg-white text-gray-800 rounded-full transition-colors z-20"
      >
        <X size={20} />
      </button>
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
                <div key={`maintenance-item-${idx}-${i}`} className="p-4 flex justify-between items-start space-x-4">
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

function ElderlyServicePoster({ onBack }: { onBack: () => void }) {
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
    <div className="bg-[#FFF9F5] p-5 pb-10 min-h-screen font-sans relative">
      <button 
        onClick={onBack}
        className="absolute top-4 right-4 p-2 bg-[#FF8C00]/10 hover:bg-[#FF8C00]/20 text-[#FF8C00] rounded-full transition-colors z-20"
      >
        <X size={20} />
      </button>
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
                <div key={`elderly-item-${item.id}`} className="p-4 flex space-x-3 items-start">
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

function LifeCirclePoster({ onBack }: { onBack: () => void }) {
  const [activeTab, setActiveTab] = useState('catering');
  
  const categories = [
    { id: 'catering', label: '餐饮美食', icon: Coffee },
    { id: 'market', label: '超市便利', icon: Store },
    { id: 'hotel', label: '酒店住宿', icon: Hotel },
  ];

  const venues = {
    catering: [
      { name: '格拉丹草原火锅', distance: '320m', tag: '蒙餐', rating: '4.8' },
      { name: '老呼市焙子大王', distance: '150m', tag: '特色早点', rating: '4.9' },
      { name: '阿健食府', distance: '850m', tag: '融合菜', rating: '4.6' }
    ],
    market: [
      { name: '家乐福超市', distance: '1.2km', tag: '大型商超', rating: '4.5' },
      { name: '社区便利店', distance: '50m', tag: '生活便利', rating: '4.7' },
      { name: '维多利商业广场', distance: '1.5km', tag: '综合购物', rating: '4.8' }
    ],
    hotel: [
      { name: '如家精选酒店', distance: '450m', tag: '快捷连锁', rating: '4.4' },
      { name: '呼和浩特大酒店', distance: '2.1km', tag: '高端酒店', rating: '4.7' },
      { name: '青城宾馆', distance: '900m', tag: '政府定点', rating: '4.5' }
    ]
  };

  return (
    <div className="bg-[#F4F7FF] min-h-screen font-sans pb-10 relative">
      <button 
        onClick={onBack}
        className="absolute top-6 right-6 p-2 bg-indigo-900/10 hover:bg-indigo-900/20 text-indigo-900 rounded-full transition-colors z-20"
      >
        <X size={20} />
      </button>

      <div className="bg-gradient-to-br from-indigo-500 to-blue-700 p-8 pt-12 text-white relative overflow-hidden">
        <MapPin size={180} className="absolute -right-12 -bottom-12 opacity-10 rotate-12" />
        <div className="relative z-10">
          <div className="inline-flex items-center space-x-2 bg-white/20 px-3 py-1 rounded-full mb-4 backdrop-blur-md">
            <Navigation size={14} />
            <span className="text-[10px] font-black tracking-widest uppercase">15-Min Life Circle</span>
          </div>
          <h1 className="text-3xl font-black mb-2 tracking-tighter">15分钟生活圈</h1>
          <p className="opacity-80 text-sm font-medium">以老缸房社区为中心，触手可及的便捷</p>
        </div>
      </div>

      <div className="px-6 py-4 -mt-4">
        <div className="bg-white rounded-[2rem] p-2 shadow-xl shadow-indigo-100 flex items-center mb-6">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`flex-1 flex items-center justify-center space-x-2 py-3 rounded-2xl transition-all ${activeTab === cat.id ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200' : 'text-gray-400'}`}
            >
              <cat.icon size={16} />
              <span className="text-xs font-black">{cat.label}</span>
            </button>
          ))}
        </div>

        <div className="space-y-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-4"
            >
              {venues[activeTab as keyof typeof venues].map((venue, i) => (
                <div key={`venue-${activeTab}-${i}`} className="bg-white rounded-3xl p-5 border border-gray-50 shadow-sm flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 shrink-0">
                      {activeTab === 'catering' ? <Coffee size={24} /> : activeTab === 'market' ? <Store size={24} /> : <Hotel size={24} />}
                    </div>
                    <div>
                      <h4 className="text-sm font-black text-gray-900 mb-1">{venue.name}</h4>
                      <div className="flex items-center space-x-2">
                        <span className="text-[10px] bg-indigo-50 text-indigo-500 px-2 py-0.5 rounded-full font-bold">{venue.tag}</span>
                        <div className="flex items-center space-x-1 text-[10px] text-amber-500 font-black">
                          <Star size={10} fill="currentColor" />
                          <span>{venue.rating}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] font-black text-indigo-600 mb-0.5">{venue.distance}</p>
                    <p className="text-[9px] text-gray-400 font-medium">离社区中心</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      
      <div className="mt-6 px-8 py-6 bg-slate-900 rounded-[3rem] mx-6 text-white relative group overflow-hidden">
        <Navigation size={80} className="absolute -right-8 -bottom-8 opacity-10 group-hover:scale-110 transition-transform duration-500" />
        <h3 className="text-sm font-black mb-2">地图服务正在升级</h3>
        <p className="text-[10px] opacity-60 leading-relaxed italic">
          “智慧社区全图”功能即将上线，届时将支持商家在线预订及AR实景导航引路，敬请期待！
        </p>
      </div>
    </div>
  );
}

function CommunityCanteenPoster({ onBack }: { onBack: () => void }) {
  const menu = [
    { name: '红烧狮子头', elder: 8, regular: 12, tags: ['招牌', '肉类'] },
    { name: '西红柿炒鸡蛋', elder: 4, regular: 6, tags: ['营养', '素食'] },
    { name: '清蒸鱼块', elder: 10, regular: 15, tags: ['高蛋白'] },
    { name: '时令青菜', elder: 2, regular: 4, tags: ['清淡'] }
  ];

  return (
    <div className="bg-[#FFFDF9] min-h-screen font-sans pb-10 relative">
      <button 
        onClick={onBack}
        className="absolute top-6 right-6 p-2 bg-orange-900/10 hover:bg-orange-900/20 text-orange-900 rounded-full transition-colors z-20"
      >
        <X size={20} />
      </button>

      <div className="bg-gradient-to-br from-orange-400 to-red-500 p-8 pt-12 text-white relative overflow-hidden">
        <Utensils size={180} className="absolute -right-12 -bottom-12 opacity-10 rotate-12" />
        <div className="relative z-10">
          <div className="inline-flex items-center space-x-2 bg-white/20 px-3 py-1 rounded-full mb-4 backdrop-blur-md">
            <Utensils size={14} />
            <span className="text-[10px] font-black tracking-widest uppercase">Community Canteen</span>
          </div>
          <h1 className="text-3xl font-black mb-2 tracking-tighter">老缸房社区食堂</h1>
          <p className="opacity-80 text-sm font-medium">品质食材 • 守护邻里舌尖上的幸福</p>
        </div>
      </div>

      <div className="p-6 -mt-6">
        <div className="bg-white rounded-[2.5rem] p-6 shadow-xl shadow-orange-100 border border-orange-50/50 mb-8 space-y-6">
          <div className="grid grid-cols-2 gap-4">
             <div className="flex items-center space-x-3">
                <div className="p-2 bg-orange-50 text-orange-500 rounded-xl">
                  <Clock size={18} />
                </div>
                <div>
                   <h3 className="text-[9px] font-black text-gray-400 uppercase mb-0.5">营业时间</h3>
                   <p className="text-[11px] font-bold text-gray-800">11:00-13:30, 17:00-19:00</p>
                </div>
             </div>
             <div className="flex items-center space-x-3">
                <div className="p-2 bg-red-50 text-red-500 rounded-xl">
                  <Phone size={18} />
                </div>
                <div>
                   <h3 className="text-[9px] font-black text-gray-400 uppercase mb-0.5">送餐电话</h3>
                   <p className="text-[11px] font-bold text-gray-800">0471-1234432</p>
                </div>
             </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex items-center justify-between px-2">
            <div className="flex items-center space-x-2">
              <div className="w-1.5 h-4 bg-orange-500 rounded-full" />
              <h3 className="font-extrabold text-gray-900 text-sm">今日菜谱 (5月2日)</h3>
            </div>
            <span className="text-[10px] bg-orange-100 text-orange-600 px-2 py-0.5 rounded-lg font-black">营养均衡</span>
          </div>

          <div className="bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-sm">
            <div className="bg-gray-50/50 px-6 py-3 border-b border-gray-100 grid grid-cols-12 text-[10px] font-black text-gray-400 uppercase tracking-widest">
              <div className="col-span-5">菜品名称</div>
              <div className="col-span-3 text-center">长者折扣价</div>
              <div className="col-span-4 text-right">大众价格</div>
            </div>
            <div className="divide-y divide-gray-50 px-6">
              {menu.map((item, i) => (
                <div key={`canteen-menu-${i}`} className="py-4 grid grid-cols-12 items-center group">
                  <div className="col-span-5">
                    <h4 className="text-xs font-black text-gray-800 mb-1">{item.name}</h4>
                    <div className="flex gap-1">
                      {item.tags.map((tag, tagIdx) => (
                        <span key={`food-tag-${i}-${tagIdx}`} className="text-[8px] bg-gray-100 text-gray-400 px-1.5 rounded font-bold">{tag}</span>
                      ))}
                    </div>
                  </div>
                  <div className="col-span-3 text-center">
                    <div className="text-orange-600 font-black">
                      <span className="text-[8px]">¥</span>
                      <span className="text-sm">{item.elder}</span>
                    </div>
                  </div>
                  <div className="col-span-4 text-right text-gray-400 font-bold">
                    <span className="text-[8px]">¥</span>
                    <span className="text-xs">{item.regular}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 bg-orange-50 border border-orange-100 rounded-2xl p-4 flex items-start space-x-3">
          <div className="shrink-0 text-orange-500 mt-0.5"><Activity size={16} /></div>
          <p className="text-[10px] text-orange-800 leading-relaxed font-medium">
            <span className="font-black">温馨提示：</span>持社区长者卡用餐即可享受折扣。行动不便的高龄老人（80周岁及以上）可享受免费送餐上门服务。
          </p>
        </div>
      </div>
    </div>
  );
}

function DisabledSupportSupermarketPoster({ onBack }: { onBack: () => void }) {
  const subscriptions = [
    {
      id: 1,
      name: '圣迪乐谷物鸡蛋',
      spec: '每周1盒(10枚)',
      desc: '周期配送，新鲜到家',
      plans: [
        { title: '6盒周期购', price: 99, original: 120 },
        { title: '12盒周期购', price: 188, original: 240 }
      ],
      image: 'https://images.unsplash.com/photo-1582722872445-44359986bbff?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 2,
      name: '爱心扶贫大米',
      spec: '5kg/袋',
      desc: '源自残疾人辅助性就业基地',
      plans: [
        { title: '季度订阅(3袋)', price: 145, original: 165 },
        { title: '半年度订阅(6袋)', price: 270, original: 330 }
      ],
      image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=400&q=80'
    }
  ];

  return (
    <div className="bg-indigo-50 min-h-screen font-sans pb-10 relative">
      <button 
        onClick={onBack}
        className="absolute top-6 right-6 p-2 bg-indigo-900/10 hover:bg-indigo-900/20 text-indigo-900 rounded-full transition-colors z-20"
      >
        <X size={20} />
      </button>
      
      <div className="bg-gradient-to-br from-indigo-600 to-violet-700 p-8 pt-12 text-white relative overflow-hidden">
        <ShoppingBag size={180} className="absolute -right-12 -bottom-12 opacity-10 rotate-12" />
        <div className="relative z-10">
          <div className="inline-flex items-center space-x-2 bg-white/20 px-3 py-1 rounded-full mb-4 backdrop-blur-md">
            <Heart size={14} fill="currentColor" />
            <span className="text-[10px] font-black tracking-widest uppercase">Love Disability Support</span>
          </div>
          <h1 className="text-3xl font-black mb-2 tracking-tighter">老缸房社区·爱心助残超市</h1>
          <p className="opacity-80 text-sm font-medium">残联资助项目 • 每一份订购都是一份爱</p>
        </div>
      </div>

      <div className="p-6 -mt-6">
        <div className="flex items-center space-x-2 px-2 mb-6">
          <div className="w-1.5 h-4 bg-indigo-600 rounded-full" />
          <h3 className="font-extrabold text-indigo-900 text-sm">周期性精选订购</h3>
        </div>

        <div className="space-y-6">
          {subscriptions.map((sub) => (
            <div key={`charity-sub-${sub.id}`} className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl shadow-indigo-100 border border-indigo-50/50">
              <div className="h-48 w-full relative">
                <img src={sub.image} alt={sub.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h4 className="text-xl font-black mb-1">{sub.name}</h4>
                  <p className="text-xs opacity-80 font-bold">{sub.spec} | {sub.desc}</p>
                </div>
              </div>
              
              <div className="p-6 grid grid-cols-2 gap-4">
                {sub.plans.map((plan, pIdx) => (
                  <button key={`charity-plan-${sub.id}-${pIdx}`} className="flex flex-col items-center p-4 rounded-3xl border-2 border-indigo-50 bg-indigo-50/30 hover:border-indigo-400 hover:bg-white transition-all group">
                    <span className="text-[10px] font-black text-indigo-400 mb-2 uppercase tracking-tighter">{plan.title}</span>
                    <div className="flex items-baseline space-x-1 mb-1">
                      <span className="text-[10px] font-bold text-indigo-600">¥</span>
                      <span className="text-2xl font-black text-indigo-900">{plan.price}</span>
                    </div>
                    <span className="text-[9px] text-gray-400 line-through font-bold">原价 ¥{plan.original}</span>
                    <div className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-xl text-[10px] font-black opacity-0 group-hover:opacity-100 transition-opacity">
                      立即订阅
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-indigo-900 rounded-[2.5rem] p-6 text-white relative overflow-hidden">
           <div className="relative z-10">
              <h3 className="font-black text-sm mb-3">超市公告</h3>
              <ul className="text-[10px] space-y-2 opacity-70 italic">
                <li>• 本超市所有商品由市残联严格把关品质，价格低于市场价。</li>
                <li>• 部分营收将直接用于社区残障人士康复与就业补贴。</li>
                <li>• 周期购商品每周固定时间配送至社区驿站或送货上门。</li>
              </ul>
           </div>
        </div>
      </div>
    </div>
  );
}

function CommunityClinicPoster({ onBack }: { onBack: () => void }) {
  const doctors = [
    {
      name: '张国医',
      role: '中医科 主任医师',
      specialty: '中医内科、针灸理疗，擅长调理慢性胃炎、失眠及颈椎病。',
      time: '周一、周三、周五 08:30-11:30',
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=200&q=80'
    },
    {
      name: '王爱民',
      role: '全科医学 主治医师',
      specialty: '高血压、糖尿病等慢性病管理，常见呼吸道感染诊治。',
      time: '周二、周四 13:30-16:30，周六 09:00-12:00',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=200&q=80'
    }
  ];

  return (
    <div className="bg-[#F8FBFF] min-h-screen font-sans pb-10 relative">
      <button 
        onClick={onBack}
        className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors z-20"
      >
        <X size={20} />
      </button>
      <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-8 pt-12 text-white relative overflow-hidden">
        <Activity size={180} className="absolute -right-12 -bottom-12 opacity-10 rotate-12" />
        <div className="relative z-10">
          <div className="inline-flex items-center space-x-2 bg-white/20 px-3 py-1 rounded-full mb-4 backdrop-blur-md">
            <Stethoscope size={14} />
            <span className="text-[10px] font-black tracking-widest uppercase">Community Clinic</span>
          </div>
          <h1 className="text-3xl font-black mb-2 tracking-tighter">社区智慧诊所</h1>
          <p className="opacity-80 text-sm font-medium">守护邻里健康，让医疗服务更有温度</p>
        </div>
      </div>

      <div className="p-6 -mt-6">
        <div className="bg-white rounded-[2.5rem] p-6 shadow-xl shadow-blue-100 border border-blue-50/50 mb-8 space-y-6">
          <div className="flex items-start justify-between">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-50 text-blue-500 rounded-xl">
                  <Clock size={18} />
                </div>
                <div>
                   <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-0.5">上班时间</h3>
                   <p className="text-xs font-bold text-gray-800">周一至周六 08:30-11:30, 13:30-17:00</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-green-50 text-green-500 rounded-xl">
                  <Phone size={18} />
                </div>
                <div>
                   <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-0.5">咨询电话</h3>
                   <p className="text-xs font-bold text-gray-800">0471-6668888</p>
                </div>
              </div>
            </div>
            <a 
              href="tel:0471-6668888" 
              className="bg-blue-500 text-white p-4 rounded-2xl shadow-lg shadow-blue-100 active:scale-95 transition-transform"
            >
              <Phone size={20} fill="currentColor" />
            </a>
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex items-center space-x-2 px-2">
            <div className="w-1.5 h-4 bg-blue-500 rounded-full" />
            <h3 className="font-extrabold text-gray-900 text-sm">出诊大夫简介</h3>
          </div>

          <div className="grid gap-6">
            {doctors.map((doc, i) => (
              <div key={`doctor-${i}`} className="bg-white rounded-[2rem] p-5 shadow-sm border border-gray-100 flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-5">
                <div className="w-24 h-32 rounded-2xl bg-gray-100 overflow-hidden shrink-0 border border-gray-100">
                  <img src={doc.image} alt={doc.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:space-x-2 mb-2">
                    <h4 className="text-lg font-black text-gray-900">{doc.name}</h4>
                    <span className="text-[10px] font-bold text-blue-500 uppercase tracking-tight">{doc.role}</span>
                  </div>
                  <div className="bg-blue-50/50 rounded-xl p-3 mb-3">
                    <p className="text-[10px] text-gray-600 leading-relaxed font-medium">
                      <span className="text-blue-600 font-bold">专长：</span>{doc.specialty}
                    </p>
                  </div>
                  <div className="flex items-center justify-center sm:justify-start space-x-2 text-[10px] text-orange-600 font-bold">
                    <Calendar size={12} />
                    <span>出诊：{doc.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 bg-slate-900 rounded-[2.5rem] p-6 text-white overflow-hidden relative group">
           <Activity size={80} className="absolute -right-4 -bottom-4 opacity-10 group-hover:scale-110 transition-transform duration-500" />
           <h3 className="text-sm font-black mb-2">健康贴士</h3>
           <p className="text-[10px] opacity-60 leading-relaxed italic">
             “上工治未病”。建议居民每半年进行一次常规血压、血糖监测，预防胜于治疗。诊所提供免费基础体检咨询。
           </p>
        </div>
      </div>
    </div>
  );
}

function LegalAidPoster({ onBack }: { onBack: () => void }) {
  const cases = [
    { title: '遗产继承咨询', desc: '针对居民关心的房产及财产继承问题，提供专业法律指引，化解家庭矛盾。' },
    { title: '物业维修调解', desc: '精选物业报修纠纷案例，通过法律视角中立核查，展现公正高效的援助实效。' }
  ];

  return (
    <div className="bg-slate-900 min-h-screen text-slate-100 p-6 pb-20 font-sans relative">
      <button 
        onClick={onBack}
        className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors z-20"
      >
        <X size={20} />
      </button>
      <div className="text-center mb-10 pt-6">
        <div className="inline-flex items-center space-x-2 text-slate-400 mb-2 font-black tracking-[0.3em] uppercase text-xs">
          <Gavel size={16} />
          <span>Community Legal Aid</span>
        </div>
        <h1 className="text-3xl font-black text-white tracking-tighter mb-2">社区免费法律援助</h1>
        <p className="text-slate-400 text-[10px] font-bold">老缸房社区居民委员会 • 法律护航</p>
      </div>

      <div className="space-y-6">
        <div className="flex items-center space-x-2 px-2">
           <div className="w-1.5 h-4 bg-slate-400 rounded-full" />
           <h3 className="font-extrabold text-slate-200 text-sm">援助典型案例</h3>
        </div>
        
        <div className="grid gap-4">
          {cases.map((c, i) => (
            <div key={`legal-case-${i}`} className="bg-slate-800/50 border border-slate-700/50 p-5 rounded-3xl backdrop-blur-sm">
              <h4 className="text-white font-black text-sm mb-2">【案例】{c.title}</h4>
              <p className="text-slate-400 text-[11px] leading-relaxed italic">{c.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-8">
           <div className="flex items-center space-x-2 px-2 mb-4">
              <div className="w-1.5 h-4 bg-slate-400 rounded-full" />
              <h3 className="font-extrabold text-slate-200 text-sm">李律师直通车</h3>
           </div>
           
           <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/60 p-6 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
              <Gavel size={120} className="absolute -right-8 -bottom-8 opacity-[0.03] text-white transform -rotate-12 group-hover:scale-110 transition-transform duration-700" />
              
              <div className="relative z-10">
                <div className="flex items-center space-x-4 mb-6">
                   <div className="w-14 h-14 rounded-2xl bg-slate-700 border border-slate-600 flex items-center justify-center p-0.5 overflow-hidden">
                      <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80" alt="李律师" className="w-full h-full object-cover" />
                   </div>
                   <div>
                      <h4 className="text-white font-black text-lg">李华 律师</h4>
                      <div className="text-[10px] text-slate-500 font-bold tracking-widest uppercase mb-0.5">Senior Legal Advisor</div>
                   </div>
                </div>
                
                <p className="text-slate-400 text-xs leading-relaxed mb-8">
                  为您提供专业的婚姻家庭、遗产继承、合同纠纷、劳动争议等领域的法律服务。一站式解决您的烦心事。
                </p>
                
                <a 
                  href="tel:13312341234" 
                  className="w-full bg-white text-slate-900 py-4 rounded-2xl font-black flex items-center justify-center space-x-3 active:scale-[0.98] transition-transform shadow-xl shadow-white/5"
                >
                  <Phone size={18} fill="currentColor" />
                  <span>拨打李律师咨询电话</span>
                </a>
                
                <div className="mt-4 flex items-center justify-center space-x-4 text-[9px] text-slate-600 font-bold uppercase tracking-tighter">
                   <span>官方认证</span>
                   <div className="w-1 h-1 rounded-full bg-slate-700" />
                   <span>完全免费</span>
                   <div className="w-1 h-1 rounded-full bg-slate-700" />
                   <span>隐私合规</span>
                </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}

export default function Service() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activePoster, setActivePoster] = useState<'elderly' | 'maintenance' | 'application' | 'legal' | 'clinic' | 'charity' | 'canteen' | 'lifecircle' | null>(null);
  const [activePurchase, setActivePurchase] = useState<any>(null);
  const [customToast, setCustomToast] = useState<string | null>(null);
  const [showToast, setShowToast] = useState(false);

  const isLit = (service: any) => {
    return (
      ('isPoster' in service && service.isPoster) || 
      ('posterType' in service && service.posterType === 'maintenance') || 
      ('isApplication' in service && service.isApplication) ||
      ('isLegalAid' in service && service.isLegalAid) ||
      ('isClinic' in service && service.isClinic) ||
      ('isCharityStore' in service && service.isCharityStore) ||
      ('isCanteen' in service && service.isCanteen) ||
      ('isLifeCircle' in service && service.isLifeCircle)
    );
  };

  const filteredServices = (activeCategory === 'all' 
    ? SERVICES 
    : SERVICES.filter(s => s.category === activeCategory)
  ).sort((a, b) => {
    // Priority: Lit icons first
    const aLit = isLit(a) ? 1 : 0;
    const bLit = isLit(b) ? 1 : 0;
    return bLit - aLit;
  });

  const handleServiceClick = (service: any) => {
    if (isLit(service)) {
      if ('isPoster' in service && service.isPoster) {
        setActivePoster('elderly');
      } else if ('posterType' in service && service.posterType === 'maintenance') {
        setActivePoster('maintenance');
      } else if ('isApplication' in service && service.isApplication) {
        setActivePoster('application');
      } else if ('isLegalAid' in service && service.isLegalAid) {
        setActivePoster('legal');
      } else if ('isClinic' in service && service.isClinic) {
        setActivePoster('clinic');
      } else if ('isCharityStore' in service && service.isCharityStore) {
        setActivePoster('charity');
      } else if ('isCanteen' in service && service.isCanteen) {
        setActivePoster('canteen');
      } else if ('isLifeCircle' in service && service.isLifeCircle) {
        setActivePoster('lifecircle');
      } else {
        setShowToast(true);
        setTimeout(() => setShowToast(false), 2000);
      }
    } else {
      // Unlit icons handling
      if (service.id === 3 || service.id === 5) {
        setActivePurchase(service);
      } else {
        setCustomToast("功能未开通，开通请联系电话0471-6891234");
        setTimeout(() => setCustomToast(null), 3000);
      }
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
              key={`main-service-${service.id}`} 
              onClick={() => handleServiceClick(service)}
              className="flex flex-col items-center space-y-2 active:scale-95 transition-transform"
            >
              <div className={`w-14 h-14 ${service.color} rounded-2xl flex items-center justify-center shadow-sm ${!isLit(service) ? 'grayscale contrast-50 opacity-60' : ''}`}>
                <service.icon size={28} />
              </div>
              <span className={`text-[11px] font-medium text-center leading-tight whitespace-pre-line ${!isLit(service) ? 'text-gray-400' : 'text-gray-600'}`}>
                {service.label}
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Toast Notification */}
      <AnimatePresence>
        {(showToast || customToast) && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-24 left-4 right-4 z-[100] bg-gray-800/90 text-white px-6 py-3 rounded-2xl text-xs font-bold backdrop-blur-md shadow-xl text-center"
          >
            {customToast || "🚧 该功能开发中..."}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Purchase Modal */}
      <AnimatePresence>
        {activePurchase && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/40 backdrop-blur-sm">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-[2.5rem] w-full max-w-sm overflow-hidden shadow-2xl"
            >
              <div className={`p-8 text-center ${activePurchase.color.split(' ')[0]} bg-opacity-20`}>
                <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-sm text-gray-400 grayscale">
                  <activePurchase.icon size={32} />
                </div>
                <h3 className="text-lg font-black text-gray-900 mb-1">{activePurchase.label.replace('\n', '')}</h3>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Premium Service</p>
              </div>
              
              <div className="p-8 space-y-6">
                <div className="bg-gray-50 rounded-2xl p-4 flex items-center justify-between">
                  <span className="text-xs font-bold text-gray-500">开通价格</span>
                  <span className="text-sm font-black text-orange-600">
                    {activePurchase.id === 3 ? "5000元/年" : "660元/单元门或出入门"}
                  </span>
                </div>
                
                <div className="flex items-start space-x-3 text-left">
                  <div className="p-1 bg-blue-50 text-blue-500 rounded-full mt-0.5"><Activity size={12} /></div>
                  <p className="text-[10px] text-gray-500 font-medium leading-relaxed text-balance">
                    功能未开通，购买后即可开通。让您尽享智慧生活的便捷，我们的专业团队将即刻为您完成系统接入。
                  </p>
                </div>
                
                <div className="pt-2 space-y-3">
                  <button 
                    onClick={() => {
                      alert("正在准备开通环境...");
                      setActivePurchase(null);
                    }}
                    className="w-full bg-[#FF8C00] text-white py-4 rounded-2xl font-black text-sm shadow-lg shadow-orange-100 active:scale-95 transition-transform"
                  >
                    在线开通服务
                  </button>
                  <button 
                    onClick={() => setActivePurchase(null)}
                    className="w-full text-gray-400 py-2 text-xs font-bold hover:text-gray-600 transition-colors"
                  >
                    稍后再说
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
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
              {activePoster === 'elderly' && <ElderlyServicePoster onBack={() => setActivePoster(null)} />}
              {activePoster === 'maintenance' && <SharedMaintenancePoster onBack={() => setActivePoster(null)} />}
              {activePoster === 'legal' && <LegalAidPoster onBack={() => setActivePoster(null)} />}
              {activePoster === 'clinic' && <CommunityClinicPoster onBack={() => setActivePoster(null)} />}
              {activePoster === 'charity' && <DisabledSupportSupermarketPoster onBack={() => setActivePoster(null)} />}
              {activePoster === 'canteen' && <CommunityCanteenPoster onBack={() => setActivePoster(null)} />}
              {activePoster === 'lifecircle' && <LifeCirclePoster onBack={() => setActivePoster(null)} />}
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
