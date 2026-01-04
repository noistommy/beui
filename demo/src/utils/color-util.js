export const shades = [
  '50',
  '100',
  '200',
  '300',
  '400',
  '500',
  '600',
  '700',
  '800',
  '900',
]
export const accents = ['A100', 'A200', 'A400', 'A700']

const findBaseIndex = (light) => {
  const min = 30
  const max = 90
  const stepSize = (max - min) / (shades.length - 1)
  const lightValue = Math.max(min, Math.min(light, max))
  const index = Math.round(lightValue / stepSize)

  return index ? index : 0.5
}

export const generationPalette = (color) => {
  const hsl = hexToHSL(color)
  const palette = {}
  const baseIndex = findBaseIndex(hsl.l)

  // console.log(baseIndex)
  palette[baseIndex * 100] = color
  // 밝은 색상 (50 - 400)
  let lightness = hsl.l
  let saturate = hsl.s
  for (let i = baseIndex - 1; i >= 0; i--) {
    const shade = shades[i]
    lightness = lightness + (95 - lightness) * 0.25
    saturate = saturate > 0 ? Math.max(hsl.s - 5 * (4 - i), 30) : 0
    palette[shade] = hslToHex(hsl.h, saturate, lightness)
  }
  // 어두운 색상 (600-900)
  lightness = hsl.l
  for (let i = baseIndex + 1; i < 10; i++) {
    const shade = shades[i]
    lightness = lightness - (lightness - 30) * 0.8
    saturate = saturate > 0 ? Math.min(hsl.s + 5 * (i - 6), 95) : 0
    palette[shade] = hslToHex(hsl.h, saturate, lightness)
  }
  // 엑센트 색상
  if (saturate) {
    palette['A100'] = hslToHex(hsl.h, 80, 80)
    palette['A200'] = hslToHex(hsl.h, 90, 65)
    palette['A400'] = hslToHex(hsl.h, 100, 55)
    palette['A700'] = hslToHex(hsl.h, 100, 45)
  } else {
    palette['A100'] = hslToHex(hsl.h, 0, 80)
    palette['A200'] = hslToHex(hsl.h, 0, 65)
    palette['A400'] = hslToHex(hsl.h, 0, 55)
    palette['A700'] = hslToHex(hsl.h, 0, 45)
  }

  return palette
}

export const convertHexCode = (hex) => {
  hex = hex.replace(/^#/, '')
  return hex.length === 3
    ? hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2]
    : hex
}
export const hexToHSL = (hex) => {
  hex = convertHexCode(hex)
  // 헥스 코드에서 RGB 값 추출
  let r = parseInt(hex.substring(0, 2), 16) / 255
  let g = parseInt(hex.substring(2, 4), 16) / 255
  let b = parseInt(hex.substring(4, 6), 16) / 255

  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  let h,
    s,
    l = (max + min) / 2
  // console.log(l * 100)
  if (max === min) {
    // 무채색 (회색)
    h = s = 0
  } else {
    const d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)

    // 색조 계산
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0)
        break
      case g:
        h = (b - r) / d + 2
        break
      case b:
        h = (r - g) / d + 4
        break
    }

    h /= 6
  }
  // console.log(h, s, l)
  // HSL 값을 표준 범위로 조정 (0-360도, 0-100%, 0-100%)
  return {
    h: h * 360,
    s: s * 100,
    l: l * 100,
  }
}

export const hslToHex = (h, s, l) => {
  h /= 360
  s /= 100
  l /= 100

  let r, g, b

  if (s === 0) {
    // 무채색 (회색)
    r = g = b = l
  } else {
    const hue2rgb = (p, q, t) => {
      if (t < 0) t += 1
      if (t > 1) t -= 1
      if (t < 1 / 6) return p + (q - p) * 6 * t
      if (t < 1 / 2) return q
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6
      return p
    }

    const q = l < 0.5 ? l * (1 + s) : l + s - l * s
    const p = 2 * l - q

    r = hue2rgb(p, q, h + 1 / 3)
    g = hue2rgb(p, q, h)
    b = hue2rgb(p, q, h - 1 / 3)
  }

  // RGB를 0-255 범위로 변환
  const toHex = (x) => {
    const hex = Math.round(x * 255).toString(16)
    return hex.length === 1 ? '0' + hex : hex
  }

  return `#${toHex(r)}${toHex(g)}${toHex(b)}`
}

export const isLightColor = (hexColor) => {
  // 헥스 코드에서 RGB 값 추출
  const r = parseInt(hexColor.slice(1, 3), 16)
  const g = parseInt(hexColor.slice(3, 5), 16)
  const b = parseInt(hexColor.slice(5, 7), 16)

  // 상대적 밝기 계산 (YIQ 색상 공간)
  const yiq = (r * 299 + g * 587 + b * 114) / 1000

  // 임계값: 128 (0-255 사이)
  return yiq >= 128
}

