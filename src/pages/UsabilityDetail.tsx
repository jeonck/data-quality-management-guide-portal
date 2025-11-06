export default function UsabilityDetail() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">7. 유용성 (Usability)</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          사용자가 만족하는 수준의 충분한 정보가 제공되고 있는지, 정보에 대한 접근의 편의성이 확보되었는지, 그래서 사용자가 정보를 유용하게 활용하고 있는지에 대한 수준을 측정하는 지표입니다.
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
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    충분
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    수집 정보(관측 횟수)가 부족한 데이터 존재 (예: 일통계 상대습도평균값은 관측 자료 80% 미만일 경우 생성되면 안 되는데 70% 자료로 등록됨).
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    사용자가 다양한 관점과 깊이로 활용할 수 있도록 충분한 양의 데이터를 제공하고 있는지.
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    접근
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    사용자가 원하는 정보를 검색하거나 다운로드할 때 오류 발생. <br/>사용자 편의성을 높이기 위해 데이터를 다양한 형태로 제공하지 않고 특정 형식만 제공함.
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    데이터를 엑셀, PDF, TXT, HWP 등 다양한 형태로 제공하고 있는지.
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    활용
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    사용자의 요구사항을 수집 및 관리하는 체계가 없음.
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    주기적으로 사용자의 요구사항을 수집하고, 우선순위를 결정하며, 성과를 평가하고 있는지.
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
