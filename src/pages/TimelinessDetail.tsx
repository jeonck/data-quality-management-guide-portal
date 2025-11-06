export default function TimelinessDetail() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">6. 적시성 (Timeliness)</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          사용자가 만족하는 수준의 응답시간으로 프로그램 성능이 확보되었는지, 정보가 최신의 것인지, 정보 요구사항 접수부터 제공되기까지의 작업 시간이 최소화되는지를 측정하는 지표입니다.
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
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-24">
                    구분
                  </th>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    실용적 예시 및 오류 유형
                  </th>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    개선 방향/진단 기준
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-4 text-sm font-medium text-gray-900">
                    응답 시간
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-600">
                    서비스 제공 기대 응답시간을 초과하여 제공됨.
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-600">
                    데이터에 대한 응답시간의 기준이 마련되어 있는지. <br/>응답시간 기준에 따라 주기적으로 성능을 측정하고 개선 활동을 수행하는지.
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-4 text-sm font-medium text-gray-900">
                    최신값
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-600">
                    데이터 최신값 오류 (예: 동사무소에서 주민정보 변경 이후 적용 기한이 지났어도 인터넷 증명서에는 변경 전 주민정보가 제공됨).
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-600">
                    주요 데이터의 갱신 주기와 방법이 문서화되어 있고 이를 준수하는지.
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
