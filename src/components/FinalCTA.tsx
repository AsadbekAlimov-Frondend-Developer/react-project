import React from 'react';
import { Phone } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function FinalCTA() {
  return (
    <section id="contact" className="py-16 lg:py-24 bg-gradient-to-br from-blue-600 to-sky-700 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl mb-6">
            Для тех, кто выбирает системный бизнес
          </h2>
          <p className="text-lg lg:text-xl text-blue-100 mb-8">
            Вы не покупаете франшизу — вы становитесь частью растущей сети с прозрачной моделью,
            где ваш успех напрямую связан с нашим. Без паушального взноса. Без скрытых условий.
          </p>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/20">
            <h3 className="text-2xl font-semibold mb-6">Что вы получите прямо сейчас:</h3>
            <ul className="text-left text-lg text-blue-100 space-y-3 max-w-2xl mx-auto">
              <li className="flex items-start gap-3">
                <span className="text-white mt-1">✓</span>
                <span>Консультацию по модели бизнеса и финансам</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white mt-1">✓</span>
                <span>Расчёт доходности для вашего города</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white mt-1">✓</span>
                <span>Ответы на все вопросы от действующего партнёра</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white mt-1">✓</span>
                <span>Проверку доступности территории</span>
              </li>
            </ul>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+78001234567"
              className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 text-white text-lg font-semibold rounded-xl hover:bg-red-700 transition-all shadow-lg hover:shadow-xl w-full sm:w-auto justify-center"
            >
              <span className="w-3 h-3 bg-white rounded-full animate-pulse"></span>
              Зафиксировать паушальный взнос 0 ₽
            </a>
            <a
              href="#form"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 text-lg font-semibold rounded-xl hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl w-full sm:w-auto justify-center"
            >
              <Phone size={24} />
              Получить расчёт под мой город
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-2xl p-8 lg:p-12">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
            Оставьте заявку — мы перезвоним в течение 15 минут
          </h3>
          <form className="space-y-6" id="form">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                Ваше имя *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-900"
                placeholder="Иван Петров"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
                Телефон *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-900"
                placeholder="+7 (999) 123-45-67"
              />
            </div>
            <div>
              <label htmlFor="city" className="block text-gray-700 font-semibold mb-2">
                Ваш город *
              </label>
              <input
                type="text"
                id="city"
                name="city"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-900"
                placeholder="Москва"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                Комментарий (опционально)
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-900"
                placeholder="Расскажите немного о себе и ваших целях..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-8 py-4 bg-red-600 text-white text-lg font-semibold rounded-xl hover:bg-red-700 transition-all shadow-lg hover:shadow-xl"
            >
              Отправить заявку
            </button>
            <p className="text-sm text-gray-600 text-center">
              Нажимая кнопку, вы соглашаетесь с{' '}
              <a href="#privacy" className="text-blue-600 hover:underline">
                политикой конфиденциальности
              </a>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
