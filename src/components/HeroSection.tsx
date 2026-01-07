import React from 'react';
import { CheckCircle2, TrendingUp, Users, Award, Building2 } from 'lucide-react';
import { CountdownTimer } from './CountdownTimer';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function HeroSection() {
  const keyFacts = [
    { icon: Award, text: 'Паушальный взнос — 0 ₽ до конца месяца' },
    { icon: Users, text: 'Клиенты, юристы и бизнес-система включены' },
    { icon: TrendingUp, text: 'Работаем с 2014 года' },
    { icon: Building2, text: 'Более 40 офисов' },
    { icon: CheckCircle2, text: 'Подходит без опыта' },
  ];

  return (
    <section id="about" className="relative bg-gradient-to-br from-blue-50 via-white to-sky-50 py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl text-gray-900 leading-tight">
                Бизнес по банкротству физических лиц с доходом{' '}
                <span className="text-blue-600">от 300 000 ₽</span> в месяц
              </h1>
              <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
                Без паушального взноса и без юридического опыта. По системе, в которой мы
                зарабатываем только тогда, когда зарабатываете вы.
              </p>
            </div>

            {/* Key Facts */}
            <div className="space-y-4">
              {keyFacts.map((fact, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 text-blue-600 mt-1">
                    <fact.icon size={24} />
                  </div>
                  <p className="text-gray-700 text-lg">{fact.text}</p>
                </div>
              ))}
            </div>

            {/* Timer */}
            <div className="bg-white border-2 border-blue-600 rounded-xl p-6 space-y-4">
              <p className="text-gray-900 font-semibold text-lg">
                До окончания условий с 0 ₽ осталось:
              </p>
              <CountdownTimer />
            </div>

            {/* CTA */}
            <div>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 text-white text-lg font-semibold rounded-xl hover:bg-red-700 transition-all shadow-lg hover:shadow-xl"
              >
                <span className="w-3 h-3 bg-white rounded-full animate-pulse"></span>
                Зафиксировать условия 0 ₽
              </a>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758518730384-be3d205838e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMGhhbmRzaGFrZXxlbnwxfHx8fDE3Njc2NjQ0ODV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Professional Business Partnership"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
            </div>
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 border border-gray-100">
              <div className="text-4xl font-bold text-blue-600">40+</div>
              <div className="text-gray-600">офисов по России</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
