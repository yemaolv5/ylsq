import { useState } from 'react';
import { User, Home, Wrench, Calendar, Settings, ChevronRight, ChevronDown, ChevronUp, Bell, Shield, Info, QrCode, PlusCircle, Ticket, Gift, MousePointer2 } from 'lucide-react';
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

  const [expandedDates, setExpandedDates] = useState<string[]>(['20260502']);

  const toggleDate = (date: string) => {
    setExpandedDates(prev => 
      prev.includes(date) ? prev.filter(d => d !== date) : [...prev, date]
    );
  };

  const updateLogs = [
    {
      date: '20260502',
      items: [
        {
          title: '1. 15分钟生活圈上线',
          desc: '以老缸房社区为中心，分类展示周边餐饮、超市、酒店等优质商户，并提供实时距离参考，打造智慧便捷生活服务圈。'
        },
        {
          title: '2. 社区食堂排餐上线',
          desc: '在健康服务中新增“社区诊所”，提供详细的医生出诊排班、专家擅长领域及一键咨询热线，便捷解决邻里看病难题。'
        },
        {
          title: '2. 助力法治社区建设',
          desc: '首页新增“法律援助”专栏，上线遗产继承、物业调解典型案例展示，并配套“李律师直通车”支持一键咨询。'
        },
        {
          title: '3. 更新日志体验优化',
          desc: '重构了更新日志展示方式，支持按日期收起与展开，默认仅显示最新动态，界面更清爽。'
        },
        {
          title: '4. 新增权益卡卡片',
          desc: '在个人中心上线“社区权益卡”，居民可领取并使用周边商家优惠，支持次数核销与有效期管理。'
        }
      ]
    },
    {
      date: '20260429',
      items: [
        { title: '1. 长者版界面上线', desc: '针对年长居民优化了大字展示、简洁布局及核心助老服务（呼救、助餐、挂号等）。' },
        { title: '2. 随手拍功能升级', desc: '划分为“问政策”、“报诉求”、“查追踪”三版块，支持多级分类上报与全流程追踪。' },
        { title: '3. 老缸房服务中心完善', desc: '重绘项表，支持清晰细腻的移动端浏览。' },
        { title: '4. 新增法律援助模块', desc: '首页新增法律援助专栏，支持致电李律师进行法律垂询。' },
        { title: '5. 新增特约维修服务', desc: '快速链接社区专业维修师傅，解决家庭水电维修难题。' },
        { title: '6. 新增共享维修服务', desc: '新增详细价目表，价格透明公开，覆盖电路灯具、水路卫浴。' },
        { title: '7. 新增社区共享达人', desc: '推荐水电、保洁、康复等领域的社区好手，支持查看评价。' },
        { title: '8. 新增社区达人申请入口', desc: '居民可在线提交个人专长与资料，支持多状态进度查询。' },
        { title: '9. 系统性能与兼容性优化', desc: '全站图片引入防盗链优化，优化模块平滑过渡动画体验。' }
      ]
    }
  ];

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
    <div className="bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-[#FF8C00] px-6 pt-10 pb-12 rounded-b-[48px] relative overflow-hidden shadow-lg shadow-orange-100">
        {/* Decorative Circles */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
        <div className="absolute top-20 -left-10 w-24 h-24 bg-white/5 rounded-full blur-xl" />
        
        <div className="flex items-center space-x-4 relative z-10">
          <div className="w-18 h-18 rounded-full border-4 border-white/30 overflow-hidden bg-white/20 shadow-xl">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="avatar" className="w-full h-full" referrerPolicy="no-referrer" />
          </div>
          <div className="text-white">
            <h2 className="text-2xl font-black tracking-tight">陈大文</h2>
            <div className="flex space-x-2 mt-1.5">
              <span className="text-[10px] bg-white/20 px-2.5 py-0.5 rounded-full backdrop-blur-md font-bold">业主居民</span>
              <span className="text-[10px] bg-white/20 px-2.5 py-0.5 rounded-full backdrop-blur-md font-bold">5号楼楼长</span>
            </div>
          </div>
        </div>
      </div>

      <div className="px-5 -mt-8 space-y-5 pb-8">
        {/* My House */}
        <div className="bg-white rounded-3xl p-6 shadow-md shadow-gray-200/50 border border-white">
          <div className="flex justify-between items-center mb-5">
            <h3 className="font-extrabold text-gray-900 flex items-center text-base">
              <Home size={20} className="mr-2.5 text-[#FF8C00]" /> 我的房屋
            </h3>
            <button className="w-9 h-9 flex items-center justify-center bg-orange-50 text-[#FF8C00] rounded-xl active:scale-95 transition-transform">
               <QrCode size={20} />
            </button>
          </div>
          <div className="bg-gray-50/80 rounded-2xl p-4 flex justify-between items-center border border-gray-100/50">
            <div>
              <div className="text-sm font-black text-gray-800">老缸房社区-同心园小区</div>
              <div className="text-xs text-gray-400 mt-1 font-medium font-mono tracking-tight">5号楼 - 1单元 - 1203室</div>
            </div>
            <button className="text-[#FF8C00] text-xs font-black flex items-center bg-white px-3 py-1.5 rounded-full shadow-sm active:scale-95 transition-transform">
              <PlusCircle size={14} className="mr-1" /> 添加成员
            </button>
          </div>
        </div>

        {/* Equity Cards */}
        <div className="bg-white rounded-3xl p-6 shadow-md shadow-gray-200/50 border border-white">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center space-x-2">
              <div className="w-1.5 h-4 bg-indigo-500 rounded-full" />
              <h3 className="font-extrabold text-gray-900 text-base">我的权益卡</h3>
            </div>
            <span className="text-[10px] text-gray-400 font-bold">邻里专属优惠</span>
          </div>
          
          <div className="space-y-4">
            {benefits.map((benefit) => {
              const isUsedUp = benefit.usedCount >= benefit.totalCount;
              return (
                <div 
                  key={benefit.id} 
                  className={`relative overflow-hidden rounded-3xl border transition-all duration-300 ${
                    isUsedUp ? 'bg-gray-50 border-gray-100 grayscale opacity-70' : 'bg-white border-gray-50 hover:shadow-lg'
                  }`}
                >
                  <div className="flex p-4">
                    {/* Visual Card Part */}
                    <div className={`w-28 h-20 bg-gradient-to-br ${benefit.theme} rounded-2xl flex flex-col items-center justify-center text-white relative shadow-sm overflow-hidden`}>
                       <benefit.icon size={24} className="opacity-20 absolute -right-2 -bottom-2 transform -rotate-12" />
                       <div className="text-[10px] font-bold opacity-80 uppercase tracking-tighter mb-0.5">{benefit.title}</div>
                       <div className="text-lg font-black">{benefit.benefit}</div>
                       <div className="absolute top-1 left-1.5 flex space-x-0.5">
                          {[...Array(benefit.totalCount)].map((_, i) => (
                             <div key={i} className={`w-1 h-1 rounded-full ${i < (benefit.totalCount - benefit.usedCount) ? 'bg-white' : 'bg-white/20'}`} />
                          ))}
                       </div>
                    </div>

                    {/* Content Part */}
                    <div className="ml-4 flex-1 flex flex-col justify-between py-0.5">
                       <div>
                          <div className="flex justify-between items-start">
                             <h4 className="text-sm font-black text-gray-800">{benefit.store}</h4>
                             <span className="text-[10px] text-gray-400 font-bold">{benefit.validDate}</span>
                          </div>
                          <p className="text-[10px] text-gray-400 mt-1 font-medium">使用次数: {benefit.totalCount - benefit.usedCount}/{benefit.totalCount}</p>
                       </div>

                       <div className="flex justify-end">
                          <button 
                            disabled={isUsedUp}
                            onClick={() => handleUseBenefit(benefit.id)}
                            className={`px-4 py-1.5 rounded-xl text-[11px] font-black transition-all active:scale-95 flex items-center space-x-1.5 ${
                              isUsedUp 
                                ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                                : 'bg-indigo-50 text-indigo-600 shadow-sm shadow-indigo-100'
                            }`}
                          >
                             {isUsedUp ? (
                               '已使用完成'
                             ) : (
                               <>
                                 <MousePointer2 size={12} />
                                 <span>使用权益</span>
                               </>
                             )}
                          </button>
                       </div>
                    </div>
                  </div>
                  {/* Decorative Ticket Perforation */}
                  <div className="absolute left-28 top-0 bottom-0 w-4 border-l border-dashed border-gray-100 hidden sm:block" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Records */}
        <div className="bg-white rounded-3xl p-6 shadow-md shadow-gray-200/50 border border-white">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-extrabold text-gray-900 text-base">报修/上报记录</h3>
            <button className="text-[10px] text-[#FF8C00] font-bold bg-[#FF8C00]/5 px-2 py-1 rounded-lg flex items-center">查看全部 <ChevronRight size={12} className="ml-0.5" /></button>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {records.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center p-3 rounded-2xl bg-gray-50/50 border border-gray-50">
                <span className={`text-xl font-black ${item.color}`}>{item.count}</span>
                <span className="text-[10px] text-gray-400 mt-1.5 font-bold">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action List Section */}
        <div className="space-y-3.5 px-1">
           <button className="w-full bg-white px-5 py-4.5 rounded-3xl flex justify-between items-center shadow-sm border border-white active:scale-[0.99] transition-all hover:bg-gray-50">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-500 flex items-center justify-center mr-3.5 shadow-inner">
                  <Calendar size={20} />
                </div>
                <div className="text-left">
                  <div className="text-sm font-black text-gray-800 leading-none">我的活动报名</div>
                  <div className="text-[10px] text-gray-400 mt-1.5 font-bold">3个进行中</div>
                </div>
              </div>
              <ChevronRight size={16} className="text-gray-300" />
           </button>

           <button className="w-full bg-white px-5 py-4.5 rounded-3xl flex justify-between items-center shadow-sm border border-white active:scale-[0.99] transition-all hover:bg-gray-50">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center mr-3.5 shadow-inner">
                  <Wrench size={20} />
                </div>
                <div className="text-left">
                  <div className="text-sm font-black text-gray-800 leading-none">报修工单评价</div>
                  <div className="text-[10px] text-gray-400 mt-1.5 font-bold">查看已评价记录</div>
                </div>
              </div>
              <ChevronRight size={16} className="text-gray-300" />
           </button>
        </div>

        {/* Global Settings Group */}
        <div className="bg-white rounded-[32px] shadow-sm border border-white overflow-hidden">
          {menuItems.map((item, idx) => (
             <button 
               key={idx} 
               className={`w-full flex justify-between items-center px-6 py-5 active:bg-gray-50 transition-colors ${
                 idx !== menuItems.length - 1 ? 'border-b border-gray-50/50' : ''
               }`}
             >
                <div className="flex items-center space-x-3.5">
                   <div className="bg-gray-50 p-2 rounded-lg">
                      <item.icon size={18} className="text-gray-400" />
                   </div>
                   <span className="text-sm font-bold text-gray-700">{item.label}</span>
                </div>
                <ChevronRight size={16} className="text-gray-300" />
             </button>
          ))}
        </div>

        {/* Update Log */}
        <div className="space-y-4">
          {updateLogs.map((log) => (
            <div key={log.date} className="bg-white rounded-[32px] p-6 shadow-sm border border-white overflow-hidden">
              <button 
                onClick={() => toggleDate(log.date)}
                className="w-full flex items-center justify-between group"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-1.5 h-4 bg-[#FF8C00] rounded-full" />
                  <h3 className="font-extrabold text-gray-900 text-sm">{log.date} 更新日志</h3>
                </div>
                <div className={`p-1 rounded-full transition-colors ${expandedDates.includes(log.date) ? 'bg-orange-50 text-orange-500' : 'bg-gray-50 text-gray-300 group-hover:bg-gray-100'}`}>
                  {expandedDates.includes(log.date) ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </div>
              </button>
              
              <AnimatePresence>
                {expandedDates.includes(log.date) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="space-y-4 pt-6">
                      {log.items.map((item, i) => (
                        <div key={i} className="border-l-2 border-orange-100 pl-4 py-1">
                          <h4 className="text-xs font-black text-gray-800 mb-1">{item.title}</h4>
                          <p className="text-[10px] text-gray-500 leading-relaxed">
                            {item.desc}
                          </p>
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

