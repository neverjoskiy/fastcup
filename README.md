# ⚡ FastCup App

[![Electron](https://img.shields.io/badge/Electron-28.0.0-47848F?style=for-the-badge&logo=electron&logoColor=white)](https://www.electronjs.org/)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)
[![Platform](https://img.shields.io/badge/Platform-Windows-0078D6?style=for-the-badge&logo=windows&logoColor=white)](https://github.com/bioneverr/fastcup)

> Удобный доступ к платформе **FastCup** в виде отдельного приложения с дополнительными функциями

![FastCup Preview](https://img.shields.io/badge/🎮-CSGO.FASTCUP.NET-ff6b00?style=for-the-badge)

---

## 📖 О проекте

**FastCup App** — это Electron-приложение, которое предоставляет удобный доступ к платформе [csgo.fastcup.net](https://csgo.fastcup.net) в формате нативного десктопного приложения.

### ✨ Особенности

- 🎯 **Отдельное окно** — быстрый доступ без открытия браузера
- 🎨 **Современный UI** — тёмная тема с плавными анимациями
- 🚀 **Оверлей режим** — поверх всех окон (Ctrl+M)
- ⚙️ **Умная навигация** — кнопки назад/вперёд/обновить
- 📱 **Адаптивный интерфейс** — подстраивается под размер окна

---

## 🚀 Быстрый старт

### Установка

1. **Скачайте установщик** из [Releases](https://github.com/bioneverr/fastcup/releases)
2. Запустите `FastCup Setup.exe`
3. Следуйте инструкциям установщика

### 🔧 Сборка из исходников

```bash
# Клонирование репозитория
git clone https://github.com/bioneverr/fastcup.git
cd fastcup

# Установка зависимостей
npm install

# Запуск в режиме разработки
npm start

# Сборка установщика
npm run build
```

---

## 📋 Требования

| Компонент | Версия |
|-----------|--------|
| ОС | Windows 10/11 (x64) |
| RAM | Минимум 512 MB |
| Место на диске | ~150 MB |

---

## 🎮 Управление

### Горячие клавиши

| Клавиша | Действие |
|---------|----------|
| `F5` / `Ctrl+R` | Обновить страницу |
| `Alt+←` | Назад |
| `Alt+→` | Вперёд |
| `Alt+Home` | На главную |
| `Ctrl+M` | Вкл/Выкл оверлей |
| `Ctrl+W` | Закрыть приложение |
| `Escape` | Выйти из оверлея |

### Режим оверлея

Оверлей позволяет использовать приложение поверх других окон (например, во время стрима или записи):

1. Нажмите `Ctrl+M` или кнопку 📺 на панели
2. Окно станет полупрозрачным и будет поверх всех окон
3. Отрегулируйте прозрачность через кнопку ⚪
4. Нажмите `Ctrl+M` или `Escape` для выхода

---

## 🛠️ Разработка

### Структура проекта

```
fastcup/
├── main.js           # Главный процесс Electron
├── preload.js        # Preload скрипт
├── index.html        # Основной интерфейс
├── package.json      # Конфигурация и зависимости
├── assets/
│   └── icon.ico      # Иконка приложения
└── README.md
```

### Изменение иконки

Для замены иконки приложения:

1. Подготовьте `.ico` файл с размерами: 16×16, 32×32, 48×48, 64×64, 128×128, 256×256
2. Замените файл `assets/icon.ico`
3. Пересоберите приложение: `npm run build`

> 💡 **Важно:** Для Windows требуется формат `.ico`. PNG не будет работать в установщике!

---

## ⚠️ Отказ от ответственности

Данная программа предоставляется **"как есть"** (as-is) без каких-либо гарантий.

- Программа **не предназначена для коммерческого использования**
- Программа **официально не связана с FASTCUP** и является независимым проектом
- Все права на платформу FastCup принадлежат её владельцам

---

## 📝 Лицензия

MIT License — см. файл [LICENSE](LICENSE) для деталей.

---

## 👤 Автор

| Контакт | Ссылка |
|---------|--------|
| **Telegram** | [@bioneverr](https://t.me/bioneverr) |
| **GitHub** | [bioneverr](https://github.com/bioneverr) |

---

## 🙏 Благодарности

- [Electron](https://www.electronjs.org/) — фреймворк для создания кроссплатформенных приложений
- [FastCup](https://csgo.fastcup.net/) — платформа для турниров по CS:GO
- [electron-builder](https://www.electron.build/) — инструмент для сборки приложений

---

<div align="center">

**Made with ❤️ for the FastCup community**

[⬆️ Вернуться наверх](#-fastcup-app)

</div>
