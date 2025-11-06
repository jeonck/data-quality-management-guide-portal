export default function Completeness() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">2. 완전성 (Completeness)</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          데이터베이스를 구축함에 있어 논리적 설계와 물리적 구조를 갖추고, 업무 요건에 맞게 데이터가 저장되는지를 측정하는 지표입니다.
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
                    논리 모델
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    논리 모델의 엔터티 간 관계 설정(Cardinality, 기수성)이 부재하여 참조 관계가 명시적으로 표기되어 있지 않음.
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    논리 데이터 모델이 엔터티, 속성, 관계정의와 더불어 식별자, 필수입력 항목 등이 정의된 상세 수준인지 확인.
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    식별자
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    테이블에 데이터를 유일하게 구별할 수 있는 주 식별자(PK)가 미정의되어 데이터 중복이 발생함.
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    엔터티 내 레코드를 유일하게 구분할 수 있는 식별자가 정의되었는지 확인.
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    물리 구조
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    미사용 테이블/컬럼이 존재함. <br/>논리 모델에 'Not Null'로 정의된 필수 입력항목이 실제 DB에는 'Null'을 허용하도록 생성되거나 'Space'가 입력됨.
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    물리 데이터 모델 설계도와 실제 데이터베이스 구조가 일치하는지 확인.
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
