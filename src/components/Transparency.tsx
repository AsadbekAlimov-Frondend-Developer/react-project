import React from 'react';
import { FileCheck, Shield, TrendingUp, MapPin } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Transparency() {
  const features = [
    {
      icon: FileCheck,
      title: 'Прозрачные договоры',
      description:
        'Все условия фиксируются в официальных документах. Никаких скрытых платежей.',
    },
    {
      icon: Shield,
      title: 'Юридическая защита',
      description: 'Работаем строго по закону №127-ФЗ. Вы защищены на каждом этапе.',
    },
    {
      icon: TrendingUp,
      title: 'Репутация с 2014 года',
      description: 'Более 10 лет на рынке, тысячи успешных дел, десятки партнёров.',
    },
    {
      icon: MapPin,
      title: 'Сеть офисов',
      description: 'Более 40 офисов по России. Вы присоединяетесь к реальной сети.',
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl text-gray-900 mb-6">
            Прозрачность и юридическая защита
          </h2>
          <p className="text-lg lg:text-xl text-gray-600">
            Мы не работаем «на словах». Все процессы документируются, все сделки прозрачны.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left - Features */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex gap-4 p-6 bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl border border-gray-200"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <feature.icon className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-2">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758518731462-d091b0b4ed0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWdhbCUyMGRvY3VtZW50cyUyMG9mZmljZXxlbnwxfHx8fDE3Njc2OTM0MDB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Legal Documents"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tl from-blue-900/40 to-transparent"></div>
            </div>
            {/* Badge */}
            <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white rounded-xl shadow-2xl p-6">
              <div className="text-4xl font-bold">2014</div>
              <div className="text-blue-100">год основания</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