export const getHueShiftByCategory = (hue, shade) => {
  // 색상 범주에 따라 다른 색조 이동 패턴 적용
  if (hue >= 0 && hue <= 40) {
    // 빨강/주황 계열
    return {
      50: 3,
      100: 3,
      200: 2,
      300: 1,
      400: 0,
      500: 0,
      600: -1,
      700: -2,
      800: -3,
      900: -4,
    }[shade]
  } else if (hue >= 41 && hue <= 70) {
    // 노랑 계열
    return {
      50: 2,
      100: 2,
      200: 1,
      300: 0,
      400: 0,
      500: 0,
      600: 0,
      700: -1,
      800: -1,
      900: -2,
    }[shade]
  } else if (hue >= 71 && hue <= 160) {
    // 초록 계열
    return {
      50: 6,
      100: 5,
      200: 4,
      300: 2,
      400: 1,
      500: 0,
      600: -2,
      700: -3,
      800: -4,
      900: -5,
    }[shade]
  } else if (hue >= 161 && hue <= 260) {
    // 청록/파랑 계열
    return {
      50: 5,
      100: 4,
      200: 3,
      300: 2,
      400: 1,
      500: 0,
      600: -1,
      700: -3,
      800: -4,
      900: -5,
    }[shade]
  } else {
    // 보라/분홍 계열
    return {
      50: 7,
      100: 6,
      200: 4,
      300: 2,
      400: 1,
      500: 0,
      600: -1,
      700: -2,
      800: -3,
      900: -4,
    }[shade]
  }
}

export const getSaturationMultiplier = (hue, originalSaturation, shade) => {
  // 초기 채도에 따른 기본 조정 계수
  let baseMultiplier

  if (originalSaturation < 30) {
    // 매우 낮은 채도의 색상
    baseMultiplier = {
      50: 0.7,
      100: 0.8,
      200: 0.9,
      300: 0.95,
      400: 0.98,
      500: 1.0,
      600: 1.05,
      700: 1.1,
      800: 1.2,
      900: 1.3,
    }
  } else if (originalSaturation > 70) {
    // 매우 높은 채도의 색상
    baseMultiplier = {
      50: 0.4,
      100: 0.5,
      200: 0.6,
      300: 0.7,
      400: 0.85,
      500: 1.0,
      600: 1.05,
      700: 1.1,
      800: 1.15,
      900: 1.2,
    }
  } else {
    // 중간 채도의 색상
    baseMultiplier = {
      50: 0.55,
      100: 0.65,
      200: 0.75,
      300: 0.85,
      400: 0.95,
      500: 1.0,
      600: 1.05,
      700: 1.1,
      800: 1.15,
      900: 1.2,
    }
  }

  // 색상 범주에 따른 추가 조정
  let categoryAdjustment = 0

  if (hue >= 41 && hue <= 70) {
    // 노랑 계열
    // 노랑은 더 높은 채도가 필요함
    categoryAdjustment = 0.1
  } else if (hue >= 161 && hue <= 260) {
    // 파랑 계열
    // 파랑은 어두운 색조에서 채도 더 증가
    if (shade >= 700) categoryAdjustment = 0.05
  }

  return baseMultiplier[shade] + categoryAdjustment
}

export const getLightnessAdjustment = (hue, originalLightness, shade) => {
  // 색상 범주별 기본 밝기 조정 값
  let baseLightnessAdjustments

  if (hue >= 0 && hue <= 40) {
    // 빨강/주황 계열
    baseLightnessAdjustments = {
      50: 52,
      100: 37,
      200: 26,
      300: 12,
      400: 6,
      500: 0,
      600: -6,
      700: -12,
      800: -18,
      900: -24,
    }
  } else if (hue >= 41 && hue <= 70) {
    // 노랑 계열
    baseLightnessAdjustments = {
      50: 55,
      100: 45,
      200: 32,
      300: 18,
      400: 8,
      500: 0,
      600: -5,
      700: -10,
      800: -15,
      900: -20,
    }
  } else if (hue >= 71 && hue <= 160) {
    // 초록 계열
    baseLightnessAdjustments = {
      50: 52,
      100: 38,
      200: 28,
      300: 13,
      400: 6,
      500: 0,
      600: -6,
      700: -13,
      800: -19,
      900: -26,
    }
  } else if (hue >= 161 && hue <= 260) {
    // 청록/파랑 계열
    baseLightnessAdjustments = {
      50: 55,
      100: 40,
      200: 30,
      300: 15,
      400: 7,
      500: 0,
      600: -7,
      700: -15,
      800: -22,
      900: -30,
    }
  } else {
    // 보라/분홍 계열
    baseLightnessAdjustments = {
      50: 54,
      100: 38,
      200: 28,
      300: 14,
      400: 7,
      500: 0,
      600: -7,
      700: -14,
      800: -20,
      900: -26,
    }
  }

  // 초기 밝기에 따른 추가 조정
  let lightnessAdjustment = baseLightnessAdjustments[shade]

  // 이미 매우 어두운 색상인 경우 (L < 40)
  if (originalLightness < 40 && shade > 500) {
    // 어두운 색조에서 덜 어둡게 만들기
    const factor = (40 - originalLightness) / 40 // 0에서 1 사이 값
    lightnessAdjustment = lightnessAdjustment * (1 - factor * 0.3)
  }

  // 이미 매우 밝은 색상인 경우 (L > 75)
  if (originalLightness > 75 && shade < 500) {
    // 밝은 색조에서 덜 밝게 만들기
    const factor = (originalLightness - 75) / 25 // 0에서 1 사이 값
    lightnessAdjustment = lightnessAdjustment * (1 - factor * 0.3)
  }

  return lightnessAdjustment
}

export const applySpecialCaseRules = (hue, saturation, lightness, shade) => {
  let adjustments = { h: 0, s: 0, l: 0 }

  // 노란색 특별 처리 (55-65도 범위)
  if (hue >= 55 && hue <= 65) {
    if (shade <= 300) {
      adjustments.l = 2 // 밝은 색조에서 더 밝게
    }
    if (shade >= 700) {
      adjustments.s = 5 // 어두운 색조에서 더 채도 높게
    }
  }

  // 특정 파란색 처리 (210-230도)
  if (hue >= 210 && hue <= 230) {
    if (shade >= 800) {
      adjustments.s = 5 // 매우 어두운 색조에서 더 진한 채도
      adjustments.l = -2 // 약간 더 어둡게
    }
  }

  return adjustments
}

