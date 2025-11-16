import { Clock, Briefcase, DollarSign, Users, Target, CheckCircle, AlertTriangle, XCircle, ChevronDown, ChevronUp, Calendar, BookOpen, Link, Zap, TrendingUp, Handshake, Cpu, ZapOff } from 'lucide-react';

// --- 1. Project Data (JSON Structure Extracted and Updated) ---

// Removed FINANCALS section as requested.
const PROJECT_DATA = {
    PROJECT_INFO: {
        title: "Development of the MOO for Ormoc City EOC and CDRRMO",
        proponent: "Alvin M. Silva (Lead Consultant)",
        client: "City Government of Ormoc (CPDO/CDRRMO)",
        startDate: new Date('2025-10-26'), // Actual Mobilization Date
        dueDate: new Date('2026-02-09'), // Final Turnover Date
        totalDurationDays: 107, // Oct 26 to Feb 9
    },
    // Updated MILESTONES to be more comprehensive based on the Gantt Chart
    MILESTONES: [
        // Phase 1: Inception and Mobilization (Completed)
        { wbs: '1.1', title: 'Inception and Mobilization', owner: 'Consultant Team Lead', dueDate: '2025-11-02', status: 'Completed' },
        { wbs: '1.2', title: 'Stakeholder Coordination', owner: 'Consultant Team Lead', dueDate: '2025-11-02', status: 'Completed' },
        { wbs: '1.3', title: 'Inception Report Preparation', owner: 'Consultant Team Lead', dueDate: '2025-11-02', status: 'Completed' }, 
        
        // Phase 2: Situation and Institutional Assessment (In Progress)
        { wbs: '2.1', title: 'Situational & Institutional Assessment', owner: 'Research & Assessment Lead', dueDate: '2025-11-16', status: 'In Progress' },
        { wbs: '2.2', title: 'Data Collection and Analysis', owner: 'Research & Assessment Lead', dueDate: '2025-11-14', status: 'In Progress' },
        { wbs: '2.3', title: 'Situational Analysis Report', owner: 'Research & Assessment Lead', dueDate: '2025-11-16', status: 'Pending' },
        
        // Phase 3, 4, 5: Manual Development, Validation, and Turnover (Upcoming)
        { wbs: '3.1', title: 'Manual Development (Drafting)', owner: 'Technical Writer', dueDate: '2026-01-04', status: 'Pending' }, 
        { wbs: '4.1', title: 'Validation Workshop', owner: 'Facilitation Lead', dueDate: '2026-01-18', status: 'Pending' }, 
        { wbs: '5.1', title: 'Integrate Comments and Revisions', owner: 'Lead Consultant', dueDate: '2026-02-09', status: 'Pending' },
        { wbs: '5.2', title: 'Final Editing and Formatting', owner: 'Technical Writer/Layout Artist', dueDate: '2026-02-02', status: 'Pending' },
        { wbs: '5.3', title: 'CDRRMC Final Review and Approval', owner: 'CDRRMO/CPDO', dueDate: '2026-02-06', status: 'Pending' },
        { wbs: '5.4', title: 'Printing and Distribution', owner: 'Admin Support/Supplier', dueDate: '2026-02-08', status: 'Pending' },
        { wbs: '5.5', title: 'Turnover and Close-out Ceremony', owner: 'CDRRMO / Consultant', dueDate: '2026-02-09', status: 'Pending' },
    ],
    TEAM: [
        {
            name: "Alvin M. Silva, MDM",
            role: "Lead Consultant / Team Leader",
            expertise: ["PSCP", "EOC/Institutional Resilience", "DRR-CCA", "Systems Innovation"],
            contact: "alvin.silva@cognitioplus.com",
            cvSnippet: "Accomplished Development Management and Resilience Expert with over 18 years of leadership experience...",
        },
        {
            name: "Veronica Mae L. Adorza, MDM",
            role: "Technical Writer / M&E Specialist",
            expertise: ["Technical Writing", "Project Documentation", "Monitoring, Evaluation, and Learning (MEL)", "Livelihood Programming"],
            contact: "veronieadorza@gmail.com",
            cvSnippet: "Results-driven Technical Writer and Development Researcher with over 15 years of experience...",
        },
    ],
    KNOWLEDGE_HUB: [
        { title: "Google Chat Space (Daily Coordination)", url: "https://chat.google.com/room/AAQAK-MRtZE?cls=7", icon: Zap, color: "text-indigo-600" },
        { title: "Project Terms of Reference (TOR)", url: "#", icon: BookOpen, color: "text-indigo-600", description: "Defines the scope, objectives, and parameters." },
        { title: "Technical Proposal", url: "#", icon: Briefcase, color: "text-indigo-600", description: "Outlines the methodology, approach, and team qualifications." },
        { title: "Gantt Chart (Timeline)", url: "#", icon: Calendar, color: "text-indigo-600", description: "Detailed work breakdown structure (WBS) and timeline." },
    ],
    // NEW: Mapping WBS tasks to Value Creation Principles (Based on document analysis)
    PRINCIPLES_MAPPING: {
        "Relevance and Resilience": {
            icon: Target,
            description: "Ensuring the MOO aligns with Ormoc's goals (PSCP, RA 10121) and builds institutional capacity to handle complex risks.",
            wbs: ['1.1', '1.2', '1.3', '2.1'] 
        },
        "Effectiveness and Efficiency": {
            icon: TrendingUp,
            description: "Streamlining data collection, leveraging evidence, and producing technically sound, actionable reports quickly.",
            wbs: ['2.2', '2.3', '3.1'] 
        },
        "Sustainability and Local Ownership": {
            icon: Handshake,
            description: "Promoting participatory development (co-design), capacity building, and institutional embedding for long-term use.",
            wbs: ['4.1', '5.5'] 
        },
        "Innovation and Integration": {
            icon: Cpu,
            description: "Integrating systems thinking, data-driven governance, and digital continuity elements into the final MOO structure.",
            wbs: ['5.1', '5.2', '5.3', '5.4'] 
        }
    }
};

