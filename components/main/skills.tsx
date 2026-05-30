import { SkillDataProvider } from "@/components/sub/skill-data-provider";
import { SkillText } from "@/components/sub/skill-text";

import {
  BACKEND_SKILL,
  FRONTEND_SKILL,
  FULLSTACK_SKILL,
  OTHER_SKILL,
  SKILL_DATA,
} from "@/constants";

export const Skills = () => {
  return (
    <section
      id="skills"
      style={{ transform: "scale(0.92)" }}
      className="relative flex h-full flex-col items-center justify-center gap-3 overflow-hidden py-20"
    >
      <SkillText />

      <div className="relative z-10 flex w-full max-w-[1200px] flex-col items-center gap-8 px-4">
        <div className="flex w-full flex-row flex-wrap items-center justify-around gap-5">
          {SKILL_DATA.map((skill, i) => (
            <SkillDataProvider
              key={skill.skill_name}
              src={skill.image}
              name={skill.skill_name}
              width={skill.width}
              height={skill.height}
              index={i}
            />
          ))}
        </div>

        <div className="flex w-full flex-row flex-wrap items-center justify-around gap-5">
          {FRONTEND_SKILL.map((skill, i) => (
            <SkillDataProvider
              key={skill.skill_name}
              src={skill.image}
              name={skill.skill_name}
              width={skill.width}
              height={skill.height}
              index={i}
            />
          ))}
        </div>

        <div className="flex w-full flex-row flex-wrap items-center justify-around gap-5">
          {BACKEND_SKILL.map((skill, i) => (
            <SkillDataProvider
              key={skill.skill_name}
              src={skill.image}
              name={skill.skill_name}
              width={skill.width}
              height={skill.height}
              index={i}
            />
          ))}
        </div>

        <div className="flex w-full flex-row flex-wrap items-center justify-around gap-5">
          {FULLSTACK_SKILL.map((skill, i) => (
            <SkillDataProvider
              key={skill.skill_name}
              src={skill.image}
              name={skill.skill_name}
              width={skill.width}
              height={skill.height}
              index={i}
            />
          ))}
        </div>

        <div className="flex w-full flex-row flex-wrap items-center justify-around gap-5">
          {OTHER_SKILL.map((skill, i) => (
            <SkillDataProvider
              key={skill.skill_name}
              src={skill.image}
              name={skill.skill_name}
              width={skill.width}
              height={skill.height}
              index={i}
            />
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 z-[-20] bg-[radial-gradient(circle_at_50%_12%,rgba(245,179,45,0.22),transparent_24%),linear-gradient(180deg,rgba(2,5,15,0.18),rgba(2,5,15,0.92))]" />
    </section>
  );
};
