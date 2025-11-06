export default function Security() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">5. 보안성 (Security)</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          데이터를 보호하기 위해 필요한 정책, 조직, 절차 등을 마련하고, 데이터에 대한 접근 및 사용 권한을 보호하는지를 측정하는 지표입니다.
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
                    오너십
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    데이터 소유자(오너십)가 명확하지 않아 임의의 관련자에 의해 데이터가 관리되거나 통제되지 않음.
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    각 데이터 요소별 데이터 관리 담당자가 명문화되어 있는지.
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    접근 제한
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    데이터 품질관리 표준 문서에 대한 사용자 접근 권한이 설정되어 있지 않음.
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    데이터 항목별로 조회, 수정, 삭제 권한이 사용자별로 세부적으로 설정되어 있는지.
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    DB 보호
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    정전, 재해, 재난에 대비한 데이터베이스 백업 정책이 부재하거나, 개인정보보호 대상 데이터에 대한 접근 제한 및 암호화가 부분적으로만 적용됨.
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    데이터베이스 백업 정책이 수립되어 준수되고 있는지. 데이터 접근에 대한 사용 이력(Log)을 관리하고 있는지.
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
