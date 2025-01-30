"use client"

import { motion } from "motion/react"


import { ForwardedRef, ReactNode } from "react";

type MainEditorContentProps = {
  children: ReactNode;
  ref: ForwardedRef<HTMLElement>;
};


function MainEditorContent({ children, ref }: Readonly<MainEditorContentProps>) {
  return (
    <motion.main
      ref={ref}
      /* initial={{ opacity: 0 }} */
      style={{ gridColumn: "1/-1" }}
      /* className="flex-grow row-start-2 row-end-3 col-start-1 col-end-2 flex flex-col" */
      className="flex-grow row-start-2 row-end-3 col-start-1 col-end-5 flex-col contents"
    >
      {children}
    </motion.main>
  )
}
export default MainEditorContent