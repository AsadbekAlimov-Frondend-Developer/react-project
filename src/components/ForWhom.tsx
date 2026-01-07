import React from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';

export function ForWhom() {
  const fitsFor = [
    'Вы хотите стабильный и прибыльный бизнес в защищённой нише',
    'Готовы работать с людьми и решать их проблемы',
    'Ищете системный подход, а не просто покупку бренда',
    'Хотите бизнес с понятной экономикой и быстрой окупаемостью',
    'Вам важна поддержка и готовая инфраструктура',
    'Готовы следовать системе и обучаться',
  ];

  const notFitsFor = [
    'Вы ищете пассивный доход без участия',
    'Хотите начать «сегодня и сразу», без обучения',
    'Не готовы работать с клиентами и командой',
  ];

  return (
    <section id="for-whom" className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl text-gray-900 mb-6">
            Этот бизнес подойдёт вам, если…
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Fits For */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-green-500">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-3">
              <CheckCircle2 className="text-green-500" size={32} />
              Подходит
            </h3>
            <ul className="space-y-4">
              {fitsFor.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700 text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not Fits For */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-300">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-3">
              <XCircle className="text-gray-500" size={32} />
              Не подходит
            </h3>
            <ul className="space-y-4">
              {notFitsFor.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <XCircle className="text-gray-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-600 text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
