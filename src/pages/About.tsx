export default function About() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">About This Guide</h1>

      <div className="prose prose-lg">
        <p className="text-gray-600 text-lg mb-6">
          이 포털은 공공 데이터 품질관리에 대한 포괄적인 가이드를 제공합니다. 데이터 품질관리의 중요성, 체계, 생애주기별 활동, 그리고 각 단계별 상세 점검 항목에 대한 정보를 제공하여, 데이터 품질관리 실무자와 정보시스템 감리사에게 실질적인 도움을 드리고자 합니다.
        </p>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start">
              <span className="text-blue-500 mr-3">⚛️</span>
              <div>
                <strong>React 18</strong> - Modern React with hooks and concurrent features
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-3">⚡</span>
              <div>
                <strong>Vite</strong> - Next generation frontend tooling
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-3">📘</span>
              <div>
                <strong>TypeScript</strong> - Type safety and better developer experience
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-3">🎨</span>
              <div>
                <strong>Tailwind CSS</strong> - Utility-first CSS framework
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-3">🚦</span>
              <div>
                <strong>React Router</strong> - Client-side routing
              </div>
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-4">Features</h2>
          <ul className="space-y-2 text-gray-700">
            <li>✅ Fast development with Hot Module Replacement</li>
            <li>✅ Type-safe code with TypeScript</li>
            <li>✅ Modern UI with Tailwind CSS</li>
            <li>✅ Client-side routing with React Router</li>
            <li>✅ Optimized build for production</li>
            <li>✅ GitHub Pages deployment ready</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
