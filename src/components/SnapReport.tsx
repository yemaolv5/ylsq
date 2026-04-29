import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronRight, MessageCircle, FileText, Activity, Camera, Plus, MapPin, Send, Search, Info } from 'lucide-react';

interface SnapReportProps {
  onClose: () => void;
}

type Mode = 'ask' | 'report' | 'track';

export default function SnapReport({ onClose }: SnapReportProps) {
  const [mode, setMode] = useState<Mode>('ask');

  const askCategories = [
    { title: '“4050”政策', content: '什么条件符合、需要哪些材料、去哪里找谁办、补贴标准、办理进度查询方式' },
    { title: '高龄津贴', content: '申请门槛、办理流程、认证周期、补贴标准' },
    { title: '残疾人帮扶', content: '补贴申领条件、康复服务联系、辅助器具申请路径' },
    { title: '低保与临时救助', content: '城乡低保申请门槛、低收入认证、临时救助触发情形及申报材料' },
    { title: '社保/医保办理', content: '城乡居民医保缴费时间、社保卡补换路径、医保报销指引' },
    { title: '养老保险/资格认证', content: '养老待遇资格认证方式（手机操作流程）、认证周期提醒' },
    { title: '优抚政策', content: '退役军人优待、现役军属优待、优抚金发放与认证' },
    { title: '计生/妇幼服务', content: '生育登记、独生子女证、妇幼保健服务入口' },
    { title: '老年人福利', content: '老年优待证、助餐补贴、养老服务中心活动' },
  ];

  const reportCategories = [
    { id: 'env', label: '物业与环境卫生', sub: ['垃圾清运不及时', '楼道堆物', '电梯故障', '绿化养护', '设施损坏', '化粪池'], icon: '🏠' },
    { id: 'util', label: '水电气暖保障', sub: ['暖气温度', '停暖故障', '停水停电', '天然气故障', '管道漏水'], icon: '❄️' },
    { id: 'infra', label: '公共设施与设备', sub: ['路灯损坏', '井盖缺失', '路面破损', '器材损坏', '监控故障'], icon: '🏗️' },
    { id: 'parking', label: '小区停车与出行', sub: ['消防通道', '电动车乱停', '私装地锁', '僵尸车', '共享单车'], icon: '🏘️' },
    { id: 'noise', label: '噪音与邻里纠纷', sub: ['装修噪音', '宠物扰民', '广场舞', '上下楼漏水'], icon: '🔇' },
    { id: 'order', label: '市容秩序', sub: ['店外经营', '违规搭建', '小广告', '占道经营'], icon: '🚧' },
    { id: 'safety', label: '安全隐患举报', sub: ['飞线充电', '通道堵塞', '易燃物堆积', '燃气漏气'], icon: '🔥' },
    { id: 'shop', label: '商业网点投诉', sub: ['无证经营', '异味污染', '大声揽客'], icon: '🛒' },
    { id: 'build', label: '装修施工问题', sub: ['拆承重墙', '违规时间', '占道建筑垃圾'], icon: '🔨' },
    { id: 'prop', label: '物业管理问题', sub: ['收费不透明', '服务态度', '维修推诿', '保洁敷衍'], icon: '🧾' },
    { id: 'demand', label: '生活服务需求', sub: ['期盼家政', '助餐助浴', '公厕设施'], icon: '🩺' },
  ];

  const trackRecords = [
    { id: '1', title: '路灯不亮', category: '公共设施', status: '处理中', time: '2024-04-28 10:30', progress: '派单中' },
    { id: '2', title: '楼道杂物堆积', category: '物业环境', status: '已完成', time: '2024-04-25 15:20', progress: '整改完成' },
    { id: '3', title: '绿化带杂草丛生', category: '物业环境', status: '待评价', time: '2024-04-26 09:15', progress: '已办结' },
  ];

  const renderAsk = () => (
    <div className="space-y-3 pb-8">
      <div className="bg-blue-50 p-4 rounded-2xl mb-4 border border-blue-100">
        <div className="flex items-center space-x-2 text-blue-600 mb-1">
          <Info size={18} />
          <span className="font-bold">温馨提示</span>
        </div>
        <p className="text-[11px] text-blue-500 leading-relaxed">
          此处提供社区高频事项办理指引，仅供政策查询。如需反映问题请使用“报·民生诉求直通车”。
        </p>
      </div>
      {askCategories.map((cat, i) => (
        <button key={i} className="w-full bg-white p-4 rounded-2xl shadow-sm border border-gray-50 flex items-center justify-between active:scale-[0.98] transition-transform">
          <div className="flex-1 text-left mr-4">
            <h4 className="font-bold text-gray-800 text-sm mb-1">{cat.title}</h4>
            <p className="text-[10px] text-gray-400 line-clamp-1">{cat.content}</p>
          </div>
          <ChevronRight size={16} className="text-gray-300" />
        </button>
      ))}
    </div>
  );

  const [selectedReportCat, setSelectedReportCat] = useState<string | null>(null);

  const renderReport = () => (
    <div className="space-y-6 pb-8">
      {!selectedReportCat ? (
        <div className="grid grid-cols-2 gap-3">
          {reportCategories.map((cat) => (
            <button 
              key={cat.id} 
              onClick={() => setSelectedReportCat(cat.id)}
              className="bg-white p-4 rounded-3xl border border-gray-50 shadow-sm flex flex-col items-center space-y-2 active:bg-gray-50 transition-colors"
            >
              <span className="text-2xl">{cat.icon}</span>
              <span className="text-xs font-bold text-gray-700">{cat.label}</span>
            </button>
          ))}
          <button onClick={() => setSelectedReportCat('other')} className="bg-white p-4 rounded-3xl border border-gray-50 shadow-sm flex flex-col items-center space-y-2 active:bg-gray-50">
             <span className="text-2xl">❓</span>
             <span className="text-xs font-bold text-gray-700">其他事项</span>
          </button>
        </div>
      ) : (
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-6 bg-white p-6 rounded-3xl shadow-sm border border-gray-50"
        >
          <div className="flex items-center justify-between mb-2">
            <button onClick={() => setSelectedReportCat(null)} className="text-[#FF8C00] text-xs font-bold flex items-center">
              <ChevronRight size={14} className="rotate-180 mr-1" /> 返回分类
            </button>
            <span className="text-xs text-gray-400 font-medium">上报诉求</span>
          </div>
          
          <div className="space-y-1">
             <label className="text-xs font-black text-gray-800">问题描述</label>
             <textarea 
               className="w-full bg-gray-50 rounded-2xl p-4 text-sm min-h-[120px] outline-none border border-transparent focus:border-orange-200 transition-all" 
               placeholder="请详细描述您遇到的问题或需求..."
             />
          </div>

          <div className="space-y-3">
             <label className="text-xs font-black text-gray-800">现场照片</label>
             <div className="flex flex-wrap gap-3">
                <button className="w-20 h-20 bg-gray-100 rounded-2xl flex flex-col items-center justify-center text-gray-400 space-y-1 active:bg-gray-200 transition-colors">
                  <Camera size={20} />
                  <span className="text-[10px] font-bold">添加图片</span>
                </button>
             </div>
          </div>

          <div className="flex items-center space-x-2 text-gray-400 text-[10px] bg-gray-50 p-3 rounded-xl">
             <MapPin size={14} className="text-[#FF8C00]" />
             <span>老缸房社区 • 正在获取精准定位...</span>
          </div>

          <button className="w-full bg-[#FF8C00] text-white py-4 rounded-2xl font-black shadow-lg shadow-orange-100 flex items-center justify-center space-x-2 active:scale-[0.98] transition-transform">
             <Send size={18} />
             <span>提交上报内容</span>
          </button>
        </motion.div>
      )}
    </div>
  );

  const renderTrack = () => (
    <div className="space-y-4 pb-8">
       <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="bg-white p-4 rounded-3xl border border-gray-50 shadow-sm text-center">
             <div className="text-2xl font-black text-[#FF8C00]">12</div>
             <div className="text-[10px] text-gray-400 font-bold mt-1">累计贡献积分</div>
          </div>
          <div className="bg-white p-4 rounded-3xl border border-gray-50 shadow-sm text-center">
             <div className="text-2xl font-black text-green-500">3</div>
             <div className="text-[10px] text-gray-400 font-bold mt-1">处理中任务</div>
          </div>
       </div>

       <div className="flex items-center space-x-2 px-1 mb-2">
          <div className="w-1 h-3.5 bg-[#FF8C00] rounded-full" />
          <h3 className="font-extrabold text-gray-900 text-sm">我的记录</h3>
       </div>

       <div className="space-y-3">
          {trackRecords.map(record => (
            <div key={record.id} className="bg-white p-4 rounded-2xl shadow-sm border border-gray-50">
               <div className="flex justify-between items-start mb-2">
                  <h4 className="font-bold text-gray-800 text-sm">{record.title}</h4>
                  <span className={`text-[9px] px-2 py-0.5 rounded-full font-bold ${
                    record.status === '已完成' ? 'bg-green-50 text-green-500' : 'bg-orange-50 text-[#FF8C00]'
                  }`}>
                    {record.status}
                  </span>
               </div>
               <div className="flex justify-between items-center text-[10px] text-gray-400 font-medium">
                  <div className="flex items-center space-x-3">
                    <span>{record.category}</span>
                    <span>•</span>
                    <span>{record.time}</span>
                  </div>
                  <div className="flex items-center text-[#FF8C00]">
                    <span>查看详情</span>
                    <ChevronRight size={12} />
                  </div>
               </div>
            </div>
          ))}
       </div>

       <div className="bg-orange-50/50 p-4 rounded-2xl border border-dashed border-orange-200 mt-6 overflow-hidden relative">
          <Activity size={40} className="absolute -bottom-2 -right-2 text-orange-200 opacity-50" />
          <h4 className="text-xs font-bold text-orange-600 mb-1">随手拍激励计划</h4>
          <p className="text-[10px] text-orange-400 leading-relaxed font-medium">
            您的每一个真实上报，都在帮助社区变得更好。有效上报可获得积分奖励，积分可兑换社区福利。
          </p>
       </div>
    </div>
  );

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-gray-50 flex flex-col"
    >
      {/* Header */}
      <div className="bg-white px-4 pt-12 pb-4 flex items-center justify-between border-b border-gray-100">
        <button onClick={onClose} className="w-10 h-10 flex items-center justify-center text-gray-400 active:bg-gray-100 rounded-full transition-colors">
          <X size={24} />
        </button>
        <div className="flex-1 text-center">
           <h2 className="text-lg font-black tracking-tighter text-gray-900 leading-none">随手拍</h2>
           <p className="text-[10px] text-[#FF8C00] font-bold mt-1 tracking-widest">让社区生活更美好</p>
        </div>
        <div className="w-10" />
      </div>

      {/* Mode Selector Tabs */}
      <div className="bg-white p-4 flex space-x-2">
        {[
          { id: 'ask', label: '问·政策', icon: FileText, color: 'text-blue-500 bg-blue-50' },
          { id: 'report', label: '报·诉求', icon: MessageCircle, color: 'text-red-500 bg-red-50' },
          { id: 'track', label: '查·追踪', icon: Activity, color: 'text-green-500 bg-green-50' }
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => setMode(item.id as Mode)}
            className={`flex-1 flex flex-col items-center py-3 rounded-2xl transition-all duration-300 relative group ${
              mode === item.id ? 'bg-white shadow-md border border-gray-100 scale-105' : 'bg-gray-50/50 grayscale'
            }`}
          >
            <item.icon size={20} className={mode === item.id ? item.color.split(' ')[0] : 'text-gray-400'} />
            <span className={`text-[10px] mt-1.5 font-black tracking-tight ${
              mode === item.id ? 'text-gray-900' : 'text-gray-400'
            }`}>
              {item.label}
            </span>
            {mode === item.id && (
              <motion.div layoutId="mode-dot" className={`absolute -bottom-1 w-1 h-1 rounded-full ${item.color.split(' ')[0].replace('text-', 'bg-')}`} />
            )}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="flex-1 overflow-y-auto px-4 py-4 scrollbar-hide">
        <AnimatePresence mode="wait">
          <motion.div
            key={mode}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {mode === 'ask' && renderAsk()}
            {mode === 'report' && renderReport()}
            {mode === 'track' && renderTrack()}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Footer Info */}
      <div className="p-4 bg-white border-t border-gray-100">
         <div className="flex items-center justify-center space-x-2 text-[10px] text-gray-400 font-bold">
            <span className="w-1 h-1 bg-green-500 rounded-full animate-pulse" />
            <span>实时对接到街道智慧网格中心</span>
         </div>
      </div>
    </motion.div>
  );
}
