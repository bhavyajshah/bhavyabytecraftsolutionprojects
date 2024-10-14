export type AppType = 'NATIVE APPS' | 'CROSS-PLATFORM APPS' | 'HYBRID APPS' | 'PROGRESSIVE WEB APPS';

export const appTypes: AppType[] = ['NATIVE APPS', 'CROSS-PLATFORM APPS', 'HYBRID APPS', 'PROGRESSIVE WEB APPS'];

export interface AppFeature {
  title: string;
  icon: any;
  items: string[];
}