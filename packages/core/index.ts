import { makeInstaller } from "@toy-element/utils";
import components from "./components";
import "@toy-element/theme/index.css";

const installer = makeInstaller(components);

// 在 core/index.ts 中导出我们的 components
export * from "@toy-element/components";
export default installer;
