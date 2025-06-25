const isoTimeFormat = (datetime) => {
  const date = new Date(datetime);
  const localTime = date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });
  return localTime;
};

export default isoTimeFormat;
