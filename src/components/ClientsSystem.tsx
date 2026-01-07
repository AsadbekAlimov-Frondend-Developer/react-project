import React from 'react';
import { Megaphone, Database, MessageSquare, GraduationCap } from 'lucide-react';

export function ClientsSystem() {
  const systems = [
    {
      icon: Megaphone,
      title: 'Настроенный маркетинг',
      description:
        'Готовые воронки продаж, лендинги, таргетированная реклама. Вы получаете систему привлечения клиентов.',
    },
    {
      icon: Database,
      title: 'CRM и автоматизация',
      description:
        'Все процессы автоматизированы: от первого обращения клиента до закрытия сделки.',
    },
    {
      icon: MessageSquare,
      title: 'Скрипты продаж',
      description:
        'Проверенные скрипты для холодных звонков, консультаций, обработки возражений.',
    },
    {
      icon: GraduationCap,
      title: 'Обучение продажам',
      description:
        'Тренинги, вебинары, личное сопровождение. Вы не продаёте «на интуиции», а по системе.',
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl text-gray-900 mb-6">
            Клиенты — часть системы, а не случайность
          </h2>
          <p className="text-lg lg:text-xl text-gray-600">
            Мы не оставляем вас наедине с вопросом «где брать клиентов». У нас есть готовая
            система.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {systems.map((system, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition-shadow"
            >
              <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                <system.icon className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{system.title}</h3>
              <p className="text-gray-600 leading-relaxed">{system.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
