# 고양시 장애인 복지관 조회 현황 사이트



## 프로젝트 소개
사회복무요원으로 복무 중, 사회복지사인 한 직원께서 네이버의 학습용 코딩 플랫폼 '엔트리'를 활용해 방문자 수를 측정하는 페이지를 개발하셨습니다. 그러나 해당 페이지는 새로고침 시 방문자 수가 초기화되며, 데이터를 매번 엑셀로 수동 전송해야 하는 불편함이 있었습니다.

이 문제를 해결하기 위해,  페이지를 개선하는 프로젝트를 진행했습니다. 본 프로젝트의 목표는 방문자 수 데이터를 새로고침 후에도 유지하고, 이를 서버에 저장하여 추후 분석이 가능하도록 하는 것이었습니다. 이를 통해 해당 직원이 보다 효율적으로 업무를 수행할 수 있도록 지원하고자 했습니다.

## 프로젝트 목표
- **데이터 지속성 확보:** 새로고침을 해도 방문자 수 데이터가 초기화되지 않도록 구현.
- **데이터 저장 및 분석:** 데이터를 서버에 안전하게 저장하고, 추후 분석이 가능하도록 함.
- **데이터 시각화:** 방문자 수 데이터를 시각화하여 이해하기 쉽게 표현.
- **서버리스 아키텍처 활용:** AWS Lambda와 API Gateway를 활용해 효율적이고 확장 가능한 서버리스 백엔드를 구현.




## 개발 환경
- FrontEnd
    - React
        - react-chartjs-2
        - Framer-Motion
- Backend
    - AWS Lambda
    - API Gateway
- Database
    - DynamoDB
- CI/CD
    - Github Pages

## 채택 이유
- **React:**
    - 컴포넌트 기반 아키텍처를 통해 유지보수성과 재사용성을 극대화하여 효율적인 UI 개발 가능.
- **react-chartjs-2:**
    - 통계 데이터를 시각화하는 차트 라이브러리로, 사용자에게 데이터를 직관적으로 이해할 수 있도록 도움을 제공.
- **Framer Motion:**
    - UI 애니메이션을 구현하기 위한 모션 라이브러리로, 부드럽고 생동감 있는 사용자 경험을 제공하여 UX를 향상.
- **AWS Lambda, API Gateway, DynamoDB:**
    - 서버리스 환경에 적합한 서비스로, 확장성과 비용 효율성을 극대화하며, 무중단 운영을 지원.
- **GitHub pages**
    - 코드 변경 시 정적 웹사이트 자동 배포 지원.

## 후기
- **저비용 서버리스 환경 구축 경험:** AWS 프리 티어를 활용해 무중단 서버리스 환경을 저비용으로 구축하는 경험을 쌓았습니다.
- **지속성 및 유연성 확보:** 로컬 스토리지를 활용하여 데이터의 지속성과 유연성을 높였습니다.
- **보안 처리 개선 필요:** 단순화된 프로세스와 제한된 사용자층으로 인해 보안이 미흡하게 설계되었습니다. 향후, 서버사이드 값 검증 후 API Key를 발급하여 데이터 수정이 가능하도록 보안 강화를 고려할 필요가 있습니다.
