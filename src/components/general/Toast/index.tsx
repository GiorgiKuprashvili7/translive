export const Msg = ({ title, text }: { title: string; text: string }) => {
  return (
    <div className="msg-container">
      <p className="msg-title">{title}</p>
      <p className="msg-description">{text}</p>
    </div>
  );
};
