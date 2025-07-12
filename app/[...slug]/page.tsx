export default function CatchAllPage({ params }: { params: { slug: string[] } }) {
  const path = params.slug.join("/")
  const pageTitle = path
    .split("/")
    .map((segment) => {
      // Capitalize first letter of each word and replace hyphens with spaces
      return segment
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
    })
    .join(" > ")

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] py-12 px-4 text-center">
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">{pageTitle || "Page Not Found"}</h1>
      <p className="mt-4 text-lg text-muted-foreground">
        This is a placeholder page for: <code className="bg-muted px-2 py-1 rounded">{`/${path}`}</code>
      </p>
      <p className="mt-2 text-md text-muted-foreground">Content for this page will be added here.</p>
    </div>
  )
}
