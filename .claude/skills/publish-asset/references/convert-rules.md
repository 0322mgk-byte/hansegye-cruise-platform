# 변환 규칙 상세

## 이미지 변환

### WebP 변환
```bash
ffmpeg -i "{원본경로}" -c:v libwebp -quality {q} "{출력경로}" -y
```

해상도 변경이 필요한 경우:
```bash
ffmpeg -i "{원본경로}" -c:v libwebp -quality {q} -vf "scale={width}:-2" "{출력경로}" -y
```

### AVIF 변환
```bash
ffmpeg -i "{원본경로}" -c:v libaom-av1 -crf {63 - q * 0.63} -still-picture 1 "{출력경로}" -y
```
AVIF의 CRF는 0(최고)~63(최저). quality 80이면 CRF ≈ 13.

### Quality 반복 로직

1. quality를 시작값(기본 80)으로 설정
2. 원본 파일을 입력으로 대상 포맷으로 변환
3. 변환된 파일 크기 확인:
   ```bash
   stat -c%s "{변환된파일}"
   ```
   > **참고**: `batch-convert.js`는 `fs.statSync()`를 사용하므로 크로스 플랫폼으로 동작한다.
   > 이 `stat` 명령은 수동 확인용 참조이며, Windows에서는 `ls -l`로 대체 가능.
4. **최대 크기 이상**이면:
   - quality를 10 낮춤
   - 반드시 **원본 파일**을 입력으로 다시 변환 (변환된 파일을 재입력하면 화질 손실 누적)
5. **최대 크기 미만**이면: 완료
6. quality가 **10 이하**까지 내려가도 초과하면: quality 10 결과를 유지하고 경고 기록

### 이미 대상 포맷인 파일

원본이 이미 대상 포맷(예: 대상이 webp인데 원본도 .webp)인 경우:
- 최대 크기 이하 → 변환 건너뜀, 그대로 업로드
- 최대 크기 초과 → quality를 낮추며 재인코딩

### OG 이미지 (1200×630 크롭)

OG 이미지는 `batch-convert.js`를 사용하지 않고 직접 ffmpeg를 실행한다.

```bash
ffmpeg -i "{원본경로}" -vf "scale=1200:630:force_original_aspect_ratio=increase,crop=1200:630" -c:v libwebp -quality 80 "{출력경로}" -y
```

- `force_original_aspect_ratio=increase`: 원본 비율을 유지하면서 1200×630 영역을 **완전히 덮도록** 확대
- `crop=1200:630`: 중앙 기준 크롭 (ffmpeg 기본값 — x,y 미지정 시 중앙)
- 크기 제한 없음 (quality 80 고정)

---

## 영상 변환

영상 처리 모드가 `convert`일 때만 수행한다.

### 영상 길이 확인
```bash
ffmpeg -i "{원본경로}" 2>&1 | grep "Duration"
```

### MP4 재인코딩 (H.264, 2-pass)

대상 크기 기반 비트레이트 계산:
- target_size_bits = target_MB * 1024 * 1024 * 8
- audio_bitrate = 128kbps
- video_bitrate = (target_size_bits / duration_seconds) - audio_bitrate_bps

```bash
# Pass 1
ffmpeg -i "{원본경로}" -c:v libx264 -b:v {bitrate}k -c:a aac -b:a 128k -movflags +faststart -pass 1 -f null /dev/null -y

# Pass 2
ffmpeg -i "{원본경로}" -c:v libx264 -b:v {bitrate}k -c:a aac -b:a 128k -movflags +faststart -pass 2 "{출력경로}" -y
```

영상 포맷은 MP4 단일 사용 (WebM 불필요).

### 2-pass 임시 파일 정리
```bash
rm -f ffmpeg2pass-0.log ffmpeg2pass-0.log.mbtree
```

### 영상 기본 설정
- 최대 크기: 5MB
- 포맷: MP4 단일 사용
- 해상도 유지 (사용자가 별도 지정하지 않는 한)

---

## scale 필터 참고

- `-2`를 사용하여 홀수 해상도 문제를 방지한다
- 너비 지정: `-vf "scale={width}:-2"` (높이 자동 계산)
- 높이 지정: `-vf "scale=-2:{height}"` (너비 자동 계산)
