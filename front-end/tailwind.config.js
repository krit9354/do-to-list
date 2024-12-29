/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Pink: '#EFB6C8', // สีชมพู
        Purple: '#8174A0', // สีม่วง
        Yellow: '#FFD2A0',
        LightPink: '#FFE4ED',
      },
      fontFamily: {
        delius: ['Delius Swash Caps', 'cursive'], // เพิ่มฟอนต์ที่คุณต้องการ
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}

