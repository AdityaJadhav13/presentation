import Navigation from './components/Navigation'
import Hero from './components/Hero'
import IndustryProblem from './components/IndustryProblem'
import ExistingSolutions from './components/ExistingSolutions'
import ProposedSolution from './components/ProposedSolution'
import SystemArchitecture from './components/SystemArchitecture'
import HardwareArchitecture from './components/HardwareArchitecture'
import DataAcquisition from './components/DataAcquisition'
import MLLayer from './components/MLLayer'
import TopologyOptimization from './components/TopologyOptimization'
import DynamicReconfiguration from './components/DynamicReconfiguration'
import Scalability from './components/Scalability'
import ImpactRoadmap from './components/ImpactRoadmap'

export default function App() {
  return (
    <div className="relative min-h-screen w-full bg-industrial">
      {/* Technical grid overlay — very light, almost transparent */}
      <div className="pointer-events-none fixed inset-0 bg-techgrid opacity-70" />
      {/* Soft accent glows */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute -top-40 left-1/4 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-electric-500/[0.08] blur-[120px]" />
        <div className="absolute top-1/3 right-0 h-[440px] w-[600px] translate-x-1/3 rounded-full bg-cyan-500/[0.06] blur-[120px]" />
      </div>

      <Navigation />

      <main className="relative z-10">
        <Hero />
        <IndustryProblem />
        <ExistingSolutions />
        <ProposedSolution />
        <SystemArchitecture />
        <HardwareArchitecture />
        <DataAcquisition />
        <MLLayer />
        <TopologyOptimization />
        <DynamicReconfiguration />
        <Scalability />
        <ImpactRoadmap />
      </main>
    </div>
  )
}
