export const timeSince = (date) => {
  const seconds = Math.floor(new Date() - date);
  let interval = seconds / 31536000;
  if (interval > 1) {
    return Math.floor(interval) + " years";
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + " mons";
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + " days";
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + " hrs";
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + " mins";
  }
  return Math.floor(seconds) + " secs";
};
