function dateFormat (timestamp) {
  const date = new Date(timestamp * 1000);
  if (!date) return undefined;

  const day_names = ['Sunday', 'Monday', 'Thursday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const day_index = date.getDay();
  const time = date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });

  return `${day_names[day_index]} ${time}`;
}

export default dateFormat;