function perceptualCorrection(h, s, l, shade) {
  // 지각적 균일성을 위한 보정

  // 밝기 보정 (인간은 중간 밝기에 더 민감)
  if (l > 45 && l < 65) {
    // 중간 밝기 범위에서는 더 작은 단계로 조정
    if (shade > 400 && shade < 600) {
      l = l + (l > 50 ? -1 : 1)
    }
  }

  // 채도 보정 (높은 채도에서 더 민감)
  if (s > 70) {
    // 높은 채도에서는 채도 증가를 줄임
    if (shade >= 700) {
      s = s - ((shade - 700) / 100) * 5
    }
  }

  return { h, s, l }
}

export const generateMaterialPalette = (color) => {
  // const baseHSL = hexToHSL(baseColor)
  const { hsl, estimatedLevel } = analyzeSelectedColor(color)
  const baseColor = deriveBaseColorFrom(color, estimatedLevel)
  const baseHSL = hexToHSL(baseColor)
  const palette = { 500: baseColor }
  // console.log(estimatedLevel)
  const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]

  for (const shade of shades) {
    if (shade === 500) continue // 기본 색상은 이미 있음

    // 1. 색상(hue) 이동 계산
    const hueShift = getHueShiftByCategory(baseHSL.h, shade)
    let h = baseHSL.h + hueShift

    // 2. 채도 조정 계산
    const satMultiplier = getSaturationMultiplier(baseHSL.h, baseHSL.s, shade)
    let s = baseHSL.s * satMultiplier

    // 3. 밝기 조정 계산
    const lightnessAdjustment = getLightnessAdjustment(
      baseHSL.h,
      baseHSL.l,
      shade,
    )
    let l = baseHSL.l + lightnessAdjustment

    // 4. 특별 케이스 처리
    const specialAdjustments = applySpecialCaseRules(
      baseHSL.h,
      baseHSL.s,
      baseHSL.l,
      shade,
    )
    h += specialAdjustments.h
    s += specialAdjustments.s
    l += specialAdjustments.l

    // 5. 지각적 균일성 보정
    const corrected = perceptualCorrection(h, s, l, shade)
    h = corrected.h
    s = corrected.s
    l = corrected.l

    // 6. 값 범위 보정
    h = (h + 360) % 360 // 0-360 범위로
    s = Math.max(0, Math.min(100, s)) // 0-100 범위로
    l = Math.max(0, Math.min(100, l)) // 0-100 범위로

    // 7. HSL에서 HEX로 변환하여 팔레트에 추가
    palette[shade] = hslToHex(h, s, l)
  }

  return palette
}

export const analyzeSelectedColor = (hexColor) => {
  const hsl = hexToHSL(hexColor)

  // 밝기를 기준으로 대략적인 레벨 판단
  let estimatedLevel

  if (hsl.l >= 95) estimatedLevel = 50
  else if (hsl.l >= 85) estimatedLevel = 100
  else if (hsl.l >= 75) estimatedLevel = 200
  else if (hsl.l >= 65) estimatedLevel = 300
  else if (hsl.l >= 55) estimatedLevel = 400
  else if (hsl.l >= 45) estimatedLevel = 500
  else if (hsl.l >= 32) estimatedLevel = 600
  else if (hsl.l >= 24) estimatedLevel = 700
  else if (hsl.l >= 16) estimatedLevel = 800
  else estimatedLevel = 900

  console.log(estimatedLevel)
  // 채도도 고려하여 더 정확한 레벨 추정
  if (hsl.s < 20) {
    // 낮은 채도는 주로 밝은 색조에서 나타남
    estimatedLevel = Math.max(50, estimatedLevel - 100)
  } else if (hsl.s > 80) {
    // 높은 채도는 주로 중간/어두운 색조에서 나타남
    estimatedLevel = Math.min(900, estimatedLevel + 100)
  }
  console.log(estimatedLevel)
  return {
    hsl,
    estimatedLevel,
  }
}

export const deriveBaseColorFrom = (selectedColor, estimatedLevel) => {
  if (estimatedLevel === 500) {
    return selectedColor // 이미 500 레벨인 경우
  }

  const selectedHSL = hexToHSL(selectedColor)
  let baseHSL = { ...selectedHSL }

  // 1. 밝기 역산
  const lightnessAdjustment = getLightnessAdjustment(
    selectedHSL.h,
    selectedHSL.l,
    estimatedLevel,
  )
  baseHSL.l = selectedHSL.l - lightnessAdjustment

  // 2. 채도 역산
  const satMultiplier = getSaturationMultiplier(
    selectedHSL.h,
    selectedHSL.s,
    estimatedLevel,
  )
  baseHSL.s = selectedHSL.s / satMultiplier

  // 3. 색상 역산
  const hueShift = getHueShiftByCategory(selectedHSL.h, estimatedLevel)
  baseHSL.h = selectedHSL.h - hueShift

  // 값 범위 보정
  baseHSL.h = (baseHSL.h + 360) % 360
  baseHSL.s = Math.max(0, Math.min(100, baseHSL.s))
  baseHSL.l = Math.max(0, Math.min(100, baseHSL.l))

  return hslToHex(baseHSL.h, baseHSL.s, baseHSL.l)
}

