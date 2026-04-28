import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, MessageSquare, Plus, Clock, Users, Tag, HandHelping, ShoppingBag } from 'lucide-react';

const TABS = [
  { id: 'latest', label: '最新' },
  { id: 'activity', label: '活动' },
  { id: 'secondhand', label: '二手' },
  { id: 'help', label: '互助' },
];

export default function Neighborhood() {
  const [activeTab, setActiveTab] = useState('latest');

  return (
    <div className="flex flex-col h-full bg-gray-50 pb-20 relative">
      <div className="bg-white px-4 pt-6">
        <h1 className="text-xl font-bold mb-4">邻里圈</h1>
        <div className="flex space-x-6 pb-2">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative pb-2 text-sm transition-colors ${
                activeTab === tab.id ? 'text-[#FF8C00] font-bold' : 'text-gray-400'
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <motion.div
                  layoutId="neighbor-tabs"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FF8C00] rounded-full"
                />
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {activeTab === 'latest' && <LatestFeed />}
            {activeTab === 'activity' && <ActivityFeed />}
            {activeTab === 'secondhand' && <SecondhandFeed />}
            {activeTab === 'help' && <HelpFeed />}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Post FAB */}
      <button className="absolute bottom-6 right-4 w-12 h-12 bg-[#FF8C00] text-white rounded-full flex items-center justify-center shadow-lg shadow-orange-200 active:scale-95 transition-transform">
        <Plus size={24} />
      </button>
    </div>
  );
}

function LatestFeed() {
  const posts = [
    {
      id: 1,
      author: '张阿姨',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Zhang',
      content: '今日社区里的樱花开得真漂亮，大家有空快来看看啊！🌸',
      time: '10分钟前',
      likes: 24,
      comments: 5,
      images: ['https://images.unsplash.com/photo-1522383225653-ed111181a951?auto=format&fit=crop&w=400&q=80'],
    },
    {
      id: 2,
      author: '李医生',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Li',
      content: '春季花粉多，过敏性鼻炎的邻居们出门记得戴口罩。😷',
      time: '1小时前',
      likes: 45,
      comments: 12,
    },
  ];

  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <div key={post.id} className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex items-center space-x-3 mb-3">
            <img src={post.avatar} className="w-10 h-10 rounded-full bg-gray-100" />
            <div>
              <div className="text-sm font-bold text-gray-800">{post.author}</div>
              <div className="text-[10px] text-gray-400">{post.time}</div>
            </div>
          </div>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">{post.content}</p>
          {post.images && (
             <div className="rounded-xl overflow-hidden mb-3">
                <img src={post.images[0]} className="w-full h-40 object-cover" />
             </div>
          )}
          <div className="flex items-center space-x-6 text-gray-400">
            <button className="flex items-center space-x-1.5 text-xs">
              <Heart size={16} /> <span>{post.likes}</span>
            </button>
            <button className="flex items-center space-x-1.5 text-xs">
              <MessageSquare size={16} /> <span>{post.comments}</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

function ActivityFeed() {
  const activities = [
    {
      id: 1,
      title: '社区周末包饺子大赛',
      time: '04月30日 14:00',
      joined: 15,
      max: 30,
      image: 'https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 2,
      title: '小小科学家：气象探秘',
      time: '05月01日 10:00',
      joined: 8,
      max: 20,
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=400&q=80',
    }
  ];

  return (
    <div className="space-y-4">
      {activities.map((activity) => (
        <div key={activity.id} className="bg-white p-3 rounded-2xl shadow-sm flex space-x-3 border border-gray-100">
          <img src={activity.image} className="w-24 h-24 rounded-xl object-cover shrink-0" />
          <div className="flex flex-col justify-between py-1">
            <div>
              <h3 className="text-sm font-bold text-gray-800 line-clamp-1">{activity.title}</h3>
              <div className="flex items-center text-[10px] text-gray-400 mt-1">
                <Clock size={12} className="mr-1" /> {activity.time}
              </div>
              <div className="flex items-center text-[10px] text-gray-400 mt-0.5">
                <Users size={12} className="mr-1" /> 已报名 {activity.joined}/{activity.max}人
              </div>
            </div>
            <button className="bg-green-50 text-green-600 text-[11px] font-bold py-1 px-4 rounded-full w-fit">
              立即报名
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

function SecondhandFeed() {
  const items = [
    { id: 1, title: '九成新儿童推车', price: 150, image: 'https://images.unsplash.com/photo-1591084728795-1149f32d9866?auto=format&fit=crop&w=200&q=80' },
    { id: 2, title: '家用小烤箱', price: 80, image: 'https://images.unsplash.com/photo-1584286595398-a59f23d4b3ed?auto=format&fit=crop&w=200&q=80' },
    { id: 3, title: '多肉盆栽', price: 15, image: 'https://images.unsplash.com/photo-1520302630591-fd1c66ed11ef?auto=format&fit=crop&w=200&q=80' },
    { id: 4, title: '健身瑜伽垫', price: 30, image: 'https://images.unsplash.com/photo-1592175257781-816ae90297fe?auto=format&fit=crop&w=200&q=80' },
  ];

  return (
    <div className="grid grid-cols-2 gap-3">
      {items.map((item) => (
        <div key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
          <img src={item.image} className="w-full h-32 object-cover" />
          <div className="p-3">
            <h4 className="text-xs font-bold text-gray-800 line-clamp-1">{item.title}</h4>
            <div className="flex justify-between items-center mt-2">
              <span className="text-[#FF8C00] font-bold text-sm">¥{item.price}</span>
              <Tag size={14} className="text-gray-300" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function HelpFeed() {
  const cards = [
    { id: 1, title: '有邻居能借把梯子用用吗？', type: '求助', author: '王大哥', time: '14:20' },
    { id: 2, title: '下午去超市有人带东西吗？', type: '帮忙', author: '陈小姐', time: '15:10' }
  ];

  return (
    <div className="space-y-3">
      {cards.map((card) => (
        <div key={card.id} className="bg-white p-4 rounded-2xl shadow-sm border-l-4 border-[#FF8C00] relative">
          <div className={`absolute top-4 right-4 px-2 py-0.5 rounded text-[10px] font-bold ${
            card.type === '求助' ? 'bg-orange-50 text-orange-500' : 'bg-blue-50 text-blue-500'
          }`}>
            {card.type}
          </div>
          <h3 className="text-sm font-bold text-gray-800 pr-12">{card.title}</h3>
          <div className="flex items-center justify-between mt-3">
            <span className="text-xs text-gray-400">{card.author}</span>
            <button className="flex items-center text-[#FF8C00] text-xs font-bold">
              <HandHelping size={14} className="mr-1" /> 接单/响应
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

