export default function NotFound() {
	return (
		<div className="min-h-[70vh] flex items-center justify-center px-6">
			<div className="max-w-md text-center">
				<p className="text-sm uppercase tracking-widest text-muted-foreground">
					404 Error
				</p>

				<h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
					This page wandered off
				</h1>

				<p className="mt-4 text-base text-muted-foreground">
					The page you’re looking for doesn’t exist or has been moved. It might
					have taken a wrong turn somewhere along the way.
				</p>

				<div className="mt-8 flex items-center justify-center gap-4">
					<a
						href="/"
						className="inline-flex items-center justify-center rounded-2xl bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow transition hover:opacity-90"
					>
						Go home
					</a>

					<a
						href="/projects"
						className="inline-flex items-center justify-center rounded-2xl border px-5 py-2.5 text-sm font-medium transition hover:bg-muted"
					>
						View projects
					</a>
				</div>

				<div className="mt-12 text-xs text-muted-foreground">
					If you believe this is a mistake, feel free to reach out.
				</div>
			</div>
		</div>
	);
}
