
module.exports = {
  format_date: (date) => {

    return date.toLocaleDateString();
  },
  format_time: (time) => {
    const now = new Date(time);

    const month = now.getMonth() + 1;
    const year = now.getFullYear();
    const day = now.getDate();
    return `${month}/${day}/${year}`;
  }
};