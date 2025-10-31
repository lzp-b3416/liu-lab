// config.js —— 前端公开配置（不要放 service_role）
window.SUPA_AUTO = {
  url: 'https://YOUR_PROJECT.supabase.co', // Supabase 项目 URL
  anon: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...', // Anon Key（前端公开用）
  defaultRoom: 'lab-2025',   // 默认房间码（也支持 ?room=xxx 覆盖）
  autoconnect: true          // 页面加载即连接
};
