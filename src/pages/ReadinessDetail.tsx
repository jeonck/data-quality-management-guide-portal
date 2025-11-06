export default function ReadinessDetail() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">1. 준비성 (Readiness)</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          공공데이터의 품질관리를 위해 기본적으로 관리해야 하는 정책, 규정, 조직, 절차 등이 마련되고 최신의 내용으로 충실하게 관리되는지를 측정하는 지표입니다.
        </p>
      </div>

      <div className="space-y-8">
        <div className="card-elevated p-8 border-l-4 border-blue-500">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <span className="text-3xl">📋</span>
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">실용적 예시 및 오류 유형</span>
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    구분
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    실용적 예시 및 오류 유형
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    개선 방향/진단 기준
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    정책/조직
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    데이터 품질관리 정책, 지침, 절차가 없거나 미비한 경우.
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    데이터 품질관리 규정 및 지침 마련.
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    관리 요소
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    데이터 품질관리 로드맵이 부재하여 중장기 품질 목표에 진단 및 개선 결과가 반영되지 못함.
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    중·장기 정보화 계획에 데이터 품질관리가 고려되었는지.
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    문서화
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    기본 문서(논리/물리 ERD, 정의서 등)를 관리하는 담당자가 없어 문서의 변경 관리가 제대로 이루어지지 않음.
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    데이터 품질관리 기본문서 작성 가이드(매뉴얼)를 마련하고 준수하도록 담당자를 지정 및 교육.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
