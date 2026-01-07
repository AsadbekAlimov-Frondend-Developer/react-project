import React from 'react';
import { TrendingUp, Shield, Users, FileText } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function MarketGrowth() {
  const facts = [
    {
      icon: TrendingUp,
      title: 'Стабильный спрос',
      description:
        'Банкротство физлиц — законная процедура, спрос на которую растёт независимо от экономической ситуации.',
    },
    {
      icon: Shield,
      title: 'Юридическая защищённость',
      description:
        'Это не серая зона — это федеральный закон №127-ФЗ, который работает с 2015 года и защищает права должников.',
    },
    {
      icon: Users,
      title: 'Массовая потребность',
      description:
        'По данным ЦБ, более 40 млн россиян имеют просрочки по кредитам. Это огромная целевая аудитория.',
    },
    {
      icon: FileText,
      title: 'Антикризисная ниша',
      description:
        'В кризис спрос растёт. В стабильности — тоже. Люди всегда нуждаются в решении долговых проблем.',
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl text-gray-900 mb-6">
            Рынок, который растёт в любой экономике
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left - Image */}
          <div className="order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1709715357520-5e1047a2b691?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBtZWV0aW5nfGVufDF8fHx8MTc2NzczMjUyMXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Business Growth"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 to-transparent"></div>
            </div>
          </div>

          {/* Right - Facts */}
          <div className="order-1 lg:order-2 space-y-6">
            {facts.map((fact, index) => (
              <div
                key={index}
                className="flex gap-4 p-6 bg-gradient-to-br from-blue-50 to-sky-50 rounded-xl border border-blue-100"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <fact.icon className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-2">{fact.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{fact.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
