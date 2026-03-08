# 나노바나나 프롬프트 엔지니어링 가이드

Google 공식 문서 기반으로 정리한 나노바나나(Gemini) 이미지 생성 프롬프트 규칙.

**출처**:
- [Google Cloud Vertex AI — Image Gen Prompt Guide](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/image/img-gen-prompt-guide)
- [Google DeepMind — Nano Banana Prompt Guide](https://deepmind.google/models/gemini-image/prompt-guide/)
- [Gemini 공식 이미지 생성 가이드 (한국어)](https://gemini.google/kr/overview/image-generation/?hl=ko-KR)

---

## 1. 5요소 프레임워크

모든 프롬프트는 이 5가지 요소의 조합으로 구성된다. 요소가 많을수록 결과가 정확해진다.

| 요소 | 역할 | 예시 |
|------|------|------|
| **Style/Medium** | 시각 포맷 결정 | cinematic photograph, oil painting, watercolor illustration, aerial drone shot |
| **Subject** | 누가/무엇이 나오는지 | a young Korean couple in their 30s, a luxury cruise ship at port |
| **Setting** | 어디에서 (배경/환경) | on a private balcony overlooking turquoise tropical waters |
| **Action** | 무엇을 하고 있는지 | embracing affectionately while gazing at the island |
| **Composition** | 어떻게 찍을 것인지 (구도/카메라) | shot from behind, 35mm lens, shallow depth of field |

**프롬프트 배치 순서**: Style → Subject → Action → Setting → Composition

---

## 2. 사진 프롬프트 핵심 규칙

### 시작 문구
사진풍 이미지를 원하면 `A cinematic photograph of...` 또는 `A photo of...`로 시작한다. 이것이 모델에게 사실적 렌더링을 기대한다는 신호가 된다.

### 구체성의 원칙
상세할수록 결과가 정확하다. "빨간 드레스를 입은 여성"보다 "빨간 린넨 드레스를 입고 해변을 걷는 젊은 여성, 바람에 머리카락이 날리는"이 훨씬 효과적이다.

### 서술형 원칙 (가장 중요)
원하는 것만 묘사한다. 원하지 않는 것을 언급하면 오히려 그것이 나타날 확률이 높아진다.

- **좋은 예**: `a clean wooden table with two glasses of champagne`
- **나쁜 예**: `a table, no clutter, don't show food` ← "clutter"와 "food"가 오히려 등장

---

## 3. 카메라 & 렌즈 카탈로그

### 렌즈 타입
| 렌즈 | 효과 | 추천 용도 |
|------|------|-----------|
| **24mm wide angle** | 넓은 시야, 웅장한 느낌 | 풍경, 건축, 크루즈 전경 |
| **35mm** | 자연스러운 원근감, 만능 | 환경 인물 사진, 스트리트 |
| **50mm** | 인간 눈과 유사, 자연스러움 | 인물 중심, 일상 장면 |
| **85mm portrait** | 얕은 심도, 배경 압축 | 인물 클로즈업, 감성 사진 |
| **105mm macro** | 극단적 디테일 | 음식, 소품, 디테일 컷 |
| **200mm telephoto** | 강한 배경 압축, 보케 | 원거리 피사체, 동물 |

### 카메라 위치/앵글
- `shot from behind` — 뒷모습, 감성적
- `low-angle shot` — 아래에서 올려다보기, 위엄/웅장
- `aerial view` / `bird's eye view` — 위에서 내려다보기
- `eye-level shot` — 눈높이, 자연스러움
- `over-the-shoulder` — 어깨 너머, 몰입감

### 심도/포커스
- `shallow depth of field` — 배경 흐림, 피사체 강조
- `deep focus` — 전체 선명, 풍경에 적합
- `soft focus` — 부드러운 분위기
- `bokeh` — 배경 빛망울 효과

---

## 4. 조명 키워드

| 키워드 | 효과 |
|--------|------|
| `bright midday sunlight` | 강한 직사광, 선명한 그림자, 생기 넘치는 색감 |
| `golden hour warm light` | 일출/일몰 직전, 따뜻한 금빛, 로맨틱 |
| `soft overcast diffused light` | 흐린 날, 부드러운 그림자, 균일한 빛 |
| `dramatic rim lighting` | 피사체 윤곽에 빛 테두리, 극적 |
| `warm backlight` | 역광, 실루엣이나 글로우 효과 |
| `cool blue ambient light` | 차가운 톤, 새벽이나 블루아워 |
| `natural window light` | 실내 자연광, 부드럽고 방향성 |
| `dappled sunlight through foliage` | 나뭇잎 사이 얼룩 빛, 자연스러움 |

---

## 5. 품질 마커

프롬프트 끝에 2~3개를 추가하면 전반적인 출력 품질이 향상된다.

| 마커 | 용도 |
|------|------|
| `photorealistic` | 사실적 질감 강화 |
| `highly detailed` | 디테일 증가 (질감, 패턴, 반사) |
| `4K` | 선명도 향상 |
| `HDR` | 다이나믹 레인지 확대, 하이라이트/섀도 디테일 |
| `natural film grain` | 시네마틱 필름 질감 |
| `subtle bokeh` | 부드러운 배경 흐림 |
| `studio quality` | 스튜디오 촬영 수준 |

---

## 6. 색감 & 분위기 키워드

### 색감 팔레트
- `warm saturated tropical palette` — 열대: 터코이즈, 에메랄드, 산호
- `cool arctic blue and white palette` — 극지: 아이스 블루, 순백, 딥 블루
- `warm amber and gold desert palette` — 사막: 앰버, 골드, 샌드
- `Mediterranean blue and white palette` — 지중해: 코발트, 순백, 테라코타
- `cool Scandinavian green and grey palette` — 북유럽: 쿨 그린, 슬레이트, 소프트 블루
- `warm European terracotta and olive palette` — 남유럽: 오렌지, 테라코타, 올리브

### 분위기 키워드
- `serene and majestic` — 장엄하고 고요한
- `bright and vibrant` — 밝고 활기찬
- `exotic and luxurious` — 이국적이고 고급스러운
- `romantic and classic` — 로맨틱하고 클래식한
- `peaceful and pastoral` — 평화롭고 목가적인
- `lively and sophisticated` — 활기차고 세련된

---

## 7. Do's & Don'ts

### Do's
- 구체적인 형용사와 부사를 사용한다 (`crystal-clear turquoise waters` > `pretty water`)
- 대기/환경 언어를 포함한다 (`warm ocean breeze`, `salt-tinged air`, `teal-tinted fog`)
- 실제 존재하는 장소명을 넣으면 모델의 세계 지식을 활용할 수 있다 (`Santorini blue dome`, `Shuri Castle`)
- 텍스트가 필요하면 따옴표로 감싸고 폰트 스타일을 대략 명시한다
- 반복 생성하며 조금씩 디테일을 조정한다

### Don'ts
- `"no X"`, `"don't show Y"`, `"without Z"` 같은 부정형/지시형 표현 사용 금지
- 모호한 표현 지양 (`nice`, `beautiful`, `good` → 구체적으로 교체)
- 한 프롬프트에 텍스트 3개 이상 넣지 않는다 (각 텍스트 25자 이내)
- 프롬프트가 200단어를 넘으면 나노바나나가 일부를 무시할 수 있다 — 50~120단어 권장
