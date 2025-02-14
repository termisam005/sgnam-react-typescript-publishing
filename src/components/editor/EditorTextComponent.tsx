import React from 'react';


const EditorTextComponent = () => {

    return (
        <article className="dashed_box p-20">

            <div className="dflx_ac gap_colm8 m-b-12">
                <div className="edit_btline">
                    <button type="button" className="btn_primary editor btn_ms selected">320 X 64</button>
                    <button type="button" className="btn_secondary editor btn_ms">320 X 64</button>
                    <button type="button" className="btn_secondary editor btn_ms disabled">480 X 96</button>
                </div>
                <span className="pipe28"></span>
                <div className="edit_btline">
                    <button type="button" className="btn_primary editor btn_ms selected">굵게</button>
                    <button type="button" className="btn_secondary editor btn_ms">가늘게</button>
                </div>
                <span className="pipe28"></span>
                <div className="edit_btline">
                    <button type="button" className="btn_secondary editor btn_ms">굴림</button>
                    <button type="button" className="btn_secondary editor btn_ms">궁서</button>
                    <button type="button" className="btn_secondary editor btn_ms">바탕</button>
                    <button type="button" className="btn_primary editor btn_ms selected">돋움</button>
                    <button type="button" className="btn_secondary editor btn_ms disabled">HY견고딕</button>
                    <button type="button" className="btn_secondary editor btn_ms">HY헤드라인</button>
                    <button type="button" className="btn_secondary editor btn_ms disabled">휴먼모음T</button>
                </div>
            </div>
            <div className="dflx_ac gap_colm8 m-b-12">
                <div className="edit_btline">
                    <button type="button" className="btn_secondary editor btn_s_w28h28 edit_red">가</button>
                    <button type="button" className="btn_secondary editor btn_s_w28h28 edit_orange">가</button>
                    <button type="button" className="btn_secondary editor btn_s_w28h28 edit_yellow">가</button>
                    <button type="button" className="btn_secondary editor btn_s_w28h28 edit_green">가</button>
                    <button type="button" className="btn_secondary editor btn_s_w28h28 edit_blue">가</button>
                    <button type="button" className="btn_secondary editor btn_s_w28h28 edit_white">가</button>
                    <select className="selector sm color">
                        <option value="">다른색</option>
                        <option value="">다른색</option>
                        <option value="">다른색</option>
                    </select>
                </div>
            </div>
            <div className="temrs_text_wrap">
                <textarea className="terms_area edit scroll" placeholder="텍스트를 입력하세요."></textarea>
            </div>

        </article>
    );
};

export default EditorTextComponent;