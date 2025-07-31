import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import Partners from "@/pages/partners";
import AI4AfricanSignup from "@/pages/ai4african-signup";
import Donate from "@/pages/donate";
import BoardMembers from "@/pages/board-members";
import Newsletter from "@/pages/newsletter";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/partners" component={Partners} />
      <Route path="/ai4african-signup" component={AI4AfricanSignup} />
      <Route path="/donate" component={Donate} />
      <Route path="/board-members" component={BoardMembers} />
      <Route path="/newsletter" component={Newsletter} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
