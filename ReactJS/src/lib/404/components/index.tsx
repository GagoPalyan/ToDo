import LinkButton from "../../../components/ui/link";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-3">
      <h1 className="text-9xl font-bold">404</h1>
      <h2 className="text-6xl">Page Not Found</h2>
      <LinkButton href="/">Go to home</LinkButton>
    </div>
  );
}

export default NotFound;
