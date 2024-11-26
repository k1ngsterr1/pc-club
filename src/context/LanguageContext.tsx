import React, { createContext, useState, useContext, useEffect } from "react";
import { getLocales } from "expo-localization";
import { I18n } from "i18n-js";

type Translations = Record<string, Record<string, string>>;

interface LanguageContextType {
  language: string;
  changeLanguage: () => void;
  i18n: I18n;
}

// Локализации
const translations = {
  en: {
    cards: "Payment method",
    city: "Your City",
    language: "Language",
    settings: "Settings",
    payment: "Payment cards",
    profile: "Profile",
    history: "History",
    delete: "Delete account",
    logOut: "Log out",
    ourClubs: "Our clubs",
    viewAll: "View all",
    workTime: "Work time",
    book: "Book",
    miniBar: "Mini Bar",
    promotions: "Our promotions",
    next: "Next",
    boarding: "Boarding",
    aboutHalls: "About halls",
    free: "Free",
    occupied: "Occupied",
    selected: "Selected",
    warning: "Warning",
    warningMessage: "Your account will be permanently deleted. Are you sure?",
    cancellation: "Сlose",
    deleteButton: "Delete",
    deleteMessage: "Your account will be permanently deleted",
    hours: "How many hours do you want?",
    paymentMessage: "YOU WILL HAVE 30 MINUTES TO GET TO YOUR COMPUTER!",
    weekday: "Weekday",
    account: "Account",
    computer: "Computer",
    my: "My",
    package: "Package",
    confirmMessage: "Confirm Your Phone",
    confirmButton: "Confirm",
    signIn: "Sign In",
    phoneNumber: "Phone Number",
    welcomeWhite: "Welcome to",
    welcomeYellow: "PC Club",
    startButton: "Start",
    viewMap: "View on the map",
  },
  ru: {
    cards: "Cпособ оплаты",
    city: "Ваш Город",
    language: "Язык",
    settings: "Настройки",
    payment: "Платежные карты",
    profile: "Профиль",
    history: "История",
    delete: "Удалить аккаунт",
    logOut: "Выйти с аккаунта",
    ourClubs: "Наши клубы",
    viewAll: "Смотреть все",
    workTime: "Время работы",
    book: "Бронировать",
    miniBar: "Мини бар",
    promotions: "Наши акции",
    next: "Далее",
    boarding: "Посадка",
    aboutHalls: "О залах",
    free: "Свободно",
    occupied: "Занято",
    selected: "Выбрано",
    warning: "Предупреждение",
    warningMessage: "Ваш аккаунт будет удален безвозвратно. Вы уверены?",
    cancellation: "Отмена",
    deleteButton: "Удалить",
    deleteMessage: "Ваш аккаунт будет удален безвозвратно",
    hours: "Сколько часов вы хотите?",
    paymentMessage: "У ВАС БУДЕТ 30 МИНУТ, ЧТОБЫ УСПЕТЬ СЕСТЬ ЗА КОМПЬЮТЕР!",
    weekday: "Будни",
    account: "Аккаунт",
    computer: "Компьютер",
    my: "Мой",
    package: "Пакет",
    confirmMessage: "Подтвердите Свой Номер",
    confirmButton: "Подтвердить",
    signIn: "Войти",
    phoneNumber: "Номер Телефона",
    welcomeWhite: "Добро Пожаловать в",
    welcomeYellow: "ПК Клуб",
    startButton: "Начать",
    viewMap: "Смотреть на карте",
  },
  kz: {
    cards: "Төлем әдісі",
    city: "Қалаңыз",
    language: "Тіл",
    settings: "Параметрлер",
    payment: "Төлем карталары",
    profile: "Профиль",
    history: "Tарих",
    delete: "Есептік жазбаны жою",
    logOut: "Есептік жазбадан шығу",
    ourClubs: "Біздің клубтар",
    viewAll: "Барлығын қараңыз",
    workTime: "Жұмыс уақыты",
    book: "Брондау",
    miniBar: "Шағын бар",
    promotions: "Біздің акциялар",
    next: "Келесі",
    boarding: "Қону",
    aboutHalls: "Залдар",
    free: "Еркін",
    occupied: "Бос емес",
    selected: "Таңдалған",
    warning: "Ескерту",
    warningMessage:
      "Сіздің есептік жазбаңыз біржола жойылады. Сіз сенімдісіз бе?",
    cancellation: "Бас тарту",
    deleteButton: "Жою",
    deleteMessage: "Сіздің есептік жазбаңыз біржола жойылады",
    hours: "Сіз қанша сағат алғыңыз келеді?",
    paymentMessage: "КОМПЬЮТЕРГЕ ОТЫРУҒА 30 МИНУТ УАҚЫТЫҢЫЗ БОЛАДЫ!",
    weekday: "Жұмыс күндері",
    account: "Тіркелгі",
    computer: "Компьютер",
    my: "Менің",
    package: "Пакет",
    confirmMessage: "Нөміріңізді Растаңыз",
    confirmButton: "Растаңыз",
    signIn: "Кіру",
    phoneNumber: "Телефон Нөмірі",
    welcomeWhite: "Қош келдіңіз",
    welcomeYellow: "ПК Клуб",
    startButton: "Бастау",
    viewMap: "Картадан қараңыз",
  },
};
const i18n = new I18n(translations);

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
}) => {
  const [language, setLanguage] = useState<string>(
    getLocales()[0].languageCode || "en"
  );

  useEffect(() => {
    i18n.locale = language;
  }, [language]);

  const changeLanguage = (newLanguage?: string) => {
    const nextLanguage =
      newLanguage ||
      (language === "en" ? "ru" : language === "ru" ? "kz" : "en");
    setLanguage(nextLanguage);
    i18n.locale = nextLanguage;
  };
  return (
    <LanguageContext.Provider value={{ language, changeLanguage, i18n }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
