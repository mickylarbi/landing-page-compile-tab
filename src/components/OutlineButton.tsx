const OutlineButton = ({ text }: { text: string }) => {
  return (
    <a href="#" className="py-2 px-3 border rounded-md">
      {text}
    </a>
  );
};

export default OutlineButton;
