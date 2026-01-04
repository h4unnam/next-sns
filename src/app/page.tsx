import styles from "./page.module.css"; // css module
// tailwind -> 호불호 심함
// sass
// styled components -> server component 에서 문제가 있음
// vanilla extract -> windows 환경에서 잘 안됨

import zLogo from "@/public/zlogo.png";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className={styles.left}>
        <Image src={zLogo} alt="" />
      </div>
      <div className={styles.right}>
        <h1>지금 일어나고 있는 일</h1>
        <h2>지금 가입하세요.</h2>
        <Link className={styles.signup} href="/i/flow/signup">
          계정 만들기
        </Link>
        <h3>이미 트위터에 가입하셨나요?</h3>
        <Link href="/login" className={styles.login}>
          로그인
        </Link>
      </div>
    </>
  );
}
