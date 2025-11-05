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
          title="데이터 품질관리 전체 구조화 관점"
          summary="공공 데이터 품질관리 체계를 전체적인 관점에서 구조화하고, 각 단계별 품질관리 활동 및 주요 점검 포인트를 연결하여 상세하게 구성합니다."
        >
          <div className="text-gray-700 space-y-4">
            <p>제공해주신 자료(공공데이터 품질관리 매뉴얼)를 바탕으로, 공공 데이터 품질관리 체계(전략적 구성 요소)를 전체적인 관점에서 구조화하고, 각 단계별 품질관리 활동(정보 생명주기) 및 주요 점검 포인트(산출물 및 활동)를 연결하여 상세하게 구성했습니다.</p>
            <p>공공 데이터 품질관리(DQM)는 기관의 비전과 목표 달성을 위한 전략적 수단으로 인식되며, 정책, 조직, 인프라라는 기반 요소와 계획, 구축, 운영, 활용이라는 생애주기별 단계적 활동으로 구성됩니다.</p>

            <h4 className="text-lg font-semibold mt-6 mb-2">공공 데이터 품질관리 체계 구조 및 점검 포인트</h4>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">구분</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">구성 요소/단계 (Phase)</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">목표 및 주요 활동 (Key Activity)</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">핵심 점검 항목 (Checkpoints/Outputs)</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">근거</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900" rowSpan={3}>I. 품질관리 기반 (Foundation)</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">정책 (Policy)</td>
                    <td className="px-6 py-4 text-sm text-gray-500">품질관리 활동을 위한 기관 차원의 원칙, 목적, 목표, 전략 등을 규정한 문서 수립 및 관리. 국가 정책과의 일관성 확보.</td>
                    <td className="px-6 py-4 text-sm text-gray-500">품질관리 규정(지침), 품질관리 목적/목표/기준/절차 등 정의된 문서.</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"></td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">조직 (Organization)</td>
                    <td className="px-6 py-4 text-sm text-gray-500">품질관리 활동을 수행할 주체(Who), 역할 및 책임을 정의. 최고 경영층의 관심과 공감대 형성 중요.</td>
                    <td className="px-6 py-4 text-sm text-gray-500">공공데이터제공책임관 및 실무담당자 임명. 품질관리 담당자, 오류신고 담당자 지정. 품질관리 협의회 구성 및 운영 (필요 시). 데이터 오너십 및 스튜어드십 정의.</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"></td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">인프라 (Infrastructure)</td>
                    <td className="px-6 py-4 text-sm text-gray-500">품질관리 활동의 효율적인 지원을 위한 도구 및 시스템 확보. (단계적 도입 권고).</td>
                    <td className="px-6 py-4 text-sm text-gray-500">프로파일링 기능, 품질 데이터 관리 기능. 품질 진단/분석 기능. 메타데이터 관리 기능 (데이터 표준, 모델, DB 정의 내역 등).</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"></td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900" rowSpan={4}>II. 생애주기별 활동 (Life Cycle)</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1. 계획단계 (Planning)</td>
                    <td className="px-6 py-4 text-sm text-gray-500">기관의 중장기 로드맵에 따른 연간 품질관리 계획 수립. 중점 관리 대상 선정 및 품질 목표 정의.</td>
                    <td className="px-6 py-4 text-sm text-gray-500">데이터 품질관리 계획서. 품질 목표 및 로드맵. 중점 품질관리 대상 DB 선정 결과. 품질 진단 및 개선 계획 (진단/개선 분리 수립 권고). 표준화 적용 및 연계 데이터 품질 확보 계획.</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"></td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2. 구축단계 (Building)</td>
                    <td className="px-6 py-4 text-sm text-gray-500">데이터베이스 신규 도입/고도화 시 사전 예방적 품질관리 수행. 데이터 표준 준수 및 산출물 체계적 관리.</td>
                    <td className="px-6 py-4 text-sm text-gray-500">데이터 표준 준수: 용어 정의서, 단어 정의서, 코드 정의서, 도메인 정의서. 데이터 구조: 논리/물리 데이터모델 다이어그램 (ERD). 시스템 구현: 테이블 정의서, 컬럼 정의서, 데이터베이스(DB) 정의서. 오류 데이터 입력 방지 로직 적용 여부. 연계 데이터 목록 및 정합성 관리 현황.</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"></td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">3. 운영단계 (Operation)</td>
                    <td className="px-6 py-4 text-sm text-gray-500">데이터의 품질 수준 향상 및 품질 이슈 해결을 위한 선택/집중형 활동 수행. (주요 활동: 품질 진단 및 개선 6단계).</td>
                    <td className="px-6 py-4 text-sm text-gray-500">진단 및 분석 결과: 품질 이슈 목록. 값/구조/표준화 진단 결과서. 업무규칙 진단 보고서. 오류 유형 및 원인 분석 결과서. 개선 활동 결과: 품질 개선 계획서. 품질 개선 결과보고서. 데이터 산출물의 정기적 점검 및 최신성 확보 여부.</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"></td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">4. 활용단계 (Utilization)</td>
                    <td className="px-6 py-4 text-sm text-gray-500">데이터 활용 과정에서 발생하는 품질 이슈를 인지하고, 이를 개선 활동에 반영하는 선순환 체계 완성. 품질 오류 신고 관리 체계 구축.</td>
                    <td className="px-6 py-4 text-sm text-gray-500">품질 오류 신고: 데이터 품질 오류 신고서. 데이터 오류 신고 및 처리 대장 (접수/처리 결과 기록). 품질 진단 및 평가 결과에 따른 시정 조치 계획 및 이행 실적.</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h4 className="text-lg font-semibold mt-6 mb-2">품질 진단 및 개선 활동의 6단계 상세 점검 활동</h4>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">단계 (Phase)</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">활동 목표 (Goal)</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">주요 점검 활동 및 기준</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1. 진단 대상 정의 (Define)</td>
                    <td className="px-6 py-4 text-sm text-gray-500">품질 진단 대상 데이터베이스를 선정하고, 진단 계획을 공식화.</td>
                    <td className="px-6 py-4 text-sm text-gray-500">품질관리 계획 검토. 진단 수요 분석 (오류 신고, 개선 수요). 중요성 및 시급성 측면에서 진단 대상 DB 최종 선정. 진단 방향 설정 (Inside-Out 또는 Outside-In).</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">2. 품질 진단 실시 (Measure)</td>
                    <td className="px-6 py-4 text-sm text-gray-500">정의된 진단 기법(프로파일링, 업무규칙 진단 등)을 적용하여 데이터 품질을 측정.</td>
                    <td className="px-6 py-4 text-sm text-gray-500">진단 환경 준비 (인력, 권한, 산출물). 값, 구조 진단 (프로파일링) 실시 (컬럼 분석, 패턴 분석 등). 업무규칙 진단 실시 (법, 규정 등 근거 규정 기반 스크립트 작성 및 측정). 품질관리 수준 진단 실시 (체크리스트 기반 관리 체계 점검).</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">3. 진단 결과 분석 (Analyze)</td>
                    <td className="px-6 py-4 text-sm text-gray-500">측정된 오류의 <strong>근본 원인(Root Cause)</strong>을 파악하고, 업무에 미치는 영향을 분석하여 개선 기회 도출.</td>
                    <td className="px-6 py-4 text-sm text-gray-500">오류 원인 분석 (관리체계, 표준, 구조, 응용프로그램 관점 추적). 업무 영향 분석 (정성적/정량적 파급 효과 추정). 오류를 제거하기 위한 개선 기회 도출 (관리체계, 표준, 업무, 값 관점).</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">4. 개선 계획 수립 (Improvement Plan)</td>
                    <td className="px-6 py-4 text-sm text-gray-500">개선 과제를 구체화하고, 시급성 및 중요도에 따른 우선순위를 설정하여 사업 추진 계획을 수립.</td>
                    <td className="px-6 py-4 text-sm text-gray-500">개선 과제 정의 및 우선순위 선정 (시급성 및 중요도 고려). 개선 목표 및 성과평가지표(KPI) 설정. 개선 전략 수립 (데이터 중심/프로세스 중심). 품질개선 추진계획서 작성 (범위, 일정, 예산, 기대 효과 포함).</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">5. 개선 수행 (Implement)</td>
                    <td className="px-6 py-4 text-sm text-gray-500">수립된 계획에 따라 품질 관리체계 수립, 표준화 수립, 데이터 보정 등 실제 개선 활동 수행.</td>
                    <td className="px-6 py-4 text-sm text-gray-500">개선 환경 준비 및 협조 체계 구성 (특히 외부 기관 연계 시). 품질개선 수행 (데이터 보정, 데이터베이스 구조 보정, 응용 프로그램 수정). 보정 작업 시 롤백/리스토어를 위한 백업 및 이력 관리.</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">6. 품질 통제 (Control)</td>
                    <td className="px-6 py-4 text-sm text-gray-500">개선 사업의 효과를 평가하고, 개선된 품질 수준을 유지 및 재발 방지를 위한 통제 활동 수행.</td>
                    <td className="px-6 py-4 text-sm text-gray-500">결과 평가 (개선 전/후 비교 및 비용 편익 분석을 통한 효과 정량적 평가). 품질 목표 관리 (품질 관리체계, 표준화, 데이터 보정 영역별 목표 설정 및 주기적 확인). 품질 통제 실시 (상시 모니터링, 오류 신고 접수/처리, 교육 및 변화관리 활동).</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-4">이러한 구조는 공공기관이 데이터 품질 문제를 단순히 오류 수정으로 끝내는 것이 아니라, 전략적 기반 위에서 생애주기 전반에 걸쳐 문제를 사전 예방하고, 발생 시 체계적으로 진단 및 개선하며, 최종적으로 고품질 상태를 유지하는 선순환 구조를 확립하도록 안내합니다.</p>
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
          title="각 단계별 품질관리 점검항목"
          summary="공공 데이터 품질관리의 각 단계에서 수행해야 할 주요 활동 및 결과물(산출물) 목록을 알아봅니다."
        >
          <div className="text-gray-700 space-y-4">
            <p>문의하신 공공 데이터 품질관리의 단계별 점검항목은 기관의 <strong>정보 생명주기(Life Cycle)</strong>에 따른 계획, 구축, 운영, 활용의 4단계에서 수행해야 할 주요 활동 및 결과물(산출물) 목록을 중심으로 정의될 수 있습니다.</p>
            <p>제공해주신 자료에서는 각 단계별 "산출물 점검 및 최신성 확보 대상" 목록을 명시하고 있으며, 이 산출물들은 해당 단계에서 품질 관리가 제대로 이루어졌는지 확인하는 핵심적인 점검 항목이 됩니다.</p>
            <p>다음은 각 단계별 주요 품질관리 활동과 핵심 점검 항목(산출물)입니다.</p>

            <div>
              <h4 className="text-lg font-semibold">1. 계획단계 품질관리</h4>
              <ul className="list-disc list-inside">
                <li>데이터 품질관리 계획서</li>
                <li>품질관리 인프라 구축·운영 계획 (선택적)</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold">2. 구축단계 품질관리</h4>
              <ul className="list-disc list-inside">
                <li>용어 정의서, 단어 정의서</li>
                <li>코드 정의서, 도메인 정의서</li>
                <li>엔터티 정의서, 속성 정의서</li>
                <li>논리 데이터모델 다이어그램 (논리ERD)</li>
                <li>테이블 정의서, 컬럼 정의서</li>
                <li>물리 데이터모델 다이어그램 (물리ERD)</li>
                <li>데이터베이스(DB) 정의서</li>
                <li>연계 데이터 목록, 오너십 정의서</li>
                <li>업무규칙 정의서, 테이블 대 응용 프로그램 상관도</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold">3. 운영단계 품질관리</h4>
              <ul className="list-disc list-inside">
                <li>품질 이슈 목록, 요구사항 목록</li>
                <li>품질 현황 분석서, 품질 진단 계획서</li>
                <li>업무규칙 진단 보고서</li>
                <li>값·구조·표준화 진단 결과서</li>
                <li>오류 유형 및 원인 분석 결과서</li>
                <li>품질 개선 계획서</li>
                <li>품질 개선 결과보고서</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold">4. 활용단계 품질관리</h4>
              <ul className="list-disc list-inside">
                <li>데이터 품질 오류 신고서</li>
                <li>데이터 오류 신고 및 처리 대장</li>
              </ul>
            </div>
            <p className="mt-4">이러한 단계별 점검항목(산출물)을 통해 공공기관은 데이터의 기획 단계부터 최종 사용자에게 제공되고 피드백을 받는 전 과정에 걸쳐 데이터 품질의 일관성과 신뢰성을 유지하고 개선할 수 있습니다. 각 단계별 산출물은 다음 단계의 활동을 위한 입력 자료로 활용되므로, 산출물의 적시성과 정확성 자체가 중요한 점검 대상이 됩니다.</p>
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
      </div>
    </div>
  );
}