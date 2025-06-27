import { useState } from 'react';
import GraphViewer from './components/GraphViewer';
import TermCard from './components/TermCard';
import glossaryMap from './data/glossaryMap';

function App() {
  const [selectedTerm, setSelectedTerm] = useState(null);

  const handleSelectNode = (term) => {
    const key = term.trim().toLowerCase();
    const entry = glossaryMap[key];
    setSelectedTerm({
      term,
      definition: entry?.definition || 'No definition available.',
      relatedTerms: entry?.relatedTerms || []
    });
  };

  return (
    <div className="flex flex-col w-full min-h-screen bg-white/50 dark:bg-black/60 md:flex-row">
      <div className="w-full">
        <GraphViewer onSelectNode={handleSelectNode} />
      </div>
      <div className="w-full md:w-1/3">
        {selectedTerm && (
          <TermCard
            term={selectedTerm.term}
            definition={selectedTerm.definition}
            relatedTerms={selectedTerm.relatedTerms}
          />
        )}
      </div>
    </div>
  );
}

export default App;
