#Тестовое задание для младшего разработчика пользовательских интерфейсов

Турнирная таблица чемпионата на основе данных, содержащихся в [JSON-файле seriea.json](https://github.com/sportsru/table-task/blob/master/seriea.json). HTML-код таблицы формируется динамически на стороне браузера при загрузке страницы. Внешний вид таблицы соответствует [макету](https://github.com/sportsru/table-task/blob/master/table.psd).

Использована библиотека jQuery без дополнительных плагинов.

Таблица занимает всю ширину экрана. При этом все столбцы таблицы, кроме столбца с названием команды, имеют фиксированную ширину в соответствии с макетом. Минимальная ширина столбца с названием команды - 150 пикселей.

На экранах с шириной менее 768px скрыты колонки количества забитых и пропущенных голов, а также расшифровка этих колонок ниже таблицы.

Название команды оформлено в виде ссылки, ведущей на страницу этой команды (поле `tag_url` в JSON-файле).

Изображение флага перекодировно в base64 и хранится в файле flags.css.

Готовое задание должно быть [оформлено в виде репозитория на Github](https://guides.github.com/activities/forking/). Дополнительно можно разместить задание на хостинге, например, [Github Pages](https://pages.github.com/).
