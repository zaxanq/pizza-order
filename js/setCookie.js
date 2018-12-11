function add(name, value, time) {
  if (navigator.cookieEnabled) {
    const cookieName = encodeURIComponent(name);
    const cookieValue = encodeURIComponent(value);
    let cookieText = cookieName + "=" + cookieValue;

    if (typeof time === Number) {
      const czas = new Date();
      czas.setTime(czas.getTime() + time * 24 * 60 * 60 * 1000);
      cookieText += "; expires=" + czas.toGMTString();
    }

    cookieText += "; secure";
    document.cookie = cookieText;
  }
}

export default { add };
