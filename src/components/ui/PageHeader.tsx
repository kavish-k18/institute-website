export default function PageHeader({ title, description, badge }: { title: string, description: string, badge?: string }) {
  return (
    <section className="pt-32 pb-16 relative overflow-hidden bg-[#050b14] border-b border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(29,78,216,0.15)_0,rgba(10,25,47,0)_70%)]" />
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-3xl">
        {badge && (
          <div className="inline-block px-3 py-1 rounded-full bg-blue-900/30 border border-blue-700/50 text-blue-400 text-xs font-semibold tracking-wider mb-6">
            {badge}
          </div>
        )}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">{title}</h1>
        <p className="text-lg text-slate-300">{description}</p>
      </div>
    </section>
  );
}
