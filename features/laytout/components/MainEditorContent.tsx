"use client"

import { motion } from "motion/react"

type MainEditorContentProps = {
  children?: React.ReactNode
  ref?: any
}


function MainEditorContent({ children, ref }: Readonly<MainEditorContentProps>) {
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  )
}
export default MainEditorContent