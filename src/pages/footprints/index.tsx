import { Building2 } from "lucide-react";
import { Section } from "@/widgets/Section/Section";
import { TimeLineContainer } from "@/widgets/TimeLine/TimeLineContainer";
import { TimeLineItem } from "@/widgets/TimeLine/TimeLineItem";

export default function FootPrintsPage() {
    return (
        <Section title="🦶 FootPrints">
            <TimeLineContainer year="2020" month="March">
                <TimeLineItem
                    title="경북대학교 컴퓨터학부 입학"
                    date="2020. 03 ~"
                    icon={<Building2 size={14} />}
                    content={`경북대학교 컴퓨터학부에 입학하였습니다.`}
                />
            </TimeLineContainer>

            <TimeLineContainer year={"2024"} month={"March"}>
                <TimeLineItem
                    title="경북대학교 멋쟁이사자처럼 11기 프론트엔드 멤버"
                    date="2023. 03 ~ 2023. 12"
                    icon={<Building2 size={14} />}
                    content={`경북대학교 멋쟁이사자처럼 11기 프론트엔드 멤버로 활동하였습니다. 웹 기초 HTML, CSS, JS 부터 React, Redux 등을 학습하고 프로젝트를 진행하였습니다.`}
                />

                <TimeLineItem
                    title="경북대학교 멋쟁이사자처럼 12기 대표"
                    date="2024. 01 ~ 2024. 12"
                    icon={<Building2 size={14} />}
                    content={`경북대학교 멋쟁이사자처럼 12기 대표를 맡았습니다.
                        React 컴포넌트 라이프사이클와 useEffect, JS의 비동기와 ContextAPI 등에 대한 교육세션을 진행하였습니다.
                        경북대학교 6개 연합 GLOW 해커톤을 주최 및 주관하였습니다`}
                />

                <TimeLineItem
                    title="GDG on Campus KNU 4기 Core Member"
                    date="2024. 06 ~ 2025. 06"
                    icon={<Building2 size={14} />}
                    content={`GDG on Campus KNU 4기 Core Member로 활동하였습니다.
                        NextJS 의 렌더링패턴 및 CoreWebVitals 관련 세션을 진행하였습니다.`}
                />
            </TimeLineContainer>
        </Section>
    );
}

{
    /* <TimeLineProjectItem
    title="Principes 창업동아리 GET-P"
    projectName="GET-P : Get your People, Get your Projects!"
    description="소프트웨어 인력난을 해결하기 위한 외주 매칭 플랫폼 GET-P 프로젝트에서 프론트엔드 리더 및 개발을 담당했습니다"
    githubLink="https://github.com/2024-ITEC0401"
    deploymentLink="https://www.look-4-me.com/"
/> */
}
