import React, { useState } from 'react';
import { Search, Calendar, MapPin, CreditCard, Wrench, Key, Utensils, Users, ShoppingBag, Heart, ShieldCheck, Microscope, FlaskConical, Baby, X, Gavel, Star, Phone, Stethoscope, Clock, Activity, Coffee, Hotel, Store, Navigation, MessageSquare, Share2, Smartphone, BookOpen, Rocket, Zap, Apple, GraduationCap, Brain, Compass, Atom, ChevronRight, LayoutGrid } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const ShareOverlay = ({ onClose }: { onClose: () => void }) => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    onClick={onClose}
    className="fixed inset-0 z-[1000] bg-black/60 backdrop-blur-sm flex items-end justify-center p-6"
  >
    <motion.div 
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      exit={{ y: 100 }}
      onClick={(e) => e.stopPropagation()}
      className="bg-white w-full max-w-sm rounded-[32px] p-8 space-y-6"
    >
      <div className="text-center space-y-2">
        <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-green-100">
          <Share2 className="text-white" size={32} />
        </div>
        <h3 className="text-xl font-black text-gray-900">分享至微信</h3>
        <p className="text-xs text-gray-500 font-medium">即将分享至 亿利社区业主群</p>
      </div>
      
      <div className="grid grid-cols-1 gap-3">
        <button 
          onClick={onClose}
          className="w-full bg-green-600 text-white py-4 rounded-2xl font-black text-sm active:scale-95 transition-transform shadow-xl shadow-green-100 flex items-center justify-center space-x-2"
        >
          <span>立即发送</span>
        </button>
        <button 
          onClick={onClose}
          className="w-full py-4 rounded-2xl font-bold text-gray-400 text-sm active:scale-95 transition-transform"
        >
          取消
        </button>
      </div>
    </motion.div>
  </motion.div>
);

const CATEGORIES = [
  { id: 'all', label: '全部', icon: LayoutGrid },
  { id: 'life', label: '生活服务', icon: Coffee },
  { id: 'gov', label: '政务服务', icon: ShieldCheck },
  { id: 'health', label: '健康服务', icon: Stethoscope },
  { id: 'elderly', label: '为老服务', icon: Baby },
  { id: 'special', label: '特色服务', icon: Star },
  { id: 'online', label: '线上服务', icon: Smartphone },
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
  { id: 25, label: '长者智守护', icon: ShieldCheck, category: 'elderly', color: 'bg-teal-50 text-teal-600', isSmartGuardian: true },
  
  { id: 13, label: '科普阵地', icon: Microscope, category: 'special', color: 'bg-violet-50 text-violet-500', isScience: true },
  { id: 14, label: '小小科学家', icon: FlaskConical, category: 'special', color: 'bg-cyan-50 text-cyan-500', isScience: true },
  { id: 23, label: '特约维修', icon: Wrench, category: 'life', color: 'bg-blue-50 text-blue-600' },
  { id: 26, label: '白事通', icon: Heart, category: 'life', color: 'bg-slate-50 text-slate-600', isFuneral: true },
  { id: 24, label: '共享维修\n服务价目', icon: Wrench, category: 'life', color: 'bg-orange-50 text-orange-600', posterType: 'maintenance' },
  { id: 19, label: '社区达人\n申请', icon: Star, category: 'special', color: 'bg-amber-50 text-amber-600', isApplication: true },
  
  { id: 101, label: '展示类\n信息发布', icon: MessageSquare, category: 'online', color: 'bg-blue-50 text-blue-500', isOnline: true },
  { id: 102, label: '流程类\n在线办理', icon: ShieldCheck, category: 'online', color: 'bg-emerald-50 text-emerald-600', isOnline: true },
  { id: 103, label: '交易类\n缴费支付', icon: CreditCard, category: 'online', color: 'bg-orange-50 text-orange-600', isOnline: true },
  { id: 104, label: '互动参与\n线上协作', icon: Users, category: 'online', color: 'bg-purple-50 text-purple-600', isOnline: true },
  { id: 105, label: '查询档案\n认证查询', icon: Search, category: 'online', color: 'bg-indigo-50 text-indigo-600', isOnline: true },
  { id: 106, label: '便民直达\n快速预约', icon: Phone, category: 'online', color: 'bg-rose-50 text-rose-600', isOnline: true },
  { id: 107, label: '智能预警\n主动提醒', icon: Activity, category: 'online', color: 'bg-amber-50 text-amber-600', isOnline: true },
];

