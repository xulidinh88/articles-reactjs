export const handleClickButton = (url: string) => {
  window.open(url, '_blank');
};
export const beforeHandleContent = (text: string) => {
  return text.length > 50 ? text.slice(0, text.length - 13) : text;
};
export const randomNumber = () => {
  return Math.floor(Math.random() * 800);
};
