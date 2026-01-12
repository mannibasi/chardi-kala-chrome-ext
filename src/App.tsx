import './App.css'

import { useState } from "react";

const messages = [
  "May you forever remain in Chardi Kala!",
  "Wishing you the spirit of Chardi Kala: rising above all challenges with unwavering faith, boundless optimism, and relentless positivity.",
  "Stay strong, stay hopeful, and keep moving forward with a resilient heart. Chardi Kala always!",
  "Embrace challenges with resilience and optimism. Keep pushing forward, no matter the obstacles, and never lose faith in your strength.",
  "No matter what you're going through, keep your faith strong and your spirit high. One day, it will all make sense.",
  "Chardi Kala: the conscious choice to rise above life's storms with grace, courage, and faith.",
  "Do your best, then leave the rest to God. Keep doing good and stay positive.",
  "To dwell in Chardi Kala is not to suppress sorrow, but to surpass it with spiritual strength. It is spiritual optimism that sings even in sorrow.",
  "May your spirit be a fortress that remains unshaken, standing tall in eternal Chardi Kala.",
  "In the face of darkness, be the light that rises — ever forward, ever upward, in Chardi Kala.",
  "Let the Hukam be your guide and Chardi Kala be your strength in every season of life.",
  "True strength is maintaining a smile of Chardi Kala when the world expects a tear.",
  "May your heart be filled with the 'Anand' that leads to an unbreakable spirit of Chardi Kala.",
  "Rising spirits are not born from ease, but forged through faith and the grace of Chardi Kala.",
  "Let your optimism be as relentless as the dawn; stay in Chardi Kala.",
  "May the Divine's presence within you always manifest as an ever-rising spirit.",
  "When the road is long, let Chardi Kala be the wind at your back and the light in your eyes.",
  "Chardi Kala is the art of seeing the Divine hand in every struggle and every victory.",
  "Stay humble in success and high-spirited in struggle — this is the way of Chardi Kala.",
  "May your faith be larger than your fears and your spirit always in Chardi Kala.",
  "Even in the quietest moments, may your soul vibrate with the energy of Chardi Kala.",
  "Chardi Kala is the soul’s refusal to be defeated by temporary circumstances.",
  "May you find the courage to keep blooming even when the environment is harsh.",
  "Let every 'Waheguru' you speak elevate your mind into the heights of Chardi Kala.",
  "To live in Chardi Kala is to be a warrior of the spirit, fighting with love and optimism.",
  "May you be blessed with a mind that stays steady and a spirit that only knows how to rise.",
  "Trust the timing of your life and keep your spirit anchored in Chardi Kala.",
  "Chardi Kala: where the will of the soul meets the grace of the Creator.",
  "May you walk through the fire of life and come out more radiant in Chardi Kala.",
  "May your journey be defined not by the obstacles, but by the grace with which you rise above them.",
  "Stay rooted in your values and elevated in your outlook — Chardi Kala forever.",
  "The highest state of being is to be content in His Will and rising in His Love.",
  "May your spirit remain unbruised by the world and uplifted by the Divine.",
  "Choose hope over fear and Chardi Kala over despair every single day.",
  "May you find the melody of Chardi Kala in the midst of life’s noise.",
  "A heart in Chardi Kala is a heart that knows it is never truly alone.",
  "May your inner joy be so deep that it inspires the world around you to rise.",
  "Rising spirits are the natural state of a soul connected to the Infinite.",
  "Keep your intentions pure, your actions brave, and your spirit in Chardi Kala.",
  "May you find the strength to be the anchor for others while staying in Chardi Kala yourself.",
  "Let the light of your Chardi Kala dispel the clouds of doubt in your path.",
  "Victory belongs to those who keep their spirit high even when the battle is long.",
  "May you be blessed with the wisdom to see the silver lining in every cloud.",
  "Chardi Kala is the internal flame that no external storm can extinguish.",
  "Live with such optimism that people ask you for the source of your Chardi Kala.",
  "May you always have enough faith to see the good in what is yet to come.",
  "Stay patient when things are difficult and grateful when things are good — that is Chardi Kala.",
  "May the spirit of the Khalsa — brave, compassionate, and optimistic — live in you always.",
  "Let your life be a song of Chardi Kala that echoes in the hearts of others.",
  "May you rise above the trivial and dwell in the sublime peace of Chardi Kala.",
  "Trust that every step you take in faith is leading you closer to your highest self.",
  "May your resilience be your greatest asset and Chardi Kala your constant companion.",
  "In every hardship, there is a seed of growth; water it with the spirit of Chardi Kala.",
  "May your soul always find its way back to the frequency of eternal optimism.",
  "Let the power of the Naam elevate your consciousness to the heights of Chardi Kala.",
  "Never settle for despair when you were born to live in the rising spirit of the Divine.",
  "May you forever remain in Chardi Kala, flourishing in grace and soaring in faith."
];

const getRandomMessage = () => {
  return messages[Math.floor(Math.random() * messages.length)];
};

function App() {
  const [message] = useState(getRandomMessage());

  return (
    <>
      <div>
        <h1>{message}</h1>
      </div>
    </>
  )
}

export default App
