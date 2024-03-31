import "./App.css";
import "./index.css";
import { router } from "./routing/Router";
import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <RouterProvider router={router}></RouterProvider>
      <Toaster position="top-center" 
      gutter={12}
      containerStyle={{margin:"8px"}}
      toastOptions={{
        success:{
          duration:3000,
        },
        error:{
          duration:3000,
        },
        style:{
          font:"16px",
          maxWidth:"500px",
          padding:"16px 24px",
          backgroundColor:"white"
        }
      }}
      />
    </QueryClientProvider>
  );
}

export default App;
