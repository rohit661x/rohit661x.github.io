'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const mathSymbols = [
  '∑', 'π', '∫', '∞', '√', 'Δ', '∂', 'μ', 'σ', 'λ',
  'α', 'β', 'γ', 'θ', 'φ', '∇', '∀', '∃', '∈', '⊂',
  'y = mx + b', 'E = mc²', 'a² + b² = c²', 'f(x)', 'dx/dt',
  '∮', '∏', '∠', '∥', '⊥', '≅', '≈', '≠', '≤', '≥'
];

const MathAnimation = () => {
  const [symbols, setSymbols] = useState<Array<{ id: number; symbol: string; x: number; y: number }>>([]);

  useEffect(() => {
    // Create initial symbols
    const initialSymbols = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      symbol: mathSymbols[Math.floor(Math.random() * mathSymbols.length)],
      x: Math.random() * 100,
      y: Math.random() * 100,
    }));
    setSymbols(initialSymbols);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
      {symbols.map((item) => (
        <motion.div
          key={item.id}
          className="absolute text-white/20 text-xl font-mono"
          initial={{
            x: `${item.x}%`,
            y: `${item.y}%`,
            opacity: 0,
            scale: 0,
          }}
          animate={{
            x: [
              `${item.x}%`,
              `${item.x + (Math.random() * 20 - 10)}%`,
              `${item.x}%`
            ],
            y: [
              `${item.y}%`,
              `${item.y + (Math.random() * 20 - 10)}%`,
              `${item.y}%`
            ],
            opacity: [0, 0.8, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}
          style={{
            fontSize: `${Math.random() * 1.5 + 1}rem`,
          }}
        >
          {item.symbol}
        </motion.div>
      ))}
    </div>
  );
};

export default MathAnimation; 