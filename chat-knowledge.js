
const chatKnowledgeBase = [
  // --- Services: Coating Systems ---
  {
    keywords: ['standard', 'system', 'epoxy', 'basic', 'starter'],
    answer: "Our **Standard System** is a high-performance 100% solids epoxy base coat with a polyaspartic top coat. \nIt provides a durable, beautiful finish perfect for basements and standard garage use. 🛡️",
    followUp: true
  },
  {
    keywords: ['premium', 'system', 'polyurea', 'popular', 'best', 'value'],
    answer: "Our **Premium System** is our most popular choice! 💎 \nIt features a flexible Polyurea base coat and a UV-stable Polyaspartic top coat. It's 4x stronger than epoxy and cures in just 24 hours.",
    followUp: true
  },
  {
    keywords: ['ultimate', 'system', 'moisture', 'mitigation', 'protection', 'lifetime'],
    answer: "The **Ultimate System** offers maximum protection. ⚔️ \nIt includes a moisture-mitigation primer, a polyurea build coat, and a polyaspartic top coat. Ideal for floors with moisture issues or heavy industrial use.",
    followUp: true
  },

  // --- Services: General Coatings ---
  {
    keywords: ['coating', 'floor', 'concrete', 'garage', 'basement', 'patio'],
    answer: "We specialize in professional concrete coatings for garages, basements, patios, and pool decks. We use industrial-grade Epoxy, Polyurea, and Polyaspartic materials. ✨",
    followUp: true
  },
  {
    keywords: ['crack', 'repair', 'damage', 'pitting', 'spalling'],
    answer: "We repair cracks, pitting, and spalling before we coat! Our process includes filling and grinding imperfections to ensure a smooth, monolithic surface. 🔧",
    followUp: false
  },
  {
    keywords: ['flake', 'color', 'chip', 'design', 'finish'],
    answer: "We offer a wide variety of flake colors and blends! From classic quartz looks to modern gray and blue mixes. We can help you match your home's aesthetic. 🎨",
    followUp: false
  },

  // --- Process & Logistics ---
  {
    keywords: ['time', 'long', 'duration', 'day', 'cure', 'dry'],
    answer: "Most installations take **1-2 days**. Our Premium Polyurea/Polyaspartic system cures quickly, allowing you to walk on it in 4-6 hours and park in 24 hours! ⏱️",
    followUp: false
  },
  {
    keywords: ['warranty', 'guarantee', 'life', 'last'],
    answer: "We stand by our work! Our coatings come with a **15-Year Limited Warranty** against peeling and delamination. We build floors to last a lifetime. ✅",
    followUp: false
  },
  {
    keywords: ['slip', 'slippery', 'safety', 'texture'],
    answer: "Safety is key! our broadcast flake systems provide natural texture. We can also add anti-slip additives for extra grip on pool decks or wet areas. 🦶",
    followUp: false
  },

  // --- Pricing ---
  {
    keywords: ['price', 'cost', 'money', 'much', 'estimate', 'quote', 'sq', 'ft'],
    answer: "Pricing depends on the square footage and condition of your concrete. \nTypically ranges from **$5 - $8 per sq. ft.** \nWe offer FREE in-person estimates to give you an exact price! 💵",
    followUp: true
  },

  // --- Service Areas ---
  {
    keywords: ['where', 'area', 'location', 'cover', 'san angelo', 'menard', 'midland', 'abilene', 'texas', 'fl', 'west texas'],
    answer: "We proudly serve **West Texas**! \n📍 San Angelo, TX \n📍 Menard, FL \n📍 Midland, FL \n...and communities within a 50-mile radius.",
    followUp: true
  },

  // --- Conversational ---
  {
    keywords: ['hello', 'hi', 'hey', 'start'],
    answer: "Hello! 👋 Welcome to Bulletproof Floors. How can we help transform your concrete floors today?",
    followUp: false
  },
  {
    keywords: ['thank', 'thanks', 'bye'],
    answer: "You're welcome! Let us know if you have any questions. We look forward to working with you! 🚀",
    followUp: false
  },
  {
    keywords: ['human', 'person', 'phone', 'call'],
    answer: "Our team is ready to help! You can call us directly at **+1 325-716-0352**. 📞",
    followUp: true
  }
];

if (typeof window !== 'undefined') {
  window.chatKnowledgeBase = chatKnowledgeBase;
}
