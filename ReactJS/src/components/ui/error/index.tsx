interface ErrorProps {
  error?: string;
}

function Error({ error }: ErrorProps) {
  if (!error) return null;

  return <span className="text-red-600 text-sm">{error}</span>;
}

export default Error;
