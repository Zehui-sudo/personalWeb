import { AITool } from '../types';

export const aiTools: AITool[] = [
  // 知识库笔记类产品
  {
    id: 'kb-1',
    name: 'NotebookLM',
    logo: 'https://lh3.googleusercontent.com/drive-storage/AJQWtUOv_NB_1lY1Hh2QAmHh6yO5f1jWkG2t_hWYtGf_7a6lF3H_0cZ0tqX-2Qn0L3-_5z976Kx_u6KWDnAX6Nn44xTudn3z=s1600-rw-e365',
    category: '知识库笔记',
    link: 'https://notebooklm.google.com/'
  },
  {
    id: 'kb-2',
    name: 'ima',
    logo: 'https://im.qq.com/pcqq/images/qqlogo.svg', // 使用 QQ 官方 Logo
    category: '知识库笔记',
    link: 'https://ima.qq.com/'
  },
  {
    id: 'kb-3',
    name: 'Notion',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Notion-logo.svg/1024px-Notion-logo.svg.png',
    category: '知识库笔记',
    link: 'https://www.notion.so'
  },
  {
    id: 'kb-4',
    name: 'Remio',
    logo: 'https://assets-global.website-files.com/660c7ac1a7e7aa888ed6ea22/66163f682254e0165168282c_Dark%20Mode%3DFavicon%2C%20Light%20Mode%3DFavicon.png', // 从 remio.ai 获取的 logo
    category: '知识库笔记',
    link: 'https://www.remio.ai/'
  },
  {
    id: 'kb-5',
    name: 'Granola',
    logo: 'https://uploads-ssl.webflow.com/64da152921e2cf783e91d63a/64da17a0c0cbfd7bc8f81b44_favicon-256.png', // 从 granola.ai 获取的 logo
    category: '知识库笔记',
    link: 'https://www.granola.ai/'
  },
  {
    id: 'kb-6',
    name: 'YouMind',
    logo: 'https://youmind.ai/images/header/logo-dark.svg', // 从 youmind.ai 获取的 logo
    category: '知识库笔记',
    link: 'https://youmind.ai/'
  },

  // AI 编程类产品
  {
    id: 'dev-1',
    name: 'Cursor',
    logo: 'https://cursor.com/images/logo.png', // 从 cursor.com 获取的 logo
    category: 'AI编程',
    link: 'https://www.cursor.com/'
  },
  {
    id: 'dev-2',
    name: 'Windsurf',
    logo: 'https://windsurf.com/_next/static/media/logo-dark-theme.349f7384.svg', // 从 windsurf.com 获取的 logo
    category: 'AI编程',
    link: 'https://windsurf.com/'
  },
  {
    id: 'dev-3',
    name: 'Bolt',
    logo: 'https://bolt.new/bolt-logo.svg', // 从 bolt.new 获取的 logo
    category: 'AI编程',
    link: 'https://bolt.new/'
  },
  {
    id: 'dev-4',
    name: 'Loveable',
    logo: 'https://lovable.dev/icon.png', // 从 lovable.dev 获取的 logo
    category: 'AI编程',
    link: 'https://lovable.dev/'
  },
  {
    id: 'ai-5', // 保留原有 GitHub Copilot
    name: 'GitHub Copilot',
    logo: 'https://avatars.githubusercontent.com/u/96936610',
    category: 'AI编程',
    link: 'https://github.com/features/copilot'
  },

  // AI 浏览器类
  {
    id: 'browser-1',
    name: 'Dia',
    logo: 'https://www.diabrowser.com/images/logo-text.svg', // 从 diabrowser.com 获取的 logo
    category: 'AI浏览器',
    link: 'https://www.diabrowser.com/'
  },
  {
    id: 'browser-2',
    name: 'Fellou',
    logo: 'https://fellou.ai/images/logo.svg', // 从 fellou.ai 获取的 logo
    category: 'AI浏览器',
    link: 'https://fellou.ai/'
  },
  
  // 其他 AI 产品 (保留原有未明确分类的)
  {
    id: 'ai-1',
    name: 'ChatGPT',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/1200px-ChatGPT_logo.svg.png',
    category: '对话式AI', // 更新分类名称以保持一致性
    link: 'https://chat.openai.com'
  },
  {
    id: 'ai-2',
    name: 'DALL-E',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/DALL-E_Logo.svg/1024px-DALL-E_Logo.svg.png',
    category: '图像生成',
    link: 'https://openai.com/dall-e-3'
  },
  {
    id: 'ai-3',
    name: 'Midjourney',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Midjourney_Emblem.png/800px-Midjourney_Emblem.png',
    category: '图像生成',
    link: 'https://www.midjourney.com'
  },
  {
    id: 'ai-4',
    name: 'Grammarly',
    logo: 'https://static.wikia.nocookie.net/logopedia/images/c/c2/Grammarly_logo_2022.svg',
    category: '写作助手',
    link: 'https://www.grammarly.com'
  },
  {
    id: 'ai-6',
    name: 'Jasper',
    logo: 'https://assets-global.website-files.com/60e5f2de011b86acebc30db7/64134abedb090888d9a5ad52_LogoFavIcon.webp',
    category: '内容创作',
    link: 'https://www.jasper.ai'
  },
  {
    id: 'ai-7',
    name: 'Otter.ai',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Logo_otter_ai.svg/1024px-Logo_otter_ai.svg.png',
    category: '语音转写',
    link: 'https://otter.ai'
  },
  {
    id: 'ai-8',
    name: 'Luma AI',
    logo: 'https://images.squarespace-cdn.com/content/v1/6213c340453c3f502425776e/4edbc5ca-7737-4cd9-be9e-15d3583e6189/luminous_logo_black.png',
    category: '视频生成',
    link: 'https://lumalabs.ai'
  }
];