const GradientButton = ({ text }: { text: string }) => {
  return (
    <a
      href="#"
      className="bg-linear-to-r from-orange-500 to-orange-800 py-2 px-3  rounded-md"
    >
      {text}
    </a>
  );
};

export default GradientButton;
