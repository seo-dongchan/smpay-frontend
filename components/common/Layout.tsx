import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';
import { SidebarProvider } from '@/components/ui/sidebar';

import Header from './Header';
import { AppSidebar } from '../app-sidebar';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ResizablePanelGroup direction="vertical" className="min-h-[100vh] w-full">
      <ResizablePanel defaultSize={5}>
        <Header />
      </ResizablePanel>

      <ResizableHandle />

      <ResizablePanel defaultSize={95}>
        <div className="h-full w-full overflow-auto bg-gray-50 p-6">
          <SidebarProvider className="w-full h-full">
            <AppSidebar />
            <main className="w-full h-full">{children}</main>
          </SidebarProvider>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};

export default Layout;
