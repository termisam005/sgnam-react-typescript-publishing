import { useState } from 'react';
import ImgComponent from '../common/ImgComponent';
import InputComponent from '../input/InputComponent';


interface Props{
    IndClass?: string;
    IndTitle?: string;
}

const BitDetailIndicator = ({ IndClass, IndTitle }:Props) => {

    //토글 이벤트
    const [toggleInd, setToggleInd] = useState<boolean>(false);
    const clickInd = () => {
        setToggleInd(!toggleInd);
    }

    return (
        <article className={IndClass}>
            <div className="indi_top" onClick={clickInd}>
                <h1>{IndTitle}</h1>
                <p className={toggleInd? 'arr_up down':'arr_up'}>
                    <ImgComponent src={'arrow_up16.svg'} />
                </p>
            </div>
            <div className={toggleInd? 'indi_conts del':'indi_conts'}>
                <div className='bit_detail_form'>
                    <dl className="check_dl bit">
                        <dt>BIT ID</dt>
                        <dd>
                            <InputComponent type="text" className='wrput trans smline' value={'120850000'} />
                        </dd>
                    </dl>
                    <dl className="check_dl bit">
                        <dt>정류장명</dt>
                        <dd>
                            <InputComponent type="text" className='wrput trans smline' value={'주공2단지,창영초등학교'} />
                        </dd>
                    </dl>
                    <dl className="check_dl bit">
                        <dt>정류장ID</dt>
                        <dd>
                            <InputComponent type="text" className='wrput trans smline' value={'211000013'} />
                        </dd>
                    </dl>
                    <dl className="check_dl bit">
                        <dt>사업구분</dt>
                        <dd>
                            <InputComponent type="text" className='wrput trans smline' value={'부천시흥'} />
                        </dd>
                    </dl>
                    <dl className="check_dl bit">
                        <dt>BIT유형</dt>
                        <dd>
                            <InputComponent type="text" className='wrput trans smline' value={'LCD'} />
                        </dd>
                    </dl>
                    <dl className="check_dl bit">
                        <dt>IP주소</dt>
                        <dd>
                            <InputComponent type="text" className='wrput trans smline' value={'192.168.90.124'} />
                        </dd>
                    </dl>
                    <dl className="check_dl bit">
                        <dt>제조회사</dt>
                        <dd>
                            <InputComponent type="text" className='wrput trans smline' value={'지슨'} />
                        </dd>
                    </dl>
                    <dl className="check_dl bit">
                        <dt>설치일자</dt>
                        <dd>
                            <InputComponent type="text" className='wrput trans smline' value={'2015.01.05'} />
                        </dd>
                    </dl>
                    <dl className="check_dl bit">
                        <dt>통신유형</dt>
                        <dd>
                            <InputComponent type="text" className='wrput trans smline' value={'UDP'} />
                        </dd>
                    </dl>
                </div>
            </div>
        </article>
    );
};

export default BitDetailIndicator;