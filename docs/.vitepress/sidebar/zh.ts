import { DefaultTheme } from 'vitepress'

const customSidebar = [
  {
    text: '使用文档',
    items: [
      { text: 'Markdown Examples', link: '/markdown-examples' },
      { text: 'Runtime API Examples', link: '/api-examples' },
      { text: '团队', link: '/group' },
    ]
  }
];
export const zhSidebar: DefaultTheme.Sidebar = {
  '/': customSidebar
}