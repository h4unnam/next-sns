export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div lang="en">
      <body>홈 레이아웃{children}</body>
    </div>
  );
}
