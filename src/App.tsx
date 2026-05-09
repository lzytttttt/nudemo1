import { useState } from 'react';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import DataPlatform from './pages/DataPlatform';
import VenueReservation from './pages/VenueReservation';
import AITeachingAnalysis from './pages/AITeachingAnalysis';
import TeacherWorkspace from './pages/TeacherWorkspace';
import StudentWorkspace from './pages/StudentWorkspace';
import Assignments from './pages/Assignments';
import EquipmentMaintenance from './pages/EquipmentMaintenance';
import CertificationData from './pages/CertificationData';
import Login from './pages/Login';

export type Role = 'admin' | 'teacher' | 'student';

function App() {
  const [currentRole, setCurrentRole] = useState<Role>('admin');
  const [currentPage, setCurrentPage] = useState<string>('login');

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard': return <Dashboard />;
      case 'data': return <DataPlatform />;
      case 'venue': return <VenueReservation />;
      case 'ai-analysis': return <AITeachingAnalysis />;
      case 'teacher-ws': return <TeacherWorkspace />;
      case 'student-ws': return <StudentWorkspace />;
      case 'assignments': return <Assignments />;
      case 'equipment': return <EquipmentMaintenance />;
      case 'certification': return <CertificationData />;
      default: return <Dashboard />;
    }
  };

  if (currentPage === 'login') {
    return (
      <Login 
        onLogin={(role) => {
          setCurrentRole(role);
          setCurrentPage('dashboard');
        }} 
      />
    );
  }

  return (
    <Layout 
      currentRole={currentRole} 
      setCurrentRole={setCurrentRole}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
    >
      {renderPage()}
    </Layout>
  );
}

export default App;
