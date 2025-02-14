interface Props{
  stausClass?: string;
  markClass?: string;
  textClass?: string;
  date?: string;
  slash?: string;
  time?: string;
}

const HdtimeComponent = ({ stausClass, markClass, textClass, date, slash, time }:Props) => {
    
  return (
    <div className={stausClass}>
        <p className={markClass}></p>
        <span className={textClass}>
            <span>{date}</span>
            <span>{slash}</span>
            <span>{time}</span>
        </span>
    </div>
  );
};

export default HdtimeComponent;