export default function page({ params }: { params: { slug: string } }) {
  const data = params.slug;
  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex flex-col justify-center mt-10"></div>
    </div>
  );
}
