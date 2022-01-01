import format from 'date-fns/format';

function onChangeFormatDate(dateTime) {
  if (!dateTime) {
    return format(new Date(), 'dd MMMM yyyy');
  }

  return format(new Date(dateTime), 'dd MMMM yyyy');
}

export default onChangeFormatDate;
