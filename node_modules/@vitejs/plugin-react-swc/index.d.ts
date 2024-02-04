import { JscTarget } from "@swc/core";
import { PluginOption } from "vite";
type Options = {
    /**
     * Control where the JSX factory is imported from.
     * @default "react"
     */
    jsxImportSource?: string;
    /**
     * Enable TypeScript decorators. Requires experimentalDecorators in tsconfig.
     * @default false
     */
    tsDecorators?: boolean;
    /**
     * Use SWC plugins. Enable SWC at build time.
     * @default undefined
     */
    plugins?: [string, Record<string, any>][];
    /**
     * Set the target for SWC in dev. This can avoid to down-transpile private class method for example.
     * For production target, see https://vitejs.dev/config/build-options.html#build-target
     * @default "es2020"
     */
    devTarget?: JscTarget;
};
declare const react: (_options?: Options) => PluginOption[];
export default react;
