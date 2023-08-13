import { RouteRecordRaw } from "vue-router";

/**
 * Структура данных отдельной группы.
 * Позже будет перенесён в отдельный файл для типов (структур).
 */
export interface Group {
  // Уникальное значение документа коллекции в Firebase
  id?: string;
  // Отображаемое название
  name: string;
};

/**
 * Структура данных отдельного пунка (основной) навигации.
 * Позже будет перенесён в отдельный файл для типов (структур).
 */
export interface RouterLink {
  // Отображаемое название в навигации
  nameMenu: string;
  // Относительный путь
  path: string;
  // Отображать ли пункт в навигации
  showInMenu: boolean;
}

/**
 * Тип объединяет в себе отдельный маршрут и соответствующего пункта меню
 */
export type MenuAndRouteElement = RouteRecordRaw & RouterLink;
