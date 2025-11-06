export default function ConsistencyDetail() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">3. 일관성 (Consistency)</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          같은 의미를 갖는 데이터가 논리적/물리적 단위에서 일관된 이름과 형식을 갖도록 표준을 준수하고 있는지, 공유·연계하는 데이터가 누락 없이 상호 간의 일관성을 유지하는지를 측정하는 지표입니다.
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
                    표준
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    표준용어를 준수하지 않은 컬럼명이 존재하여 동일한 의미의 속성(예: 사업장코드)에 대해 서로 상이한 컬럼명이 적용됨.
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    기관의 표준코드에 등록된 코드를 일관되게 사용하고 있는지. <br/>동일한 의미를 갖는 속성은 동일한 유효 범위와 형식을 사용하는지.
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    연계값
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    연계 데이터에 대해 표준을 준수하고 있지 않음. <br/>기관 간 연계 데이터의 표준(범위와 형식)이 일치하지 않아 데이터 통합 시 애로사항 발생. <br/>외부로부터 수집되는 연계 데이터에 대해 내부 데이터 흐름 및 변경 영향을 파악할 수 없음.
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    수집 및 제공되는 연계 데이터 관리 절차가 정의되어 있고 이를 준수하는지. <br/>연계 데이터의 변경 발생 시 해당 기관에 통보하는 절차가 정의되어 있는지.
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    중복값
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    업무적으로 중복을 불허하는 데이터가 중복 등록됨 (예: 마스터 테이블 내 주요 데이터가 중복 등록).
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    중복 데이터를 별도의 명명규칙을 이용하거나 문서화하고 정합성 검증을 수행하는지.
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