// --- 2. Utility Components ---

const Card = ({ icon: Icon, title, value, unit, colorClass = "bg-indigo-700", textClass = "text-indigo-700" }) => (
    <div className="flex items-center p-4 bg-white rounded-xl shadow-lg transition duration-300 hover:shadow-xl border border-gray-100">
        <div className={`p-3 rounded-full ${colorClass} bg-opacity-10 mr-4`}>
            <Icon className={`w-6 h-6 ${textClass}`} />
        </div>
        <div>
            <p className="text-sm font-medium text-gray-500">{title}</p>
            <p className="text-2xl font-bold text-gray-900">
                {value}
                {unit && <span className="text-base font-normal ml-1 text-gray-600">{unit}</span>}
            </p>
        </div>
    </div>
);

// TimelineItem is slightly simplified as it no longer links to Financials
const TimelineItem = ({ wbs, title, owner, dueDate, status }) => {
    const statusMap = {
        "Completed": { icon: CheckCircle, color: "text-green-600", bg: "bg-green-100", border: "border-green-600" },
        "In Progress": { icon: Clock, color: "text-yellow-600", bg: "bg-yellow-100", border: "border-yellow-600" },
        "Pending": { icon: AlertTriangle, color: "text-indigo-600", bg: "bg-indigo-100", border: "border-indigo-600" }, // Navy Accent for Pending
        "Delayed": { icon: XCircle, color: "text-red-600", bg: "bg-red-100", border: "border-red-600" },
    };

    const { icon: StatusIcon, color, bg, border } = statusMap[status] || statusMap.Pending;

    return (
        <li className="mb-6 ml-6 relative">
            <span className={`absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-8 ring-white ${bg} ${border}`}>
                <StatusIcon className={`w-3 h-3 ${color}`} />
            </span>
            <div className={`p-4 rounded-lg shadow-md ${bg} ${border} border-l-4 transition duration-300 hover:shadow-xl`}>
                <div className="flex justify-between items-start">
                    <div>
                        <h3 className="text-lg font-bold text-gray-800 flex items-center">
                            <span className="text-sm font-mono mr-2 px-2 py-0.5 rounded-md bg-gray-200">{wbs}</span>
                            {title}
                        </h3>
                        <p className="text-sm text-gray-600 mt-1 flex items-center">
                            <Users className="w-4 h-4 mr-1.5 text-gray-500" /> Owner: {owner}
                        </p>
                    </div>
                    <div className="text-right">
                        <span className={`text-xs font-semibold px-3 py-1 rounded-full ${color} ${bg}`}>{status}</span>
                        <p className="text-xs text-gray-500 mt-1 flex items-center justify-end">
                            <Calendar className="w-3 h-3 mr-1" /> Due: {new Date(dueDate).toLocaleDateString()}
                        </p>
                    </div>
                </div>
            </div>
        </li>
    );
};


