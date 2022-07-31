export const getTime = (time) => {
  return (Date.now() / 1000 - time).toFixed(0) + " sec";
};

export const calculateDifficulty = (diffi) => {
  if (isNaN(diffi)) return diffi;
  if (diffi > 1000000000000000) {
    const n = diffi / 1000000000000000;
    return n.toFixed(3) + " P";
  }
  if (diffi > 1000000000000) {
    const n = diffi / 1000000000000;
    return n.toFixed(3) + " T";
  }
  if (diffi > 1000000000) {
    const n = diffi / 1000000000;
    return n.toFixed(3) + " G";
  }
  if (diffi > 1000000) {
    const n = diffi / 1000000;
    return n.toFixed(3) + " M";
  }
  const n = diffi / 1000;
  return n.toFixed(3) + " K";
};

export const getSize = (size) => {
  if (isNaN(size)) return size;
  return (size / 1000).toFixed(3) + " kB";
};

const calculateAge = (timestamp) => {
  function dhms(ms) {
    const days = Math.floor(ms / (24 * 60 * 60 * 1000));
    const daysms = ms % (24 * 60 * 60 * 1000);
    const hrs = Math.floor(daysms / (60 * 60 * 1000));
    const hrsms = daysms % (60 * 60 * 1000);
    const mins = Math.floor(hrsms / (60 * 1000));
    const minsms = hrsms % (60 * 1000);
    const secs = Math.floor(minsms / 1000);

    const diff = " ago";
    let secsString = secs + " sec";
    let minsString = mins + " min";
    let hrsString = hrs + " hr";
    let daysString = days + " day";

    if (secs > 1) secsString = secs + " secs";
    if (mins > 1) minsString = mins + " mins";
    if (hrs > 1) hrsString = hrs + " hrs";
    if (days > 1) daysString = days + " days";

    if (days >= 1) return daysString + " " + hrsString + diff;
    if (hrs >= 1) return hrsString + " " + minsString + diff;
    if (mins >= 1) return minsString + " " + secsString + diff;

    return secsString + diff;
  }

  const dateNow = moment.utc();
  const txtTime = moment.utc(timestamp);
  const diffInMs = dateNow.diff(txtTime);
  return dhms(diffInMs);
};
