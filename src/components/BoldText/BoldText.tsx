export const BoldText = ({ text }: { text: string }) => {
  const html = text.replace(/\*(.*?)\*/g, "<b>$1</b>");

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};