function generatePaletteWithAnchor(selectedColor) {
  // 1. 선택 색상 분석
  const analysis = analyzeSelectedColor(selectedColor)
  const anchorLevel = analysis.estimatedLevel

  // 2. 역산으로 가상의 500 레벨 색상 도출
  const virtualBaseColor = deriveBaseColorFrom(selectedColor, anchorLevel)

  // 3. 500 레벨 색상으로 팔레트 생성
  const tempPalette = generateMaterialPalette(virtualBaseColor)

  // 4. 앵커 포인트(선택 색상)을 유지하기 위한 조정
  const anchorOriginal = hexToHSL(selectedColor)
  const anchorGenerated = hexToHSL(tempPalette[anchorLevel])

  // 보정 값 계산
  const corrections = {
    h: anchorOriginal.h - anchorGenerated.h,
    s: anchorOriginal.s / anchorGenerated.s, // 비율로 보정
    l: anchorOriginal.l - anchorGenerated.l,
  }

  // 5. 최종 팔레트 생성 (앵커 포인트에 맞게 보정)
  const finalPalette = {}

  for (const level in tempPalette) {
    if (parseInt(level) === anchorLevel) {
      // 앵커 레벨은 원래 선택 색상 그대로 유지
      finalPalette[level] = selectedColor
    } else {
      // 다른 레벨은 보정값 적용
      const hsl = hexToHSL(tempPalette[level])

      // 보정값 적용 (색상 범주별 가중치 적용)
      const levelDiff = Math.abs(parseInt(level) - anchorLevel)
      const weightFactor = Math.max(0, 1 - levelDiff / 900)

      const adjustedHSL = {
        h: (hsl.h + corrections.h * weightFactor + 360) % 360,
        s: Math.max(
          0,
          Math.min(100, hsl.s * Math.pow(corrections.s, weightFactor)),
        ),
        l: Math.max(0, Math.min(100, hsl.l + corrections.l * weightFactor)),
      }

      finalPalette[level] = hslToHex(
        adjustedHSL.h,
        adjustedHSL.s,
        adjustedHSL.l,
      )
    }
  }

  return {
    palette: finalPalette,
    anchorLevel,
  }
}

function generatePaletteWithUserDefinedLevel(
  selectedColor,
  userDefinedLevel = null,
) {
  // 사용자가 레벨을 지정한 경우
  if (
    userDefinedLevel &&
    [50, 100, 200, 300, 400, 500, 600, 700, 800, 900].includes(userDefinedLevel)
  ) {
    return generatePaletteWithAnchor(selectedColor, userDefinedLevel)
  }

  // 자동 레벨 감지
  return generatePaletteWithAnchor(selectedColor)
}

function suggestOptimalLevel(hexColor) {
  const hsl = hexToHSL(hexColor)

  // 색상별 특성에 따른 최적 레벨 추천
  const suggestions = []

  // 밝기와 채도 기반 점수 계산
  const scoringMatrix = {
    50: { l: 90, s: 10 },
    100: { l: 80, s: 20 },
    200: { l: 70, s: 30 },
    300: { l: 60, s: 40 },
    400: { l: 50, s: 50 },
    500: { l: 45, s: 60 },
    600: { l: 40, s: 65 },
    700: { l: 30, s: 70 },
    800: { l: 20, s: 75 },
    900: { l: 10, s: 80 },
  }

  // 각 레벨별 점수 계산
  for (const level in scoringMatrix) {
    const target = scoringMatrix[level]
    const score =
      100 -
      (Math.abs(hsl.l - target.l) * 0.7 + // 밝기에 가중치 70%
        Math.abs(hsl.s - target.s) * 0.3) // 채도에 가중치 30%

    suggestions.push({
      level: parseInt(level),
      score: score,
    })
  }

  // 점수순으로 정렬
  suggestions.sort((a, b) => b.score - a.score)

  return {
    bestMatch: suggestions[0].level,
    alternatives: [suggestions[1].level, suggestions[2].level],
    allScores: suggestions,
  }
}

function adjustPaletteWithFeedback(selectedColor, userFeedback) {
  // 사용자 피드백 예시:
  // userFeedback = {
  //   lighterShades: "too_bright" | "too_dark" | "good",
  //   darkerShades: "too_bright" | "too_dark" | "good",
  //   saturation: "too_high" | "too_low" | "good"
  // }

  const analysis = analyzeSelectedColor(selectedColor)
  let virtualBaseColor = deriveBaseColorFrom(
    selectedColor,
    analysis.estimatedLevel,
  )
  let baseHSL = hexToHSL(virtualBaseColor)

  // 피드백에 따른 조정
  if (userFeedback.lighterShades === 'too_bright') {
    // 밝은 색조 밝기 감소
    for (let level of [50, 100, 200, 300, 400]) {
      lightnessAdjustments[level] *= 0.85
    }
  } else if (userFeedback.lighterShades === 'too_dark') {
    // 밝은 색조 밝기 증가
    for (let level of [50, 100, 200, 300, 400]) {
      lightnessAdjustments[level] *= 1.15
    }
  }

  // 비슷한 방식으로 다른 피드백 처리
  // ...

  // 조정된 값으로 팔레트 재생성
  return generatePaletteWithAnchor(selectedColor)
}

/**
 * 머테리얼 디자인 컬러 팔레트 생성기 (HCL/LCh 모델 기반)
 */

