import ImgComponent from '../common/ImgComponent';


interface Props{
    distClass?: string;
    distance?: string;
}

const DistanceComponent = ({ distClass, distance}:Props) => {

  return (
        <div className={distClass}>
            <span className="unit">{distance}</span>
            <ImgComponent className={'w60'} src={'map_scale_icon.svg'} />
        </div>
    );
};

export default DistanceComponent;