export default function Accuracy() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">4. 정확성 (Accuracy)</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          데이터가 정의된 기준에 맞게 유효한 값의 범위와 형식으로 되어 있는지, 업무규칙을 준수하고 있는지, 현실에 가장 가까운 최신 값을 반영하고 있는지를 측정하는 지표입니다.
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
                    입력값
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    오류 데이터 입력 방지를 위한 예방적 조치(검증 로직)가 시스템적으로 부재함. <br/>명칭 도메인에 한글 성명 컬럼에 비완성형 한글이나 숫자가 등록되는 사용자 입력 오류 발생.
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    입력 단계에 데이터 검증 로직을 적용하고 보완하여 오류 발생을 사전 방지.
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    범위·형식
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    날짜 도메인 컬럼이 DBMS가 지원하는 날짜 타입이 아닌 ‘문자’나 ‘숫자’ 타입으로 정의되어 유효하지 않은 날짜 값 (예: 2월 30일)이 저장됨. <br/>수량 도메인 컬럼에 음수(-) 값이 나올 수 없는 특성이 존재함에도 음수 값이 등록됨.
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    테이블의 속성에 저장된 데이터가 도메인 표준에 따른 형식에 맞게 저장되었는지 확인.
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    업무규칙
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    시간 순서 정확성 위배 (예: 착공일자가 준공일자보다 늦게 등록됨). <br/>근거 규정에 명시된 업무규칙(BR)이 시스템에 반영되지 않음 (예: 도로명주소법 시행령의 명명규칙 위배).
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    업무규칙 정의서를 기반으로 데이터의 정확성을 검증하고 있는지. <br/>오류 데이터 발생 시 이를 보정하기 위한 명시적인 절차가 있는지.
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    참조관계
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    테이블 간 참조 무결성 위배 (예: 부모 테이블에 존재하지 않는 값이 자식 테이블에 등록됨).
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    데이터 간 종속관계나 참조관계가 있을 경우, DB에 제약 조건이 설정되거나 프로그램을 통해 검증하고 있는지.
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