// RGB를 HCL/LCh로 변환하는 함수
function rgbToLch(r, g, blue) {
  // 1. RGB -> sRGB (선형화)
  let rLinear = r / 255
  let gLinear = g / 255
  let bLinear = blue / 255

  rLinear =
    rLinear > 0.04045
      ? Math.pow((rLinear + 0.055) / 1.055, 2.4)
      : rLinear / 12.92
  gLinear =
    gLinear > 0.04045
      ? Math.pow((gLinear + 0.055) / 1.055, 2.4)
      : gLinear / 12.92
  bLinear =
    bLinear > 0.04045
      ? Math.pow((bLinear + 0.055) / 1.055, 2.4)
      : bLinear / 12.92

  // 2. sRGB -> XYZ
  const X = rLinear * 0.4124 + gLinear * 0.3576 + bLinear * 0.1805
  const Y = rLinear * 0.2126 + gLinear * 0.7152 + bLinear * 0.0722
  const Z = rLinear * 0.0193 + gLinear * 0.1192 + bLinear * 0.9505

  // 3. XYZ -> Lab
  const xr = X / 0.95047
  const yr = Y / 1.0
  const zr = Z / 1.08883

  const fx = xr > 0.008856 ? Math.pow(xr, 1 / 3) : 7.787 * xr + 16 / 116
  const fy = yr > 0.008856 ? Math.pow(yr, 1 / 3) : 7.787 * yr + 16 / 116
  const fz = zr > 0.008856 ? Math.pow(zr, 1 / 3) : 7.787 * zr + 16 / 116

  const L = 116 * fy - 16
  const a = 500 * (fx - fy)
  const b = 200 * (fy - fz)

  // 4. Lab -> LCh
  const C = Math.sqrt(a * a + b * b)
  let h = Math.atan2(b, a) * (180 / Math.PI)
  if (h < 0) h += 360

  return { L, C, h }
}

// HCL/LCh에서 RGB로 변환하는 함수
function lchToRgb(L, C, h) {
  // 1. LCh -> Lab
  const a = C * Math.cos((h * Math.PI) / 180)
  const b_lab = C * Math.sin((h * Math.PI) / 180) // b 변수명 변경

  // 2. Lab -> XYZ
  const fy = (L + 16) / 116
  const fx = a / 500 + fy
  const fz = fy - b_lab / 200 // b_lab 사용

  const xr = fx > 0.206893 ? Math.pow(fx, 3) : (fx - 16 / 116) / 7.787
  const yr = L > 8 ? Math.pow((L + 16) / 116, 3) : L / 903.3
  const zr = fz > 0.206893 ? Math.pow(fz, 3) : (fz - 16 / 116) / 7.787

  const X = xr * 0.95047
  const Y = yr * 1.0
  const Z = zr * 1.08883

  // 3. XYZ -> sRGB (선형)
  let rLinear = X * 3.2406 + Y * -1.5372 + Z * -0.4986
  let gLinear = X * -0.9689 + Y * 1.8758 + Z * 0.0415
  let bLinear = X * 0.0557 + Y * -0.204 + Z * 1.057

  // 4. sRGB -> RGB
  let r =
    rLinear > 0.0031308
      ? 1.055 * Math.pow(rLinear, 1 / 2.4) - 0.055
      : 12.92 * rLinear
  let g =
    gLinear > 0.0031308
      ? 1.055 * Math.pow(gLinear, 1 / 2.4) - 0.055
      : 12.92 * gLinear
  let b =
    bLinear > 0.0031308
      ? 1.055 * Math.pow(bLinear, 1 / 2.4) - 0.055
      : 12.92 * bLinear

  // 제한
  r = Math.max(0, Math.min(1, r)) * 255
  g = Math.max(0, Math.min(1, g)) * 255
  b = Math.max(0, Math.min(1, b)) * 255

  return {
    r: Math.round(r),
    g: Math.round(g),
    b: Math.round(b),
  }
}

// RGB 값을 16진수로 변환
function rgbToHex(r, g, b) {
  return (
    '#' +
    [r, g, b]
      .map((x) => {
        const hex = x.toString(16)
        return hex.length === 1 ? '0' + hex : hex
      })
      .join('')
  )
}

// 16진수를 RGB로 변환
export const hexToRgb = (hex) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null
}

/**
 * 머테리얼 디자인 컬러 팔레트 생성 함수
 * @param {string} baseColorHex - 기본 색상(500)의 16진수 코드
 * @returns {Object} - 900부터 50까지의 색상 팔레트
 */
