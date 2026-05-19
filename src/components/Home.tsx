import React, { useState, useEffect } from 'react';
import { MapPin, Cloud, ChevronRight, Phone, MessageSquare, ShieldCheck, CreditCard, Key, Microscope, GripVertical, Baby, LayoutGrid, Heart, Smartphone, Gavel, Scale, Wrench, X, Star, Bell, FlaskConical, Calendar, Utensils, Camera, Coffee, Hotel, Store, Share2 } from 'lucide-react';
import { motion, AnimatePresence, Reorder, useDragControls, DragControls } from 'motion/react';
import { CommunitySciencePoster } from './Service';

interface Review {
  userName: string;
// ... (rest of interfaces remain same)
  avatar: string;
  rating: number;
  content: string;
  time: string;
}

interface Provider {
  id: number;
  name: string;
  role: string;
  avatar: string;
  satisfaction: string;
  expertise: string[];
  reviews: Review[];
}

interface HomeProps {
  onOpenSnapReport: () => void;
  isSeniorMode: boolean;
  onToggleSeniorMode: () => void;
}

// Sub-component for Senior Mode
function HomeSenior({ onOpenSnapReport, onToggleSeniorMode, community, onToggleCommunity }: { onOpenSnapReport: () => void, onToggleSeniorMode: () => void, community: string, onToggleCommunity: () => void }) {
  const [isMaintenanceOpen, setIsMaintenanceOpen] = useState(false);
  const [showShare, setShowShare] = useState(false);

  const seniorLinks = [
    { label: '一键呼叫', icon: Phone, color: 'bg-red-500 text-white', desc: '紧急联系人' },
    { label: '助餐服务', icon: Heart, color: 'bg-orange-500 text-white', desc: '预约午餐' },
    { label: '共享维修', icon: Wrench, color: 'bg-blue-600 text-white', desc: '疏通修灯' },
    { label: '预约挂号', icon: ShieldCheck, color: 'bg-blue-500 text-white', desc: '医院就诊' },
    { label: '随手拍', icon: Smartphone, color: 'bg-emerald-500 text-white', desc: '反映问题' },
  ];

  return (
    <div className="flex flex-col h-full bg-[#FFF9F5] pb-24 overflow-y-auto">
      <div className="bg-white px-6 pt-12 pb-6 flex items-center justify-between shadow-sm">
        <div>
          <h1 className="text-3xl font-black text-gray-900 leading-none">下午好</h1>
          <p className="text-lg font-bold text-orange-500 mt-2">陈大文 老先生</p>
        </div>
        <button 
          onClick={onToggleSeniorMode}
          className="flex flex-col items-center space-y-1 bg-gray-100 p-3 rounded-2xl active:scale-95 transition-transform"
        >
          <LayoutGrid size={24} className="text-gray-500" />
          <span className="text-xs font-bold text-gray-600">退出关怀</span>
        </button>
      </div>

      <div className="px-6 py-6 space-y-6">
        <div className="grid grid-cols-1 gap-4">
          {seniorLinks.map((link, idx) => (
            <motion.button
              key={`senior-link-${idx}`}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                 if (link.label === '随手拍') onOpenSnapReport();
                 if (link.label === '共享维修') setIsMaintenanceOpen(true);
              }}
              className={`${link.color} p-6 rounded-[32px] flex items-center shadow-xl shadow-gray-200/50`}
            >
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mr-6">
                <link.icon size={40} />
              </div>
              <div className="text-left">
                <div className="text-2xl font-black">{link.label}</div>
                <div className="text-sm font-bold opacity-80 mt-1">{link.desc}</div>
              </div>
              <ChevronRight className="ml-auto opacity-50" size={24} />
            </motion.button>
          ))}
        </div>

        <div className="bg-white p-6 rounded-[32px] border-2 border-orange-100">
           <h3 className="text-xl font-black text-gray-800 mb-4 flex items-center">
              <div className="w-2 h-6 bg-orange-500 rounded-full mr-2" />
              我的日常
           </h3>
           <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-orange-50 rounded-2xl">
                 <div className="flex items-center space-x-3">
                    <span className="text-2xl">🥘</span>
                    <span className="text-lg font-bold">今日午餐(已订)</span>
                 </div>
                 <span className="text-orange-600 font-bold">11:30送达</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-blue-50 rounded-2xl">
                 <div className="flex items-center space-x-3">
                    <span className="text-2xl">💊</span>
                    <span className="text-lg font-bold">餐后服药提醒</span>
                 </div>
                 <span className="text-blue-600 font-bold">13:00</span>
              </div>
           </div>
        </div>
      </div>

      <div className="px-6 pb-10">
         <button className="w-full bg-white border-4 border-orange-500 text-orange-600 py-6 rounded-[32px] text-2xl font-black shadow-lg">
            一键呼叫社区热线
         </button>
      </div>

      {/* Maintenance Modal for Seniors */}
      <AnimatePresence>
        {isMaintenanceOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-white flex flex-col p-6 overflow-y-auto"
          >
            <AnimatePresence>
              {showShare && <ShareOverlay onClose={() => setShowShare(false)} />}
            </AnimatePresence>
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-black text-gray-900">维修价目表</h2>
              <div className="flex items-center space-x-3">
                <button 
                  onClick={() => setShowShare(true)}
                  className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center"
                >
                  <Share2 size={24} />
                </button>
                <button onClick={() => setIsMaintenanceOpen(false)} className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                  <X size={24} />
                </button>
              </div>
            </div>

            <div className="space-y-8 pb-32">
               <div className="space-y-4">
                  <h3 className="text-xl font-black text-blue-600">电路灯具类</h3>
                  <div className="bg-white rounded-3xl border-2 border-gray-100 divide-y divide-gray-100">
                     <div className="p-4 flex justify-between items-center"><span className="font-bold">换普通灯泡</span><span className="font-black text-xl">¥10</span></div>
                     <div className="p-4 flex justify-between items-center"><span className="font-bold">换开关插座</span><span className="font-black text-xl">¥25</span></div>
                     <div className="p-4 flex justify-between items-center"><span className="font-bold">换客厅大灯</span><span className="font-black text-xl">¥40</span></div>
                  </div>
               </div>

               <div className="space-y-4">
                  <h3 className="text-xl font-black text-blue-600">水路卫浴类</h3>
                  <div className="bg-white rounded-3xl border-2 border-gray-100 divide-y divide-gray-100">
                     <div className="p-4 flex justify-between items-center"><span className="font-bold">换水龙头</span><span className="font-black text-xl">¥30</span></div>
                     <div className="p-4 flex justify-between items-center"><span className="font-bold">疏通马桶</span><span className="font-black text-xl">¥70</span></div>
                     <div className="p-4 flex justify-between items-center"><span className="font-bold">换花洒套装</span><span className="font-black text-xl">¥70</span></div>
                  </div>
               </div>
            </div>

            <div className="fixed bottom-0 left-0 right-0 p-6 bg-white border-t border-gray-100">
               <a href="tel:15548837989" className="w-full bg-blue-600 text-white py-6 rounded-[32px] text-2xl font-black flex items-center justify-center space-x-3 shadow-xl">
                  <Phone size={28} fill="currentColor" />
                  <span>呼叫维修师傅</span>
               </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Banner Component to isolate re-renders
const HomeBanner = React.memo(({ banners }: { banners: any[] }) => {
  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    if (!banners.length) return;
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [banners.length]);

  return (
    <div className="relative h-44 rounded-3xl overflow-hidden shadow-lg shadow-orange-100/50">
      <AnimatePresence mode="wait">
        <motion.div
          key={`banner-${currentBanner}`}
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
          <div key={`dot-${i}`} className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${i === currentBanner ? 'bg-[#FF8C00] w-4' : 'bg-white/60'}`} />
        ))}
      </div>
    </div>
  );
});

// Sub-component for Default Mode
function HomeDefault({ onOpenSnapReport, onToggleSeniorMode, community, onToggleCommunity }: { onOpenSnapReport: () => void, onToggleSeniorMode: () => void, community: string, onToggleCommunity: () => void }) {
  const [sections, setSections] = useState([
    'property_governance',
    'hot_services',
    'volunteer_recruitment',
    'shared_providers',
    'legal_aid',
    'announcements',
    'community_dynamics',
    'discussion',
    'phone_dial'
  ]);
  const [selectedProvider, setSelectedProvider] = useState<Provider | null>(null);
  const [showQrModal, setShowQrModal] = useState(false);
  const [showIntroModal, setShowIntroModal] = useState(false);
  const [showPropertyModal, setShowPropertyModal] = useState(false);
  const [showSciencePoster, setShowSciencePoster] = useState(false);
  const [showShare, setShowShare] = useState(false);

  // Dynamic Content Data
  const COMMUNITY_DATA: Record<string, { banners: any[], news: any[], announcement: string }> = {
    '亿利社区': {
      banners: [
        { id: 1, title: '亿利社区 · 红色物业', desc: '打造全区红色物业示范标杆', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80' },
        { id: 2, title: '暖心亿利 · 智慧邻里', desc: '科技赋能，让家园更有温度', image: 'https://images.unsplash.com/photo-1577412647305-991150c7d163?auto=format&fit=crop&w=600&q=80' }
      ],
      news: [
        { id: 1, title: '亿利社区党群服务中心正式挂牌', type: '动态', time: '刚刚', image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=600&q=80' },
        { id: 2, title: '亿利生态城开展垃圾分类宣传周', type: '环保', time: '5小时前', image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=600&q=80' }
      ],
      announcement: '关于亿利生态城西区高空抛物监控安装公示...'
    },
    '老缸房社区': {
      banners: [
        { id: 1, title: '老缸房社区 · 守望相助', desc: '千年古韵，和谐新里', image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=600&q=80' },
        { id: 2, title: '春季义诊 · 关爱健康', desc: '社区卫生站免费为居民体检', image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=600&q=80' }
      ],
      news: [
        { id: 1, title: '老缸房社区开展“春季义诊”活动', type: '动态', time: '1天前', image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=600&q=80' },
        { id: 2, title: '社区智慧路灯全面升级完毕', type: '便民', time: '2小时前', image: 'https://images.unsplash.com/photo-1544376798-89aa6b82c6cd?auto=format&fit=crop&w=400&q=80' }
      ],
      announcement: '老缸房社区卫生服务站本周六接种提醒...'
    },
    '滨河路社区': {
      banners: [
        { id: 1, title: '滨河路社区 · 滨水生活', desc: '乐享优美环境，共建绿色社区', image: 'https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?auto=format&fit=crop&w=600&q=80' },
        { id: 2, title: '滨河步道 · 活力社区', desc: '倡导绿色出行，共商社区事', image: 'https://images.unsplash.com/photo-1519337265831-281ec6cc8514?auto=format&fit=crop&w=600&q=80' }
      ],
      news: [
        { id: 1, title: '滨河路社区滨水步道清理行动', type: '志愿', time: '刚刚', image: 'https://images.unsplash.com/photo-1493246507139-91e8bef99c1e?auto=format&fit=crop&w=600&q=80' },
        { id: 2, title: '滨河路社区召开居民议事会', type: '治理', time: '4小时前', image: 'https://images.unsplash.com/photo-1543269664-76bc3997d9ea?auto=format&fit=crop&w=600&q=80' }
      ],
      announcement: '滨河路社区近期河道保洁通知...'
    }
  };

  const activeData = COMMUNITY_DATA[community] || COMMUNITY_DATA['亿利社区'];

  const COMMUNITY_INTRO_DETAILS: Record<string, {
    title: string;
    image: string;
    scope: string;
    stats: { label: string, value: string, unit: string, color: string, iconColor: string }[];
    complexes: string[];
    partyBuilding: { branchCount: number, memberCount: number, registeredMemberCount: number, brand: string };
    purpose: string;
    tagline: string;
  }> = {
    '亿利社区': {
      title: '亿利社区',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
      scope: '东起金桥一路，西至呼伦南路，北至包头大街，南到金源街，外加银河北街北侧亿利生态城东、西区。',
      stats: [
        { label: '辖区面积', value: '0.67', unit: 'km²', color: 'bg-orange-50', iconColor: 'text-orange-400' },
        { label: '总户数', value: '5617', unit: '户', color: 'bg-blue-50', iconColor: 'text-blue-400' },
        { label: '总人口', value: '9361', unit: '人', color: 'bg-emerald-50', iconColor: 'text-emerald-400' },
        { label: '居民小区', value: '7', unit: '个', color: 'bg-purple-50', iconColor: 'text-purple-400' },
      ],
      complexes: ['亿利生态城东区', '亿利生态城西区', '希望阳光苑', '蒙元骑士城一期', '蒙元骑士城二期', '环保小区', '统计小区'],
      partyBuilding: {
        branchCount: 2,
        memberCount: 73,
        registeredMemberCount: 178,
        brand: '“领建、联建、促建”“三建”党建品牌'
      },
      purpose: '坚持把“为老为小”优质服务融入基层治理中，构建共建、共治、共享的社区治理新格局。',
      tagline: '“以人本、服务居民”'
    },
    '老缸房社区': {
      title: '老缸房社区',
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=800&q=80',
      scope: '北起锡林郭勒南路，南至大黑河，西接赛罕路，东邻金桥路。',
      stats: [
        { label: '辖区面积', value: '1.2', unit: 'km²', color: 'bg-orange-50', iconColor: 'text-orange-400' },
        { label: '总户数', value: '4200', unit: '户', color: 'bg-blue-50', iconColor: 'text-blue-400' },
        { label: '总人口', value: '11500', unit: '人', color: 'bg-emerald-50', iconColor: 'text-emerald-400' },
        { label: '居民小区', value: '5', unit: '个', color: 'bg-purple-50', iconColor: 'text-purple-400' },
      ],
      complexes: ['老缸房住宅楼', '如意佳园', '滨河公馆', '金桥小区', '塞外锦绣'],
      partyBuilding: {
        branchCount: 3,
        memberCount: 85,
        registeredMemberCount: 156,
        brand: '“古韵新风·红色缸房”党建引领品牌'
      },
      purpose: '传承历史底蕴，创新现代治理，全心全意为居民办实事、解难题。',
      tagline: '“守望相助，共享和谐”'
    },
    '滨河路社区': {
      title: '滨河路社区',
      image: 'https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?auto=format&fit=crop&w=800&q=80',
      scope: '沿滨河路展开，东起河源路，西至生态园边界。',
      stats: [
        { label: '辖区面积', value: '0.85', unit: 'km²', color: 'bg-orange-50', iconColor: 'text-orange-400' },
        { label: '总户数', value: '3800', unit: '户', color: 'bg-blue-50', iconColor: 'text-blue-400' },
        { label: '总人口', value: '8900', unit: '人', color: 'bg-emerald-50', iconColor: 'text-emerald-400' },
        { label: '居民小区', value: '4', unit: '个', color: 'bg-purple-50', iconColor: 'text-purple-400' },
      ],
      complexes: ['滨河丽景', '水岸华庭', '绿谷嘉园', '半岛阳光'],
      partyBuilding: {
        branchCount: 2,
        memberCount: 68,
        registeredMemberCount: 142,
        brand: '“碧水蓝天·党员先锋”生态治理党建'
      },
      purpose: '绿色宜居，文化引领，通过生态社区建设提升居民幸福指数。',
      tagline: '“滨河美家，绿色共建”'
    }
  };

  const activeIntro = COMMUNITY_INTRO_DETAILS[community] || COMMUNITY_INTRO_DETAILS['亿利社区'];

  const quickLinks = [
    { id: 1, label: '随手拍', icon: Camera, color: 'bg-blue-50 text-blue-500' },
    { id: 2, label: '物业三双', icon: ShieldCheck, color: 'bg-red-50 text-red-500' },
    { id: 3, label: '社区简介', isIntro: true, color: 'bg-red-50 text-red-600' },
    { id: 4, label: '辖区物业', isProperty: true, color: 'bg-green-50 text-green-500' },
    { id: 5, label: '科普入口', icon: Microscope, color: 'bg-purple-50 text-purple-500' },
  ];

  const propertyCompanies = [
    {
      id: 1,
      name: '呼和浩特市鼎欣物业服务有限责任公司',
      neighborhoods: ['蒙元骑士城二期'],
      manager: '张经理',
      phone: '13500001111',
      hotline: '0471-1234567',
      fee: '1.98元/㎡/月',
      standard: '国家一级物业服务标准，全天候全方位安保巡视，急修15分钟到场。'
    },
    {
      id: 2,
      name: '内蒙古万家互联物业服务有限公司',
      neighborhoods: ['工商小区', '环保小区'],
      manager: '李经理',
      phone: '13611112222',
      hotline: '0471-2233445',
      fee: '1.50元/㎡/月',
      standard: '智慧化管理模式，注重环境绿化维护及公区设施定期精细保养。'
    },
    {
      id: 3,
      name: '内蒙古泽信物业服务有限公司',
      neighborhoods: ['希望阳光苑'],
      manager: '赵经理',
      phone: '13722223333',
      hotline: '0471-3344556',
      fee: '2.10元/㎡/月',
      standard: '管家式服务体系，高频家庭入户关怀，定期开展社区文化品牌活动。'
    },
    {
      id: 4,
      name: '金威物业服务有限公司呼和浩特分公司',
      neighborhoods: ['亿利生态城西区', '亿利生态城东区'],
      manager: '王经理',
      phone: '13833334444',
      hotline: '0471-4455667',
      fee: '2.20元/㎡/月',
      standard: '高端生态社区保障，数字化报修系统，绿色环保化深度公区保洁。'
    },
    {
      id: 5,
      name: '呼和浩特市博凯物业服务有限公司',
      neighborhoods: ['统计小区'],
      manager: '刘经理',
      phone: '13944445555',
      hotline: '0471-5566778',
      fee: '1.20元/㎡/月',
      standard: '针对老旧小区优化管理，专注于基础安防升级与老旧管网应急抢修。'
    }
  ];

  const PartyIcon = () => (
    <div className="relative w-14 h-14 flex items-center justify-center scale-125 -mt-3">
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-red-400/20 blur-xl rounded-full animate-pulse" />
      
      {/* Four Red Petals (Teardrop shape) */}
      <div className="absolute inset-0 flex items-center justify-center">
        {[45, 135, 225, 315].map((rotate, i) => (
          <div 
            key={i}
            className="absolute w-8 h-12 bg-gradient-to-t from-red-700 via-red-600 to-red-500 rounded-[50%_50%_50%_50%_/_60%_60%_40%_40%] shadow-lg border border-red-800/20"
            style={{ 
              transform: `rotate(${rotate}deg) translateY(-12px)`,
              boxShadow: 'inset 0 4px 8px rgba(0,0,0,0.2)'
            }}
          />
        ))}
      </div>
      
      {/* Center Golden Circle with Calligraphy Text */}
      <div className="relative w-10 h-10 bg-gradient-to-br from-yellow-300 via-yellow-500 to-orange-600 rounded-full flex flex-col items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.3)] border-2 border-yellow-200 z-10 overflow-hidden leading-none gap-[1mm]">
        <span className="font-calligraphy text-[11px] text-red-700 font-bold">社区</span>
        <span className="font-calligraphy text-[11px] text-red-700 font-bold">简介</span>
        {/* Subtle shine effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent pointer-events-none" />
      </div>

      {/* Sparkles approximation */}
      <div className="absolute inset-x-0 top-0 flex justify-center">
         <div className="w-1 h-1 bg-white rounded-full animate-ping opacity-70" style={{ animationDelay: '0.2s' }} />
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center">
         <div className="w-1 h-1 bg-white rounded-full animate-ping opacity-70" style={{ animationDelay: '0.5s' }} />
      </div>
    </div>
  );

  const phones = [
    { label: '物业服务', phone: '0471-12345678' },
    { label: '居委会', phone: '0471-87654321' },
    { label: '卫生站', phone: '0471-11223344' },
    { label: '安保中心', phone: '0471-55667788' },
  ];

  const sharedProviders: Provider[] = [
    {
      id: 1,
      name: '张师傅',
      role: '高级水电工',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=worker1',
      satisfaction: '4.9',
      expertise: ['电路维修', '灯具更换', '水管疏通'],
      reviews: [
        { userName: '李阿姨', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=r1', rating: 5, content: '张师傅来得很准时，不仅修好了漏水，还帮帮我把阀门也检查了一遍，非常细心！', time: '1天前' },
        { userName: '王大伯', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=r2', rating: 5, content: '价格透明，技术过硬，推荐。', time: '3天前' }
      ]
    },
    {
      id: 2,
      name: '王大姐',
      role: '专业保洁',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=worker2',
      satisfaction: '4.8',
      expertise: ['深度开荒', '收纳整理', '玻璃擦拭'],
      reviews: [
        { userName: '陈先生', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=r3', rating: 5, content: '家里收拾得一尘不染，效率极高。', time: '1周前' }
      ]
    },
    {
      id: 3,
      name: '李医生',
      role: '社区康复师',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=worker3',
      satisfaction: '5.0',
      expertise: ['老年康复', '推拿按摩', '健康讲座'],
      reviews: [
        { userName: '赵奶奶', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=r4', rating: 5, content: '李医生的手法很专业，按完之后腰腿舒服多了。', time: '2天前' }
      ]
    }
  ];

  const renderSection = (id: string, dragControls?: DragControls) => {
    const handleProps = dragControls ? {
       onPointerDown: (e: React.PointerEvent) => dragControls.start(e),
       className: "absolute top-4 right-4 p-2 cursor-grab active:cursor-grabbing text-gray-300 hover:text-gray-600 transition-colors z-20"
    } : {
       className: "absolute top-4 right-4 opacity-0 group-hover:opacity-30 transition-opacity"
    };

    switch (id) {
      case 'property_governance':
        return (
          <div className="bg-white p-4 rounded-3xl shadow-md shadow-red-50/50 border border-red-50 relative group">
            <div {...handleProps}><GripVertical size={18} /></div>
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
                 <div key={`property-item-${i}`} className="bg-gray-50/50 rounded-2xl p-2 text-center border border-gray-50">
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
            <div {...handleProps}><GripVertical size={18} /></div>
            <div className="flex items-center justify-between mb-4 px-1">
               <div className="flex items-center space-x-2">
                  <div className="w-1 h-3.5 bg-[#FF8C00] rounded-full" />
                  <h3 className="font-extrabold text-gray-900 text-sm">热点服务排行</h3>
               </div>
               <span className="text-[10px] text-gray-400 font-medium">近7日活跃</span>
            </div>
            <div className="flex space-x-4 overflow-x-auto pb-2 scrollbar-hide">
               {[
                 { label: '小小科学家', icon: FlaskConical, color: 'bg-cyan-50 text-cyan-500' },
                 { label: '活动报名', icon: Calendar, color: 'bg-blue-50 text-blue-500' },
                 { label: '物业报修', icon: Wrench, color: 'bg-red-50 text-red-500' },
                 { label: '场地预约', icon: MapPin, color: 'bg-indigo-50 text-indigo-500' },
                 { label: '社区食堂', icon: Utensils, color: 'bg-yellow-50 text-yellow-600' }
               ].map((item, i) => (
                 <div key={`hot-service-${i}`} className="flex-shrink-0 flex flex-col items-center relative group">
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
      case 'volunteer_recruitment':
        return (
          <div className="bg-emerald-900 rounded-[32px] p-6 text-white relative overflow-hidden shadow-xl shadow-emerald-100 group">
            <div {...handleProps}><GripVertical size={18} /></div>
            <Heart size={140} className="absolute -right-10 -bottom-10 opacity-10 rotate-12" />
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-white/20 rounded-xl flex items-center justify-center">
                  <span className="text-lg">🤝</span>
                </div>
                <h3 className="font-black text-lg tracking-tight">社区志愿者招募</h3>
              </div>

              <div className="flex space-x-3 mb-6 overflow-x-auto pb-2 scrollbar-hide -mx-1 px-1">
                {[
                  { title: '环保卫士', img: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=200&q=80' },
                  { title: '关爱孤寡', img: 'https://images.unsplash.com/photo-1579208570378-8c970854bc23?auto=format&fit=crop&w=200&q=80' },
                  { title: '文明引导', img: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=200&q=80' }
                ].map((act, i) => (
                  <div key={`vol-act-${i}`} className="flex-shrink-0 w-28 text-center">
                    <div className="h-20 rounded-2xl overflow-hidden mb-1.5 ring-2 ring-white/10">
                      <img src={act.img} className="w-full h-full object-cover" alt="" referrerPolicy="no-referrer" />
                    </div>
                    <span className="text-[10px] font-bold opacity-80">{act.title}</span>
                  </div>
                ))}
              </div>

              <div className="mt-auto flex items-end justify-between">
                <div>
                  <p className="text-xs font-bold opacity-70 mb-1">已累计服务社区</p>
                  <div className="flex items-baseline space-x-1">
                    <span className="text-2xl font-black">1280+</span>
                    <span className="text-[10px] font-bold opacity-60">小时</span>
                  </div>
                </div>
                <button 
                  onClick={() => setShowQrModal(true)}
                  className="bg-white text-emerald-900 px-6 py-2.5 rounded-2xl text-xs font-black shadow-lg active:scale-95 transition-transform flex items-center space-x-2"
                >
                  <span>立即加入</span>
                  <ChevronRight size={14} />
                </button>
              </div>
            </div>
          </div>
        );
      case 'shared_providers':
        return (
          <div className="bg-white p-4 rounded-3xl shadow-md border border-gray-100 relative group">
            <div {...handleProps}><GripVertical size={18} /></div>
            <div className="flex items-center justify-between mb-4 px-1">
              <div className="flex items-center space-x-2">
                <div className="w-1 h-3.5 bg-blue-500 rounded-full" />
                <h3 className="font-extrabold text-gray-900 text-sm">社区共享达人</h3>
              </div>
              <span className="text-[10px] text-blue-500 bg-blue-50 px-2 py-0.5 rounded-full font-bold">身边的好手</span>
            </div>
            
            <div className="grid grid-cols-3 gap-3">
              {sharedProviders.map((provider) => (
                <button 
                  key={`provider-${provider.id}`}
                  onClick={() => setSelectedProvider(provider)}
                  className="flex flex-col items-center group active:scale-95 transition-transform"
                >
                  <div className="relative mb-2">
                    <img src={provider.avatar} className="w-16 h-16 rounded-full border-2 border-white shadow-sm ring-1 ring-gray-100" alt="" referrerPolicy="no-referrer" />
                    <div className="absolute -bottom-1 -right-1 bg-white px-1 py-0.5 rounded-md border border-gray-100 flex items-center shadow-xs">
                      <Star size={8} className="text-orange-500 fill-orange-500 mr-0.5" />
                      <span className="text-[8px] font-black">{provider.satisfaction}</span>
                    </div>
                  </div>
                  <div className="text-[11px] font-black text-gray-800">{provider.name}</div>
                  <div className="text-[9px] text-gray-400 mt-0.5">{provider.role}</div>
                </button>
              ))}
            </div>
          </div>
        );
      case 'legal_aid':
        return (
          <div className="bg-white rounded-[32px] p-6 shadow-md shadow-slate-100 border border-slate-50 relative group">
            <div {...handleProps}><GripVertical size={18} /></div>
            <div className="flex items-center justify-between mb-5 px-1">
              <div className="flex items-center space-x-2">
                <div className="w-1.5 h-4 bg-slate-800 rounded-full" />
                <h3 className="font-extrabold text-gray-900 text-sm">社区法律援助</h3>
              </div>
              <span className="text-[10px] text-slate-500 bg-slate-50 px-2.5 py-1 rounded-lg font-bold tracking-tight">免费公益服务</span>
            </div>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-start space-x-3 bg-slate-50/80 p-3 rounded-2xl border border-slate-100/50">
                 <div className="w-8 h-8 rounded-xl bg-white flex items-center justify-center text-slate-600 shadow-sm shrink-0">
                    <Scale size={16} />
                 </div>
                 <div>
                    <h4 className="text-[11px] font-black text-slate-800 mb-0.5">遗产继承咨询</h4>
                    <p className="text-[10px] text-gray-500 leading-relaxed font-medium">针对财产继承提供专业指引，化解家庭矛盾，展现援助实效。</p>
                 </div>
              </div>
              <div className="flex items-start space-x-3 bg-slate-50/80 p-3 rounded-2xl border border-slate-100/50">
                 <div className="w-8 h-8 rounded-xl bg-white flex items-center justify-center text-slate-600 shadow-sm shrink-0">
                    <Scale size={16} />
                 </div>
                 <div>
                    <h4 className="text-[11px] font-black text-slate-800 mb-0.5">物业维修调解</h4>
                    <p className="text-[10px] text-gray-500 leading-relaxed font-medium">中立核查物业权责纠纷，促成公正赔偿，保障业主合法权益。</p>
                 </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-800 via-slate-900 to-black rounded-[32px] p-5 text-white flex flex-col relative overflow-hidden shadow-xl shadow-slate-200">
              <Gavel size={100} className="absolute -right-6 -bottom-6 opacity-10 text-white transform -rotate-12" />
              
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-md border border-white/10 overflow-hidden p-0.5">
                   <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80" alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <h4 className="font-black text-sm tracking-tight flex items-center">
                    李律师直通车
                    <div className="ml-2 w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  </h4>
                  <p className="text-[9px] opacity-50 font-bold uppercase tracking-widest">Lawyer Li Direct Line</p>
                </div>
              </div>
              
              <a 
                href="tel:13312341234"
                className="w-full bg-white text-slate-900 py-3.5 rounded-2xl text-xs font-black flex items-center justify-center space-x-2 active:scale-[0.98] transition-transform shadow-lg shadow-white/5"
              >
                <Phone size={14} fill="currentColor" />
                <span>一键直拨免费咨询</span>
              </a>
              
              <div className="mt-3 flex items-center justify-center space-x-3 text-[8px] text-slate-500 font-bold">
                 <span>官方委派</span>
                 <span className="opacity-20 text-white">|</span>
                 <span>133-1234-1234</span>
                 <span className="opacity-20 text-white">|</span>
                 <span>隐私受保</span>
              </div>
            </div>
          </div>
        );
      case 'announcements':
        return (
          <div className="relative bg-[#FF8C00]/10 rounded-2xl overflow-hidden border border-[#FF8C00]/20 flex items-center p-3 px-4 group">
            <div {...handleProps}><GripVertical size={16} /></div>
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#FF8C00] mr-3 shrink-0 shadow-sm">
               <Bell size={16} />
            </div>
            <div className="flex-1 truncate">
              <div className="flex items-center space-x-2 mb-0.5">
                <span className="text-[10px] bg-[#FF8C00] text-white px-1.5 py-0.5 rounded font-bold">公告</span>
                <span className="text-xs font-bold text-[#FF8C00]">今日头条</span>
              </div>
              <p className="text-xs text-gray-700 font-medium truncate">{activeData.announcement}</p>
            </div>
            <ChevronRight size={14} className="text-[#FF8C00] opacity-50 ml-2" />
          </div>
        );
      case 'community_dynamics':
        return (
          <div className="space-y-3.5 relative group">
            <div {...handleProps}><GripVertical size={18} /></div>
            <div className="flex justify-between items-center px-1">
               <div className="flex items-center space-x-2">
                 <div className="w-1 h-4 bg-green-500 rounded-full" />
                 <h3 className="font-extrabold text-gray-900">社区动态</h3>
               </div>
               <button className="text-[10px] text-gray-400 font-bold hover:text-[#FF8C00]">查看更多</button>
            </div>
            <div className="space-y-3">
               {activeData.news.map(item => (
                 <div key={`news-item-${item.id}`} className="bg-white p-3 rounded-2xl flex space-x-3 border border-gray-50 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] overflow-hidden transition-transform active:scale-[0.99]">
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
                              <div key={`avatar-${item.id}-${i}`} className="w-5 h-5 rounded-full border-2 border-white bg-gray-100 overflow-hidden shadow-sm">
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
            <div {...handleProps}><GripVertical size={18} /></div>
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
          <div className="space-y-3.5 relative group">
            <div {...handleProps}><GripVertical size={18} /></div>
            <div className="flex justify-between items-center px-1">
              <h3 className="font-bold text-gray-900 text-sm">便民电话速拨</h3>
            </div>
            <div className="flex space-x-3 overflow-x-auto pb-2 scrollbar-hide -mx-1 px-1">
              {phones.map((item, idx) => (
                 <button key={`phone-link-${idx}`} className="flex-shrink-0 flex items-center bg-white px-4 py-3 rounded-2xl shadow-sm border border-gray-50 space-x-3 active:bg-gray-50 transition-colors">
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

  const DraggableSectionItem = ({ sectionId }: { sectionId: string, key?: string }) => {
    const dragControls = useDragControls();
    return (
      <Reorder.Item 
        value={sectionId}
        dragListener={false}
        dragControls={dragControls}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
      >
        {renderSection(sectionId, dragControls)}
      </Reorder.Item>
    );
  };

  return (
    <div className="p-4 space-y-6">
      {/* Header: Location & Weather */}
      <div className="flex justify-between items-center bg-white p-3 px-4 rounded-2xl shadow-sm border border-gray-50">
        <div 
          onClick={onToggleCommunity}
          className="flex items-center space-x-3 text-gray-800 cursor-pointer active:opacity-70 transition-opacity"
        >
          <div className="bg-orange-50 p-1.5 rounded-lg">
            <MapPin size={20} className="text-[#FF8C00]" />
          </div>
          <div className="flex flex-col justify-center">
            <span className="text-base font-extrabold text-[#FF8C00] leading-none mb-1">为民服务</span>
            <div className="flex items-center space-x-1">
              <span className="font-bold text-xs text-gray-500 tracking-tight">{community}</span>
              <span className="text-[9px] bg-gray-100 px-1 py-0.5 rounded text-gray-400 font-normal">自动定位</span>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-2 text-gray-600 bg-gray-50 px-3 py-1.5 rounded-xl">
          <Cloud size={16} className="text-blue-400" />
          <span className="text-xs font-medium">24°C 晴</span>
        </div>
        <button 
          onClick={onToggleSeniorMode}
          className="flex items-center space-x-1 bg-orange-50 py-1.5 px-3 rounded-full border border-orange-100 active:scale-95 transition-transform ml-2"
        >
          <span className="text-[10px] font-black text-orange-600 uppercase">长者版</span>
        </button>
      </div>

      {/* Banner Carousel */}
      <HomeBanner banners={activeData.banners} />

      {/* Quick Access Grid */}
      <div className="grid grid-cols-5 gap-2">
        {quickLinks.map((link) => (
          <button 
            key={`quicklink-${link.id}`} 
            onClick={() => {
              if (link.label === '随手拍') onOpenSnapReport();
              if (link.isIntro) setShowIntroModal(true);
              if (link.isProperty) setShowPropertyModal(true);
              if (link.id === 5) setShowSciencePoster(true);
            }}
            className="flex flex-col items-center space-y-1.5 group active:scale-95 transition-transform"
          >
            {link.isIntro ? (
              <PartyIcon />
            ) : (
              <div className={`w-12 h-12 ${link.color} rounded-2xl flex items-center justify-center shadow-sm`}>
                {link.isProperty ? <ShieldCheck size={22} /> : <link.icon size={22} />}
              </div>
            )}
            {!link.isIntro && (
              <span className="text-[10px] text-gray-600 font-bold">{link.label}</span>
            )}
          </button>
        ))}
      </div>

      {/* Property Management Directory Modal */}
      <AnimatePresence>
        {showPropertyModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-white flex flex-col"
          >
            <AnimatePresence>
              {showShare && <ShareOverlay onClose={() => setShowShare(false)} />}
            </AnimatePresence>

            <div className="bg-gradient-to-br from-green-600 to-emerald-700 h-48 shrink-0 relative flex flex-col items-center justify-center text-white overflow-hidden">
               <ShieldCheck size={120} className="absolute -right-10 -bottom-10 opacity-10 rotate-12" />
               <div className="absolute top-6 right-6 flex items-center space-x-3 z-50">
                  <button 
                    onClick={() => setShowShare(true)}
                    className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center active:scale-90 transition-transform"
                  >
                    <Share2 size={20} />
                  </button>
                  <button 
                    onClick={() => setShowPropertyModal(false)}
                    className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center active:scale-90 transition-transform"
                  >
                    <X size={20} />
                  </button>
               </div>
               <button 
                 onClick={() => setShowPropertyModal(false)}
                 className="absolute top-6 left-6 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center active:scale-90 transition-transform"
               >
                 <ChevronRight size={24} className="rotate-180" />
               </button>
               <div className="w-16 h-16 bg-white/20 rounded-3xl flex items-center justify-center mb-4 backdrop-blur-sm border border-white/30 shadow-xl">
                  <ShieldCheck size={32} />
               </div>
               <h2 className="text-2xl font-black tracking-tight">辖区物业名录</h2>
               <p className="text-xs font-bold opacity-70 mt-1">Property Management Directory</p>
            </div>

            <div className="flex-1 overflow-y-auto px-5 py-6 space-y-5 bg-gray-50">
              {propertyCompanies.map((company) => (
                <div key={`property-co-${company.id}`} className="bg-white rounded-[32px] p-6 shadow-sm border border-gray-100 space-y-4">
                   <div className="flex items-start justify-between">
                      <div className="flex-1">
                         <h3 className="text-sm font-black text-gray-900 leading-tight mb-2 pr-4">{company.name}</h3>
                         <div className="flex flex-wrap gap-1.5">
                            {company.neighborhoods.map(nb => (
                               <span key={nb} className="bg-green-50 text-green-600 text-[10px] font-bold px-2 py-0.5 rounded-full border border-green-100">
                                  {nb}
                               </span>
                            ))}
                         </div>
                      </div>
                      <div className="bg-blue-50 p-2 rounded-xl text-blue-600">
                         <Smartphone size={16} />
                      </div>
                   </div>

                   <div className="grid grid-cols-2 gap-3 py-4 border-y border-dashed border-gray-100">
                      <div className="space-y-1">
                         <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">收费标准</div>
                         <div className="text-xs font-black text-gray-700">{company.fee}</div>
                      </div>
                      <div className="space-y-1 text-right">
                         <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">项目经理</div>
                         <div className="text-xs font-black text-gray-700">{company.manager}</div>
                      </div>
                   </div>

                   <div className="space-y-2">
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">服务标准</div>
                      <p className="text-[11px] text-gray-500 font-medium leading-relaxed italic">{company.standard}</p>
                   </div>

                   <div className="flex gap-3 pt-2">
                      <a 
                        href={`tel:${company.phone}`}
                        className="flex-1 bg-blue-50 text-blue-600 py-3 rounded-2xl text-[11px] font-black flex items-center justify-center space-x-2 active:scale-95 transition-transform"
                      >
                         <Phone size={14} fill="currentColor" />
                         <span>联系经理</span>
                      </a>
                      <a 
                        href={`tel:${company.hotline}`}
                        className="flex-1 bg-green-600 text-white py-3 rounded-2xl text-[11px] font-black flex items-center justify-center space-x-2 active:scale-95 transition-transform shadow-lg shadow-green-100"
                      >
                         <Phone size={14} fill="currentColor" />
                         <span>客服热线</span>
                      </a>
                   </div>
                </div>
              ))}
              <div className="pb-10 pt-4 text-center">
                 <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">由 亿利社区党群服务中心 监管</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Community Intro Modal */}
      <AnimatePresence>
        {showIntroModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-white flex flex-col"
          >
            <AnimatePresence>
              {showShare && <ShareOverlay onClose={() => setShowShare(false)} />}
            </AnimatePresence>

            <div className="relative h-64 shrink-0">
               <img 
                 src={activeIntro.image} 
                 className="w-full h-full object-cover" 
                 alt={activeIntro.title} 
                 referrerPolicy="no-referrer"
               />
               <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-white" />
               <div className="absolute top-6 right-6 flex items-center space-x-3 z-50">
                  <button 
                    onClick={() => setShowShare(true)}
                    className="w-10 h-10 bg-black/20 backdrop-blur-md text-white rounded-full flex items-center justify-center active:scale-90 transition-transform"
                  >
                    <Share2 size={20} />
                  </button>
                  <button 
                    onClick={() => setShowIntroModal(false)}
                    className="w-10 h-10 bg-black/20 backdrop-blur-md text-white rounded-full flex items-center justify-center active:scale-90 transition-transform"
                  >
                    <X size={20} />
                  </button>
               </div>
            </div>

            <div className="flex-1 overflow-y-auto px-6 -mt-10 relative z-10">
               <div className="bg-white rounded-[40px] shadow-xl shadow-red-100/50 p-6 border border-red-50">
                  <div className="flex items-center space-x-3 mb-4">
                     <div className="w-1.5 h-6 bg-red-600 rounded-full" />
                     <h2 className="text-2xl font-black text-gray-900">{activeIntro.title}简介</h2>
                  </div>
                  
                  <div className="space-y-6 text-gray-600 leading-relaxed text-sm font-medium">
                     <section className="bg-red-50/50 p-4 rounded-3xl border border-red-100">
                        <p>
                           <span className="text-red-600 font-black">{activeIntro.title}党群服务中心</span>成立于2020年，是一个充满活力与温度的现代社区。
                        </p>
                     </section>

                     <section className="space-y-3">
                        <h3 className="font-black text-gray-800 flex items-center text-base">
                           <MapPin size={18} className="text-red-500 mr-2" />
                           地理范围
                        </h3>
                        <p className="bg-gray-50 p-4 rounded-2xl text-[13px]">
                           {activeIntro.scope}
                        </p>
                     </section>

                     <div className="grid grid-cols-2 gap-3">
                        {activeIntro.stats.map((stat, i) => (
                           <div key={i} className={`${stat.color} p-4 rounded-3xl border border-gray-100 text-center`}>
                              <div className={`text-[10px] font-bold ${stat.iconColor} uppercase tracking-widest mb-1`}>{stat.label}</div>
                              <div className={`text-xl font-black ${stat.iconColor.replace('text-', 'text-slate-800').replace('-400', '')}`}>{stat.value} <span className="text-xs">{stat.unit}</span></div>
                           </div>
                        ))}
                     </div>

                     <section className="space-y-3">
                        <h3 className="font-black text-gray-800 flex items-center text-base">
                           <ShieldCheck size={18} className="text-red-500 mr-2" />
                           辖区小区
                        </h3>
                        <div className="flex flex-wrap gap-2">
                           {activeIntro.complexes.map(tag => (
                             <span key={tag} className="bg-gray-100 text-gray-600 px-3 py-1.5 rounded-xl text-xs font-bold">{tag}</span>
                           ))}
                        </div>
                     </section>

                     <section className="bg-gradient-to-br from-red-600 to-red-700 p-6 rounded-[32px] text-white shadow-lg shadow-red-200">
                        <h3 className="font-black text-lg mb-4 flex items-center">
                           <Star size={20} className="mr-2" />
                           党建引领
                        </h3>
                        <div className="space-y-4 text-sm opacity-90 font-medium">
                           <p>社区党总支下设<span className="font-black text-yellow-300 underline underline-offset-4">{activeIntro.partyBuilding.branchCount}个党支部</span>，在册党员<span className="font-black text-yellow-300">{activeIntro.partyBuilding.memberCount}人</span>，在职党员<span className="font-black text-yellow-300">{activeIntro.partyBuilding.registeredMemberCount}人</span>。</p>
                           <p>以“党建+红色物业”为抓手，打造<span className="font-black text-yellow-200">{activeIntro.partyBuilding.brand}</span>。</p>
                        </div>
                     </section>

                     <section className="space-y-4 pb-10">
                        <h3 className="font-black text-gray-800 text-base">服务宗旨</h3>
                        <p className="text-gray-500 italic">{activeIntro.tagline}</p>
                        <p className="bg-gray-50 p-5 rounded-[2.5rem] border border-gray-100">
                           {activeIntro.purpose}
                        </p>
                     </section>
                  </div>
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Reorderable Sections */}
      <Reorder.Group axis="y" values={sections} onReorder={setSections} className="space-y-6">
        {sections.map((sectionId) => (
          <DraggableSectionItem key={`section-${sectionId}`} sectionId={sectionId} />
        ))}
      </Reorder.Group>

      {/* Provider Modal Overlay */}
      <AnimatePresence>
        {selectedProvider && (
           <ProviderModal 
              provider={selectedProvider} 
              onClose={() => setSelectedProvider(null)} 
           />
        )}
      </AnimatePresence>

      {/* Volunteer QR Modal */}
      <AnimatePresence>
        {showQrModal && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-6 bg-black/60 backdrop-blur-md">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-[3rem] w-full max-w-sm overflow-hidden shadow-2xl relative"
            >
              <button 
                 onClick={() => setShowQrModal(false)}
                 className="absolute top-6 right-6 p-2 bg-gray-100 hover:bg-gray-200 text-gray-500 rounded-full transition-colors"
              >
                <X size={20} />
              </button>

              <div className="p-8 pt-12 text-center">
                <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-3xl flex items-center justify-center mx-auto mb-6">
                  <Heart size={32} fill="currentColor" />
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-2">加入志愿者大家庭</h3>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-8">Scan to Join WeChat Group</p>
                
                <div className="bg-gray-50 p-6 rounded-[2.5rem] mb-8 relative group">
                  <div className="aspect-square bg-white rounded-3xl flex items-center justify-center p-4 shadow-inner ring-1 ring-gray-100">
                    <img 
                      src="https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=https://weixin.qq.com/r/volunteer_group" 
                      alt="Group QR Code" 
                      className="w-full h-full object-contain opacity-80"
                    />
                  </div>
                  <div className="absolute -bottom-3 inset-x-0 flex justify-center">
                    <div className="bg-emerald-600 text-white px-4 py-1 rounded-full text-[10px] font-black shadow-lg">微信扫一扫</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-[10px] text-gray-500 font-medium leading-relaxed italic">
                    “微光汇聚，终成星河”。期待您的加入，共同打造更温暖的老缸房社区。
                  </p>
                  <button 
                    onClick={() => setShowQrModal(false)}
                    className="w-full bg-emerald-900 text-white py-4 rounded-2xl font-black text-sm shadow-xl active:scale-95 transition-transform"
                  >
                    我知道了
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <div className="h-24" />

      {/* Science Poster Modal */}
      <AnimatePresence>
        {showSciencePoster && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[300] bg-white overflow-y-auto"
          >
            <CommunitySciencePoster onBack={() => setShowSciencePoster(false)} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Master component that toggles between modes
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

export default function Home(props: HomeProps) {
  const COMMUNITIES = ['亿利社区', '老缸房社区', '滨河路社区'];
  const [communityIndex, setCommunityIndex] = useState(0);

  const toggleCommunity = () => {
    setCommunityIndex((prev) => (prev + 1) % COMMUNITIES.length);
  };

  if (props.isSeniorMode) {
    return <HomeSenior {...props} community={COMMUNITIES[communityIndex]} onToggleCommunity={toggleCommunity} />;
  }
  return <HomeDefault {...props} community={COMMUNITIES[communityIndex]} onToggleCommunity={toggleCommunity} />;
}

function ProviderModal({ provider, onClose }: { provider: Provider; onClose: () => void }) {
  const [showShare, setShowShare] = useState(false);
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[110] bg-black/60 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4"
      onClick={onClose}
    >
      <AnimatePresence>
        {showShare && <ShareOverlay onClose={() => setShowShare(false)} />}
      </AnimatePresence>
      <motion.div 
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        className="bg-white w-full max-w-lg rounded-t-[40px] sm:rounded-[40px] p-8 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-start mb-8">
           <div className="flex items-center space-x-4">
              <img src={provider.avatar} className="w-20 h-20 rounded-3xl border-4 border-gray-50 shadow-sm" alt="" referrerPolicy="no-referrer" />
              <div>
                 <h3 className="text-2xl font-black text-gray-900">{provider.name}</h3>
                 <p className="text-sm font-bold text-blue-600">{provider.role}</p>
                 <div className="flex items-center mt-1 text-orange-500">
                    <Star size={16} fill="currentColor" />
                    <span className="ml-1 text-sm font-black">满意度 {provider.satisfaction}</span>
                 </div>
              </div>
           </div>
           <div className="flex items-center space-x-2">
              <button 
                onClick={() => setShowShare(true)}
                className="p-2 bg-gray-100 rounded-full text-gray-400 hover:text-gray-600"
              >
                 <Share2 size={24} />
              </button>
              <button onClick={onClose} className="p-2 bg-gray-100 rounded-full text-gray-400 hover:text-gray-600">
                 <X size={24} />
              </button>
           </div>
        </div>

        <div className="space-y-6">
           <div>
              <h4 className="text-sm font-black text-gray-800 mb-3 flex items-center">
                 <div className="w-1 h-3.5 bg-blue-500 rounded-full mr-2" />
                 擅长领域
              </h4>
              <div className="flex flex-wrap gap-2">
                 {provider.expertise.map((item, idx) => (
                    <span key={`expertise-${idx}`} className="bg-blue-50 text-blue-600 px-3 py-1.5 rounded-xl text-xs font-bold ring-1 ring-blue-100">
                       {item}
                    </span>
                 ))}
              </div>
           </div>

           <div>
              <h4 className="text-sm font-black text-gray-800 mb-4 flex items-center">
                 <div className="w-1 h-3.5 bg-blue-500 rounded-full mr-2" />
                 业主评价 ({provider.reviews.length})
              </h4>
              <div className="space-y-4">
                 {provider.reviews.map((review, idx) => (
                    <div key={`review-${idx}`} className="bg-gray-50 rounded-2xl p-4">
                       <div className="flex justify-between items-start mb-2">
                          <div className="flex items-center space-x-2">
                             <img src={review.avatar} className="w-8 h-8 rounded-full" alt="" referrerPolicy="no-referrer" />
                             <div>
                                <div className="text-xs font-black text-gray-800">{review.userName}</div>
                                <div className="flex text-orange-500">
                                   {[...Array(review.rating)].map((_, i) => <Star key={`star-${idx}-${i}`} size={10} fill="currentColor" />)}
                                </div>
                             </div>
                          </div>
                          <span className="text-[10px] text-gray-400 font-bold">{review.time}</span>
                       </div>
                       <p className="text-xs text-gray-600 leading-relaxed font-medium">{review.content}</p>
                    </div>
                 ))}
              </div>
           </div>
        </div>

        <div className="mt-10 flex gap-3">
           <button className="flex-1 bg-gray-100 text-gray-800 py-4 rounded-[20px] text-sm font-black active:scale-95 transition-transform">
              联系师傅
           </button>
           <button className="flex-1 bg-blue-600 text-white py-4 rounded-[20px] text-sm font-black active:scale-95 transition-transform shadow-lg shadow-blue-100">
              立即预约
           </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
