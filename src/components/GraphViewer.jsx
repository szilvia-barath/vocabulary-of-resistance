import React, { useRef, useEffect, useState, useMemo } from 'react';
import axios from 'axios';
import ForceGraph2D from 'react-force-graph-2d';
import data from '../data/graphData.json';
import glossaryMap from '../data/glossaryMap.js';
const keywords = ['resistance', 'control', 'freedom', 'surveillance', 'rebellion'];
const randomKeyword = () => keywords[Math.floor(Math.random() * keywords.length)];
import '../index.css';
const imageCache = new Map();

const GraphViewer = () => {
  const fgRef = useRef();
  const [selectedNode, setSelectedNode] = useState(null);
  const [hoveredNode, setHoveredNode] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [dark, setDark] = useState(true);
  const [imageUrl, setImageUrl] = useState(null);
  const [loadingImage, setLoadingImage] = useState(false);

  const glossaryEntries = useMemo(() => {
    return Object.fromEntries(
      Object.entries(glossaryMap).map(([k, v]) => [k.trim().toLowerCase(), v])
    );
  }, []);

  const handleSelectNode = async (label) => {
    const node = data.nodes.find(n => n.id.toLowerCase() === label.toLowerCase());
    if (!node) return;

    setSelectedNode(node);
    const cached = imageCache.get(label);
    if (cached) return setImageUrl(cached);

    setLoadingImage(true);
    try {
      const res = await axios.get('https://api.unsplash.com/search/photos', {
        params: { query: randomKeyword(), per_page: 1 },
        headers: { Authorization: 'Client-ID wCfWrIk6ouIYLvhQBHJnBqxmAUSzbVaa6B4EVjTm3Rs' }
      });

      const url = res?.data?.results?.[0]?.urls?.regular || '/fallback.jpg';
      imageCache.set(label, url);
      setImageUrl(url);
    } catch {
      setImageUrl('/fallback.jpg');
    } finally {
      setLoadingImage(false);
    }

    setTimeout(() => {
      if (fgRef.current && node.x != null && node.y != null) {
        fgRef.current.centerAt(node.x, node.y, 1000);
        fgRef.current.zoom(6, 1000);
      }
    }, 10);
  };

  useEffect(() => {
    const canvas = fgRef.current?.canvas?.();
    if (!canvas) return;
    const handleMouse = e => setMousePos({ x: e.clientX, y: e.clientY });
    canvas.addEventListener('mousemove', handleMouse);
    return () => canvas.removeEventListener('mousemove', handleMouse);
  }, []);

  const entry = selectedNode ? glossaryEntries[selectedNode.id.toLowerCase()] : null;

  return (
    <div className={`${dark ? 'dark' : ''} relative w-full h-screen overflow-hidden`}>
      {/* NAV */}
      <nav className="fixed top-0 left-0 z-50 flex items-center justify-between w-full px-8 py-4 border-b border-gray-200 shadow-sm text-red-950 bg-white/80 dark:bg-black/80 backdrop-blur dark:border-gray-800">
                     <link rel="icon" type="image" href="../assets/logo.jpg" />

        <span className="text-xl text-red-950 title dark:text-white">

          <a href="#index.html"><h1>The Vocabulary of Resistance</h1></a>
        </span>
        <div className="flex items-center gap-4 scrollbar">
          <a href="#" className="font-semibold text-gray-800 dark:text-gray-200 hover:underline">about</a>
                    <a href="#" className="font-semibold text-gray-800 dark:text-gray-200 hover:underline">contact</a>
                    <a href="#" className="font-semibold text-gray-800 dark:text-gray-200 hover:underline">GitHub</a>

          <button
            className="px-3 py-2 font-semibold text-white transition bg-gray-900 rounded-4xl hover:bg-gray-700 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-300"
            onClick={() => setDark(d => !d)}
          >
            {dark ? 'Light' : 'Dark'}
          </button>
        </div>
      </nav>

      {/* Sidebar */}
      {selectedNode && (
        <div className="absolute left-0 top-[72px] z-40 w-[420px] h-[calc(100vh-72px)] overflow-y-auto px-6 py-6 bg-white dark:bg-red-900 border-r border-gray-800 shadow-xl">
          <h2 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
            {selectedNode.id}
          </h2>
          <div className="mb-4 text-sm text-gray-500 uppercase">RELATED</div>
          <div className="p-4 mb-4 bg-gray-100 rounded-xl dark:bg-black/20">
            <p className="text-base text-gray-800 dark:text-gray-100">
              {entry?.definition || 'No definition available.'}
            </p>
          </div>
          {loadingImage ? (
            <div className="w-full h-48 mb-4 bg-gray-300 dark:bg-gray-700 animate-pulse rounded-xl" />
          ) : (
            imageUrl && (
              <img
                src={imageUrl}
                alt="theme"
                className="object-cover w-full h-48 mb-4 shadow rounded-xl"
              />
            )
          )}
          {entry?.relatedTerms?.length > 0 && (
            <div className="mt-4">
              <h3 className="mb-2 text-sm font-semibold text-gray-600 dark:text-gray-300">Related Terms:</h3>
              <ul className="space-y-1 text-gray-700 list-disc list-inside dark:text-white/85">
                {entry.relatedTerms.map((term, idx) => (
                  <li key={idx}>
                    <button onClick={() => handleSelectNode(term)} className="hover:underline">{term}</button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* Graph */}
      <ForceGraph2D
        ref={fgRef}
        graphData={data}
        nodeLabel={n => n.id}
        nodeAutoColorBy="group"
        backgroundColor={dark ? '#0a0a13' : '#f5f5f5'}
        nodeRelSize={6}
        linkColor={() => dark ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.1)'}
        linkWidth={1.2}
        onNodeClick={node => handleSelectNode(node.id)}
        onNodeHover={node => setHoveredNode(node)}
        onBackgroundClick={() => {
          setSelectedNode(null);
          setHoveredNode(null);
        }}
      />

      {/* Tooltip */}
      {hoveredNode && (
        <div
          style={{ position: 'fixed', left: mousePos.x + 16, top: mousePos.y + 12, zIndex: 10000 }}
          className="px-3 py-2 text-sm text-white rounded-md shadow-lg pointer-events-none bg-black/90"
        >
          <div className="font-bold">{hoveredNode.id}</div>
          <div className="opacity-80">
            {glossaryEntries[hoveredNode.id.toLowerCase()]?.definition?.slice(0, 100) || 'No description.'}
          </div>
        </div>
      )}
    </div>
  );
};

export default GraphViewer;
