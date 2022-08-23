export const cleanContent = (content: string) => {
  return content.replace(/<\/?[^>]+(>|$)/g, "");
};
