import { redirect } from "next/navigation";
import { projectsData } from "@/data/projects";

export async function generateStaticParams() {
  return projectsData.map((p) => ({ slug: p.slug }));
}

export default function ProjectDetailRedirect({
  params,
}: {
  params: { slug: string };
}) {
  redirect(`/projeler/${params.slug}`);
}
