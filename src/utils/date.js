import format from 'date-fns/format';

/**
 * For change format date to text normal
 * @param {string | Date} dateTime
 * @returns {string}
 */
function onChangeFormatDate(dateTime) {
  if (!dateTime) {
    return format(new Date(), 'dd MMMM yyyy');
  }

  return format(new Date(dateTime), 'dd MMMM yyyy');
}

export default onChangeFormatDate;
