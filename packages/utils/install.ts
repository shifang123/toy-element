import type { App, Plugin } from "vue";
import { each } from "lodash-es";

type SFCWithInstall<T> = T & Plugin;

// 批量安装组件插件
export function makeInstaller(components: Plugin[]) {
  const install = (app: App) =>
    each(components, (c) => {
      // 对每个组件调用 app.use() 进行安装
      app.use(c);
    });
  // 返回安装函数 install
  return install;
}
// 用于为单个组件添加插件安装能力
export const withInstall = <T>(component: T) => {
  // 添加install方法到组件
  (component as SFCWithInstall<T>).install = (app: App) => {
    // 获取组件名字（优先使用组件自身的 name）
    const name = (component as any)?.name || "UnnamedComponent";
    // 全局注册
    app.component(name, component as SFCWithInstall<T>);
  };
  // 返回增强后的组件（带插件功能）
  return component as SFCWithInstall<T>;
};
