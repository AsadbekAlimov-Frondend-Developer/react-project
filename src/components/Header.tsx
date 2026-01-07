import React from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

export function Header({ mobileMenuOpen, setMobileMenuOpen }: HeaderProps) {
  const menuItems = [
    { label: 'О франшизе', href: '#about' },
    { label: 'Почему банкротство', href: '#why' },
    { label: 'Для кого', href: '#for-whom' },
    { label: 'Цифры', href: '#numbers' },
    { label: 'Поддержка', href: '#support' },
    { label: 'Сравнение', href: '#comparison' },
    { label: 'Контакты', href: '#contacts' },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="#" className="text-xl lg:text-2xl font-bold text-blue-600">
                АКАДЕМИЯ БАНКРОТСТВА
              </a>
            </div>

            {/* Desktop Menu */}
            <nav className="hidden lg:flex items-center space-x-6">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm text-gray-700 hover:text-blue-600 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
              >
                <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                Зафиксировать 0 ₽
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-blue-600"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={() => setMobileMenuOpen(false)}
          ></div>
          <div className="absolute right-0 top-20 bottom-0 w-80 max-w-full bg-white shadow-xl">
            <nav className="flex flex-col p-6 space-y-4">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg text-gray-700 hover:text-blue-600 transition-colors py-2"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors mt-4"
              >
                <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                Зафиксировать 0 ₽
              </a>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
