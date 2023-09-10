import Jobsite from "@/components/dashboard/categories";

export default function Page({ params }: { params: { slug: string } }) {
  return <Jobsite slug={params.slug} />;
}
