import Jobsite from "@/components/dashboard/categories";

export default function Page({ params }: { params: { slug: string } }) {
  <Jobsite slug={params.slug} />;
}
