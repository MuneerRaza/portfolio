import { useRef, type ReactNode } from "react";
import {
  SiPytorch, SiTensorflow, SiOpencv, SiNumpy, SiPandas, SiScikitlearn,
  SiPython, SiDart, SiHuggingface, SiOllama, SiFastapi, SiFlask, SiFlutter,
  SiStreamlit, SiPostgresql, SiMongodb, SiSupabase, SiFirebase, SiDocker,
  SiGit, SiLinux, SiLangchain, SiSpacy,
} from "react-icons/si";
import { useReveal } from "../lib/reveal";
import SectionHead from "../components/SectionHead";
import { TECH_STACK } from "../data/portfolio";

function Badge({ text }: { text: string }) {
  return <span className="font-display font-bold text-[10px] leading-none">{text}</span>;
}

const iconMap: Record<string, ReactNode> = {
  SiPytorch: <SiPytorch />, SiTensorflow: <SiTensorflow />, SiOpencv: <SiOpencv />,
  SiNumpy: <SiNumpy />, SiPandas: <SiPandas />, SiScikitlearn: <SiScikitlearn />,
  SiPython: <SiPython />, SiDart: <SiDart />, SiHuggingface: <SiHuggingface />,
  SiOllama: <SiOllama />, SiFastapi: <SiFastapi />, SiFlask: <SiFlask />,
  SiFlutter: <SiFlutter />, SiStreamlit: <SiStreamlit />, SiPostgresql: <SiPostgresql />,
  SiMongodb: <SiMongodb />, SiSupabase: <SiSupabase />, SiFirebase: <SiFirebase />,
  SiDocker: <SiDocker />, SiGit: <SiGit />, SiLinux: <SiLinux />,
  SiLangchain: <SiLangchain />, SiSpacy: <SiSpacy />,
  SiLlama: <Badge text="Li" />, SiCsharpCustom: <Badge text="C#" />,
  SiJavaCustom: <Badge text="Jv" />, SiMlflow: <Badge text="ML" />,
  SiPydantic: <Badge text="Py" />, SiVllm: <Badge text="vL" />,
  SiLlamacpp: <Badge text="cpp" />, SiExllama: <Badge text="Ex" />,
  SiFlashattn: <Badge text="FA" />, SiTensorrt: <Badge text="RT" />,
};

export default function TechStackSection() {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);

  return (
    <section id="techstack" ref={ref} className="panel-light">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-28 md:py-36">
        <SectionHead index="06" label="Toolkit" title="The stack." />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
          {TECH_STACK.map((cat, i) => (
            <div key={cat.category} data-reveal className="border-t-2 border-ink pt-5">
              <div className="flex items-baseline gap-2 mb-5">
                <span className="mono text-[10px] text-accent">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="font-display font-bold text-lg">{cat.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item.name}
                    className="group flex items-center gap-2 px-3 py-2 bg-paper border border-ink/15 rounded-md hover:border-accent transition-colors"
                  >
                    <span className="text-[15px] text-ink-soft group-hover:text-accent transition-colors flex items-center justify-center w-[15px] h-[15px]">
                      {iconMap[item.icon] ?? <Badge text="•" />}
                    </span>
                    <span className="text-[13px] font-medium text-ink">{item.name}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
