import { skillText } from "@/constants";
export default function Skill() {
  return (
    <section id="skill">
      <div class="skill__inner">
        <div class="skill__title">
          <h2>
            Star <em>나의 가능성</em>
          </h2>
        </div>
        <div class="skill__desc">
          {skillText.map((text, key) => (
            <div key={key}>
              <span>{key + 1}. </span>
              <h3>{text.title}</h3>
              <p>{text.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
