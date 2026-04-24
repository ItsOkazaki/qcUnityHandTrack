const QuantumBackground = ({ intensity = 1 }: { intensity?: number; color?: string }) => {
  return (
    <div className="fixed inset-0 -z-10 bg-[#020105] overflow-hidden" style={{ opacity: intensity }}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,#2e1065_0%,transparent_50%)] opacity-40" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-purple-600/5 blur-[120px] rounded-full animate-pulse-slow pointer-events-none" />
    </div>
  );
};

export default QuantumBackground;
