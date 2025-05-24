import { AITool } from '../types';

export const aiTools: AITool[] = [
  // 知识库笔记类产品
  {
    id: 'kb-1',
    name: 'NotebookLM',
    logo: 'placeholder-logo.png', // 请替换为真实 logo 链接
    category: '知识库笔记',
    link: 'placeholder-link' // 请替换为真实链接
  },
  {
    id: 'kb-2',
    name: 'ima', // 您提供的 "ima" 可能是 "Ima" 或其他，请确认
    logo: 'placeholder-logo.png',
    category: '知识库笔记',
    link: 'placeholder-link'
  },
  {
    id: 'kb-3',
    name: 'Notion',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Notion-logo.svg/1024px-Notion-logo.svg.png', // 示例logo，请确认或替换
    category: '知识库笔记',
    link: 'https://www.notion.so' // 示例链接，请确认或替换
  },
  {
    id: 'kb-4',
    name: 'Remio',
    logo: 'placeholder-logo.png',
    category: '知识库笔记',
    link: 'placeholder-link'
  },
  {
    id: 'kb-5',
    name: 'Granola',
    logo: 'placeholder-logo.png',
    category: '知识库笔记',
    link: 'placeholder-link'
  },
  {
    id: 'kb-6',
    name: 'YouMind',
    logo: 'placeholder-logo.png',
    category: '知识库笔记',
    link: 'placeholder-link'
  },

  // AI 编程类产品
  {
    id: 'dev-1',
    name: 'Cursor',
    logo: 'placeholder-logo.png',
    category: 'AI编程',
    link: 'placeholder-link'
  },
  {
    id: 'dev-2',
    name: 'Windsurf',
    logo: 'placeholder-logo.png',
    category: 'AI编程',
    link: 'placeholder-link'
  },
  {
    id: 'dev-3',
    name: 'Bolt',
    logo: 'placeholder-logo.png',
    category: 'AI编程',
    link: 'placeholder-link'
  },
  {
    id: 'dev-4',
    name: 'Loveable',
    logo: 'placeholder-logo.png',
    category: 'AI编程',
    link: 'placeholder-link'
  },
  {
    id: 'ai-5', // 保留原有 GitHub Copilot
    name: 'GitHub Copilot',
    logo: 'https://avatars.githubusercontent.com/u/96936610',
    category: 'AI编程', // 更新分类
    link: 'https://github.com/features/copilot'
  },

  // AI 浏览器类
  {
    id: 'browser-1',
    name: 'Dia',
    logo: 'placeholder-logo.png',
    category: 'AI浏览器',
    link: 'placeholder-link'
  },
  {
    id: 'browser-2',
    name: 'Fellou', // 您提供的 "Fellou" 可能是 "Fellow" 或其他，请确认
    logo: 'placeholder-logo.png',
    category: 'AI浏览器',
    link: 'placeholder-link'
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