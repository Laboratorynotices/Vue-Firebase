import { Group } from "@/types";
import { db } from "./config";
import { collection, getDocs, onSnapshot, query } from "firebase/firestore";
import { Ref } from "vue";

/**
 * Название коллекции (таблицы)
 */
const COLLECTION_NAME = "groups";

/**
 * Возвращает все документы "групп", что записаны в Firebase.
 * Поскольку данные запрашиваются не один раз, а постоянно,
 * то "асинхронность" функции можно убрать.
 *
 * @param groups: Ref<Group[]> - нужно не для того,
 * чтобы передавать значения внутрь функции, а для того,
 * чтобы "зацепиться" "слушателем".
 */
export const getGroups = (groups: Ref<Group[]>): void => {
  /*
   * Переменная querySnapshot используется,
   * но ни VS Code, ни Eslint этого не видят.
   * А последний даже предупреждение выдаёт.
   * Вот и отключаю вручную уведомление
   * об не использовании этой переменной.
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const querySnapshot = getDocs(collection(db, COLLECTION_NAME));

  onSnapshot(query(collection(db, COLLECTION_NAME)), (querySnapshot) => {
    // Объявляем временную переменную, куда будем собирать прочитанные данные.
    const groupsTemp: Group[] = [];
    querySnapshot.forEach((doc) => {
      // По очереди добавляем данные в переменную
      groupsTemp.push({ id: doc.id, ...doc.data() } as Group);
    });
    groups.value = groupsTemp;
  });
};
