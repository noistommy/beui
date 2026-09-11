/**
 * 웹 페이지 내 모듈용 고유 ID 생성 함수
 * @param {number} length - ID 길이 (기본값 8자리)
 * @returns {string} - 생성된 유니크 ID (예: "k3n8f2mx")
 */
const generateId = (length = 6) => {
  const letters = 'abcdefghijklmnopqrstuvwxyz0123456789'
  const randomValues = new Uint32Array(length)

  // 브라우저 내장 암호학적 난수 생성 API 사용
  window.crypto.getRandomValues(randomValues)

  let result = ''
  for (let i = 0; i < length; i++) {
    result += letters[randomValues[i] % letters.length]
  }

  return result
}

export { generateId }
