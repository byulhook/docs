export default {
  logo: (
    <div style={{ display: "flex", alignItems: "center" }}>
      <img
        src="/logo.png" // 루트 디렉토리에 있는 logo.png 파일 경로
        style={{ height: "32px", width: "32px", marginRight: "8px" }} // 이미지 크기 및 간격 조정
      />
      <strong>BYULHOOK</strong>
    </div>
  ),
  project: {
    link: "https://github.com/byulhook/byulhook",
  },
  footer: {
    text: "© 2024 BYULHOOK. All rights reserved.",
  },
  pages: {
    "/": "index.mdx",
  },
}
