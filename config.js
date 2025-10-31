// config.js —— 前端公开配置（不要放 service_role）
window.SUPA_AUTO = {
  url: 'https://mzsncogvajhccegtzagt.supabase.co', // Supabase 项目 URL
  anon: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im16c25jb2d2YWpoY2NlZ3R6YWd0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE4NDA0NTgsImV4cCI6MjA3NzQxNjQ1OH0.LsfPIxEZ72jduzY7BnV2rOVEEyxoQvWlt4ghu5MX06Q', // Anon Key（前端公开用）
  defaultRoom: 'lab-2025',   // 默认房间码（也支持 ?room=xxx 覆盖）
  autoconnect: true          // 页面加载即连接
};
