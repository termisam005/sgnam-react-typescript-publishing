interface Props{
  stausClass?: string;
  markClass?: string;
  textClass?: string;
  temper?: string;
  slash?: string;
  air?: string;
}

const HdStatusComponent = ({ stausClass, markClass, textClass, temper, slash, air }:Props) => {
    
  return (
    <div className={stausClass}>
        <p className={markClass}></p>
        <span className={textClass}>
            <span>{temper}</span>
            <span>{slash}</span>
            <span>{air}</span>
        </span>
    </div>
  );
};

export default HdStatusComponent;