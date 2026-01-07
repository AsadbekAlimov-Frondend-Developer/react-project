import React from 'react';
import { DollarSign, Users, TrendingDown, Calendar } from 'lucide-react';

export function Numbers() {
  const financials = [
    {
      icon: DollarSign,
      label: 'Средний чек',
      value: '120 000 ₽',
      description: 'за одно дело',
    },
    {
      icon: Users,
      label: 'Клиентов в месяц',
      value: '3-5',
      description: 'при работе по системе',
    },
    {
      icon: TrendingDown,
      label: 'Расходы',
      value: '50-80 000 ₽',
      description: 'офис, реклама, зарплаты',
    },
    {
      icon: Calendar,
      label: 'Окупаемость',
      value: '4 месяца',
      description: 'средний срок',
    },
  ];

  return (
    <section id="numbers" className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl text-gray-900 mb-6">
            Финансовая модель на реальных показателях
          </h2>
          <p className="text-lg lg:text-xl text-gray-600">
            Мы не обещаем миллионы за месяц. Мы показываем реальные цифры наших партнёров.
          </p>
        </div>

        {/* Financial Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
          {financials.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 text-center"
            >
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <item.icon className="text-white" size={24} />
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-2">{item.value}</div>
              <div className="font-semibold text-gray-900 mb-1">{item.label}</div>
              <div className="text-sm text-gray-500">{item.description}</div>
            </div>
          ))}
        </div>

        {/* Example Calculation */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-xl border-2 border-blue-600 max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
            Пример расчёта на месяц
          </h3>

          <div className="space-y-6">
            <div className="flex justify-between items-center pb-4 border-b border-gray-200">
              <span className="text-gray-700 text-lg">3–5 клиентов × 120 000 ₽</span>
              <span className="font-bold text-2xl text-green-600">360–600 000 ₽</span>
            </div>

            <div className="flex justify-between items-center pb-4 border-b border-gray-200">
              <span className="text-gray-700 text-lg">Расходы (офис, реклама, зарплаты)</span>
              <span className="font-bold text-2xl text-red-600">−50–80 000 ₽</span>
            </div>

            <div className="flex justify-between items-center pb-4 border-b border-gray-200">
              <span className="text-gray-700 text-lg">Роялти (процент от сделок)</span>
              <span className="font-bold text-2xl text-red-600">−40–60 000 ₽</span>
            </div>

            <div className="flex justify-between items-center pt-4 bg-blue-50 rounded-xl p-6">
              <span className="text-gray-900 font-semibold text-xl">Ваш доход</span>
              <span className="font-bold text-3xl text-blue-600">270–460 000 ₽</span>
            </div>
          </div>

          <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl border border-green-200">
            <p className="text-center font-semibold text-gray-900 text-lg">
              <span className="text-green-600">Паушальный взнос: 0 ₽</span> — вы начинаете без
              первоначальных инвестиций
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