export const generateMaterialPalette2 = (baseColorHex) => {
  // 기본 색상(500)의 RGB 값 추출
  const baseRgb = hexToRgb(baseColorHex)

  // RGB를 LCh로 변환
  const baseLch = rgbToLch(baseRgb.r, baseRgb.g, baseRgb.b)

  // 기본 색상의 특성에 따라 증감 패턴 조정
  let lightnessPattern, chromaPattern, huePattern

  // 색상각(Hue)에 따른 패턴 조정
  if (baseLch.h >= 0 && baseLch.h < 60) {
    // 빨강-노랑 계열
    lightnessPattern = {
      900: -38,
      800: -30,
      700: -22,
      600: -12,
      500: 0,
      400: 8,
      300: 16,
      200: 24,
      100: 32,
      50: 40,
    }
    chromaPattern = {
      900: -5,
      800: -2,
      700: 0,
      600: 3,
      500: 0,
      400: 2,
      300: 3,
      200: -1,
      100: -6,
      50: -15,
    }
  } else if (baseLch.h >= 60 && baseLch.h < 180) {
    // 노랑-초록-청록 계열
    lightnessPattern = {
      900: -33,
      800: -25,
      700: -18,
      600: -10,
      500: 0,
      400: 7,
      300: 15,
      200: 22,
      100: 28,
      50: 35,
    }
    chromaPattern = {
      900: -9,
      800: -5,
      700: -1,
      600: 2,
      500: 0,
      400: 1,
      300: 2,
      200: -3,
      100: -7,
      50: -12,
    }
  } else {
    // 파랑-보라-자주 계열
    lightnessPattern = {
      900: -28,
      800: -22,
      700: -16,
      600: -8,
      500: 0,
      400: 6,
      300: 14,
      200: 20,
      100: 26,
      50: 32,
    }
    chromaPattern = {
      900: -12,
      800: -6,
      700: -2,
      600: 1,
      500: 0,
      400: 0,
      300: -2,
      200: -5,
      100: -10,
      50: -15,
    }
  }

  // 기본 색상의 채도에 따른 추가 조정
  if (baseLch.C < 20) {
    // 저채도 색상 - 채도 변화 감소
    for (const shade in chromaPattern) {
      chromaPattern[shade] = chromaPattern[shade] * 0.7
    }
  } else if (baseLch.C > 80) {
    // 고채도 색상 - 채도 변화 증가
    for (const shade in chromaPattern) {
      chromaPattern[shade] = chromaPattern[shade] * 1.3
    }
  }

  // 기본 색상의 밝기에 따른 추가 조정
  if (baseLch.L < 40) {
    // 어두운 기본 색상 - 어두운 쪽 변화 감소, 밝은 쪽 변화 증가
    for (const shade in lightnessPattern) {
      if (parseInt(shade) > 500) {
        lightnessPattern[shade] = lightnessPattern[shade] * 0.7
      } else {
        lightnessPattern[shade] = lightnessPattern[shade] * 1.2
      }
    }
  } else if (baseLch.L > 75) {
    // 밝은 기본 색상 - 밝은 쪽 변화 감소, 어두운 쪽 변화 증가
    for (const shade in lightnessPattern) {
      if (parseInt(shade) > 500) {
        lightnessPattern[shade] = lightnessPattern[shade] * 1.2
      } else {
        lightnessPattern[shade] = lightnessPattern[shade] * 0.7
      }
    }
  }

  // 표준 색상각 변화 패턴
  huePattern = {
    900: -3,
    800: -2,
    700: -1,
    600: -0.5,
    500: 0,
    400: 0.5,
    300: 1,
    200: 2,
    100: 3,
    50: 4,
  }

  // 팔레트 생성
  const palette = {}

  // 각 색상 단계별로 생성
  for (const shade of [
    '50',
    '100',
    '200',
    '300',
    '400',
    '500',
    '600',
    '700',
    '800',
    '900',
  ]) {
    // 계산된 LCh 값
    let L = lightnessPattern[shade]
    let C = chromaPattern[shade]
    let h = huePattern[shade]

    // 값 제한
    L = Math.max(0, Math.min(100, L))
    C = Math.max(0, Math.min(150, C)) // 채도 제한

    // LCh -> RGB 변환
    const rgb = lchToRgb(L, C, h)

    // RGB -> HEX 변환 및 저장
    palette[shade] = rgbToHex(rgb.r, rgb.g, rgb.b)
  }

  return palette
}

/**
 * 사용 예:
 * const palette = generateMaterialPalette('#6D9D72'); // 초록색 기준으로 팔레트 생성
 * console.log(palette);
 */

// 분석 함수: 색상 팔레트의 HCL/LCh 값을 출력
export const analyzePalette = (palette) => {
  const analysis = {}

  for (const shade in palette) {
    const hex = palette[shade]
    const rgb = hexToRgb(hex)
    const lch = rgbToLch(rgb.r, rgb.g, rgb.b)

    analysis[shade] = {
      hex,
      rgb: `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`,
      lch: {
        L: Math.round(lch.L),
        C: Math.round(lch.C),
        h: Math.round(lch.h),
      },
    }
  }

  return analysis
}

// // 예시: 팔레트 생성 및 분석
// const greenPalette = generateMaterialPalette('#6D9D72')
// console.log(JSON.stringify(analyzePalette(greenPalette), null, 2))

// HCT 모델 기반 팔레트 생성 알고리즘 시뮬레이션
// 500 값(기준색)으로부터 다른 값들을 도출하는 방법 분석

// 두 이미지의 500 값 추출
const firstPrimary = { r: 102, g: 153, b: 186, name: '첫 번째 이미지' }
const secondPrimary = { r: 47, g: 146, b: 237, name: '두 번째 이미지' }

// RGB to HCT 변환 함수
function rgbToHct(r, g, b) {
  r /= 255
  g /= 255
  b /= 255

  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  let h,
    s,
    l = (max + min) / 2

  if (max === min) {
    h = s = 0 // achromatic
  } else {
    const d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)

    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0)
        break
      case g:
        h = (b - r) / d + 2
        break
      case b:
        h = (r - g) / d + 4
        break
    }

    h /= 6
  }

  const hue = Math.round(h * 360)
  const chroma = Math.round(s * 100)
  const tone = Math.round(l * 100)

  return { hue, chroma, tone }
}

