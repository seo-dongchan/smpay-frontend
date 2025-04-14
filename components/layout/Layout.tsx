'use client';

import { usePathname } from 'next/navigation';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';
import { SidebarProvider } from '@/components/ui/sidebar';

import Header from './Header';
import { AppSidebar } from '../composite/app-sidebar';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const isPaymentPage = pathname === '/payment';

  if (isPaymentPage) {
    return <div>{children}</div>;
  }

  return (
    <ResizablePanelGroup direction="vertical" className="min-h-[95vh] w-full">
      <ResizablePanel defaultSize={5}>
        <Header />
      </ResizablePanel>

      <ResizableHandle />

      <ResizablePanel defaultSize={95}>
        <div className="h-full w-full overflow-auto p-6" id="layout-content">
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
