import { Building2 } from "lucide-react";
import { Section } from "@/entities/section/ui/Section";
import { TimeLineContainer } from "@/features/footprints/ui/TimeLineContainer";
import { TimeLineItem } from "@/features/footprints/ui/TimeLineItem";
import { TimeLineProjectItem } from "@/features/footprints/ui/TimeLineProjectItem";

export default function FootPrintsPage() {
    return (
        <Section title="🦶 FootPrints">
            <TimeLineContainer year={"2024"} month={"March"}>
                <TimeLineItem
                    title="경북대학교 멋쟁이사자처럼 11기 프론트엔드 멤버"
                    date="2023. 03 ~ 2024. 12"
                    icon={<Building2 size={14} />}
                    content={`경북대학교 멋쟁이사자처럼 대표를 맡았습니다. 경북대학교 멋쟁이사자처럼
                        대표를 맡았습니다. 경북대학교 멋쟁이사자처럼 대표를 맡았습니다. 경북대학교
                        멋쟁이사자처럼 대표를 맡았습니다. 경북대학교 멋쟁이사자처럼 대표를
                        맡았습니다. 경북대학교 멋쟁이사자처럼 대표를 맡았습니다. 경북대학교
                        멋쟁이사자처럼 대표를 맡았습니다. 경북대학교 멋쟁이사자처럼 대표를
                        맡았습니다.`}
                />

                <TimeLineProjectItem
                    title="Principes 창업동아리 GET-P"
                    projectName="GET-P : Get your People, Get your Projects!"
                    description="소프트웨어 인력난을 해결하기 위한 외주 매칭 플랫폼 GET-P 프로젝트에서 프론트엔드 리더 및 개발을 담당했습니다"
                    githubLink="https://github.com/2024-ITEC0401"
                    deploymentLink="https://www.look-4-me.com/"
                />
            </TimeLineContainer>
        </Section>
    );
}
