import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const RandomTextGenerator = () => {
  const [currentText, setCurrentText] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [animatingText, setAnimatingText] = useState('')

  const textOptions = [
    'ไอ้เติ้ลร่างปกติ',
    'ไอ้เติ้ลร่างอ้วน',
    'ไอ้เติ้ลร่างผอม',
    'ผู้กู้ระเบิดของอีกฝ่ายหลับตา 10 วิ',
    'ผู้กู้ระเบิดของอีกฝ่ายนั่งเฉยๆ 10 วิ',
    'ผู้กู้ระเบิดของอีกฝ่ายพูดออกเสียงพยัญชนะได้แค่ x',
    'ผู้กู้ระเบิดของอีกฝ่ายหลับตา 1 ข้าง',
    'หากอีกฝ่ายกู้ระเบิดไม่ผ่านจะไม่ได้ลายเซ็น',
    'ผู้กู้ระเบิดของอีกฝ่ายพูดออกเสียงได้แค่สระ x',
    'หากอีกฝ่ายกู้ระเบิดไม่ผ่าน กลุ่มต่อไปจะไม่ได้ลายเซ็น',
    'ผู้กู้ระเบิดของอีกฝ่ายพูดแบบหุ่นยนต์',
    'ผู้กู้ระเบิดของอีกฝ่ายใส่หูฟังโหมดตัดเสียงลบกวน',
    'เพิ่มระดับความยากของอีกฝ่าย 1 ระดับ',
    'เพิ่มระดับความยากของอีกฝ่าย 2 ระดับ',
    'เพิ่มระดับความยากของอีกฝ่าย 3 ระดับ',
    'หน่วยสื่อสารของอีกฝ่าย 2 คนอ่านคู่มือกลับหัว',
    'อีกฝ่ายห้ามพูดสีแดง',
    'อีกฝ่ายห้ามพูดสีน้ำเงิน',
    'อีกฝ่ายห้ามพูดสีเหลือง',
    'อีกฝ่ายห้ามพูดสีเขียว',
    'หน่วยสื่อสารดูจอได้ 1 คน',
    'หน่วยสื่อสารของอีกฝ่ายห้ามพูดตัวเลข',
    'หน่วยสื่อสารของอีกฝ่ายพูดออกเสียงได้แค่สระ x',
    'หน่วยสื่อสารของอีกฝ่ายพูดแบบหุ่นยนต์',
    'หน่วยสื่อสารของอีกฝ่ายพูดออกเสียงพยัญชนะได้แค่ x',
    'บังคับเปลี่ยนผู้กู้ระเบิดของอีกฝ่าย',
    'หากอีกฝ่ายเหลือเวลาน้อยกว่า 30 วินาทีจะไม่ได้ลายเซ็น',
    'อีกฝ่ายพลังชีวิตน้อยลง 1',
    'ผู้กู้ระเบิดของอีกฝ่ายต้องคุยกับ คุณสมพงษ์ เท่านั้น',
    'ผู้กู้ระเบิดของอีกฝ่ายต้องพูดภาษาอังกฤษ',
  ]

  const generateRandomText = () => {
    setIsGenerating(true)
    setCurrentText('')

    let currentIndex = 0
    const finalIndex = Math.floor(Math.random() * textOptions.length)
    let interval = 40
    
    const animate = () => {
      const randomIndex = Math.floor(Math.random() * textOptions.length)
      setAnimatingText(textOptions[randomIndex])

      currentIndex++

      if (currentIndex > 40) {
        interval = interval * 1.2
      }

      if (currentIndex >= 60) {
        setAnimatingText('')
        setCurrentText(textOptions[finalIndex])
        setIsGenerating(false)
        return
      }

      setTimeout(animate, interval)
    }

    animate()
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-8 font-mono">
      <div className="max-w-5xl w-full text-center relative">
        {/* Scanlines effect */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/5 to-transparent animate-pulse"></div>
        </div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="mb-16"
        >
          <div className="text-green-400 text-xs tracking-[0.3em] mb-2">
            CLASSIFIED SYSTEM
          </div>
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="text-4xl md:text-6xl font-bold text-green-400 mb-4 tracking-wider filter drop-shadow-[0_0_10px_#22c55e]"
          >
            BOMB.EXE
          </motion.h1>
          <div className="text-green-500 text-sm tracking-widest">
            ████████████████████
          </div>
        </motion.div>

        {/* Terminal Window */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="bg-black border-2 border-green-400 p-8 mb-12 min-h-[400px] relative shadow-[0_0_30px_#22c55e40]"
        >
          {/* Terminal header */}
          <div className="flex items-center mb-6 pb-4 border-b border-green-400/30">
            <div className="text-green-400 text-sm">C:\DEFUSE\RULES &gt;</div>
            <motion.div
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="w-2 h-4 bg-green-400 ml-1"
            />
          </div>

          <AnimatePresence mode="wait">
            {isGenerating ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center"
              >
                <div className="text-green-300 text-sm mb-4">
                  ACCESSING CLASSIFIED DATABASE...
                </div>
                <motion.div
                  key={animatingText}
                  initial={{ opacity: 0.3 }}
                  animate={{ opacity: 0.8 }}
                  transition={{ duration: 0.05 }}
                  className="text-lg md:text-xl text-green-300 leading-relaxed min-h-[200px] flex items-center justify-center font-mono"
                >
                  {animatingText && `> ${animatingText}`}
                </motion.div>
                <div className="flex justify-center items-center space-x-1 mt-4">
                  {[...Array(10)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{
                        duration: 0.5,
                        repeat: Infinity,
                        delay: i * 0.1,
                      }}
                      className="w-2 h-2 bg-green-400"
                    />
                  ))}
                </div>
              </motion.div>
            ) : currentText ? (
              <motion.div
                key={currentText}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="text-center"
              >
                {/* Terminal sparkles */}
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{
                        opacity: [0, 0.8, 0],
                        scale: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2,
                        delay: 0.5 + i * 0.2,
                      }}
                      className="absolute text-green-400 text-xs"
                      style={{
                        top: `${15 + i * 15}%`,
                        left: `${5 + i * 15}%`,
                      }}
                    >
                      ■
                    </motion.div>
                  ))}
                </div>

                <div className="text-green-300 text-sm mb-4">
                  RULE EXTRACTED SUCCESSFULLY
                </div>
                <motion.div
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-xl md:text-2xl text-green-400 leading-relaxed relative z-10 font-mono border border-green-400/30 p-6 bg-green-400/5"
                >
                  &gt; {currentText}
                </motion.div>
                <div className="text-green-500 text-xs mt-4 tracking-widest">
                  STATUS: ACTIVE
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center"
              >
                <div className="text-green-500 text-sm mb-8">SYSTEM READY</div>
                <motion.div
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-6xl text-green-400/30 mb-8"
                >
                  💣
                </motion.div>
                <div className="text-lg text-green-400 tracking-widest font-mono">
                  PRESS TO EXTRACT RULE
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Execute Button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          whileHover={{
            scale: isGenerating ? 1 : 1.02,
            boxShadow: isGenerating ? 'none' : '0 0 20px #22c55e60',
          }}
          whileTap={{ scale: isGenerating ? 1 : 0.98 }}
          onClick={generateRandomText}
          disabled={isGenerating}
          className={`px-12 py-4 text-sm font-bold tracking-[0.2em] border-2 transition-all duration-300 font-mono ${
            isGenerating
              ? 'border-green-600 text-green-600 cursor-not-allowed bg-black'
              : 'border-green-400 text-green-400 hover:bg-green-400 hover:text-black bg-black shadow-[0_0_10px_#22c55e40]'
          }`}
        >
          {isGenerating ? '>>> EXTRACTING...' : '>>> EXECUTE'}
        </motion.button>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="mt-12 text-green-500/50 text-xs tracking-widest"
        >
          UNAUTHORIZED ACCESS PROHIBITED
        </motion.div>
      </div>
    </div>
  )
}

export default RandomTextGenerator
