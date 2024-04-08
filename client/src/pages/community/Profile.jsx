import React, { useState } from 'react';

import Sidebar from '../../partials/Sidebar';
import Header from '../../partials/Header';
import ProfileSidebar from '../../partials/community/ProfileSidebar';
import ProfileBody from '../../partials/community/ProfileBody';

function Profile() {

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [profileSidebarOpen, setProfileSidebarOpen] = useState(false);

  return (
    <div className="flex h-[100dvh] overflow-hidden">

      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */} 
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-white dark:bg-slate-900">

        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main className="grow">
          <div className="relative flex">

            {/* Profile sidebar */}
            <ProfileSidebar profileSidebarOpen={profileSidebarOpen} setProfileSidebarOpen={setProfileSidebarOpen} />

            {/* Profile body */}
            <ProfileBody profileSidebarOpen={profileSidebarOpen} setProfileSidebarOpen={setProfileSidebarOpen} />

          </div>
        </main>

      </div>
      
    </div>
  );
}

export default Profile;