import React from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

export function Footer() {
  const navigation = [
    { label: 'О франшизе', href: '#about' },
    { label: 'Почему банкротство', href: '#why' },
    { label: 'Для кого', href: '#for-whom' },
    { label: 'Цифры', href: '#numbers' },
    { label: 'Поддержка', href: '#support' },
    { label: 'Сравнение', href: '#comparison' },
    { label: 'Контакты', href: '#contacts' },
  ];

  const legal = [
    { label: 'Политика конфиденциальности', href: '#privacy' },
    { label: 'Пользовательское соглашение', href: '#terms' },
    { label: 'Договор публичной оферты', href: '#offer' },
  ];

  const social = [
    { name: 'Telegram', icon: Send, href: '#telegram' },
    { name: 'VK', icon: 'VK', href: '#vk' },
    { name: 'YouTube', icon: 'YT', href: '#youtube' },
  ];

  return (
    <footer id="contacts" className="bg-gray-900 text-white py-12 lg:py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">АКАДЕМИЯ БАНКРОТСТВА</h3>
            <p className="text-gray-400 mb-4">
              Франшиза по банкротству физических лиц. Работаем с 2014 года.
            </p>
            <div className="space-y-2">
              <a
                href="tel:+78001234567"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
              >
                <Phone size={18} />
                <span>+7 (800) 123-45-67</span>
              </a>
              <a
                href="mailto:info@bankruptcy-academy.ru"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
              >
                <Mail size={18} />
                <span>info@bankruptcy-academy.ru</span>
              </a>
              <div className="flex items-start gap-2 text-gray-300">
                <MapPin size={18} className="flex-shrink-0 mt-1" />
                <span>Москва, ул. Примерная, д. 1</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4">Навигация</h4>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Документы</h4>
            <ul className="space-y-2">
              {legal.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Мы в соцсетях</h4>
            <div className="space-y-3">
              <a
                href="#telegram"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
              >
                <Send size={20} />
                <span>Telegram</span>
              </a>
              <a
                href="#vk"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
              >
                <div className="w-5 h-5 bg-blue-600 rounded flex items-center justify-center text-xs font-bold">
                  VK
                </div>
                <span>ВКонтакте</span>
              </a>
              <a
                href="#youtube"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
              >
                <div className="w-5 h-5 bg-red-600 rounded flex items-center justify-center text-xs font-bold">
                  YT
                </div>
                <span>YouTube</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2026 Академия банкротства. Все права защищены.
            </p>
            <p className="text-gray-500 text-sm">
              ИНН 1234567890 | ОГРН 1234567890123
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
