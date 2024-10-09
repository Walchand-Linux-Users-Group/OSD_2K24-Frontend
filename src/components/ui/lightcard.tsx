import { BorderBeam } from "@/components/ui/border-beam";

export function BorderBeamDemo() {
  return (
    <div className="relative flex h-[150px] w-[300px] items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-4xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        Session 1
      </span>
      <div className=" p-3 m-3">
        <p>Topic 1</p>
        <p>Topic 2</p>
        <p>Topic 3</p>
        <p>Topic 4</p>
      </div>
      <BorderBeam size={30} duration={12} delay={9} />
    </div>
  );
}