// HCT to RGB 변환 함수 (근사치)
function hctToRgb(h, c, t) {
  // HCT를 HSL로 근사 변환
  const l = t / 100
  const s = Math.min(c / 100, 1)

  function hueToRgb(p, q, t) {
    if (t < 0) t += 1
    if (t > 1) t -= 1
    if (t < 1 / 6) return p + (q - p) * 6 * t
    if (t < 1 / 2) return q
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6
    return p
  }

  let r, g, b
  const hNorm = h / 360

  if (s === 0) {
    r = g = b = l // achromatic
  } else {
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s
    const p = 2 * l - q
    r = hueToRgb(p, q, hNorm + 1 / 3)
    g = hueToRgb(p, q, hNorm)
    b = hueToRgb(p, q, hNorm - 1 / 3)
  }

  return {
    r: Math.round(r * 255),
    g: Math.round(g * 255),
    b: Math.round(b * 255),
  }
}

export const hexToLch = (hex) => {
  return rgbToLch(hexToRgb(hex))
}

// 분석할 팔레트 데이터 설정
// const shades = [900, 800, 700, 600, 500, 400, 300, 200, 100, 50];
const target_tones = [27, 36, 42, 48, 56, 64, 70, 78, 88, 94] // 이전 분석에서 추출한 톤 값

// 알고리즘 1: 톤(Tone) 고정, 색상(Hue)과 채도(Chroma) 조정
export const generatePaletteAlgorithm1 = (primaryRgb) => {
  const primaryHct = rgbToHct(primaryRgb.r, primaryRgb.g, primaryRgb.b)
  console.log(
    `${primaryRgb.name} 500 값: RGB(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}) - HCT(${primaryHct.hue}, ${primaryHct.chroma}, ${primaryHct.tone})`,
  )

  const palette = []

  // 어두운 색상 (900-600): 색상 증가, 채도 감소
  // 밝은 색상 (400-50): 색상 감소, 채도 감소 (가장 밝은 50은 증가)
  for (let i = 0; i < shades.length; i++) {
    const shade = shades[i]
    let hue = primaryHct.hue
    let chroma = primaryHct.chroma
    const tone = target_tones[i]

    // 색상 조정
    if (shade >= 600) {
      // 어두운 색상은 색상 값 증가 (더 푸른색/보라색 방향)
      hue = primaryHct.hue + Math.round((900 - shade) / 100)
    } else if (shade <= 400) {
      // 밝은 색상은 색상 값 감소 (더 하늘색 방향)
      hue = primaryHct.hue - Math.round((500 - shade) / 100)
    }

    // 채도 조정
    if (shade >= 600) {
      // 어두운 색상은 채도 감소
      chroma = Math.max(primaryHct.chroma - Math.round((900 - shade) / 10), 30)
    } else if (shade <= 200) {
      // 매우 밝은 색상 (50-200)은 채도 증가
      chroma = primaryHct.chroma + Math.round((200 - shade) / 10)
    } else if (shade <= 400) {
      // 중간 밝은 색상 (300-400)은 채도 유지 또는 약간 증가
      chroma = primaryHct.chroma + Math.round((400 - shade) / 20)
    }

    // 0-360 범위 내로 조정
    hue = (hue + 360) % 360
    // 채도는 0-100 범위로 제한
    chroma = Math.min(Math.max(chroma, 0), 100)

    const rgb = hctToRgb(hue, chroma, tone)
    palette.push({
      shade,
      hct: { hue, chroma, tone },
      rgb: `RGB(${rgb.r}, ${rgb.g}, ${rgb.b})`,
    })
  }

  return palette
}

// 알고리즘 2: Material Design 3 스타일 - 톤 매핑
export const generatePaletteAlgorithm2 = (primaryRgb) => {
  const primaryHct = rgbToHct(primaryRgb.r, primaryRgb.g, primaryRgb.b)

  const palette = []

  for (let i = 0; i < shades.length; i++) {
    const shade = shades[i]
    const tone = target_tones[i]

    // 색상 미세 조정 (Material Design 3 스타일)
    let hue = primaryHct.hue
    // 어두운 색상은 더 푸른색/보라색으로
    if (shade >= 700) hue = (primaryHct.hue + 4) % 360
    // 밝은 색상은 조금 더 청록색으로
    else if (shade <= 200) hue = (primaryHct.hue - 4) % 360

    // 채도 조정 (Material Design 3 스타일)
    // 어두운 색상은 채도 낮추고, 밝은 색상은 채도 높임
    let chroma
    if (tone < 30) {
      // 매우 어두운 색상은 채도 제한
      chroma = Math.min(primaryHct.chroma, 48)
    } else if (tone > 85) {
      // 매우 밝은 색상은 채도 높임
      chroma = Math.min(primaryHct.chroma + 20, 90)
    } else if (tone < 50) {
      // 어두운 색상은 채도 약간 낮춤
      chroma = Math.max(primaryHct.chroma - 10, 30)
    } else if (tone > 70) {
      // 밝은 색상은 채도 약간 높임
      chroma = Math.min(primaryHct.chroma + 10, 85)
    } else {
      // 중간 색상은 원래 채도와 비슷하게
      chroma = primaryHct.chroma
    }

    const rgb = hctToRgb(hue, chroma, tone)
    palette.push({
      shade,
      hct: { hue, chroma, tone },
      rgb: `RGB(${rgb.r}, ${rgb.g}, ${rgb.b})`,
      rgbCode: rgb,
    })
  }

  return palette
}