// --- 3. Main Views (Tabs) ---

const OverviewTab = () => {
    const { PROJECT_INFO, MILESTONES } = PROJECT_DATA; 
    const today = useMemo(() => new Date(), []);
    
    // Calculate progress and time metrics
    const totalDuration = PROJECT_INFO.totalDurationDays;
    const timeElapsed = useMemo(() => Math.floor((today - PROJECT_INFO.startDate) / (1000 * 60 * 60 * 24)), [today, PROJECT_INFO.startDate]);
    const progressPercent = Math.min(100, Math.floor((timeElapsed / totalDuration) * 100));
    
    const completedTasks = MILESTONES.filter(m => m.status === 'Completed').length;
    const totalTasks = MILESTONES.length;
    const tasksProgress = Math.floor((completedTasks / totalTasks) * 100);

    const timeRemaining = totalDuration - timeElapsed;

    const MilestoneTimeline = useMemo(() => (
        <ol className="relative border-l border-gray-200">
            {MILESTONES.map((milestone, index) => (
                <TimelineItem key={index} {...milestone} />
            ))}
        </ol>
    ), [MILESTONES]);

    return (
        <div className="space-y-8">
            <h2 className="text-2xl font-extrabold text-gray-900 border-b pb-2 mb-4">Project Overview & Schedule</h2>
            
            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {/* Time Progress Card - Navy Blue Accent */}
                <Card 
                    icon={Calendar} 
                    title="Time Progress" 
                    value={progressPercent} 
                    unit="%" 
                    colorClass="bg-indigo-700" // Navy Blue
                    textClass="text-indigo-700" // Navy Blue
                />
                <Card 
                    icon={Target} 
                    title="Task Progress" 
                    value={tasksProgress} 
                    unit="%" 
                    colorClass="bg-green-500" 
                    textClass="text-green-500"
                />
                <Card 
                    icon={Clock} 
                    title="Days Remaining" 
                    value={Math.max(0, timeRemaining)} 
                    unit="Days" 
                    colorClass="bg-red-500" 
                    textClass="text-red-500" 
                />
                <Card 
                    icon={BookOpen} 
                    title="Total Milestones" 
                    value={totalTasks} 
                    unit="Tasks" 
                    colorClass="bg-yellow-500" 
                    textClass="text-yellow-500"
                />
            </div>

            {/* Progress Bar and Timeline */}
            <div className="mt-8 bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Timeline Snapshot (WBS)</h3>
                <div className="h-3 w-full bg-gray-200 rounded-full mb-6">
                    <div 
                        className="h-3 bg-indigo-600 rounded-full transition-all duration-1000" // Navy Accent for Progress
                        style={{ width: `${progressPercent}%` }}
                    ></div>
                </div>
                {MilestoneTimeline}
            </div>
        </div>
    );
};

