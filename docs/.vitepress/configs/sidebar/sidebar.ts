/* configs/nav.ts */
import type { DefaultTheme } from 'vitepress'
import { Yiov } from './yiov.ts';
import { Baris } from './baris.ts';

export const sidebar: DefaultTheme.Config['sidebar'] =  [
    Baris, Yiov
]