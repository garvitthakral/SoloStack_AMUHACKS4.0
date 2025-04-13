import React from 'react'
import { Heart, Shirt, Smile } from "lucide-react";

const Why = () => {
    const features = [
        {
          icon: <Heart className="w-8 h-8 text-blue-500" />,
          title: "Give with Love",
          description:
            "Donate clothes that still have life in them, and make someone’s day brighter.",
        },
        {
          icon: <Shirt className="w-8 h-8 text-blue-500" />,
          title: "Style for All",
          description:
            "We believe everyone deserves to choose what they wear — not just receive what’s left.",
        },
        {
          icon: <Smile className="w-8 h-8 text-blue-500" />,
          title: "Dignified Experience",
          description:
            "Users can browse, select, and receive clothes just like any online shopping platform — but for free.",
        },
      ];
  return (
    <section className="bg-gray-900 text-white py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Why Choose <span className="text-blue-500">StyleShare?</span>
        </h2>
        <p className="text-gray-400 mb-12 max-w-3xl mx-auto">
          StyleShare isn't just a donation platform — it's a movement to bring self-respect, choice, and joy to everyone through fashion.
        </p>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Why