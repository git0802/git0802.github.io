module.exports = {

"[project]/node_modules/.pnpm/framer-motion@12.14.0_react_dab1f5af845d60c833aadcb3a090901f/node_modules/framer-motion/dist/es/animation/hooks/animation-controls.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "animationControls": (()=>animationControls),
    "setValues": (()=>setValues)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$12$2e$1$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-utils@12.12.1/node_modules/motion-utils/dist/es/errors.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$14$2e$0_react_dab1f5af845d60c833aadcb3a090901f$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$utils$2f$setters$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/framer-motion@12.14.0_react_dab1f5af845d60c833aadcb3a090901f/node_modules/framer-motion/dist/es/render/utils/setters.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$14$2e$0_react_dab1f5af845d60c833aadcb3a090901f$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$interfaces$2f$visual$2d$element$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/framer-motion@12.14.0_react_dab1f5af845d60c833aadcb3a090901f/node_modules/framer-motion/dist/es/animation/interfaces/visual-element.mjs [app-ssr] (ecmascript)");
;
;
;
function stopAnimation(visualElement) {
    visualElement.values.forEach((value)=>value.stop());
}
function setVariants(visualElement, variantLabels) {
    const reversedLabels = [
        ...variantLabels
    ].reverse();
    reversedLabels.forEach((key)=>{
        const variant = visualElement.getVariant(key);
        variant && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$14$2e$0_react_dab1f5af845d60c833aadcb3a090901f$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$utils$2f$setters$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setTarget"])(visualElement, variant);
        if (visualElement.variantChildren) {
            visualElement.variantChildren.forEach((child)=>{
                setVariants(child, variantLabels);
            });
        }
    });
}
function setValues(visualElement, definition) {
    if (Array.isArray(definition)) {
        return setVariants(visualElement, definition);
    } else if (typeof definition === "string") {
        return setVariants(visualElement, [
            definition
        ]);
    } else {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$14$2e$0_react_dab1f5af845d60c833aadcb3a090901f$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$utils$2f$setters$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setTarget"])(visualElement, definition);
    }
}
/**
 * @public
 */ function animationControls() {
    /**
     * Track whether the host component has mounted.
     */ let hasMounted = false;
    /**
     * A collection of linked component animation controls.
     */ const subscribers = new Set();
    const controls = {
        subscribe (visualElement) {
            subscribers.add(visualElement);
            return ()=>void subscribers.delete(visualElement);
        },
        start (definition, transitionOverride) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$12$2e$1$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["invariant"])(hasMounted, "controls.start() should only be called after a component has mounted. Consider calling within a useEffect hook.");
            const animations = [];
            subscribers.forEach((visualElement)=>{
                animations.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$14$2e$0_react_dab1f5af845d60c833aadcb3a090901f$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$interfaces$2f$visual$2d$element$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["animateVisualElement"])(visualElement, definition, {
                    transitionOverride
                }));
            });
            return Promise.all(animations);
        },
        set (definition) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$12$2e$1$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["invariant"])(hasMounted, "controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook.");
            return subscribers.forEach((visualElement)=>{
                setValues(visualElement, definition);
            });
        },
        stop () {
            subscribers.forEach((visualElement)=>{
                stopAnimation(visualElement);
            });
        },
        mount () {
            hasMounted = true;
            return ()=>{
                hasMounted = false;
                controls.stop();
            };
        }
    };
    return controls;
}
;
}}),
"[project]/node_modules/.pnpm/framer-motion@12.14.0_react_dab1f5af845d60c833aadcb3a090901f/node_modules/framer-motion/dist/es/animation/hooks/use-animation.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "useAnimation": (()=>useAnimation),
    "useAnimationControls": (()=>useAnimationControls)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$14$2e$0_react_dab1f5af845d60c833aadcb3a090901f$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$animation$2d$controls$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/framer-motion@12.14.0_react_dab1f5af845d60c833aadcb3a090901f/node_modules/framer-motion/dist/es/animation/hooks/animation-controls.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$14$2e$0_react_dab1f5af845d60c833aadcb3a090901f$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$constant$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/framer-motion@12.14.0_react_dab1f5af845d60c833aadcb3a090901f/node_modules/framer-motion/dist/es/utils/use-constant.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$14$2e$0_react_dab1f5af845d60c833aadcb3a090901f$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$isomorphic$2d$effect$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/framer-motion@12.14.0_react_dab1f5af845d60c833aadcb3a090901f/node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs [app-ssr] (ecmascript)");
