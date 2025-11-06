import TabNavigation, { TabItem } from '../components/TabNavigation';
import { Link } from 'react-router-dom';

export default function Home() {
  const tabs: TabItem[] = [
    {
      id: 'overview',
      label: '전체 구조화 관점',
      icon: '🏗️',
      accentColor: 'blue',
      content: (
        <div className="text-gray-700 dark:text-gray-300 space-y-4">
          <p>제공해주신 자료(공공데이터 품질관리 매뉴얼)를 바탕으로, 공공 데이터 품질관리 체계(전략적 구성 요소)를 전체적인 관점에서 구조화하고, 각 단계별 품질관리 활동(정보 생명주기) 및 주요 점검 포인트(산출물 및 활동)를 연결하여 상세하게 구성했습니다.</p>
          <p>공공 데이터 품질관리(DQM)는 기관의 비전과 목표 달성을 위한 전략적 수단으로 인식되며, 정책, 조직, 인프라라는 기반 요소와 계획, 구축, 운영, 활용이라는 생애주기별 단계적 활동으로 구성됩니다.</p>
        </div>
      ),
    },
    {
      id: 'components',
      label: '체계 구성 요소',
      icon: '⚙️',
      accentColor: 'purple',
      content: (
        <div className="text-gray-700 dark:text-gray-300 space-y-4">
          <p>데이터 품질관리를 위한 정책, 조직, 표준화, 인프라는 기관의 데이터 품질관리 체계를 구성하는 핵심 요소들입니다.</p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>품질관리 정책 (Policy)</strong> - 품질관리 활동을 위한 기관 차원의 원칙, 목적, 목표</li>
            <li><strong>품질관리 조직 (Organization)</strong> - 품질관리 활동을 수행할 주체, 역할 및 책임 정의</li>
            <li><strong>데이터 표준화 (Standardization)</strong> - 데이터 표준 및 명명 규칙 정의</li>
            <li><strong>품질관리 인프라 (Infrastructure)</strong> - 품질관리 활동 지원 도구 및 시스템</li>
          </ul>
        </div>
      ),
    },
    {
      id: 'lifecycle',
      label: '생명주기',
      icon: '🔄',
      accentColor: 'green',
      content: (
        <div className="text-gray-700 dark:text-gray-300 space-y-6">
          <p>공공 데이터 품질관리는 기관의 정보 생명주기(Life Cycle)에 기반하여 계획, 구축, 운영, 활용의 4단계로 구분되어 추진됩니다.</p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <span className="text-2xl">📝</span>
                1. 계획단계
              </h4>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>품질관리 조직 및 인력 구성</li>
                <li>품질 목표 정의</li>
                <li>중점 품질관리 대상 선정</li>
              </ul>
            </div>

            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
              <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <span className="text-2xl">🏗️</span>
                2. 구축단계
              </h4>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>데이터 표준화</li>
                <li>데이터 구조의 일관성 확보</li>
                <li>연계 데이터 정합성 관리</li>
              </ul>
            </div>

            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <span className="text-2xl">⚙️</span>
                3. 운영단계
              </h4>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>데이터 품질 진단 및 개선</li>
                <li>데이터 산출물 점검</li>
                <li>오너십 및 스튜어드십 관리</li>
              </ul>
            </div>

            <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
              <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <span className="text-2xl">📊</span>
                4. 활용단계
              </h4>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>품질 오류 신고 관리</li>
                <li>데이터 활용 성과 평가</li>
                <li>선순환 체계 구축</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'checkpoints',
      label: '점검항목',
      icon: '✅',
      accentColor: 'orange',
      content: (
        <div className="text-gray-700 dark:text-gray-300 space-y-4">
          <p>공공 데이터 품질관리의 단계별 점검항목은 기관의 정보 생명주기에 따른 계획, 구축, 운영, 활용의 4단계에서 수행해야 할 주요 활동 및 결과물 목록을 중심으로 정의됩니다.</p>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">계획단계 품질관리</h4>
            <ul className="list-disc list-inside text-sm">
              <li>데이터 품질관리 계획서</li>
              <li>품질관리 인프라 구축·운영 계획</li>
            </ul>

            <h4 className="text-lg font-semibold mt-4">구축단계 품질관리</h4>
            <ul className="list-disc list-inside text-sm">
              <li>용어 정의서, 단어 정의서, 코드 정의서</li>
              <li>논리/물리 데이터모델 다이어그램 (ERD)</li>
              <li>테이블 정의서, 컬럼 정의서</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: 'diagnosis',
      label: '진단 및 개선',
      icon: '🔧',
      accentColor: 'blue',
      content: (
        <div className="text-gray-700 space-y-4">
          <p>데이터 품질 진단 및 개선 활동은 운영단계 품질관리의 핵심 요소이며, 총 6단계의 체계적인 절차로 구성되어 있습니다. 또한, 공공기관 데이터의 품질 수준을 측정하기 위한 7대 품질 지표를 정의하고 있으며, 각 지표별 실용적 예시를 통해 상세 내용을 확인할 수 있습니다.</p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h4 className="text-lg font-semibold mb-3">I. 품질 진단 단계</h4>
              <ol className="list-decimal list-inside text-sm space-y-1">
                <li>진단 대상 정의</li>
                <li>품질 진단 실시</li>
                <li>진단 결과 분석</li>
              </ol>
            </div>

            <div className="p-4 bg-purple-50 rounded-lg">
              <h4 className="text-lg font-semibold mb-3">II. 품질 개선 단계</h4>
              <ol className="list-decimal list-inside text-sm space-y-1" start={4}>
                <li>개선 계획 수립</li>
                <li>개선 수행</li>
                <li>품질 통제</li>
              </ol>
            </div>
          </div>

          <h3 className="text-2xl font-bold mt-8 mb-4">7대 데이터 품질 지표</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link to="/diagnosis/readiness" className="card-elevated p-4 border-l-4 border-blue-500 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center gap-3">
                <span className="text-2xl">📝</span>
                <span className="text-lg font-bold text-gray-900">1. 준비성</span>
              </div>
            </Link>
            <Link to="/diagnosis/completeness" className="card-elevated p-4 border-l-4 border-purple-500 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center gap-3">
                <span className="text-2xl">✅</span>
                <span className="text-lg font-bold text-gray-900">2. 완전성</span>
              </div>
            </Link>
            <Link to="/diagnosis/consistency" className="card-elevated p-4 border-l-4 border-green-500 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🔄</span>
                <span className="text-lg font-bold text-gray-900">3. 일관성</span>
              </div>
            </Link>
            <Link to="/diagnosis/accuracy" className="card-elevated p-4 border-l-4 border-orange-500 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🎯</span>
                <span className="text-lg font-bold text-gray-900">4. 정확성</span>
              </div>
            </Link>
            <Link to="/diagnosis/security" className="card-elevated p-4 border-l-4 border-blue-500 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🔒</span>
                <span className="text-lg font-bold text-gray-900">5. 보안성</span>
              </div>
            </Link>
            <Link to="/diagnosis/timeliness" className="card-elevated p-4 border-l-4 border-purple-500 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center gap-3">
                <span className="text-2xl">⏱️</span>
                <span className="text-lg font-bold text-gray-900">6. 적시성</span>
              </div>
            </Link>
            <Link to="/diagnosis/usability" className="card-elevated p-4 border-l-4 border-green-500 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center gap-3">
                <span className="text-2xl">💡</span>
                <span className="text-lg font-bold text-gray-900">7. 유용성</span>
              </div>
            </Link>
          </div>
        </div>
      ),
    },
    {
      id: 'auditor',
      label: '감리사 관점',
      icon: '🎯',
      accentColor: 'purple',
      content: (
        <div className="text-gray-700 dark:text-gray-300 space-y-6">
          <p className="text-lg leading-relaxed">
            정보시스템 감리사(감리업자)는 공공기관의 정보화 사업에 참여하여, 해당 기관의 데이터 품질관리(Data Quality Management, DQM) 측면에서 고려해야 할 사항의 적절한 이행 여부를 파악하는 역할을 수행합니다.
          </p>

          <p>
            감리는 크게 <strong>품질관리 기반 체계(거버넌스) 점검</strong>과 <strong>정보 생애주기별 활동 점검</strong>으로 나누어 진행하는 것이 효과적입니다.
          </p>

          {/* 점검 체계 및 단계 */}
          <div className="mt-8">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-purple-700 dark:text-purple-400">
              <span className="text-3xl">📋</span>
              Ⅰ. 점검 체계 및 단계
            </h3>
            <p className="mb-4">감리사는 기관의 데이터 품질관리 체계를 평가하기 위해 다음 세 가지 주요 영역을 중점적으로 검토해야 합니다.</p>

            <div className="table-responsive mb-6">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/30 dark:to-blue-900/30">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">구분</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">점검 영역</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">목표</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">관련 매뉴얼 장</th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                  <tr>
                    <td className="px-6 py-4 text-sm font-bold text-gray-900 dark:text-gray-100 bg-purple-50 dark:bg-purple-900/20">기반 체계 점검</td>
                    <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">정책, 조직, 표준화, 인프라</td>
                    <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">데이터 품질관리 활동이 지속 가능하도록 거버넌스 기반이 구축되었는지 확인</td>
                    <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Ⅱ.2.1, Ⅱ.2.6</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-bold text-gray-900 dark:text-gray-100 bg-purple-50 dark:bg-purple-900/20">생애주기별 활동 점검</td>
                    <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">계획, 구축, 운영, 활용 단계</td>
                    <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">데이터의 생애주기 전반에 걸쳐 품질관리 활동이 규정된 절차에 따라 수행되었는지 확인</td>
                    <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Ⅱ.2.2 ~ Ⅱ.2.5</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-bold text-gray-900 dark:text-gray-100 bg-purple-50 dark:bg-purple-900/20">핵심 절차 점검</td>
                    <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">품질 진단 및 개선 (6단계)</td>
                    <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">운영 단계의 핵심 활동인 품질 진단 및 개선이 체계적인 방법론에 따라 실행되었는지 심층 검증</td>
                    <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Ⅲ.2</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* 단계별 절차, 점검항목 및 점검 방법 */}
          <div className="mt-10">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-purple-700 dark:text-purple-400">
              <span className="text-3xl">🔍</span>
              Ⅱ. 단계별 절차, 점검항목 및 점검 방법
            </h3>

            {/* 1. 품질관리 기반 체계 점검 */}
            <div className="mb-8">
              <h4 className="text-xl font-bold mb-4 flex items-center gap-2 text-blue-600 dark:text-blue-400">
                1. 품질관리 기반 체계 점검
              </h4>
              <div className="table-responsive">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">점검 단계</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">핵심 점검항목</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">점검 방법 및 확인 산출물</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                    <tr>
                      <td className="px-6 py-4 text-sm font-bold text-gray-900 dark:text-gray-100 bg-blue-50 dark:bg-blue-900/20">정책 및 규정</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">
                        <ul className="list-disc list-inside space-y-1">
                          <li>기관의 품질관리 정책/규정(지침)이 수립되었는가?</li>
                          <li>규정 내용에 품질관리 목적/목표, 적용 범위, 기준, 절차, 활동, 조직/역할 등이 포함되었는가?</li>
                          <li>국가 차원의 품질관리 정책과 일관성이 있는가?</li>
                        </ul>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">품질관리 규정/지침 문서 검토</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-bold text-gray-900 dark:text-gray-100 bg-blue-50 dark:bg-blue-900/20">조직 및 역할</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">
                        <ul className="list-disc list-inside space-y-1">
                          <li>공공데이터제공책임관 및 실무담당자가 임명되었는가?</li>
                          <li><strong>데이터 오너십(Ownership)</strong>과 <strong>스튜어드십(Stewardship)</strong>이 주요 데이터/컬럼 단위로 명확히 정의되었는가?</li>
                        </ul>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">오너십 정의서 (서식13), 조직 구성 및 역할 분장 문서</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-bold text-gray-900 dark:text-gray-100 bg-blue-50 dark:bg-blue-900/20">데이터 표준화</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">
                        <ul className="list-disc list-inside space-y-1">
                          <li><strong>표준요소(용어, 단어, 도메인, 코드, 명명규칙)</strong>가 정의되고 기관 전체에 일관성 있게 적용되었는가?</li>
                          <li>공통표준 및 행정표준코드를 준수했는가?</li>
                        </ul>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">표준 정의서 (용어, 단어, 도메인, 코드) (서식 2~5), 표준 적용 현황 보고서</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-bold text-gray-900 dark:text-gray-100 bg-blue-50 dark:bg-blue-900/20">인프라</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">
                        <ul className="list-disc list-inside space-y-1">
                          <li>품질관리 활동을 지원하기 위한 인프라(도구/시스템) 구축/운영 계획이 있는가?</li>
                          <li>프로파일링, 품질 데이터 관리, 진단/분석, 메타데이터 관리 등의 핵심 기능이 확보되었는가?</li>
                        </ul>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">품질관리 인프라 구축·운영 계획 (서식1), 인프라 기능 명세서</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* 2. 정보 생애주기별 활동 점검 */}
            <div className="mb-8">
              <h4 className="text-xl font-bold mb-4 flex items-center gap-2 text-green-600 dark:text-green-400">
                2. 정보 생애주기별 활동 점검
              </h4>
              <div className="table-responsive">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/30 dark:to-blue-900/30">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">단계</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">주요 활동 목표</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">핵심 점검항목 및 산출물</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">점검 방법 (감리 중점)</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                    <tr>
                      <td className="px-6 py-4 text-sm font-bold text-gray-900 dark:text-gray-100 bg-green-50 dark:bg-green-900/20">계획단계</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">연간 품질관리 목표 및 로드맵 수립</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">
                        <ul className="list-disc list-inside space-y-1 text-xs">
                          <li>데이터 품질관리 계획서 (서식1)의 충실도 점검</li>
                          <li>중점 품질관리 대상 DB 선정의 적절성 및 기준 적용 여부</li>
                          <li>당해 연도 표준화 적용 및 품질 진단·개선 계획 포함 여부</li>
                        </ul>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">계획서 상의 품질 목표와 중점 대상 선정의 전략적 부합성 검토</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-bold text-gray-900 dark:text-gray-100 bg-green-50 dark:bg-green-900/20">구축단계</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">사전 예방적 품질 확보 및 운영단계 입력 자료 확보</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">
                        <ul className="list-disc list-inside space-y-1 text-xs">
                          <li>데이터 표준 준수 여부 (표준용어, 명명규칙의 모델/DB 적용 확인)</li>
                          <li>오류 데이터의 입력 방지 체계 마련 여부</li>
                          <li>논리/물리 ERD, 테이블 정의서, 업무규칙 정의서 작성 및 최신성 확인</li>
                        </ul>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300"><strong>구축 산출물 점검표 (서식16)</strong>를 활용하여, 실제 DB 구조와 산출물의 일관성 검증</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-bold text-gray-900 dark:text-gray-100 bg-green-50 dark:bg-green-900/20">운영단계</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">데이터 품질 진단 및 개선 (6단계) 체계적 수행</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">
                        <ul className="list-disc list-inside space-y-1 text-xs">
                          <li>품질 진단 계획서 (서식 23) 및 개선 계획서 (서식 27)의 실행 여부</li>
                          <li>데이터 산출물의 최신성 확보 및 변경 관리 이력</li>
                          <li>오너십/스튜어드십 기반의 관리 이행 여부</li>
                        </ul>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">품질 진단 및 개선 절차를 기준으로 세부 점검 (아래 3번 참고)</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-bold text-gray-900 dark:text-gray-100 bg-green-50 dark:bg-green-900/20">활용단계</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">사용자 품질 오류 피드백 관리 및 선순환 체계 완성</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">
                        <ul className="list-disc list-inside space-y-1 text-xs">
                          <li>데이터 품질 오류 신고서 (서식 17) 접수 체계 마련 여부</li>
                          <li>데이터 오류 신고 및 처리 대장 (서식 18) 운영 및 기록 관리 현황</li>
                          <li>품질 진단/평가 결과에 따른 시정 조치 계획 수립 및 이행 여부</li>
                        </ul>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">신고 절차(접수-확인-조치-통지)의 준수 여부</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* 3. 운영단계 핵심 절차 */}
            <div className="mb-8">
              <h4 className="text-xl font-bold mb-4 flex items-center gap-2 text-orange-600 dark:text-orange-400">
                3. 운영단계 핵심 절차: 데이터 품질 진단 및 개선 (6단계) 심층 점검
              </h4>
              <p className="mb-4 text-sm">운영 단계의 핵심 활동인 품질 진단 및 개선 절차는 6단계로 정의되며, 감리사는 이 절차의 준수 및 실효성을 심도 있게 점검해야 합니다.</p>
              <div className="table-responsive">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/30 dark:to-red-900/30">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">절차 (6단계)</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">주요 활동 및 점검 항목</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">점검 방법 및 기준</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                    <tr>
                      <td className="px-6 py-4 text-sm font-bold text-gray-900 dark:text-gray-100 bg-orange-50 dark:bg-orange-900/20">1. 진단대상 정의 (Define)</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">
                        <ul className="list-disc list-inside space-y-1 text-xs">
                          <li>진단 대상 DB 선정의 적절성</li>
                          <li>진단 방향(Inside-Out vs. Outside-In)의 합리성</li>
                        </ul>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">품질이슈 목록 (서식19) 및 요구사항 목록 (서식20)을 기반으로 진단 대상의 중요성과 시급성을 평가</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-bold text-gray-900 dark:text-gray-100 bg-orange-50 dark:bg-orange-900/20">2. 품질진단 실시 (Measure)</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">
                        <ul className="list-disc list-inside space-y-1 text-xs">
                          <li>7대 품질 지표 (준비성, 완전성, 일관성, 정확성, 보안성, 적시성, 유용성)를 기준으로 진단했는지</li>
                          <li>4대 진단 방법 (프로파일링, 업무규칙 진단, 체크리스트, 비정형 실측)의 적용 범위 및 결과</li>
                        </ul>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">프로파일링(값/구조 진단) 결과 확인. 업무규칙 진단 시 법, 규정 등 근거 규정에 명시된 규칙을 기반으로 측정했는지 확인</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-bold text-gray-900 dark:text-gray-100 bg-orange-50 dark:bg-orange-900/20">3. 진단결과 분석 (Analyze)</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">
                        <ul className="list-disc list-inside space-y-1 text-xs">
                          <li>도출된 오류의 <strong>근본 원인(Root Cause)</strong>이 관리체계, 표준, 구조, 응용프로그램 관점에서 분석되었는지</li>
                          <li>업무 영향 분석 (정성적/정량적 파급 효과)을 수행하여 우선순위 기준으로 활용했는지</li>
                        </ul>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">오류 유형 및 원인 분석 결과서 (서식25)를 통해 근본 원인 도출의 논리적 타당성 검토</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-bold text-gray-900 dark:text-gray-100 bg-orange-50 dark:bg-orange-900/20">4. 개선계획 수립 (Improvement Plan)</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">
                        <ul className="list-disc list-inside space-y-1 text-xs">
                          <li>개선 과제 정의 시 선/후행 관계 및 시급성/중요도를 고려하여 우선순위를 설정했는지</li>
                          <li>개선 목표와 측정 가능한 <strong>성과평가지표(KPI)</strong>가 정의되었는지</li>
                        </ul>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">품질 개선 계획서 (서식27) 및 개선 과제 목록 검토</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-bold text-gray-900 dark:text-gray-100 bg-orange-50 dark:bg-orange-900/20">5. 개선 수행 (Implement)</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">
                        <ul className="list-disc list-inside space-y-1 text-xs">
                          <li>품질 관리체계 수립, 표준화 수립, 데이터 보정, 응용 프로그램 수정 등의 개선 활동이 계획대로 실행되었는지</li>
                          <li>대규모 데이터 보정 시 백업/복구 절차 및 이력 관리를 준수했는지</li>
                        </ul>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">품질 개선 결과보고서 (서식28)를 통해 개선 전후 비교 및 조치 내역 확인</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-bold text-gray-900 dark:text-gray-100 bg-orange-50 dark:bg-orange-900/20">6. 품질 통제 (Control)</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">
                        <ul className="list-disc list-inside space-y-1 text-xs">
                          <li>개선 결과에 대한 <strong>평가(개선 전/후 비교, 비용 편익 분석)</strong>를 수행했는지</li>
                          <li>개선된 품질 수준 유지를 위한 상시 모니터링, 오류 신고 접수 및 처리, 구성원 교육 등 통제 활동이 정의되고 실행되는지</li>
                        </ul>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">품질 개선 결과보고서 (서식28), 오류 신고 및 처리 대장 (서식18)의 관리 상태 점검</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* 요약 비유 */}
          <div className="mt-10 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-8 rounded-xl border-l-4 border-purple-500">
            <h4 className="text-xl font-bold mb-4 flex items-center gap-3">
              <span className="text-3xl">🏢</span>
              요약 비유: 건물의 종합 안전 검사
            </h4>
            <p className="text-base leading-relaxed">
              감리사가 이 매뉴얼을 활용하여 데이터 품질을 점검하는 것은, 새로 지어진 건물의 종합 안전 검사와 같습니다.
              건물이 설계 표준(표준화)에 따라 지어졌는지(구축단계), 건물 관리 규정(정책/조직)이 명확하고 관리 담당자(오너십/스튜어드십)가 지정되었는지 확인합니다.
              특히, 건물에 문제가 생기면 (운영단계) 단순히 땜질만 하는 것이 아니라, 6단계 절차에 따라 문제의 근본 원인(Root Cause)을 찾아내어
              설계도와 구조(데이터 모델)를 수정하고, 앞으로 같은 문제가 재발하지 않도록 상시 감시 체계를 갖추었는지(품질 통제)를 점검하는 것입니다.
              감리사는 각 과정에서 생성된 공식 문서(산출물)를 통해 그 적정성을 입증해야 합니다.
            </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <div className="text-center mb-12 py-8">
        <div className="inline-block mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-medium shadow-lg">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            공공 데이터 품질관리
          </span>
        </div>
        <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 text-balance">
          데이터 품질관리 <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">가이드 포털</span>
        </h1>
        <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed text-balance">
          체계적인 데이터 품질관리를 위한 전문 가이드
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>실무 중심</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>단계별 가이드</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>감리 관점 제공</span>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <TabNavigation tabs={tabs} defaultTab="overview" />
    </div>
  );
}
