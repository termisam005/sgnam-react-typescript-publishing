import { useNavigate } from 'react-router';
import { useState } from 'react';
import Header from '../../components/header/Header';
import HeaderLeft from '../../components/header/HeaderLeft';
import SelectBoxComponent from '../../components/select/SelectBoxComponent';
import HeaderRight from '../../components/header/HeaderRight';
import HdStatusComponent from '../../components/common/HdStatusComponent';
import ProfileComponent from '../../components/common/ProfileComponent';
import PopError from '../../components/popup/PopError';


const ExError = () => {

    const navigator = useNavigate();

    //Popup
    const [errorPop, setErrorPop] = useState(true);
    const closeError = () => {
      setErrorPop(false);
    }

    //SelectBox
    const [selbox, setSelbox] = useState(false);
    const handleFocus = () => {
        setSelbox(!selbox);
    }
    const closeBox = () => {
        setSelbox(false);
    }
    const [currentValue, setCurrentValue] = useState('');
    const onChangeSelectValue = (e:any) => {
        const {innerText} = e.target;
        setCurrentValue(innerText);
        setSelbox(false);
    }
    const onChangeValue = (e:any) =>{
        setCurrentValue(e.target.value);
    }

    return (
      <div className='back'>

        <div className='wrap_rel'>
          <Header>
              <HeaderLeft>
                <SelectBoxComponent selboxClass={selbox? "selectbox w160 fill h28 gap_8 on" : "selectbox w160 fill h28 gap_8"}
                  focus={handleFocus} open={selbox} close={closeBox} onChange={onChangeValue} placeholder={'교통운영 모니터링'} currentValue={currentValue}>
                    <li onClick={onChangeSelectValue} className="option">교통운영1</li>
                    <li onClick={onChangeSelectValue} className="option">교통운영2</li>
                    <li onClick={onChangeSelectValue} className="option">교통운영3</li>
                </SelectBoxComponent>
              </HeaderLeft>
              <HeaderRight>
                  <HdStatusComponent stausClass={'hd_status'} markClass={'weath_mark32 sun'} textClass={'hd_text'} temper={'23℃'} slash={'/'} air={'0mm'} />
                  <HdStatusComponent stausClass={'hd_status'} markClass={'weath_mark32 very_bad'} textClass={'hd_text'} temper={'매우나쁨'} slash={'/'} air={'71 ㎍/㎥'} />
                  <ProfileComponent />
              </HeaderRight>
          </Header>

          <div className='board error'>
            <div className='board_in'>
            </div>
          </div>
        </div>

        <PopError open={errorPop} close={closeError} golink={() => navigator(-1)} />
      </div>
    );
};

export default ExError;
