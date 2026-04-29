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
        <div className="bg-white rounded-[32px] p-6 shadow-sm border border-white">
          <div className="flex items-center space-x-2 mb-4">
             <div className="w-1.5 h-4 bg-[#FF8C00] rounded-full" />
             <h3 className="font-extrabold text-gray-900 text-sm">20260429 更新日志</h3>
          </div>
          <div className="space-y-4">
            <div className="border-l-2 border-orange-100 pl-4 py-1">
               <h4 className="text-xs font-black text-gray-800 mb-1">1. 长者版界面上线</h4>
               <p className="text-[10px] text-gray-500 leading-relaxed">
                 新增“长者版”切换功能，针对年长居民优化了大字展示、简洁布局及核心助老服务（呼救、助餐、挂号等）。
               </p>
            </div>
            <div className="border-l-2 border-orange-100 pl-4 py-1">
               <h4 className="text-xs font-black text-gray-800 mb-1">2. 随手拍功能升级</h4>
               <p className="text-[10px] text-gray-500 leading-relaxed">
                 重构随手拍模块，划分为“问政策”、“报诉求”、“查追踪”三大版块，支持多级分类上报与全流程状态查询。
               </p>
            </div>
            <div className="border-l-2 border-orange-100 pl-4 py-1">
               <h4 className="text-xs font-black text-gray-800 mb-1">3. 老缸房服务中心完善</h4>
               <p className="text-[10px] text-gray-500 leading-relaxed">
                 修复了服务详情图片显示问题，通过原生代码重绘了“为老服务中心项目表”，支持更清晰细腻的移动端浏览。
               </p>
            </div>
            <div className="border-l-2 border-orange-100 pl-4 py-1">
               <h4 className="text-xs font-black text-gray-800 mb-1">4. 新增法律援助模块</h4>
               <p className="text-[10px] text-gray-500 leading-relaxed">
                 首页新增法律援助专栏，展示典型助民案例，并支持通过“免费咨询”直接致电李律师进行法律垂询。
               </p>
            </div>
            <div className="border-l-2 border-orange-100 pl-4 py-1">
               <h4 className="text-xs font-black text-gray-800 mb-1">5. 新增特约维修服务</h4>
               <p className="text-[10px] text-gray-500 leading-relaxed">
                 在居家服务分类下新增“特约维修”入口，快速链接社区专业维修师傅，解决家庭水电等维修难题。
               </p>
            </div>
            <div className="border-l-2 border-orange-100 pl-4 py-1">
               <h4 className="text-xs font-black text-gray-800 mb-1">6. 新增共享维修服务</h4>
               <p className="text-[10px] text-gray-500 leading-relaxed">
                 在社区服务中新增详细的“共享维修服务价目表”，覆盖电路灯具、水路卫浴及门窗五金三大类，价格透明公开。
               </p>
            </div>
            <div className="border-l-2 border-orange-100 pl-4 py-1">
               <h4 className="text-xs font-black text-gray-800 mb-1">7. 新增社区共享达人</h4>
               <p className="text-[10px] text-gray-500 leading-relaxed">
                 首页新增共享服务卡片，推荐水电、保洁、康复等多领域的社区好手，支持查看专长、评分及邻里评价。
               </p>
            </div>
            <div className="border-l-2 border-orange-100 pl-4 py-1">
               <h4 className="text-xs font-black text-gray-800 mb-1">8. 新增社区达人申请入口</h4>
               <p className="text-[10px] text-gray-500 leading-relaxed">
                 在服务模块中新增“社区达人”申请功能，居民可在线提交个人专长与资料。支持多状态进度查询，并提供“直拨热线”辅助审核提速。
               </p>
            </div>
            <div className="border-l-2 border-orange-100 pl-4 py-1">
               <h4 className="text-xs font-black text-gray-800 mb-1">9. 系统性能与兼容性优化</h4>
               <p className="text-[10px] text-gray-500 leading-relaxed">
                 全站图片引入防盗链优化，解决部分第三方图源404问题；优化了各模块的平滑过渡动画体验。
               </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
