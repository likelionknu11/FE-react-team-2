import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import 'bootstrap/dist/css/bootstrap.min.css';

export const DPTab= () => {
  return (
    <div className='tab-page'>
      <Tabs
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="home" title="예약 안내">
          <h2>예약 및 체험안내</h2>
          <ul>
            <li>타인에게 관람권을 양도 또는 판매하는 행위는 금지하고 있으며, 예약자 본인이 아닌 경우 체험이 제한될 수 있습니다.</li>
            <li>최소인원이 채워지지 않을 시 취소될 수 있습니다.</li>
          </ul>
          <h2>예약 취소 안내</h2>
          <ul>
            <li>방문이 힘드신 경우 타인을 배려하기 위해 반드시 예약 취소 부탁드립니다.</li>
          </ul>
          <h2>환불정책</h2>
          <ul>
            <li>체험회차 12시간 전까지 취소 가능합니다.</li>
            <li>취소 가능 시간 종료 후 환불 불가</li>
          </ul>
          
      
        </Tab>
        <Tab eventKey="profile" title="후기">
          아직 후기가 없습니다.
        </Tab>
        <Tab eventKey="contact" title="문의">
          주소: 영천시 000로 00 <br/>
          전화: 00-000-000
        </Tab>
      </Tabs>
    </div>
  );
}
