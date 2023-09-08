import Jobsite from "@/components/layout/jobsite";

export default function Page({ params }: { params: { slug: string } }) {
  return <Jobsite slug={params.slug} />;
}
