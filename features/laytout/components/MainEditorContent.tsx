"use client"

import { motion } from "motion/react"

type MainEditorContentProps = {
  children?: React.ReactNode
  ref?: any
}


function MainEditorContent({ children, ref }: Readonly<MainEditorContentProps>) {
  return (
    <motion.main
      ref={ref}
      initial={{ opacity: 0 }}
      className="p-4 lg:p-17 flex-grow"
    >
      {children}
    </motion.main>
  )
}
export default MainEditorContent