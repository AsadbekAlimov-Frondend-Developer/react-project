import React from 'react';
import { Target, TrendingUp, Handshake, Shield } from 'lucide-react';

export function WhyZeroFee() {
  const reasons = [
    {
      icon: Handshake,
      title: 'Партнёрство, а не продажа франшизы',
      description:
        'Мы не продаём вам франшизу и не берём разовый паушальный взнос. Мы строим долгосрочное партнёрство.',
    },
    {
      icon: TrendingUp,
      title: 'Наш доход связан с вашим',
      description:
        'Мы зарабатываем только процент от ваших сделок. Если вы зарабатываете — зарабатываем и мы. Это выравнивает наши интересы.',
    },
    {
      icon: Target,
      title: 'Стратегия масштабирования',
      description:
        'Нам выгоднее иметь 100 успешных партнёров, чем взять деньги со 100 и оставить их без поддержки.',
    },
    {
      icon: Shield,
      title: 'Прозрачность и доверие',
      description:
        'Вход без паушального взноса — это наша уверенность в системе и готовность доказать результат делом, а не словами.',
    },
  ];

  return (
    <section id="why" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl text-gray-900 mb-6">
            Почему вход в бизнес — без паушального взноса
          </h2>
          <p className="text-lg lg:text-xl text-gray-600">
            Большинство франшиз зарабатывают на продаже прав. Мы зарабатываем на вашем успехе.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-sky-50 rounded-2xl p-8 border border-blue-100 hover:shadow-xl transition-shadow"
            >
              <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                <reason.icon className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{reason.title}</h3>
              <p className="text-gray-600 leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
