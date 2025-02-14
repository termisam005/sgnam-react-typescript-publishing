interface Props{
    className?: string;
    squareClass?: string;
    wordClass?: string; 
    word?: string;
}


const WithLabelComponent = ({ className, squareClass, wordClass, word }:Props) => {

    return (
        <p className={className}>
            <span className={squareClass}></span>
            <span className={wordClass}>{word}</span>
        </p>
    );
};

export default WithLabelComponent;