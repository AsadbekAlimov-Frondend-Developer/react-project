import React from 'react';
import { Clock, MapPin, AlertCircle } from 'lucide-react';
import { CountdownTimer } from './CountdownTimer';

export function LimitedTime() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-red-50 to-orange-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-8 lg:p-12 border-2 border-red-600">
            <div className="flex items-center justify-center gap-3 mb-6">
              <AlertCircle className="text-red-600" size={36} />
              <h2 className="text-3xl lg:text-4xl text-gray-900 text-center">
                Условия действуют ограниченное время
              </h2>
            </div>

            <p className="text-lg lg:text-xl text-gray-600 text-center mb-8">
              Паушальный взнос 0 ₽ — акционное предложение, которое закроется в конце месяца
            </p>

            {/* Timer */}
            <div className="bg-gradient-to-r from-blue-50 to-sky-50 rounded-xl p-8 mb-8">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Clock className="text-blue-600" size={32} />
                <h3 className="text-xl font-semibold text-gray-900">До окончания акции:</h3>
              </div>
              <div className="flex justify-center">
                <CountdownTimer />
              </div>
            </div>

            {/* City Limit */}
            <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-6 mb-8">
              <div className="flex items-start gap-4">
                <MapPin className="text-yellow-600 flex-shrink-0 mt-1" size={28} />
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-2">
                    Ограничение по городам
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    В каждом городе мы работаем только с одним партнёром, чтобы не создавать
                    конкуренцию внутри сети. Если ваш город уже занят — мы предложим соседние
                    варианты.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 text-white text-lg font-semibold rounded-xl hover:bg-red-700 transition-all shadow-lg hover:shadow-xl"
              >
                <span className="w-3 h-3 bg-white rounded-full animate-pulse"></span>
                Проверить доступность моего города
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
