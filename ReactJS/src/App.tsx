import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import router from "./router";
import { RouterProvider } from "react-router-dom";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <main className=" bg-cyan-500 min-h-screen flex flex-col items-center justify-center">
        <RouterProvider router={router} />
      </main>
    </QueryClientProvider>
  );
}

export default App;
