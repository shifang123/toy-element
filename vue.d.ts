// 找不到 .vue 的声明文件，实际上就是 TS 无法识别 .vue 类型的文件。
// 那么就需要添加一下 .vue 类型文件的声明
declare module "*.vue" {
  import { defineComponent } from "vue";
  const Component: ReturnType<typeof defineComponent>;
  export default Component;
}
