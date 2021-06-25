export const millisToMinutesAndSeconds = millis => {
  if (millis == null || millis === undefined || millis === '') {
    return '';
  }
  var minutes = Math.floor((millis / (1000 * 60)) % 60);
  var seconds = ((millis % 60000) / 1000).toFixed(0);
  var hours = Math.floor((millis / (1000 * 60 * 60)) % 24);
  var data = '';
  if (hours) {
    data = hours + ':';
  }
  if (minutes) {
    data = data + (minutes < 10 ? '0' + minutes : minutes) + ':';
  }
  if (seconds) {
    data = data + (seconds < 10 ? '0' : '') + seconds;
  }

  return data;
};

export const getDateBasedOnLng = (lng,date) => {
  return (new Intl.DateTimeFormat(lng, {
    year: 'numeric', month: 'numeric', day: 'numeric',
    hour: 'numeric', minute: 'numeric', second: 'numeric'
  }).format(date).toString());
};
