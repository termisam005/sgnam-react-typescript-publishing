import { useState } from 'react';
import ImgComponent from '../common/ImgComponent';
import RoadMark from '../common/RoadMark';


interface Props{
    IndClass?: string;
    IndTitle?: string;
    empty?: boolean;
}

const RoadtIndicator = ({ IndClass, IndTitle, empty }:Props) => {

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

                <div className="traff_scroll">
                    {
                        empty === true? 
                        <article className="bg_traffic">
                            <div className="road_traffic">
                                <section className="line_bus dflx_ac_jcent p-0">
                                    <p className='fs_12 op06'>
                                        버스 정보가 없습니다.
                                    </p>
                                </section>
                            </div>
                        </article> :

                        <article className="bg_traffic">

                            {/* 맨 위에 있을때 top:0 */}
                            <RoadMark markClass={'road_mark'} style={{top:'0'}} busClass={'road_bus straight'} busWord={'직행'} 
                            busNumber={'경기71 아 3720'} statusClass={'status safe'} statusWord={'여유'} />

                            {/* 버스정류장 한칸 도착했을때 top:3.25rem */}
                            <RoadMark markClass={'road_mark'} style={{top:'3.25rem'}} busClass={'road_bus seat'} busWord={'좌석'} 
                            busNumber={'경기71 아 3720'} statusClass={'status danger'} statusWord={'혼잡'} />

                            {/* 버스정류장 두칸 도착했을때 3.25rem * 2 = 6.5rem */}
                            <RoadMark markClass={'road_mark'} style={{top:'6.5rem'}} busClass={'road_bus seat'} busWord={'좌석'} 
                            busNumber={'경기71 아 3720'} statusClass={'status danger'} statusWord={'혼잡'} />

                            {/* 버스정류장 두칸이후 중간 지점일때 6.5rem + 1.625rem = 8.125rem */}
                            <RoadMark markClass={'road_mark'} style={{top:'8.125rem'}} busClass={'road_bus normal'} busWord={'일반'} 
                            busNumber={'경기71 아 3720'} statusClass={'status safe'} statusWord={'여유'} />

                            {/* 버스정류장 6칸 도착했을때 3.25rem * 6 = 19.5rem */}
                            <RoadMark markClass={'road_mark'} style={{top:'19.5rem'}} busClass={'road_bus lowseat'} busWord={'저상'} 
                            busNumber={'경기71 아 3720'} statusClass={'status safe'} statusWord={'여유'} />

                            {/* 버스정류장 6칸 도착이후 중간지점 일때 3.25rem * 6 + 1.625rem = 21.125rem */}
                            <RoadMark markClass={'road_mark'} style={{top:'21.125rem'}} busClass={'road_bus lowseat'} busWord={'저상'} 
                            busNumber={'경기71 아 3720'} statusClass={'status safe'} statusWord={'여유'} />

                            <RoadMark markClass={'road_mark'} style={{top:'32.5rem'}} busClass={'road_bus village'} busWord={'마을'} 
                            busNumber={'경기71 아 3720'} statusClass={'status safe'} statusWord={'여유'} />
                        
                            <div className="road_traffic">
                                <section className="line_bus">
                                    <p className="ic_artff"></p>
                                    <div className="bb_line"></div>
                                    <div className="list_bus">
                                        <dl className="box_dl bus_dl">
                                            <dd>
                                                <p className="tff_text">
                                                    용문내공원
                                                </p>
                                                <p className="hints">
                                                    12514
                                                </p>
                                            </dd>
                                        </dl>
                                    </div>
                                </section>
                                <section className="line_bus">
                                    <p className="ic_artff"></p>
                                    <div className="bb_line"></div>
                                    <div className="list_bus">
                                        <dl className="box_dl bus_dl">
                                            <dd>
                                                <p className="tff_text">
                                                    용문내공원
                                                </p>
                                                <p className="hints">
                                                    12514
                                                </p>
                                            </dd>
                                        </dl>
                                    </div>
                                </section>
                                <section className="line_bus">
                                    <p className="ic_artff"></p>
                                    <div className="bb_line"></div>
                                    <div className="list_bus">
                                        <dl className="box_dl bus_dl">
                                            <dd>
                                                <p className="tff_text">
                                                    용문내공원
                                                </p>
                                                <p className="hints">
                                                    12514
                                                </p>
                                            </dd>
                                        </dl>
                                    </div>
                                </section>
                                <section className="line_bus">
                                    <p className="ic_artff"></p>
                                    <div className="bb_line"></div>
                                    <div className="list_bus">
                                        <dl className="box_dl bus_dl">
                                            <dd>
                                                <p className="tff_text">
                                                    용문내공원
                                                </p>
                                                <p className="hints">
                                                    12514
                                                </p>
                                            </dd>
                                        </dl>
                                    </div>
                                </section>
                                <section className="line_bus">
                                    <p className="ic_artff"></p>
                                    <div className="bb_line org"></div>
                                    <div className="list_bus">
                                        <dl className="box_dl bus_dl">
                                            <dd>
                                                <p className="tff_text">
                                                    용문내공원
                                                </p>
                                                <p className="hints">
                                                    12514
                                                </p>
                                            </dd>
                                        </dl>
                                    </div>
                                </section>
                                <section className="line_bus">
                                    <p className="ic_artff"></p>
                                    <div className="bb_line org"></div>
                                    <div className="list_bus">
                                        <dl className="box_dl bus_dl">
                                            <dd>
                                                <p className="tff_text">
                                                    용문내공원
                                                </p>
                                                <p className="hints">
                                                    12514
                                                </p>
                                            </dd>
                                        </dl>
                                    </div>
                                </section>
                                <section className="line_bus">
                                    <p className="ic_artff"></p>
                                    <div className="bb_line"></div>
                                    <div className="list_bus">
                                        <dl className="box_dl bus_dl">
                                            <dd>
                                                <p className="tff_text">
                                                    용문내공원
                                                </p>
                                                <p className="hints">
                                                    12514
                                                </p>
                                            </dd>
                                        </dl>
                                    </div>
                                </section>
                                <section className="line_bus">
                                    <p className="ic_artff"></p>
                                    <div className="bb_line"></div>
                                    <div className="list_bus">
                                        <dl className="box_dl bus_dl">
                                            <dd>
                                                <p className="tff_text">
                                                    용문내공원
                                                </p>
                                                <p className="hints">
                                                    12514
                                                </p>
                                            </dd>
                                        </dl>
                                    </div>
                                </section>
                                <section className="line_bus">
                                    <p className="ic_artff"></p>
                                    <div className="bb_line"></div>
                                    <div className="list_bus">
                                        <dl className="box_dl bus_dl">
                                            <dd>
                                                <p className="tff_text">
                                                    용문내공원
                                                </p>
                                                <p className="hints">
                                                    12514
                                                </p>
                                            </dd>
                                        </dl>
                                    </div>
                                </section>
                                <section className="line_bus">
                                    <p className="ic_artff"></p>
                                    <div className="bb_line"></div>
                                    <div className="list_bus">
                                        <dl className="box_dl bus_dl">
                                            <dd>
                                                <p className="tff_text">
                                                    용문내공원
                                                </p>
                                                <p className="hints">
                                                    12514
                                                </p>
                                            </dd>
                                        </dl>
                                    </div>
                                </section>
                                <section className="line_bus">
                                    <p className="ic_artff"></p>
                                    <div className="bb_line"></div>
                                    <div className="list_bus">
                                        <dl className="box_dl bus_dl">
                                            <dd>
                                                <p className="tff_text">
                                                    용문내공원
                                                </p>
                                                <p className="hints">
                                                    12514
                                                </p>
                                            </dd>
                                        </dl>
                                    </div>
                                </section>
                                <section className="line_bus">
                                    <p className="ic_artff"></p>
                                    <div className="bb_line"></div>
                                    <div className="list_bus">
                                        <dl className="box_dl bus_dl">
                                            <dd>
                                                <p className="tff_text">
                                                    용문내공원
                                                </p>
                                                <p className="hints">
                                                    12514
                                                </p>
                                            </dd>
                                        </dl>
                                    </div>
                                </section>
                                <section className="line_bus">
                                    <p className="ic_artff"></p>
                                    <div className="bb_line"></div>
                                    <div className="list_bus">
                                        <dl className="box_dl bus_dl">
                                            <dd>
                                                <p className="tff_text">
                                                    용문내공원
                                                </p>
                                                <p className="hints">
                                                    12514
                                                </p>
                                            </dd>
                                        </dl>
                                    </div>
                                </section>
                                <section className="line_bus">
                                    <p className="ic_artff"></p>
                                    <div className="bb_line red"></div>
                                    <div className="list_bus">
                                        <dl className="box_dl bus_dl">
                                            <dd>
                                                <p className="tff_text">
                                                    용문내공원
                                                </p>
                                                <p className="hints">
                                                    12514
                                                </p>
                                            </dd>
                                        </dl>
                                    </div>
                                </section>
                                <section className="line_bus">
                                    <p className="ic_artff"></p>
                                    <div className="bb_line red"></div>
                                    <div className="list_bus">
                                        <dl className="box_dl bus_dl">
                                            <dd>
                                                <p className="tff_text">
                                                    용문내공원
                                                </p>
                                                <p className="hints">
                                                    12514
                                                </p>
                                            </dd>
                                        </dl>
                                    </div>
                                </section>
                                <section className="line_bus">
                                    <p className="ic_artff"></p>
                                    <div className="bb_line red"></div>
                                    <div className="list_bus">
                                        <dl className="box_dl bus_dl">
                                            <dd>
                                                <p className="tff_text">
                                                    용문내공원
                                                </p>
                                                <p className="hints">
                                                    12514
                                                </p>
                                            </dd>
                                        </dl>
                                    </div>
                                </section>
                                <section className="line_bus">
                                    <p className="ic_artff"></p>
                                    <div className="bb_line red"></div>
                                    <div className="list_bus">
                                        <dl className="box_dl bus_dl">
                                            <dd>
                                                <p className="tff_text">
                                                    용문내공원
                                                </p>
                                                <p className="hints">
                                                    12514
                                                </p>
                                            </dd>
                                        </dl>
                                    </div>
                                </section>
                                <section className="line_bus">
                                    <p className="ic_artff"></p>
                                    <div className="bb_line red"></div>
                                    <div className="list_bus">
                                        <dl className="box_dl bus_dl">
                                            <dd>
                                                <p className="tff_text">
                                                    용문내공원
                                                </p>
                                                <p className="hints">
                                                    12514
                                                </p>
                                            </dd>
                                        </dl>
                                    </div>
                                </section>
                                <section className="line_bus">
                                    <p className="ic_artff"></p>
                                    <div className="bb_line red"></div>
                                    <div className="list_bus">
                                        <dl className="box_dl bus_dl">
                                            <dd>
                                                <p className="tff_text">
                                                    용문내공원
                                                </p>
                                                <p className="hints">
                                                    12514
                                                </p>
                                            </dd>
                                        </dl>
                                    </div>
                                </section>
                            </div>

                        </article>
                    }
                </div>

            </div>
        </article>
    );
};

export default RoadtIndicator;