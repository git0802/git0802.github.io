// import clsx from "clsx";
// import { m } from "framer-motion";
// import Link from "next/link";

// import useContentActivity from "@/hooks/useContentActivity";

// import { relativeTime } from "@/helpers/date";

// import type { TContentActivity, TContentActivityReaction } from "@/types";

// interface ActivityItemProps {
//   data: TContentActivity;
// }

// function ActivityItem({
//   data: {
//     activityType,
//     type,
//     slug,
//     contentTitle,
//     contentType,
//     createdAt,
//     ...rest
//   },
// }: ActivityItemProps) {
//   if (activityType === "REACTION") {
//     const { count } = rest as Pick<TContentActivityReaction, "count">;

//     let reactionType = "";
//     switch (type) {
//       case "AMAZED":
//         reactionType = "😲";
//         break;
//       case "CLAPPING":
//         reactionType = "👏";
//         break;
//       case "THINKING":
//         reactionType = "🧐";
//         break;
//       default:
//         break;
//     }

//     return (
//       <div className={clsx("flex flex-wrap items-baseline gap-x-1")}>
//         <span>the</span>
//         <span
//           className={clsx(
//             "text-violet-600 font-semibold",
//             "dark:text-violet-400"
//           )}
//         >
//           {contentTitle}
//         </span>
//         <span className={clsx("lowercase")}>
//           {contentType.replace("POST", "BLOG POST")}
//         </span>
//         <span>got new</span>
//         {count !== 1 && (
//           <span
//             className={clsx(
//               "border-slate-800 rounded-md border bg-slate-200 px-1 font-mono text-xs font-bold",
//               "dark:border-slate-200 dark:bg-slate-800"
//             )}
//           >
//             x{count}
//           </span>
//         )}
//         <span>{reactionType}</span>
//       </div>
//     );
//   }

//   return (
//     <div className={clsx("flex flex-wrap items-baseline gap-x-1")}>
//       <span>the</span>
//       <span
//         className={clsx(
//           "text-violet-600 font-semibold",
//           "dark:text-violet-400"
//         )}
//       >
//         {contentTitle}
//       </span>
//       <span className={clsx("lowercase")}>
//         {contentType.replace("POST", "BLOG POST")}
//       </span>
//       <span>was shared</span>
//       {type === "TWITTER" && <span>to Twitter!</span>}
//     </div>
//   );
// }

// const animation = {
//   hide: { y: -48, opacity: 0 },
//   show: {
//     y: 0,
//     opacity: 1,
//     transition: {
//       ease: "easeOut",
//       duration: 0.12,
//     },
//   },
// };

// interface ActivityProps {
//   onItemClick?: () => void;
// }

// function Activity({ onItemClick = () => {} }: ActivityProps) {
//   const { data, isLoading } = useContentActivity();

//   const renderData = () => {
//     if (isLoading) {
//       return (
//         <motion.div
//           className={clsx("text-sm text-slate-700", "dark:text-slate-400")}
//           variants={animation}
//         >
//           retrieving data..
//         </motion.div>
//       );
//     }

//     if (Array.isArray(data) && data.length === 0) {
//       return (
//         <motion.div
//           className={clsx("text-sm text-slate-700", "dark:text-slate-400")}
//           variants={animation}
//         >
//           nothing new at the moment.
//         </motion.div>
//       );
//     }

//     if (!Array.isArray(data)) {
//       return (
//         <motion.div
//           className={clsx("text-sm text-slate-700", "dark:text-slate-400")}
//           variants={animation}
//         >
//           an internal error occurred.
//         </motion.div>
//       );
//     }

//     return data.map((activity) => {
//       const { createdAt, contentType, slug } = activity;

//       const link = contentType === "POST" ? `/blog/${slug}` : `/docs/${slug}`;

//       return (
//         <motion.div key={createdAt} variants={animation}>
//           <Link
//             href={link}
//             onClick={() => {
//               onItemClick();
//             }}
//             className={clsx(
//               "border-slate-200 block rounded-xl border bg-white/60 p-4 text-[13px] backdrop-blur",
//               "dark:border-slate-800 dark:bg-slate-900/60"
//             )}
//           >
//             <div
//               className={clsx(
//                 "mb-1 flex justify-between text-xs text-slate-600",
//                 "dark:text-slate-400"
//               )}
//             >
//               <span>{activity.activityType}</span>
//               <span>{relativeTime(activity.createdAt)}</span>
//             </div>
//             <ActivityItem data={activity} />
//           </Link>
//         </motion.div>
//       );
//     });
//   };

//   return (
//     <motion.div
//       initial="hide"
//       animate="show"
//       transition={{
//         delayChildren: 0.12,
//         staggerChildren: 0.06,
//       }}
//       className={clsx("flex flex-1 flex-col gap-2")}
//     >
//       <motion.div variants={animation} className={clsx("px-2 text-xl font-bold")}>
//         Recent Activities
//       </motion.div>
//       <div
//         className={clsx(
//           "scrollbar-hide flex flex-1 basis-0 flex-col gap-2 overflow-y-auto p-2 pb-4",
//           "sm:pb-8"
//         )}
//       >
//         {renderData()}
//       </div>
//     </motion.div>
//   );
// }

// export default Activity;
