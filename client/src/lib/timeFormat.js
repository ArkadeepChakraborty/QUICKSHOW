const timeformat = (minitues) => {
  const hours= Math.floor(minitues/60);
  const minituesRemainder = minitues % 60;
  return `${hours}h  ${minituesRemainder}m`;
}

export default timeformat