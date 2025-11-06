export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header Section */}
      <div className="text-center mb-12">
        <div className="inline-block mb-4">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-medium shadow-lg">
            <span className="text-xl">ℹ️</span>
            가이드 소개
          </span>
        </div>
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          About This <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Guide</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          이 포털은 공공 데이터 품질관리에 대한 포괄적인 가이드를 제공합니다. 데이터 품질관리의 중요성, 체계, 생애주기별 활동, 그리고 각 단계별 상세 점검 항목에 대한 정보를 제공하여, 데이터 품질관리 실무자와 정보시스템 감리사에게 실질적인 도움을 드리고자 합니다.
        </p>
      </div>

      {/* Content Section */}
      <div className="space-y-8">
        <div className="card-elevated p-8 border-l-4 border-green-500">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <span className="text-3xl">🔗</span>
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">자료 출처</span>
          </h2>
          <div className="space-y-4 text-gray-600">
            <div className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors">
              <span className="text-3xl flex-shrink-0">📄</span>
              <div>
                <a href="https://www.data.go.kr/bbs/rcr/selectRecsroom.do?pageIndex=1&originId=PDS_0000000000000516" target="_blank" rel="noopener noreferrer" className="text-lg text-blue-500 hover:underline">공공데이터 품질관리 매뉴얼 ver 2.1</a>
                <p className="text-sm mt-1">공공데이터포털 자료실</p>
              </div>
            </div>
          </div>
        </div>




      </div>
    </div>
  );
}
