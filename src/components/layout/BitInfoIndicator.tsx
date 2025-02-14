import { useState } from 'react';
import ImgComponent from '../common/ImgComponent';
import InputComponent from '../input/InputComponent';


interface Props{
    IndClass?: string;
    IndTitle?: string;
}

const BitInfoIndicator = ({ IndClass, IndTitle }:Props) => {

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
                        <dt>메모리</dt>
                        <dd>
                            <InputComponent type="text" className='wrput trans smline' value={'2047'} />
                        </dd>
                    </dl>
                    <dl className="check_dl bit">
                        <dt>온도</dt>
                        <dd>
                            <InputComponent type="text" className='wrput trans smline' value={'18'} />
                        </dd>
                    </dl>
                    <dl className="check_dl bit">
                        <dt>습도</dt>
                        <dd>
                            <InputComponent type="text" className='wrput trans smline' value={'20%'} />
                        </dd>
                    </dl>
                    <dl className="check_dl bit">
                        <dt>제어보드</dt>
                        <dd>
                            <InputComponent type="text" className='wrput trans smline' value={'정상 또는 비정상'} />
                        </dd>
                    </dl>
                    <dl className="check_dl bit">
                        <dt>팬상태</dt>
                        <dd>
                            <InputComponent type="text" className='wrput trans smline' value={'ON 또는 OFF'} />
                        </dd>
                    </dl>
                    <dl className="check_dl bit">
                        <dt>히터상태</dt>
                        <dd>
                            <InputComponent type="text" className='wrput trans smline' value={'ON 또는 OFF'} />
                        </dd>
                    </dl>
                    <dl className="check_dl bit">
                        <dt>LCD 전원</dt>
                        <dd>
                            <InputComponent type="text" className='wrput trans smline' value={'ON 또는 OFF'} />
                        </dd>
                    </dl>
                    <dl className="check_dl bit">
                        <dt>LCD 밝기</dt>
                        <dd>
                            <InputComponent type="text" className='wrput trans smline' value={'보통'} />
                        </dd>
                    </dl>
                    <dl className="check_dl bit">
                        <dt>볼륨</dt>
                        <dd>
                            <InputComponent type="text" className='wrput trans smline' value={'5'} />
                        </dd>
                    </dl>
                    <dl className="check_dl bit">
                        <dt>도어 상태</dt>
                        <dd>
                            <InputComponent type="text" className='wrput trans smline' value={'열림 또는 닫힘'} />
                        </dd>
                    </dl>
                </div>
            </div>
        </article>
    );
};

export default BitInfoIndicator;