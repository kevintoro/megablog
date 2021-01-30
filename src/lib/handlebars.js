const {format, register} = require('timeago.js');
const helpers = {};

const localeFunc = (number, index, totalSec) => {
  // number: the timeago / timein number;
  // index: the index of array below;
  // totalSec: total seconds between date to be formatted and today's date;
  return [
    ['justo ahora', 'justo ahora'],
    ['hace %s segundos', 'dentro de %s segundos'],
    ['hace un minuto', 'dentro de 1 minuto'],
    ['hace %s minutos', 'dentro de %s minutos'],
    ['hace 1 hora', 'dentro de 1 hora'],
    ['hace %s horas', 'dentro de %s horas'],
    ['hace un día', 'dentro de 1 día'],
    ['hace %s días', 'dentro de %s días'],
    ['hace una semana', 'dentro de 1 semana'],
    ['hace %s semanas', 'dentro de %s semanas'],
    ['hace un mes', 'dentro de 1 mes'],
    ['hace %s meses', 'dentro de %s meses'],
    ['hace 1 año', 'dentro de 1 año'],
    ['hace %s años', 'dentro de %s años']
  ][index];
};

register('es_CO', localeFunc);

helpers.timeago = (timestamp) => {
  return format(timestamp, 'es_CO');
}