const PrinciplesTab = () => {
    const { MILESTONES, PRINCIPLES_MAPPING } = PROJECT_DATA;

    const calculatePrincipleProgress = useCallback((wbsList) => {
        const total = wbsList.length;
        if (total === 0) return { progress: 0, completed: 0, total };

        const completed = MILESTONES.filter(m => 
            wbsList.includes(m.wbs) && m.status === 'Completed'
        ).length;
        
        return {
            progress: Math.floor((completed / total) * 100),
            completed,
            total
        };
    }, [MILESTONES]);

    const getTaskDetails = useCallback((wbsId) => {
        return MILESTONES.find(m => m.wbs === wbsId);
    }, [MILESTONES]);


    return (
        <div className="space-y-8">
            <h2 className="text-2xl font-extrabold text-gray-900 border-b pb-2 mb-4">Value Creation Principles (MOO Mandate)</h2>
            <p className="text-gray-600 italic">
                The project activities are categorized based on their primary contribution to Ormoc City's institutional resilience strategy, aligning with the consultant's **Value Creation Statement**.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {Object.entries(PRINCIPLES_MAPPING).map(([principle, data]) => {
                    const { icon: Icon, description, wbs } = data;
                    const { progress, completed, total } = calculatePrincipleProgress(wbs);
                    
                    const principleColor = 'text-indigo-700'; // Navy Blue for Principle Headers
                    const barColor = 'bg-indigo-600'; // Navy Blue for Progress Bars

                    return (
                        <div key={principle} className="bg-white p-6 rounded-xl shadow-lg border border-indigo-200">
                            <div className="flex items-center mb-3">
                                <Icon className={`w-8 h-8 mr-3 ${principleColor}`} />
                                <h3 className={`text-xl font-bold ${principleColor}`}>{principle}</h3>
                            </div>
                            
                            <p className="text-sm text-gray-600 mb-4">{description}</p>
                            
                            {/* Progress Visualization */}
                            <div className="mb-4">
                                <div className="flex justify-between items-center text-sm font-medium">
                                    <span className="text-gray-800">Progress</span>
                                    <span className="text-indigo-600">{progress}% ({completed}/{total} Tasks)</span>
                                </div>
                                <div className="h-2 w-full bg-gray-200 rounded-full mt-1">
                                    <div 
                                        className={`h-2 ${barColor} rounded-full transition-all duration-1000`}
                                        style={{ width: `${progress}%` }}
                                    ></div>
                                </div>
                            </div>

                            {/* Contributing Activities */}
                            <div className="mt-4">
                                <h4 className="text-sm font-semibold uppercase text-gray-500 mb-2 border-t pt-2">Contributing Activities:</h4>
                                <ul className="space-y-2 text-sm">
                                    {wbs.map(wbsId => {
                                        const task = getTaskDetails(wbsId);
                                        if (!task) return null;
                                        
                                        const isCompleted = task.status === 'Completed';
                                        const statusClass = isCompleted ? 'text-green-600' : 'text-indigo-600'; // Navy Accent for pending/in progress
                                        
                                        return (
                                            <li key={wbsId} className="flex items-start">
                                                <span className={`w-4 h-4 mt-1 mr-2 ${statusClass}`}>{isCompleted ? <CheckCircle className="w-4 h-4" /> : <ZapOff className="w-4 h-4" />}</span>
                                                <span className="font-mono text-xs px-2 py-0.5 rounded bg-gray-100 mr-2">{task.wbs}</span>
                                                <span className={`${isCompleted ? 'text-gray-700 line-through' : 'text-gray-900 font-medium'}`}>
                                                    {task.title}
                                                </span>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

const TeamAndTORTab = () => {
    const { TEAM, KNOWLEDGE_HUB } = PROJECT_DATA;
    return (
        <div className="space-y-8">
            <h2 className="text-2xl font-extrabold text-gray-900 border-b pb-2 mb-4">Team and Institutional Mandate</h2>

            {/* Knowledge Hub / Collaboration Links */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-indigo-200"> {/* Navy Accent Border */}
                <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                    <Zap className="w-6 h-6 mr-2 text-indigo-600" /> {/* Navy Accent Icon */}
                    Knowledge Hub & Collaboration Links
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {KNOWLEDGE_HUB.map((item, index) => {
                        const Icon = item.icon;
                        const isExternal = item.url !== '#';

                        return (
                            <a 
                                key={index} 
                                href={item.url} 
                                target={isExternal ? "_blank" : "_self"} 
                                rel={isExternal ? "noopener noreferrer" : ""}
                                className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition duration-150 group"
                            >
                                <Icon className={`w-5 h-5 mr-3 ${item.color}`} />
                                <div>
                                    <p className="font-semibold text-gray-800 group-hover:text-indigo-700">{item.title}</p> {/* Navy Accent Hover */}
                                    {item.description && <p className="text-xs text-gray-500">{item.description}</p>}
                                </div>
                                {isExternal && <Link className="w-4 h-4 ml-auto text-gray-400 group-hover:text-indigo-500" />} {/* Navy Accent Hover */}
                            </a>
                        );
                    })}
                </div>
                <p className="mt-4 text-sm text-gray-600 bg-indigo-50 p-3 rounded-lg flex items-center"> {/* Navy Accent Background */}
                    <AlertTriangle className="w-5 h-5 mr-2 text-indigo-500" /> {/* Navy Accent Icon */}
                    Note: Document links are placeholders and must be uploaded/linked by the user.
                </p>
            </div>


            {/* Team Profiles */}
            <h3 className="text-xl font-semibold text-gray-800 mt-6 border-b pb-2">Consultant Team</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {TEAM.map((member, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-indigo-700"> {/* Navy Accent Border */}
                        <div className="flex items-center mb-3">
                            <span className="p-3 bg-indigo-100 rounded-full"> {/* Navy Accent Background */}
                                <Users className="w-6 h-6 text-indigo-700" /> {/* Navy Accent Icon */}
                            </span>
                            <div className="ml-4">
                                <h4 className="text-lg font-bold text-gray-900">{member.name}</h4>
                                <p className="text-sm font-medium text-indigo-600">{member.role}</p> {/* Navy Accent Text */}
                            </div>
                        </div>
                        
                        <p className="text-sm text-gray-600 italic mt-3 line-clamp-3">"{member.cvSnippet.trim()}"</p>
                        
                        <div className="mt-4">
                            <h5 className="text-xs font-semibold uppercase text-gray-500 mb-1">Core Expertise:</h5>
                            <div className="flex flex-wrap gap-2">
                                {member.expertise.map((exp, expIndex) => (
                                    <span key={expIndex} className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full font-medium">
                                        {exp}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};


// --- 4. Main Application Component ---

const App = () => {
    // State to manage the currently active tab
    const [activeTab, setActiveTab] = useState('Overview'); 

    // Render the active tab content
    const renderContent = () => {
        switch (activeTab) {
            case 'Overview':
                return <OverviewTab />;
            case 'Principles':
                return <PrinciplesTab />;
            case 'Team & TOR':
                return <TeamAndTORTab />;
            default:
                return <OverviewTab />;
        }
    };

    // Tab button configuration
    const tabs = [
        { key: 'Overview', label: 'Project Gantt & Overview', icon: Clock },
        { key: 'Principles', label: 'Value Creation Principles', icon: Cpu }, // New Tab
        { key: 'Team & TOR', label: 'Team & Collaboration', icon: Briefcase },
    ];

    return (
        <div className="min-h-screen bg-gray-50 p-4 md:p-8">
            {/* Header and Title Block */}
            <header className="max-w-7xl mx-auto mb-8 p-6 bg-white rounded-2xl shadow-xl">
                <h1 className="text-3xl md:text-4xl font-extrabold text-indigo-700 mb-1 flex items-center"> {/* Navy Blue Title */}
                    <Target className="w-8 h-8 mr-3 text-indigo-500" /> {/* Navy Blue Icon */}
                    Ormoc City DRRM Project Dashboard
                </h1>
                <p className="text-xl text-gray-600 font-medium">{PROJECT_DATA.PROJECT_INFO.title}</p>
                <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-500">
                    <span>
                        <span className="font-semibold text-gray-800">Start:</span> 
                        {PROJECT_DATA.PROJECT_INFO.startDate.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                    </span>
                    <span className="font-semibold text-gray-800">|</span>
                    <span>
                        <span className="font-semibold text-gray-800">Due:</span> 
                        {PROJECT_DATA.PROJECT_INFO.dueDate.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                    </span>
                    <span className="font-semibold text-gray-800">|</span>
                    <span>
                        <span className="font-semibold text-gray-800">Duration:</span> 
                        {PROJECT_DATA.PROJECT_INFO.totalDurationDays} Days
                    </span>
                </div>
            </header>

            {/* Tab Navigation */}
            <nav className="max-w-7xl mx-auto sticky top-0 z-10 bg-gray-50 border-b border-gray-200">
                <div className="flex overflow-x-auto whitespace-nowrap space-x-2 p-2">
                    {tabs.map(tab => {
                        const Icon = tab.icon;
                        const isActive = activeTab === tab.key;
                        return (
                            <button
                                key={tab.key}
                                onClick={() => setActiveTab(tab.key)}
                                className={`flex items-center px-4 py-2 rounded-full font-semibold transition-all duration-300 shadow-md min-w-max 
                                    ${isActive 
                                        ? 'bg-indigo-700 text-white shadow-indigo-300/50' // Navy Blue Button Background and Shadow
                                        : 'bg-white text-gray-700 hover:bg-gray-100'
                                    }`
                                }
                            >
                                <Icon className="w-5 h-5 mr-2" />
                                {tab.label}
                            </button>
                        );
                    })}
                </div>
            </nav>

            {/* Main Content Area */}
            <main className="max-w-7xl mx-auto mt-6">
                <div className="p-6 bg-white rounded-2xl shadow-xl">
                    {renderContent()}
                </div>
            </main>

            {/* Footer for Context */}
            <footer className="max-w-7xl mx-auto mt-12 text-center text-xs text-gray-400">
                <p>Data derived from the Project's Technical Proposal, TOR, and GANTT Chart (Oct 2025 - Feb 2026).</p>
            </footer>
        </div>
    );
};

export default App;