// 두 알고리즘으로 팔레트 생성
// console.log('===== 알고리즘 1: 기본 톤 매핑 =====')
// const palette1First = generatePaletteAlgorithm1(firstPrimary)
// console.log('\n첫 번째 이미지 팔레트 (알고리즘 1):')
// console.log('번호 | RGB | 색상(Hue) | 채도(Chroma) | 톤(Tone)')
// console.log('-'.repeat(60))
// palette1First.forEach((item) => {
//   console.log(
//     `${item.shade.toString().padStart(3)} | ${item.rgb.padEnd(20)} | ${item.hct.hue.toString().padEnd(3)}° | ${item.hct.chroma.toString().padEnd(3)} | ${item.hct.tone}`,
//   )
// })

// console.log('\n===== 알고리즘 2: Material Design 스타일 =====')
// const palette2First = generatePaletteAlgorithm2(firstPrimary)
// console.log('\n첫 번째 이미지 팔레트 (알고리즘 2):')
// console.log('번호 | RGB | 색상(Hue) | 채도(Chroma) | 톤(Tone)')
// console.log('-'.repeat(60))
// palette2First.forEach((item) => {
//   console.log(
//     `${item.shade.toString().padStart(3)} | ${item.rgb.padEnd(20)} | ${item.hct.hue.toString().padEnd(3)}° | ${item.hct.chroma.toString().padEnd(3)} | ${item.hct.tone}`,
//   )
// })

// // 두 번째 이미지에도 동일하게 적용
// console.log('\n===== 두 번째 이미지 적용 결과 =====')
// console.log('\n두 번째 이미지 팔레트 (알고리즘 1):')
// const palette1Second = generatePaletteAlgorithm1(secondPrimary)
// console.log('번호 | RGB | 색상(Hue) | 채도(Chroma) | 톤(Tone)')
// console.log('-'.repeat(60))
// palette1Second.forEach((item) => {
//   console.log(
//     `${item.shade.toString().padStart(3)} | ${item.rgb.padEnd(20)} | ${item.hct.hue.toString().padEnd(3)}° | ${item.hct.chroma.toString().padEnd(3)} | ${item.hct.tone}`,
//   )
// })

// console.log('\n두 번째 이미지 팔레트 (알고리즘 2):')
// const palette2Second = generatePaletteAlgorithm2(secondPrimary)
// console.log('번호 | RGB | 색상(Hue) | 채도(Chroma) | 톤(Tone)')
// console.log('-'.repeat(60))
// palette2Second.forEach((item) => {
//   console.log(
//     `${item.shade.toString().padStart(3)} | ${item.rgb.padEnd(20)} | ${item.hct.hue.toString().padEnd(3)}° | ${item.hct.chroma.toString().padEnd(3)} | ${item.hct.tone}`,
//   )
// })

export const exportColorPalette = (colors) => {
  const jsonString = JSON.stringify(colors, null, 2)
  const blob = new Blob([jsonString], { type: 'application/json' })
  const url = URL.createObjectURL(blob)

  const a = document.createElement('a')
  a.href = url
  a.download = 'be-color-palette.json'
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}

export const exportColorPaletteScss = (colors) => {
  const scssContent = processJson(colors)
  const blob = new Blob([scssContent], { type: 'text/scss' })
  const url = URL.createObjectURL(blob)

  const a = document.createElement('a')
  a.href = url
  a.download = 'be-color-palette.scss'
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}

export const importColorPalette = (event) => {
  const file = event.target.files[0]
  if (!file) return

  const reader = new FileReader()
  reader.onload = function (e) {
    try {
      const importedColors = JSON.parse(e.target.result)
      // 유효성 검사 필요함
      return importedColors
      // renderColorPalettes();
    } catch (error) {
      alert('유효하지 않은 파일입니다: ' + error.message)
    }
  }
  reader.readAsText(file)
}

export const processJson = (jsonData) => {
  let scss =
    '// Color Palette SCSS Variables\n// Generated on ' +
    new Date().toLocaleString() +
    '\n\n'

  // 개별 색상 변수 생성
  // jsonData.forEach((colorGroup) => {
  //   const colorName = colorGroup.name

  //   scss += `// ${colorName.charAt(0).toUpperCase() + colorName.slice(1)}\n`

  //   colorGroup.palette.forEach((color) => {
  //     scss += `$${colorName}-${color.shade}: ${color.value};\n`
  //   })

  //   scss += '\n'
  // })

  // 색상 맵 생성
  jsonData.forEach((colorGroup) => {
    const colorName = colorGroup.name
    scss += `// ${colorName.charAt(0).toUpperCase() + colorName.slice(1)}\n`
    scss += `$${colorName}-palette: (\n`

    colorGroup.palette.forEach((color) => {
      scss += `  ${color.shade}: ${color.value},\n`
    })

    scss = scss.slice(0, -2) // 마지막 쉼표 제거
    scss += '\n);\n\n'
  })

  // 통합 색상 맵 생성
  scss += '// All colors collection\n$colors-palettes: (\n'
  jsonData.forEach((colorGroup) => {
    scss += `  ${colorGroup.name}: $${colorGroup.name}-palette,\n`
  })
  scss = scss.slice(0, -2) // 마지막 쉼표 제거
  scss += '\n);\n\n'

  // 유틸리티 함수 추가
  scss += `// Function to access color values easily
@function color($color-name, $tone) {
  @if map-has-key(map-get($colors, $color-name), $tone) {
    @return map-get(map-get($colors, $color-name), $tone);
  }
  @warn "Unknown \`#{$tone}\` in color family \`#{$color-name}\`.";
  @return null;
}\n`

  return scss
}
