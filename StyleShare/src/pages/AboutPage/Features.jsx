import React from 'react'
import { Gift, Users, ShoppingBag, CheckCircle } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Gift className="w-8 h-8 text-blue-500" />,
      title: "Donate With Ease",
      description: "Upload clothes in seconds with photos, sizes, and descriptions. Giving back has never been simpler.",
    },
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      title: "Community Driven",
      description: "A platform built for people — by people. StyleShare connects generous donors with those in need.",
    },
    {
      icon: <ShoppingBag className="w-8 h-8 text-blue-500" />,
      title: "Real Shopping Experience",
      description: "Recipients can browse, select, and receive clothes just like any modern shopping site — but for free.",
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-blue-500" />,
      title: "Dignity First",
      description: "We focus on giving people the choice to pick what they wear. Everyone deserves to feel confident.",
    },
  ];
  return (
    <section className="bg-gray-900 text-white py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          What Makes <span className="text-blue-500">StyleShare</span> Special?
        </h2>
        <p className="text-gray-400 mb-12 max-w-3xl mx-auto">
          It’s more than just a donation site — it's a community where kindness meets style.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features