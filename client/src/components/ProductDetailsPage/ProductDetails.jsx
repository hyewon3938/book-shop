import React from "react";
import styled from "styled-components";

// Style
import { device } from "@/components/style/responsiveBreakPoints";

const ProductDetails = () => {
  const descriptionValue = `주기율표 속 원소의 이름과 어원 속에 숨은 신비로운 이야기를 찾아서 \n\n 금속의 늑대 안티모니, 도깨비의 어원에서 온 코발트, 꼬리에 꼬리를 무는 원소 이야기 \n\n 신화, 종교, 기호학, 역사, 고대의 천문학과 광물학까지 아우르는, \n\n 다양한 지식이 화학 반응을 일으키는 놀라운 책 \n\n 아름답고 우아한 형태로 일곱 줄의 가로줄을 완전히 채운 주기율표 속 원소들. 주기율표 속 118개 원소의 이름들은 어떻게 만들어졌을까? 주기율표는 2016년 11월 현재의 모습으로 ‘완성’되었지만, 원소 하나하나가 발견되고, 지금의 이름으로 불리게 된 사연은 그 수만큼이나 다채롭다. 원소 이름의 시작은 그리스 신화에서, 성경의 한 구절에서, 17세기 문학 속에서, 연금술 책 속에서 발견된다. 케임브리지 대학교에서 화학을 가르치는 저자 피터 워더스는, 화학자를 ‘현대의 연금술사’라 칭한다. 그만큼 화학은 과학의 어떤 분야보다 오래되었을 뿐 아니라, 미신과 과학의 경계에 있었던 학문이다. 『원소의 이름』에서는 금속에 관한 고대, 중세의 기록들을 파헤쳐나가며 집요하게 원소 이름의 기원을 찾아낸다. \n\n 늑대처럼 다른 금속을 빨아들인다고 해서 ‘금속의 늑대’라고 불렸던 안티모니, 17세기 광부들에게 도깨비처럼 공포의 존재였기에 독일어 ‘도깨비’의 어원을 지닌 코발트, 찰스 디킨스가 “좋은 집안 아이들은 알루미늄 수저를 물고 태어날 것이다”라며 극찬한 금속 알루미늄, 산소의 화학적 성질이 전부 다 밝혀지지 않아, 과학적인 오류에서 명명된 산소까지. 과학적이지 않은 시대부터 시작된 금속과 원소의 이름들은 라부아지에의 프랑스 화학 명명법 개혁을 시작으로 그 신비로움에서 벗어나 비로소 근대적인 과학의 이름을 얻게 된다. \n\n 원소명의 어원을 캐는 일, 그리하여 그 원소가 발견된 시대로 되짚어가는 일은, 당시 사람들이 금속의 어떤 특성에 주목했으며, 어떤 일을 하던 사람들이 그 금속과 연관되었는지, 금속이 어떻게 사용되었는지를 찾아나가는 ‘시간 여행’과도 같다. 겉으로는 화학의 역사를 다루는 과학서이지만, 속을 들여다보면 신화, 종교, 기호학, 역사, 고대의 천문학과 광물학까지 아우르는 다양한 지식이 화학 반응을 일으키는 인문 교양서이기도 하다. 공학박사이자 작가인 곽재식은 ‘원소 이름들은 신화와 전설의 세계와 현실의 과학 세상을 이어주는 징검다리와 같다’며 추천의 글을 썼다.`;
  const contentValue =
    "- 1부 신이여, 안녕히 \n\n1. 너무나 많은 신\n2. 그런데 그것이 사실일까?\n3. 신화와 그 기원\n4. 선한 책?\n5. 선해지기 위해 신이 필요할까?\n6. 우리는 무엇이 선인지 어떻게 판단할까?\n\n- 2부 진화, 그리고 그것을 넘어서\n\n7. 분명 설계자가 있을 거야\n8. 있을 법하지 않은 것들로 가는 단계\n\n역자 후기\n사진 출처\n찾아보기";

  return (
    <Wrap>
      <ContentWrap>
        <ContentTitle>책정보</ContentTitle>
        <Content>
          <span>568쪽</span>
          <span>169g</span>
          <span>300mmX700mm</span>
        </Content>
      </ContentWrap>
      <ContentWrap>
        <ContentTitle>책소개</ContentTitle>
        <Content>
          {descriptionValue.split("\n").map((line) => {
            return (
              <span>
                {line}
                <br />
              </span>
            );
          })}
        </Content>
      </ContentWrap>
      <ContentWrap>
        <ContentTitle>목차</ContentTitle>
        <Content>
          {contentValue.split("\n").map((line) => {
            return (
              <span>
                {line}
                <br />
              </span>
            );
          })}
        </Content>
      </ContentWrap>
      <ContentWrap>
        <ContentTitle>소개 이미지</ContentTitle>
        <Content>
          <img
            src="http://image.yes24.com/momo/TopCate3461/MidCate005/346047824.jpg"
            alt={"책이름" + "소개이미지"}
          />
        </Content>
      </ContentWrap>
    </Wrap>
  );
};

export default ProductDetails;

const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 100px 0 0 0;
  border-top: solid 1px grey;
  @media (max-width: ${device.extraLarge}) {
    margin: 50px 0 0 0;
  }
  @media (max-width: ${device.large}) {
    margin: 15px 0 0 0;
    padding: 20px 0 0 0;
  }
  @media (max-width: ${device.medium}) {
  }
  @media (max-width: ${device.small}) {
  }
  @media (max-width: ${device.extraSmall}) {
  }
`;

const ContentWrap = styled.div`
  display: flex;
  width: 100%;
  padding: 30px 20px;
  @media (max-width: ${device.large}) {
    flex-direction: column;
    padding: 0 20px 30px 20px;
  }
  @media (max-width: ${device.small}) {
    padding: 20px 10px;
  }
`;

const ContentTitle = styled.h1`
  font-family: "NotoSerifKR";
  font-size: 20px;
  display: flex;
  justify-content: center;
  flex: 0.3;
  margin: 20px;
  @media (max-width: ${device.large}) {
    justify-content: flex-start;
    font-size: 18px;
  }
  @media (max-width: ${device.small}) {
    font-size: 15px;
    margin: 0;
  }
`;

const Content = styled.div`
  flex: 0.7;
  border-left: solid 1px grey;
  padding: 30px;
  line-height: 24px;
  img {
    width: 100%;
  }
  span {
    margin: 0 10px 0 0;
  }
  @media (max-width: ${device.large}) {
    border-left: none;
    border-bottom: solid 1px #cecece;
    padding: 30px 20px;
  }
  @media (max-width: ${device.small}) {
    padding: 30px 0;
  }
`;
