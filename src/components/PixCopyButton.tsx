import { useState } from 'react'
import { motion } from 'framer-motion'

type PixCopyButtonProps = {
  value: string
  defaultLabel: string
  successLabel: string
}

export function PixCopyButton({
  value,
  defaultLabel,
  successLabel,
}: PixCopyButtonProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2200)
    } catch (error) {
      console.error('Nao foi possivel copiar a chave Pix.', error)
    }
  }

  return (
    <motion.button
      type="button"
      onClick={handleCopy}
      whileHover={{ y: -2, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      className={`min-h-[3.25rem] rounded-full px-6 py-3 text-sm font-semibold transition duration-300 ${
        copied
          ? 'bg-champagne text-truffle shadow-soft'
          : 'bg-truffle text-white shadow-soft hover:bg-[#4a3333]'
      }`}
    >
      {copied ? successLabel : defaultLabel}
    </motion.button>
  )
}
