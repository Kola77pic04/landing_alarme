export default function FormsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-h-screen bg-slate-50 overflow-hidden">
        <div className="min-h-screen px-2 pt-5 lg:pt-10 max-w-[650px] mx-auto">
          {children}
        </div>
    </div>
  );
}