;
;
;
/**
 * Creates `AnimationControls`, which can be used to manually start, stop
 * and sequence animations on one or more components.
 *
 * The returned `AnimationControls` should be passed to the `animate` property
 * of the components you want to animate.
 *
 * These components can then be animated with the `start` method.
 *
 * ```jsx
 * import * as React from 'react'
 * import { motion, useAnimation } from 'framer-motion'
 *
 * export function MyComponent(props) {
 *    const controls = useAnimation()
 *
 *    controls.start({
 *        x: 100,
 *        transition: { duration: 0.5 },
 *    })
 *
 *    return <motion.div animate={controls} />
 * }
 * ```
 *
 * @returns Animation controller with `start` and `stop` methods
 *
 * @public
 */ function useAnimationControls() {
    const controls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$14$2e$0_react_dab1f5af845d60c833aadcb3a090901f$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$constant$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useConstant"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$14$2e$0_react_dab1f5af845d60c833aadcb3a090901f$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$animation$2d$controls$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["animationControls"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$14$2e$0_react_dab1f5af845d60c833aadcb3a090901f$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$isomorphic$2d$effect$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useIsomorphicLayoutEffect"])(controls.mount, []);
    return controls;
}
const useAnimation = useAnimationControls;
;
}}),
"[project]/node_modules/.pnpm/framer-motion@12.14.0_react_dab1f5af845d60c833aadcb3a090901f/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "useReducedMotion": (()=>useReducedMotion)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$12$2e$1$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$warn$2d$once$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-utils@12.12.1/node_modules/motion-utils/dist/es/warn-once.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$14$2e$0_react_dab1f5af845d60c833aadcb3a090901f$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/framer-motion@12.14.0_react_dab1f5af845d60c833aadcb3a090901f/node_modules/framer-motion/dist/es/utils/reduced-motion/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$14$2e$0_react_dab1f5af845d60c833aadcb3a090901f$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$state$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/framer-motion@12.14.0_react_dab1f5af845d60c833aadcb3a090901f/node_modules/framer-motion/dist/es/utils/reduced-motion/state.mjs [app-ssr] (ecmascript)");
;
;
;
;
/**
 * A hook that returns `true` if we should be using reduced motion based on the current device's Reduced Motion setting.
 *
 * This can be used to implement changes to your UI based on Reduced Motion. For instance, replacing motion-sickness inducing
 * `x`/`y` animations with `opacity`, disabling the autoplay of background videos, or turning off parallax motion.
 *
 * It will actively respond to changes and re-render your components with the latest setting.
 *
 * ```jsx
 * export function Sidebar({ isOpen }) {
 *   const shouldReduceMotion = useReducedMotion()
 *   const closedX = shouldReduceMotion ? 0 : "-100%"
 *
 *   return (
 *     <motion.div animate={{
 *       opacity: isOpen ? 1 : 0,
 *       x: isOpen ? 0 : closedX
 *     }} />
 *   )
 * }
 * ```
 *
 * @return boolean
 *
 * @public
 */ function useReducedMotion() {
    /**
     * Lazy initialisation of prefersReducedMotion
     */ !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$14$2e$0_react_dab1f5af845d60c833aadcb3a090901f$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$state$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasReducedMotionListener"].current && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$14$2e$0_react_dab1f5af845d60c833aadcb3a090901f$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["initPrefersReducedMotion"])();
    const [shouldReduceMotion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$14$2e$0_react_dab1f5af845d60c833aadcb3a090901f$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$state$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["prefersReducedMotion"].current);
    if ("TURBOPACK compile-time truthy", 1) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$12$2e$1$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$warn$2d$once$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["warnOnce"])(shouldReduceMotion !== true, "You have Reduced Motion enabled on your device. Animations may not appear as expected.");
    }
    /**
     * TODO See if people miss automatically updating shouldReduceMotion setting
     */ return shouldReduceMotion;
}
;
}}),

};

//# sourceMappingURL=18922_framer-motion_dist_es_a4358a63._.js.map