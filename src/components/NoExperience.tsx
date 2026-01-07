import React from 'react';
import { Users, Headphones, BookOpen, CheckCircle2, Award } from 'lucide-react';

export function NoExperience() {
  const supports = [
    {
      icon: Users,
      title: 'Команда юристов',
      description: 'Всю работу с документами, судами и процедурой ведут наши специалисты.',
    },
    {
      icon: Headphones,
      title: 'Поддержка клиентов',
      description: 'Готовые скрипты, обучение продажам и работе с возражениями.',
    },
    {
      icon: BookOpen,
      title: 'Обучение с нуля',
      description: 'Полный курс для партнёров — от азов до масштабирования.',
    },
    {
      icon: CheckCircle2,
      title: 'Контроль качества',
      description: 'Проверяем каждую сделку и помогаем на всех этапах.',
    },
    {
      icon: Award,
      title: 'Сертификация',
      description: 'Вы получаете статус официального партнёра и все необходимые материалы.',
    },
  ];

  return (
    <section id="support" className="py-16 lg:py-24 bg-gradient-to-br from-blue-600 to-sky-700 text-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl mb-6">
            Юридический опыт не требуется
          </h2>
          <p className="text-lg lg:text-xl text-blue-100">
            Вы — предприниматель и руководитель. Юридическую работу делаем мы.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {supports.map((support, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all"
            >
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-6">
                <support.icon className="text-blue-600" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{support.title}</h3>
              <p className="text-blue-100 leading-relaxed">{support.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
