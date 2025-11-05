import ExpandableCard from '../components/ExpandableCard';

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Welcome to 데이터 품질관리 가이드 포털
        </h1>
        <p className="text-xl text-gray-600">
          A guide to data quality management
        </p>
      </div>

      <div className="grid md:grid-cols-1 gap-8 mt-16">
        <ExpandableCard 
          title="데이터 품질관리 생명주기"
          summary="계획, 구축, 운영, 활용의 4단계로 구성된 데이터 품질관리 생명주기를 알아봅니다."
        >
          <div className="text-gray-700 space-y-4">
            <p>공공 데이터 품질관리는 기관의 정보 생명주기(Life Cycle)에 기반하여 계획, 구축, 운영, 활용의 4단계로 구분되어 추진됩니다. 이 단계별 활동은 기관의 비전과 목표 달성을 지원하기 위한 전략적 수단으로 인식되어야 하며, 국가 데이터 품질관리 정책과 일관성을 갖도록 추진되어야 합니다.</p>
            <div>
              <h4 className="text-lg font-semibold">1. 계획단계 품질관리</h4>
              <ul className="list-disc list-inside">
                <li>품질관리 조직 및 인력 구성</li>
                <li>품질 목표 정의</li>
                <li>중점 품질관리 대상 선정</li>
                <li>품질 진단 및 개선 계획 수립</li>
                <li>표준화 적용 계획 수립</li>
                <li>연계 데이터 품질 확보 계획</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold">2. 구축단계 품질관리</h4>
              <ul className="list-disc list-inside">
                <li>데이터 표준화</li>
                <li>데이터 구조의 일관성 확보 및 오류 데이터 입력 방지</li>
                <li>연계 데이터 정합성 관리</li>
                <li>데이터 산출물 관리</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold">3. 운영단계 품질관리</h4>
              <ul className="list-disc list-inside">
                <li>데이터 품질 진단 및 개선</li>
                <li>데이터 산출물 점검 및 최신성 확보</li>
                <li>데이터 오너십 및 스튜어드십 관리</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold">4. 활용단계 품질관리</h4>
              <ul className="list-disc list-inside">
                <li>품질 오류 신고 관리</li>
                <li>데이터 활용 성과 평가</li>
              </ul>
            </div>
          </div>
        </ExpandableCard>

        <ExpandableCard 
          title="품질 진단 및 개선 절차"
          summary="데이터 품질 문제를 해결하기 위한 6단계의 체계적인 진단 및 개선 절차를 알아봅니다."
        >
          <div className="text-gray-700 space-y-4">
            <p>데이터 품질 진단 및 개선 활동은 운영단계 품질관리의 핵심 요소이며, 총 6단계의 체계적인 절차로 구성되어 있습니다.</p>
            <div>
              <h4 className="text-lg font-semibold">I. 품질 진단 단계</h4>
              <ul className="list-disc list-inside">
                <li>1. 진단 대상 정의</li>
                <li>2. 품질 진단 실시</li>
                <li>3. 진단 결과 분석</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold">II. 품질 개선 단계</h4>
              <ul className="list-disc list-inside">
                <li>4. 개선 계획 수립</li>
                <li>5. 개선 수행</li>
                <li>6. 품질 통제</li>
              </ul>
            </div>
          </div>
        </ExpandableCard>

        <ExpandableCard 
          title="품질관리 체계 구성 요소"
          summary="데이터 품질관리를 위한 정책, 조직, 표준화, 인프라의 4가지 핵심 구성 요소를 알아봅니다."
        >
          <div className="text-gray-700 space-y-4">
            <p>데이터 품질관리를 위한 정책, 조직, 표준화, 인프라는 기관의 데이터 품질관리 체계를 구성하는 핵심 요소들입니다.</p>
            <ul className="list-disc list-inside">
              <li>품질관리 정책 (Policy)</li>
              <li>품질관리 조직 (Organization)</li>
              <li>데이터 표준화 (Standardization)</li>
              <li>품질관리 인프라 (Infrastructure)</li>
            </ul>
          </div>
        </ExpandableCard>
      </div>
    </div>
  );
}