function CommunityTalentApplication({ onBack }: { onBack: () => void }) {
  const [showShare, setShowShare] = useState(false);
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
    <div className="p-6 pb-20 text-gray-900 relative">
      <AnimatePresence>
        {showShare && <ShareOverlay onClose={() => setShowShare(false)} />}
      </AnimatePresence>

      <div className="fixed top-6 right-6 flex items-center space-x-3 z-50">
        <button 
          onClick={() => setShowShare(true)}
          className="p-2 bg-gray-100 hover:bg-gray-200 text-gray-500 rounded-full transition-colors backdrop-blur-md"
        >
          <Share2 size={24} />
        </button>
        <button 
          onClick={onBack}
          className="p-2 bg-gray-100 hover:bg-gray-200 text-gray-500 rounded-full transition-colors backdrop-blur-md"
        >
          <X size={24} />
        </button>
      </div>

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
  const [showShare, setShowShare] = useState(false);
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
      <AnimatePresence>
        {showShare && <ShareOverlay onClose={() => setShowShare(false)} />}
      </AnimatePresence>

      <div className="fixed top-6 right-6 flex items-center space-x-3 z-50">
        <button 
          onClick={() => setShowShare(true)}
          className="p-2 bg-black/10 hover:bg-black/20 text-black rounded-full transition-colors backdrop-blur-md"
        >
          <Share2 size={24} />
        </button>
        <button 
          onClick={onBack}
          className="p-2 bg-black/10 hover:bg-black/20 text-black rounded-full transition-colors backdrop-blur-md"
        >
          <X size={24} />
        </button>
      </div>
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
  const [showShare, setShowShare] = useState(false);
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
      <AnimatePresence>
        {showShare && <ShareOverlay onClose={() => setShowShare(false)} />}
      </AnimatePresence>

      <div className="fixed top-6 right-6 flex items-center space-x-3 z-50">
        <button 
          onClick={() => setShowShare(true)}
          className="p-2 bg-[#FF8C00]/10 hover:bg-[#FF8C00]/20 text-[#FF8C00] rounded-full transition-colors backdrop-blur-md"
        >
          <Share2 size={24} />
        </button>
        <button 
          onClick={onBack}
          className="p-2 bg-[#FF8C00]/10 hover:bg-[#FF8C00]/20 text-[#FF8C00] rounded-full transition-colors backdrop-blur-md"
        >
          <X size={24} />
        </button>
      </div>
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
  const [showShare, setShowShare] = useState(false);
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
      <AnimatePresence>
        {showShare && <ShareOverlay onClose={() => setShowShare(false)} />}
      </AnimatePresence>

      <div className="fixed top-6 right-6 flex items-center space-x-3 z-50">
        <button 
          onClick={() => setShowShare(true)}
          className="p-2 bg-indigo-900/10 hover:bg-indigo-900/20 text-indigo-900 rounded-full transition-colors backdrop-blur-md"
        >
          <Share2 size={24} />
        </button>
        <button 
          onClick={onBack}
          className="p-2 bg-indigo-900/10 hover:bg-indigo-900/20 text-indigo-900 rounded-full transition-colors backdrop-blur-md"
        >
          <X size={24} />
        </button>
      </div>

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
  const [showShare, setShowShare] = useState(false);
  const menu = [
    { name: '红烧狮子头', elder: 8, regular: 12, tags: ['招牌', '肉类'] },
    { name: '西红柿炒鸡蛋', elder: 4, regular: 6, tags: ['营养', '素食'] },
    { name: '清蒸鱼块', elder: 10, regular: 15, tags: ['高蛋白'] },
    { name: '时令青菜', elder: 2, regular: 4, tags: ['清淡'] }
  ];

  return (
    <div className="bg-[#FFFDF9] min-h-screen font-sans pb-10 relative">
      <AnimatePresence>
        {showShare && <ShareOverlay onClose={() => setShowShare(false)} />}
      </AnimatePresence>

      <div className="fixed top-6 right-6 flex items-center space-x-3 z-50">
        <button 
          onClick={() => setShowShare(true)}
          className="p-2 bg-orange-900/10 hover:bg-orange-900/20 text-orange-900 rounded-full transition-colors backdrop-blur-md"
        >
          <Share2 size={24} />
        </button>
        <button 
          onClick={onBack}
          className="p-2 bg-orange-900/10 hover:bg-orange-900/20 text-orange-900 rounded-full transition-colors backdrop-blur-md"
        >
          <X size={24} />
        </button>
      </div>

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

const ONLINE_SERVICE_DETAILS: Record<number, { description: string, examples: string[] }> = {
  101: {
    description: "单向或弱交互的信息告知，居民只需浏览，主要用于社区动态展示与政务公开。",
    examples: ["社区风采展示", "居务公开（财务、决议）", "社区通知公告", "政策宣传", "办事指南", "便民地图（周边菜场、药店）"]
  },
  102: {
    description: "居民按步骤提交申请或登记，后台流转处理，实现“零跑腿”在线办事体验。",
    examples: ["活动预约（亲子活动、义诊）", "场地预约（活动室、健身房）", "事项申报（生育登记、居住证明）", "报事报修（上传照片、派单）", "投诉建议流转"]
  },
  103: {
    description: "涉及资金收付，通常与第三方支付对接，解决社区生活中的各类缴费难题。",
    examples: ["物业费缴纳", "停车费缴纳", "水电燃气代收", "社区团购支付", "场地使用费", "活动报名费"]
  },
  104: {
    description: "居民与社区、居民之间双向沟通或协作，增强社区凝聚力与居民参与度。",
    examples: ["在线议事投票（加装电梯、改造方案）", "民意调查/问卷", "邻里互助（借物、拼单）", "居民论坛/留言板"]
  },
  105: {
    description: "个人或公共数据查询，一般需身份认证，确保信息安全与精准化服务。",
    examples: ["自己的报修进度查询", "活动报名状态查询", "积分/信用分查询（志愿服务时长）", "社区通讯录查询"]
  },
  106: {
    description: "快速跳转或接入第三方服务，社区做入口，为居民提供海量生活便利资源。",
    examples: ["社区医生在线问诊", "法律咨询预约", "家政服务订购", "一键呼叫网格员", "养老助餐预订"]
  },
  107: {
    description: "基于事件或数据的主动提醒（非居民主动发起），确保重要信息及安全风险第一时间传达。",
    examples: ["停水停电通知", "天气预警提醒", "独居老人主动关怀提醒", "分级疫情防控消息推送"]
  }
};

function OnlineServicePoster({ service, onBack }: { service: any, onBack: () => void }) {
  const detail = ONLINE_SERVICE_DETAILS[service.id];
  const [showShare, setShowShare] = useState(false);
  
  return (
    <div className={`min-h-screen font-sans pb-10 relative bg-gray-50`}>
      <AnimatePresence>
        {showShare && <ShareOverlay onClose={() => setShowShare(false)} />}
      </AnimatePresence>

      <div className="fixed top-6 right-6 flex items-center space-x-3 z-[70]">
        <button 
          onClick={() => setShowShare(true)}
          className="p-2 bg-black/10 hover:bg-black/20 text-black rounded-full transition-colors backdrop-blur-md"
        >
          <Share2 size={24} />
        </button>
        <button 
          onClick={onBack}
          className="p-2 bg-black/10 hover:bg-black/20 text-black rounded-full transition-colors backdrop-blur-md"
        >
          <X size={24} />
        </button>
      </div>

      <div className={`bg-gradient-to-br ${service.color.split(' ')[0]} ${service.color.split(' ')[0].replace('bg-', 'from-').replace('50', '500')} ${service.color.split(' ')[0].replace('bg-', 'to-').replace('50', '600')} p-8 pt-16 text-white relative overflow-hidden`}>
        <service.icon size={220} className="absolute -right-12 -bottom-12 opacity-10 rotate-12" />
        <div className="relative z-10">
          <div className="inline-flex items-center space-x-2 bg-white/20 px-3 py-1 rounded-full mb-4 backdrop-blur-md">
            <service.icon size={14} />
            <span className="text-[10px] font-black tracking-widest uppercase">Online Service Category</span>
          </div>
          <h1 className="text-3xl font-black mb-2 tracking-tighter whitespace-pre-line">{service.label.replace('\n', '')}</h1>
          <p className="opacity-80 text-sm font-medium">线上驱动 • 赋能智慧社区高效治理</p>
        </div>
      </div>

      <div className="p-6 -mt-6">
        <div className="bg-white rounded-[2.5rem] p-8 shadow-xl shadow-gray-200/50 border border-white mb-8 space-y-8">
           <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className={`w-1.5 h-4 ${service.color.split(' ')[1].replace('text-', 'bg-')} rounded-full`} />
                <h3 className="font-extrabold text-gray-900 text-sm">类别服务说明</h3>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed font-medium bg-gray-50 p-4 rounded-2xl border border-gray-100">
                {detail?.description}
              </p>
           </div>

           <div className="space-y-5">
              <div className="flex items-center space-x-2">
                <div className={`w-1.5 h-4 ${service.color.split(' ')[1].replace('text-', 'bg-')} rounded-full`} />
                <h3 className="font-extrabold text-gray-900 text-sm">典型服务举例</h3>
              </div>
              <div className="grid gap-3">
                {detail?.examples.map((example, i) => (
                  <div key={i} className="flex items-start space-x-3 bg-white p-4 rounded-2xl border border-gray-100 shadow-sm group active:scale-[0.98] transition-transform">
                    <div className={`mt-1 w-1.5 h-1.5 rounded-full ${service.color.split(' ')[1].replace('text-', 'bg-')} shrink-0`} />
                    <span className="text-xs font-bold text-gray-700">{example}</span>
                  </div>
                ))}
              </div>
           </div>
        </div>

        <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white relative overflow-hidden shadow-2xl">
           <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-2xl" />
           <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-4">
                <ShieldCheck className="text-blue-400" size={24} />
              </div>
              <h4 className="font-black text-sm mb-2">安全与数字化保障</h4>
              <p className="text-[10px] text-gray-400 leading-relaxed max-w-[240px]">
                所有线上服务均依托社区私有云部署，严格遵守数据安全法，确保居民隐私信息在流转过程中全程加密不泄露。
              </p>
           </div>
        </div>
      </div>
    </div>
  );
}

export function CommunitySciencePoster({ onBack }: { onBack: () => void }) {
  const [showShare, setShowShare] = useState(false);
  
  const trailModules = [
    { title: '自然科学', icon: Apple, color: 'bg-green-50 text-green-600', desc: '探索大自然的奥秘，了解动植物生态。' },
    { title: '航天航空', icon: Rocket, color: 'bg-blue-50 text-blue-600', desc: '星辰大海的征途，领略宇宙飞行技术。' },
    { title: '生态环保', icon: Compass, color: 'bg-emerald-50 text-emerald-600', desc: '守护绿色家园，学习环保生活小常识。' },
    { title: '生命健康', icon: Activity, color: 'bg-rose-50 text-rose-600', desc: '认识人体构造，掌握健康生活方式。' },
  ];

  const labSteps = [
    { title: '神奇的水循环', level: '初级', time: '15min', desc: '通过简单的容器，观察水蒸发与冷凝的过程。' },
    { title: '果蔬电池', level: '中级', time: '30min', desc: '利用柠檬或土豆，点亮一盏小小的LED灯。' },
    { title: '自制指南针', level: '初级', time: '10min', desc: '用缝衣针和磁铁，在水面上寻找北方。' },
  ];

  const healthStation = [
    { title: '用眼卫生', icon: BookOpen, content: '“20-20-20”法则，每20分钟眺望20英尺外20秒。' },
    { title: '科学运动', icon: Zap, content: '适度有氧运动，每周坚持150分钟中等强度锻炼。' },
    { title: '营养膳食', icon: Utensils, content: '控盐控油，多吃蔬果，均衡摄入蛋白质。' },
    { title: '慢病防治', icon: Stethoscope, content: '定期监测健康指标，科学管理血糖与血压。' },
  ];

  const cases = [
    { title: '小小科学家·植物观察日记', student: '王小明', date: '2024.04', image: 'https://images.unsplash.com/photo-1599839619722-30dd93551810?auto=format&fit=crop&w=400&q=80' },
    { title: '创意环保：废纸盒变身垃圾车', student: '李华', date: '2024.03', image: 'https://images.unsplash.com/photo-1532187863486-abf51ad990c9?auto=format&fit=crop&w=400&q=80' },
  ];

  return (
    <div className="bg-slate-50 min-h-screen font-sans pb-20 relative">
      <AnimatePresence>
        {showShare && <ShareOverlay onClose={() => setShowShare(false)} />}
      </AnimatePresence>

      <div className="fixed top-6 right-6 flex items-center space-x-3 z-50">
        <button 
          onClick={() => setShowShare(true)}
          className="p-2 bg-black/10 hover:bg-black/20 text-black rounded-full transition-colors backdrop-blur-md"
        >
          <Share2 size={24} />
        </button>
        <button 
          onClick={onBack}
          className="p-2 bg-black/10 hover:bg-black/20 text-black rounded-full transition-colors backdrop-blur-md"
        >
          <X size={24} />
        </button>
      </div>

      <div className="bg-gradient-to-br from-violet-600 to-indigo-800 p-8 pt-12 text-white relative overflow-hidden">
        <Atom size={180} className="absolute -right-12 -bottom-12 opacity-10 rotate-12" />
        <div className="relative z-10">
          <div className="inline-flex items-center space-x-2 bg-white/20 px-3 py-1 rounded-full mb-4 backdrop-blur-md">
            <GraduationCap size={14} />
            <span className="text-[10px] font-black tracking-widest uppercase">Science Base</span>
          </div>
          <h1 className="text-3xl font-black mb-2 tracking-tighter">多元融合科普阵地</h1>
          <p className="opacity-80 text-sm font-medium">探索科学奥秘 • 赋能智慧未来</p>
        </div>
      </div>

      <div className="p-6 -mt-6">
        {/* Module 1: Science Trail */}
        <div className="bg-white rounded-[2.5rem] p-6 shadow-xl shadow-indigo-100 border border-indigo-50 mb-8">
          <div className="flex items-center space-x-2 mb-6">
            <div className="w-1.5 h-6 bg-indigo-500 rounded-full" />
            <h2 className="text-lg font-black text-slate-800">科普步道</h2>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {trailModules.map((m, i) => (
              <div key={i} className="p-4 bg-slate-50 rounded-3xl border border-slate-100 flex flex-col items-center text-center">
                <div className={`w-12 h-12 ${m.color} rounded-2xl flex items-center justify-center mb-3 shadow-sm`}>
                  <m.icon size={24} />
                </div>
                <h4 className="text-xs font-black text-slate-800 mb-1">{m.title}</h4>
                <p className="text-[9px] text-slate-400 leading-tight font-medium">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Module 2: Family Lab */}
        <div className="bg-indigo-900 rounded-[2.5rem] p-8 text-white relative overflow-hidden shadow-2xl mb-8">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-2xl" />
          <div className="relative z-10">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-1.5 h-6 bg-cyan-400 rounded-full" />
              <h2 className="text-lg font-black">家庭科学实验室</h2>
            </div>
            <div className="space-y-4">
              {labSteps.map((step, i) => (
                <div key={i} className="flex items-center space-x-4 bg-white/10 p-4 rounded-3xl border border-white/10 backdrop-blur-sm group active:bg-white/20 transition-all">
                  <div className="w-10 h-10 bg-cyan-400 text-indigo-900 rounded-2xl flex items-center justify-center font-black text-sm shrink-0">
                    {i + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-baseline justify-between mb-1">
                      <h4 className="text-sm font-black tracking-tight">{step.title}</h4>
                      <div className="flex space-x-2">
                        <span className="text-[9px] bg-white/20 px-2 py-0.5 rounded font-bold">{step.level}</span>
                        <span className="text-[9px] bg-white/20 px-2 py-0.5 rounded font-bold">{step.time}</span>
                      </div>
                    </div>
                    <p className="text-[10px] opacity-60 font-medium line-clamp-1">{step.desc}</p>
                  </div>
                  <ChevronRight size={18} className="text-cyan-400 opacity-50 transition-transform group-hover:translate-x-1" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Module 3: Health Guidance */}
        <div className="bg-white rounded-[2.5rem] p-6 shadow-xl shadow-rose-100 border border-rose-50 mb-8">
          <div className="flex items-center space-x-2 mb-6">
            <div className="w-1.5 h-6 bg-rose-500 rounded-full" />
            <h2 className="text-lg font-black text-slate-800">健康指导站</h2>
          </div>
          <div className="grid grid-cols-1 gap-3">
            {healthStation.map((h, i) => (
              <div key={i} className="flex items-start space-x-4 bg-rose-50/30 p-4 rounded-3xl border border-rose-50">
                <div className="w-10 h-10 bg-white shadow-sm rounded-2xl flex items-center justify-center text-rose-500 shrink-0">
                  <h.icon size={20} />
                </div>
                <div>
                  <h4 className="text-xs font-black text-slate-800 mb-1">{h.title}</h4>
                  <p className="text-[10px] text-slate-500 leading-relaxed font-medium">{h.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Case Studies */}
        <div>
          <div className="flex justify-between items-center px-2 mb-6">
            <div className="flex items-center space-x-2">
              <div className="w-1.5 h-6 bg-amber-500 rounded-full" />
              <h2 className="text-lg font-black text-slate-800">小小科学家实践案例</h2>
            </div>
          </div>
          <div className="space-y-4">
            {cases.map((c, i) => (
              <div key={i} className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl shadow-slate-200/50 border border-slate-100 group">
                <div className="h-48 overflow-hidden relative">
                  <img src={c.image} alt={c.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="text-[10px] bg-amber-500 px-2 py-0.5 rounded font-black uppercase">Practice Case</span>
                      <span className="text-[10px] font-bold opacity-60 text-slate-200">{c.date}</span>
                    </div>
                    <h4 className="text-lg font-black tracking-tight">{c.title}</h4>
                  </div>
                </div>
                <div className="p-5 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-slate-100 border-2 border-white flex items-center justify-center overflow-hidden">
                       <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${c.student}`} alt="" />
                    </div>
                    <div>
                      <p className="text-xs font-black text-slate-800">{c.student}</p>
                      <p className="text-[10px] text-slate-400 font-bold italic">社区小小科学家成员</p>
                    </div>
                  </div>
                  <button className="bg-slate-900 text-white px-4 py-2 rounded-xl text-[10px] font-black active:scale-95 transition-transform">
                    详情回顾
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ElderlySmartGuardianPoster({ onBack }: { onBack: () => void }) {
  const [showShare, setShowShare] = useState(false);
  const tableData = [
    { feature: '供电安全', desc: '家庭电路、电闸控制和管理', full: '支持', smart: '支持', basic: '不支持' },
    { feature: '厨房安全', desc: '厨房温湿度、漏水、烟雾及火灾隐患监测', full: '支持', smart: '支持', basic: '支持' },
    { feature: '家庭视频', desc: '系统集成萤石云摄像头视频查看', full: '支持', smart: '不支持', basic: '不支持' },
    { feature: '联动控制', desc: '自动控制阀门等水电设备启动或关闭', full: '支持', smart: '支持', basic: '不支持' },
    { feature: '报警设定', desc: '报警阈值按需定义报警范围', full: '支持', smart: '支持', basic: '不支持' },
    { feature: '微信报警', desc: '报警信息和隐患情况通过微信告知用户', full: '支持', smart: '支持', basic: '支持' },
    { feature: '电话报警', desc: '报警信息和隐患情况通过固定电话告知用户', full: '支持', smart: '支持', basic: '不支持' },
    { feature: '室内声光报警', desc: '报警发生时，启动室内报警器（闪光、声音）', full: '支持', smart: '支持', basic: '不支持' },
    { feature: '智能网关', desc: '多房间、多点位监测时，数据集中传输', full: '支持', smart: '支持', basic: '不支持' },
    { feature: '扩展智能盒', desc: '多房间、多点位监测时，连接传感器等设备', full: '支持', smart: '不支持', basic: '不支持' },
    { feature: '阀门开关', desc: '自来水、暖气等阀门电动开关', full: '支持', smart: '支持', basic: '不支持' },
    { feature: '传感器套装', desc: '温湿度、漏水、烟雾、燃气浓度、甲醛等', full: '支持', smart: '支持', basic: '支持' },
    { feature: '价格（月付）', desc: '一次性付费/月付/年付', full: '85.00', smart: '65.00', basic: '45.00' },
  ];

  return (
    <div className="bg-slate-50 min-h-screen font-sans pb-20 relative">
      <AnimatePresence>
        {showShare && <ShareOverlay onClose={() => setShowShare(false)} />}
      </AnimatePresence>

      <div className="fixed top-6 right-6 flex items-center space-x-3 z-50">
        <button 
          onClick={() => setShowShare(true)}
          className="p-2 bg-black/10 hover:bg-black/20 text-black rounded-full transition-colors backdrop-blur-md"
        >
          <Share2 size={24} />
        </button>
        <button 
          onClick={onBack}
          className="p-2 bg-black/10 hover:bg-black/20 text-black rounded-full transition-colors backdrop-blur-md"
        >
          <X size={24} />
        </button>
      </div>

      <div className="bg-gradient-to-br from-teal-500 to-emerald-700 p-8 pt-12 text-white relative overflow-hidden">
        <ShieldCheck size={180} className="absolute -right-12 -bottom-12 opacity-10 rotate-12" />
        <div className="relative z-10">
          <div className="inline-flex items-center space-x-2 bg-white/20 px-3 py-1 rounded-full mb-4 backdrop-blur-md">
            <Smartphone size={14} />
            <span className="text-[10px] font-black tracking-widest uppercase">Smart Guardian</span>
          </div>
          <h1 className="text-3xl font-black mb-2 tracking-tighter">长者智守护</h1>
          <p className="opacity-80 text-sm font-medium">内蒙古兴野智汇数字科技有限责任公司</p>
        </div>
      </div>

      <div className="p-6 -mt-6">
        <div className="bg-white rounded-[2.5rem] p-8 shadow-xl shadow-teal-100/50 border border-teal-50 mb-8">
          <h2 className="text-lg font-black text-slate-800 mb-6 flex items-center space-x-2">
            <div className="w-1.5 h-6 bg-teal-500 rounded-full" />
            <span>兴野智汇安家服务智能终端</span>
          </h2>

          <div className="space-y-4 mb-8">
            {tableData.map((row, i) => {
              if (row.feature === '价格（月付）') return null;
              return (
                <div key={i} className="bg-white rounded-3xl p-5 shadow-sm border border-slate-100">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-sm font-black text-slate-800">{row.feature}</h4>
                    <div className="flex space-x-1">
                      {row.full === '支持' && <span className="bg-teal-50 text-teal-600 px-2 py-0.5 rounded-lg text-[9px] font-black border border-teal-100">全能</span>}
                      {row.smart === '支持' && <span className="bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded-lg text-[9px] font-black border border-emerald-100">全智</span>}
                      {row.basic === '支持' && <span className="bg-slate-50 text-slate-500 px-2 py-0.5 rounded-lg text-[9px] font-black border border-slate-200">基础</span>}
                    </div>
                  </div>
                  <p className="text-[11px] text-slate-400 font-medium leading-relaxed mb-4">{row.desc}</p>
                  
                  <div className="grid grid-cols-3 gap-2 pt-3 border-t border-slate-50">
                    <div className="flex flex-col items-center">
                      <span className="text-[8px] text-slate-400 font-bold uppercase mb-1">全能版</span>
                      <div className={`w-full py-1.5 rounded-xl text-center text-[10px] font-black ${row.full === '支持' ? 'bg-teal-500 text-white' : 'bg-slate-100 text-slate-300'}`}>
                        {row.full}
                      </div>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="text-[8px] text-slate-400 font-bold uppercase mb-1">全智版</span>
                      <div className={`w-full py-1.5 rounded-xl text-center text-[10px] font-black ${row.smart === '支持' ? 'bg-emerald-500 text-white' : 'bg-slate-100 text-slate-300'}`}>
                        {row.smart}
                      </div>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="text-[8px] text-slate-400 font-bold uppercase mb-1">基础版</span>
                      <div className={`w-full py-1.5 rounded-xl text-center text-[10px] font-black ${row.basic === '支持' ? 'bg-slate-200 text-slate-400' : 'bg-slate-100 text-slate-300'}`}>
                        {row.basic}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-[2.5rem] p-6 text-white mb-8 shadow-xl">
            <h3 className="text-sm font-black text-teal-400 mb-4 flex items-center space-x-2">
              <div className="w-1.5 h-4 bg-teal-400 rounded-full" />
              <span>版本资费方案</span>
            </h3>
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-white/5 rounded-2xl p-3 border border-white/10 text-center">
                <p className="text-[9px] font-bold opacity-60 mb-2">全能版</p>
                <div className="text-xl font-black text-teal-400">85<span className="text-[10px] ml-0.5">元/月</span></div>
              </div>
              <div className="bg-white/5 rounded-2xl p-3 border border-white/10 text-center">
                <p className="text-[9px] font-bold opacity-60 mb-2">全智版</p>
                <div className="text-xl font-black text-emerald-400">65<span className="text-[10px] ml-0.5">元/月</span></div>
              </div>
              <div className="bg-white/5 rounded-2xl p-3 border border-white/10 text-center">
                <p className="text-[9px] font-bold opacity-60 mb-2">基础版</p>
                <div className="text-xl font-black text-slate-300">45<span className="text-[10px] ml-0.5">元/月</span></div>
              </div>
            </div>
            <p className="text-[9px] text-white/40 mt-4 text-center">可选择一次性付费、月付或年付等多种支付方式</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-2xl" />
            <div className="relative z-10 space-y-6">
              <div className="space-y-2">
                <p className="text-[10px] text-teal-400 font-black tracking-[0.2em] uppercase">Contact Information</p>
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                      <MessageSquare className="text-teal-400" size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-400 font-bold">微信公众号</p>
                      <p className="text-sm font-black italic">兴野智汇轻物联</p>
                    </div>
                  </div>
                  <a href="tel:18104866166" className="flex items-center space-x-3 group">
                    <div className="w-10 h-10 bg-teal-500 rounded-xl flex items-center justify-center shadow-lg shadow-teal-500/20 group-active:scale-90 transition-transform">
                      <Phone className="text-white" size={20} fill="currentColor" />
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-400 font-bold">业务联系电话</p>
                      <p className="text-sm font-black tabular-nums group-hover:text-teal-400 transition-colors">181-0486-6166</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-teal-50 border border-teal-100 rounded-[2.5rem] p-6 flex items-start space-x-4">
            <div className="p-2 bg-teal-500 text-white rounded-2xl shrink-0">
              <ShieldCheck size={20} />
            </div>
            <div>
              <p className="text-[11px] text-teal-900 font-bold leading-relaxed">
                全天候智能安全防范，针对家庭用电、用火、用水多维度实时监测，让居家养老生活更加安心从容。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DisabledSupportSupermarketPoster({ onBack }: { onBack: () => void }) {
  const [showShare, setShowShare] = useState(false);
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
      <AnimatePresence>
        {showShare && <ShareOverlay onClose={() => setShowShare(false)} />}
      </AnimatePresence>

      <div className="fixed top-6 right-6 flex items-center space-x-3 z-50">
        <button 
          onClick={() => setShowShare(true)}
          className="p-2 bg-indigo-900/10 hover:bg-indigo-900/20 text-indigo-900 rounded-full transition-colors backdrop-blur-md"
        >
          <Share2 size={24} />
        </button>
        <button 
          onClick={onBack}
          className="p-2 bg-indigo-900/10 hover:bg-indigo-900/20 text-indigo-900 rounded-full transition-colors backdrop-blur-md"
        >
          <X size={24} />
        </button>
      </div>
      
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
  const [showShare, setShowShare] = useState(false);
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
      <AnimatePresence>
        {showShare && <ShareOverlay onClose={() => setShowShare(false)} />}
      </AnimatePresence>

      <div className="fixed top-6 right-6 flex items-center space-x-3 z-50">
        <button 
          onClick={() => setShowShare(true)}
          className="p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors backdrop-blur-md"
        >
          <Share2 size={24} />
        </button>
        <button 
          onClick={onBack}
          className="p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors backdrop-blur-md"
        >
          <X size={24} />
        </button>
      </div>
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

function FuneralGuidePoster({ onBack }: { onBack: () => void }) {
  const [showShare, setShowShare] = useState(false);
  
  const priceData = [
    {
      title: '一、临终及身后初期服务',
      subtitle: '（逝者离世后 0–24 小时）',
      items: [
        { name: '净身穿衣（入殓）', content: '遗体清洁、消毒、穿衣（寿衣）、简单整容', price: '800–2000 元', note: '普通寿衣 800–1200；高档寿衣 1500–2000' },
        { name: '遗体接运（灵车）', content: '专用灵车接送（医院/家中→殡仪馆）、抬尸、消毒', price: '600–1500 元/趟', note: '市区 600；郊区/长途 1000–1500' },
        { name: '遗体冷藏存放', content: '殡仪馆冷藏柜保存（防变质，等待告别/吉日火化）', price: '60–80 元/天', note: '一般存 3 天，合计 180–240 元' },
        { name: '死亡证明/火化证代办', content: '协助医院/派出所开死亡证明、殡仪馆办火化手续', price: '300–600 元', note: '代办费，不含官方工本费' },
      ]
    },
    {
      title: '二、灵堂与治丧期间服务',
      subtitle: '（1–3 天）',
      sections: [
        {
          name: '灵堂布置',
          items: [
            { name: '基础布置', content: '遗像制作（12寸实木框）、灵位牌、香炉、蜡烛、白布、挽联', price: '500–1200 元' },
            { name: '升级布置', content: '鲜花拱门、电子花圈、空飘、灯光、音响', price: '1500–3000 元' },
          ]
        },
        {
          name: '寿衣/骨灰盒/花圈',
          tables: [
            { label: '寿衣（按件套）', headers: ['类型', '报价'], rows: [['3件套', '800–1500 元'], ['5件套', '1500–2500 元'], ['7件套', '2500–4000 元']] },
            { label: '骨灰盒', headers: ['类型', '报价'], rows: [['普通硬木', '800–1500 元'], ['实木/黑檀', '2000–5000 元'], ['高档/紫檀', '5000–20000 元']] },
            { label: '花圈/花篮', headers: ['类型', '报价'], rows: [['普通纸花圈', '100–300 元/个'], ['鲜花圈', '500–1200 元/个'], ['告别厅布置', '1000–3000 元']] },
          ]
        }
      ],
      items: [
        { name: '礼仪服务', content: '家祭/守灵指导、挽联书写、香烛纸钱供应', price: '500–1500 元', note: '治丧期间全程服务' }
      ]
    },
    {
      title: '三、告别仪式与火化',
      subtitle: '（1 天）',
      tables: [
        { label: '告别厅租赁', headers: ['类型', '规模', '报价'], rows: [['普通厅', '20-50人', '800-1500'], ['中档厅', '50-100人', '2000-3500'], ['高档厅', '100人+', '4000-8000']] },
        { label: '遗体整容/火化', headers: ['项目', '类型', '报价'], rows: [['整容', '基础', '500-1000'], ['整容', '精细', '1200-2500'], ['火化', '普通', '300-600'], ['火化', '单人高档', '800-1500']] },
      ],
      items: [
        { name: '仪式主持', content: '司仪、流程引导、答谢、告别行礼', price: '800–2000 元/场' }
      ]
    },
    {
      title: '四、墓地选购与安葬',
      subtitle: '（1 天，可延后吉日）',
      items: [
        { name: '选墓服务', content: '陪同看墓、风水选址、手续代办', price: '1000–3000 元', note: '不含墓地款' },
      ],
      tables: [
        { label: '墓地费用参考', headers: ['类型', '报价'], rows: [['公益性公墓', '1–3 万元'], ['普通经营性', '3–8 万元'], ['中高档型', '8–20 万元'], ['豪华艺术墓', '20–50 万元+']] },
      ],
      items2: [
        { name: '安葬服务', content: '下葬仪式、骨灰盒下葬、摆供、封土', price: '1500–3000 元', note: '不含刻字费' },
        { name: '刻字/瓷像', content: '姓名、生卒、碑文；遗像瓷像制作', price: '300–1200 元' },
      ]
    }
  ];

  const packages = [
    { title: '经济简约套餐', price: '2800–3800 元', desc: '接运 + 冷藏3天 + 穿衣 + 火化 + 基础骨灰盒 + 手续代办', tag: '直接火化，无告别' },
    { title: '标准体面套餐', price: '6000–12000 元', desc: '含经济套餐 + 灵堂基础布置 + 告别厅 + 整容 + 主持 + 鲜花圈', tag: '小型告别仪式' },
    { title: '尊孝全套餐', price: '15000–30000 元', desc: '含标准套餐 + 高档寿衣/骨灰盒 + 中档灵堂 + 乐队/礼仪 + 选墓安葬', tag: '含中档墓地3–8万', extra: '传统全套仪式' }
  ];

  return (
    <div className="bg-slate-50 min-h-screen font-sans pb-20 relative">
      <AnimatePresence>
        {showShare && <ShareOverlay onClose={() => setShowShare(false)} />}
      </AnimatePresence>

      <div className="fixed top-6 right-6 flex items-center space-x-3 z-50">
        <button onClick={() => setShowShare(true)} className="p-2 bg-black/10 hover:bg-black/20 text-black rounded-full transition-colors backdrop-blur-md">
          <Share2 size={24} />
        </button>
        <button onClick={onBack} className="p-2 bg-black/10 hover:bg-black/20 text-black rounded-full transition-colors backdrop-blur-md">
          <X size={24} />
        </button>
      </div>

      <div className="bg-slate-900 p-8 pt-16 text-white relative overflow-hidden">
        <Heart size={180} className="absolute -right-12 -bottom-12 opacity-10 rotate-12" />
        <div className="relative z-10">
          <div className="inline-flex items-center space-x-2 bg-white/10 px-3 py-1 rounded-full mb-4 backdrop-blur-md">
            <ShieldCheck size={14} className="text-slate-400" />
            <span className="text-[10px] font-black tracking-widest uppercase">Service Guide</span>
          </div>
          <h1 className="text-3xl font-black mb-2 tracking-tighter">白事通</h1>
          <p className="opacity-80 text-sm font-medium">呼和浩特殡葬服务价格参考（2026年）</p>
        </div>
      </div>

      <div className="p-6 -mt-6 space-y-8">
        {priceData.map((group, gIdx) => (
          <div key={gIdx} className="bg-white rounded-[2.5rem] p-6 shadow-xl shadow-slate-200/50 border border-slate-100">
            <div className="mb-6">
              <h2 className="text-lg font-black text-slate-800">{group.title}</h2>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">{group.subtitle}</p>
            </div>
            
            <div className="space-y-6">
              {group.items?.map((item, i) => (
                <div key={i} className="flex flex-col space-y-1 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <div className="flex justify-between items-start">
                    <h4 className="text-xs font-black text-slate-800">{item.name}</h4>
                    <span className="text-slate-900 font-black text-xs">{item.price}</span>
                  </div>
                  <p className="text-[10px] text-slate-500 leading-relaxed">{item.content}</p>
                  {item.note && <p className="text-[9px] text-indigo-500 font-bold mt-1 opacity-70">备注：{item.note}</p>}
                </div>
              ))}

              {group.sections?.map((section, sIdx) => (
                <div key={sIdx} className="space-y-4">
                  <div className="flex items-center space-x-2 opacity-60">
                    <div className="w-1 h-3 bg-slate-400 rounded-full" />
                    <span className="text-[10px] font-black tracking-widest">{section.name}</span>
                  </div>
                  {section.items?.map((item, i) => (
                    <div key={i} className="flex flex-col space-y-1 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                      <div className="flex justify-between items-start">
                        <h4 className="text-xs font-black text-slate-800">{item.name}</h4>
                        <span className="text-slate-900 font-black text-xs">{item.price}</span>
                      </div>
                      <p className="text-[10px] text-slate-500 leading-relaxed font-medium">{item.content}</p>
                    </div>
                  ))}
                  {section.tables?.map((table, tIdx) => (
                    <div key={tIdx} className="overflow-hidden rounded-2xl border border-slate-100">
                      <div className="bg-slate-50 px-4 py-2 border-b border-slate-100">
                        <span className="text-[10px] font-black text-slate-800">{table.label}</span>
                      </div>
                      <table className="w-full text-[10px]">
                        <thead>
                          <tr className="bg-white/50 text-slate-400 font-bold border-b border-slate-50">
                            {table.headers.map((h, i) => <th key={i} className="px-4 py-2 text-left">{h}</th>)}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                          {table.rows.map((row, i) => (
                            <tr key={i} className="hover:bg-slate-50/50">
                              {row.map((cell, cIdx) => <td key={cIdx} className="px-4 py-2 text-slate-600 font-medium">{cell}</td>)}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ))}
                </div>
              ))}

              {group.tables?.map((table, tIdx) => (
                <div key={tIdx} className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-1 h-3 bg-slate-400 rounded-full" />
                    <span className="text-[10px] font-black tracking-widest opacity-60">{table.label}</span>
                  </div>
                  <div className="overflow-hidden rounded-2xl border border-slate-100">
                    <table className="w-full text-xs">
                      <thead>
                        <tr className="bg-slate-50 text-slate-400 font-bold border-b border-slate-100">
                          {table.headers.map((h, i) => <th key={i} className="px-4 py-2 text-left text-[9px] uppercase tracking-wider">{h}</th>)}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-50">
                        {table.rows.map((row, i) => (
                          <tr key={i}>
                            {row.map((cell, cIdx) => <td key={cIdx} className="px-4 py-2.5 text-slate-700 font-bold text-[11px]">{cell}</td>)}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}

              {group.items2?.map((item, i) => (
                <div key={i} className="flex flex-col space-y-1 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <div className="flex justify-between items-start">
                    <h4 className="text-xs font-black text-slate-800">{item.name}</h4>
                    <span className="text-slate-900 font-black text-xs">{item.price}</span>
                  </div>
                  <p className="text-[10px] text-slate-500 leading-relaxed">{item.content}</p>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Section 5: Packages */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2 px-2">
             <div className="w-1.5 h-6 bg-amber-500 rounded-full" />
             <h2 className="text-lg font-black text-slate-800">五、套餐化参考</h2>
          </div>
          <div className="grid gap-4">
            {packages.map((pkg, i) => (
              <div key={i} className="bg-white p-6 rounded-[2.5rem] border-2 border-amber-100 shadow-xl shadow-amber-50">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <span className="text-[9px] font-black text-amber-500 uppercase tracking-widest">{pkg.tag}</span>
                    <h3 className="text-lg font-black text-slate-900">{pkg.title}</h3>
                  </div>
                  <div className="bg-amber-500 text-white px-3 py-1 rounded-xl text-[10px] font-black">
                    {pkg.price}
                  </div>
                </div>
                <p className="text-[11px] text-slate-500 leading-relaxed italic border-l-2 border-amber-200 pl-3">
                  {pkg.desc}
                </p>
                {pkg.extra && <p className="mt-3 text-[10px] text-amber-600 font-bold">{pkg.extra}</p>}
              </div>
            ))}
          </div>
        </div>



        <div className="text-center pt-4 opacity-40">
          <p className="text-[9px] font-black tracking-widest uppercase">Data from Government Documents (2026)</p>
        </div>
      </div>
    </div>
  );
}

function LegalAidPoster({ onBack }: { onBack: () => void }) {
  const [showShare, setShowShare] = useState(false);
  const cases = [
    { title: '遗产继承咨询', desc: '针对居民关心的房产及财产继承问题，提供专业法律指引，化解家庭矛盾。' },
    { title: '物业维修调解', desc: '精选物业报修纠纷案例，通过法律视角中立核查，展现公正高效的援助实效。' }
  ];

  return (
    <div className="bg-slate-900 min-h-screen text-slate-100 p-6 pb-20 font-sans relative">
      <AnimatePresence>
        {showShare && <ShareOverlay onClose={() => setShowShare(false)} />}
      </AnimatePresence>

      <div className="fixed top-6 right-6 flex items-center space-x-3 z-50">
        <button 
          onClick={() => setShowShare(true)}
          className="p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors backdrop-blur-md"
        >
          <Share2 size={24} />
        </button>
        <button 
          onClick={onBack}
          className="p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors backdrop-blur-md"
        >
          <X size={24} />
        </button>
      </div>
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
  const [activePoster, setActivePoster] = useState<'elderly' | 'maintenance' | 'application' | 'legal' | 'clinic' | 'charity' | 'canteen' | 'lifecircle' | 'online' | 'smartGuardian' | 'funeral' | null>(null);
  const [selectedOnlineService, setSelectedOnlineService] = useState<any>(null);
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
      ('isLifeCircle' in service && service.isLifeCircle) ||
      ('isOnline' in service && service.isOnline) ||
      ('isSmartGuardian' in service && service.isSmartGuardian) ||
      ('isFuneral' in service && service.isFuneral)
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
      } else if ('isOnline' in service && service.isOnline) {
        setSelectedOnlineService(service);
        setActivePoster('online');
      } else if ('isFuneral' in service && service.isFuneral) {
        setActivePoster('funeral');
      } else if ('isSmartGuardian' in service && service.isSmartGuardian) {
        setActivePoster('smartGuardian');
      } else if ('isScience' in service && service.isScience) {
        setActivePoster('science' as any);
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
      <div className="bg-white sticky top-0 z-20 shadow-sm overflow-x-auto scrollbar-hide py-2">
        <div className="flex space-x-2 px-4">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center space-x-1.5 px-4 py-2 rounded-2xl whitespace-nowrap text-xs font-black transition-all ${
                activeCategory === cat.id 
                  ? 'bg-slate-900 text-white shadow-lg shadow-slate-200' 
                  : 'bg-slate-50 text-slate-400 hover:bg-slate-100'
              }`}
            >
              <cat.icon size={14} fill={activeCategory === cat.id ? "currentColor" : "none"} className={activeCategory === cat.id ? "opacity-100" : "opacity-40"} />
              <span>{cat.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        {/* Services Grid */}
        <div className="p-4 space-y-8">
          {activeCategory === 'all' ? (
            // Optimized "All" Layout: Grouped by Category
            CATEGORIES.filter(c => c.id !== 'all').map(category => {
              const categoryServices = SERVICES.filter(s => s.category === category.id).sort((a, b) => {
                const aLit = isLit(a) ? 1 : 0;
                const bLit = isLit(b) ? 1 : 0;
                return bLit - aLit;
              });
              
              if (categoryServices.length === 0) return null;

              return (
                <div key={`group-${category.id}`} className="space-y-4">
                  <div className="flex items-center justify-between px-1">
                    <div className="flex items-center space-x-2">
                      <div className="w-1 h-4 bg-slate-900 rounded-full" />
                      <h2 className="text-sm font-black text-slate-800">{category.label}</h2>
                    </div>
                  </div>
                  <div className="grid grid-cols-4 gap-y-6 gap-x-3">
                    {categoryServices.map((service) => (
                      <motion.button 
                        layout
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        key={`all-service-${service.id}`} 
                        onClick={() => handleServiceClick(service)}
                        className="flex flex-col items-center space-y-2 active:scale-95 transition-transform"
                      >
                        <div className={`w-14 h-14 ${service.color} rounded-2xl flex items-center justify-center shadow-sm ${!isLit(service) ? 'grayscale contrast-50 opacity-60' : ''}`}>
                          <service.icon size={28} />
                        </div>
                        <span className={`text-[11px] font-bold text-center leading-tight whitespace-pre-line ${!isLit(service) ? 'text-slate-300' : 'text-slate-600'}`}>
                          {service.label}
                        </span>
                      </motion.button>
                    ))}
                  </div>
                </div>
              );
            })
          ) : activeCategory === 'life' ? (
            // Optimized "Life Services" Layout: Featured Top + Grid
            <div className="space-y-8">
              <div className="relative h-40 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-[2.5rem] p-6 text-white overflow-hidden shadow-xl shadow-blue-100">
                <Coffee size={120} className="absolute -right-8 -bottom-8 opacity-10 rotate-12" />
                <div className="relative z-10">
                  <span className="text-[10px] font-black tracking-widest uppercase bg-white/20 px-2 py-0.5 rounded">Featured</span>
                  <h2 className="text-2xl font-black mt-2 tracking-tighter">美好生活 • 便民服务</h2>
                  <p className="text-xs font-medium opacity-80 mt-1 max-w-[180px]">为您提供最贴心的社区生活保障，享受智慧便捷服务。</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-2 px-1">
                  <div className="w-1 h-4 bg-blue-500 rounded-full" />
                  <h2 className="text-sm font-black text-slate-800">全部生活服务</h2>
                </div>
                <div className="grid grid-cols-4 gap-y-6 gap-x-3">
                  {filteredServices.map((service) => (
                    <motion.button 
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      key={`life-service-${service.id}`} 
                      onClick={() => handleServiceClick(service)}
                      className="flex flex-col items-center space-y-2 active:scale-95 transition-transform"
                    >
                      <div className={`w-14 h-14 ${service.color} rounded-2xl flex items-center justify-center shadow-sm ${!isLit(service) ? 'grayscale contrast-50 opacity-60' : ''}`}>
                        <service.icon size={28} />
                      </div>
                      <span className={`text-[11px] font-bold text-center leading-tight whitespace-pre-line ${!isLit(service) ? 'text-slate-300' : 'text-slate-600'}`}>
                        {service.label}
                      </span>
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            // Standard Category Layout
            <div className="grid grid-cols-4 gap-y-6 gap-x-3">
              {filteredServices.map((service) => (
                <motion.button 
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  key={`category-service-${service.id}`} 
                  onClick={() => handleServiceClick(service)}
                  className="flex flex-col items-center space-y-2 active:scale-95 transition-transform"
                >
                  <div className={`w-14 h-14 ${service.color} rounded-2xl flex items-center justify-center shadow-sm ${!isLit(service) ? 'grayscale contrast-50 opacity-60' : ''}`}>
                    <service.icon size={28} />
                  </div>
                  <span className={`text-[11px] font-bold text-center leading-tight whitespace-pre-line ${!isLit(service) ? 'text-slate-300' : 'text-slate-600'}`}>
                    {service.label}
                  </span>
                </motion.button>
              ))}
            </div>
          )}
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
              {activePoster === 'online' && <OnlineServicePoster service={selectedOnlineService} onBack={() => setActivePoster(null)} />}
              {activePoster === 'funeral' && <FuneralGuidePoster onBack={() => setActivePoster(null)} />}
              {activePoster === 'smartGuardian' && <ElderlySmartGuardianPoster onBack={() => setActivePoster(null)} />}
              {(activePoster as any) === 'science' && <CommunitySciencePoster onBack={() => setActivePoster(null)} />}
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
