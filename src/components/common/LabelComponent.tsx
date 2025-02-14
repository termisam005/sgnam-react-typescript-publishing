interface Props{
  onClick?: ()=>void;
  className?: string;
  txt?: string;
}

const LabelComponent = ({ onClick, className, txt }:Props) => {

  return (
    <span onClick={onClick} className={className}>
        {txt}
    </span>
  );
};

export default LabelComponent;