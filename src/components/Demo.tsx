type DemoProps = {
  title: string
  src: string
  className: string
  loading?: "eager" | "lazy"
}

export default function Demo({
  title,
  src,
  className,
  loading = "lazy",
}: DemoProps) {
  return (
    <div>
      <iframe title={title} src={src} className={className} loading={loading} />
      <p>
        <a href={src}>Open {title}</a>
      </p>
    </div>
  )
}
