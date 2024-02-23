import headerImg  from "../assets/quiz-logo.png";
export default function Header() {
  return (
    <header>
      <img src={headerImg} alt="" />
      <h1>Quiz app</h1>
    </header>
  );
}
