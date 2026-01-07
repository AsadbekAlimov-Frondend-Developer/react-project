import React from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';

export function Comparison() {
  const comparisonData = [
    {
      feature: 'Паушальный взнос',
      others: '300 000 – 1 500 000 ₽',
      us: '0 ₽',
      usHighlight: true,
    },
    {
      feature: 'Клиенты',
      others: 'Вы сами ищете',
      us: 'Готовая система привлечения',
      usHighlight: true,
    },
    {
      feature: 'Юридическая работа',
      others: 'Нанимайте юристов сами',
      us: 'Команда юристов в штате',
      usHighlight: true,
    },
    {
      feature: 'Обучение и поддержка',
      others: 'Базовый курс, потом сами',
      us: 'Постоянная поддержка и обучение',
      usHighlight: true,
    },
    {
      feature: 'Заинтересованность в вашем доходе',
      others: 'Получили паушальный — всё',
      us: 'Зарабатываем вместе с вами',
      usHighlight: true,
    },
  ];

  return (
    <section id="comparison" className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl text-gray-900 mb-6">
            Сравнение с другими франшизами
          </h2>
          <p className="text-lg lg:text-xl text-gray-600">
            Посмотрите, чем мы отличаемся от типичных предложений на рынке
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Desktop Table */}
          <div className="hidden md:block bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-blue-600 to-sky-600 text-white">
                  <th className="py-6 px-6 text-left text-lg font-semibold">Параметр</th>
                  <th className="py-6 px-6 text-left text-lg font-semibold">Другие франшизы</th>
                  <th className="py-6 px-6 text-left text-lg font-semibold bg-blue-700">
                    Академия банкротства
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}
                  >
                    <td className="py-6 px-6 font-semibold text-gray-900">{row.feature}</td>
                    <td className="py-6 px-6 text-gray-600">
                      <div className="flex items-center gap-2">
                        <XCircle className="text-red-500 flex-shrink-0" size={20} />
                        <span>{row.others}</span>
                      </div>
                    </td>
                    <td className={`py-6 px-6 ${row.usHighlight ? 'bg-green-50' : ''}`}>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="text-green-600 flex-shrink-0" size={20} />
                        <span className="font-semibold text-gray-900">{row.us}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-6">
            {comparisonData.map((row, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                <h3 className="font-semibold text-gray-900 text-lg mb-4">{row.feature}</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-2 pb-4 border-b border-gray-200">
                    <XCircle className="text-red-500 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Другие франшизы:</div>
                      <div className="text-gray-700">{row.others}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 bg-green-50 -m-6 mt-0 p-6 rounded-b-xl">
                    <CheckCircle2 className="text-green-600 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Академия банкротства:</div>
                      <div className="font-semibold text-gray-900">{row.us}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
