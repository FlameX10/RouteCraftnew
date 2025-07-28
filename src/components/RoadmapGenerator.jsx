import React, { useState } from 'react';
import { Search, Map, Clock, Target, ArrowRight, Sparkles } from 'lucide-react';

const RoadmapGenerator = () => {
  const [topic, setTopic] = useState('');
  const [roadmap, setRoadmap] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  // API key is hardcoded here
  const apiKey = 'AIzaSyBT5v5y4ehfGbyg4q1Us4WG3ZZP7boeuBc';

  const generateRoadmap = async () => {
    if (!topic.trim()) {
      alert('Please enter a topic for the roadmap');
      return;
    }
    if (!apiKey || apiKey === 'YOUR_GEMINI_API_KEY_HERE') {
      alert('Please add your Gemini API key in the code');
      return;
    }
    setIsLoading(true);
    setRoadmap('');
    try {
      const prompt = `Create a comprehensive learning roadmap for "${topic}". \nStructure it with clear phases, each containing:\n- Phase title and duration\n- Key topics to learn\n- Practical projects or exercises\n- Resources and tools\n- Skills gained\n\nFormat it in a clear, organized manner with proper headings and bullet points. Make it actionable and beginner-friendly while covering intermediate to advanced concepts as well.`;
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: prompt
            }]
          }],
          generationConfig: {
            temperature: 0.7,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 2048,
          }
        })
      });
      if (!response.ok) {
        throw new Error(`API Error: ${response.status}`);
      }
      const data = await response.json();
      if (data.candidates && data.candidates[0] && data.candidates[0].content) {
        setRoadmap(data.candidates[0].content.parts[0].text);
      } else {
        throw new Error('No content generated');
      }
    } catch (error) {
      console.error('Error:', error);
      setRoadmap(`Error generating roadmap: ${error.message}. Please check your API key and try again.`);
    } finally {
      setIsLoading(false);
    }
  };

  const formatRoadmap = (text) => {
    return text.split('\n').map((line, index) => {
      // Headers
      if (line.startsWith('# ')) {
        return <h1 key={index} className="text-2xl md:text-3xl font-bold text-primary mt-8 mb-4">{line.substring(2)}</h1>;
      }
      if (line.startsWith('## ')) {
        return <h2 key={index} className="text-xl md:text-2xl font-semibold text-accent-600 mt-6 mb-3 flex items-center"><Target className="mr-2 h-6 w-6" />{line.substring(3)}</h2>;
      }
      if (line.startsWith('### ')) {
        return <h3 key={index} className="text-lg md:text-xl font-medium text-secondary mt-4 mb-2">{line.substring(4)}</h3>;
      }
      // Bold text
      if (line.startsWith('**') && line.endsWith('**')) {
        return <p key={index} className="font-semibold text-primary mt-3 mb-2">{line.slice(2, -2)}</p>;
      }
      // Bullet points
      if (line.startsWith('- ') || line.startsWith('* ')) {
        return (
          <div key={index} className="flex items-start mb-2 ml-4">
            <ArrowRight className="h-4 w-4 text-accent-500 mt-1 mr-2 flex-shrink-0" />
            <span className="text-secondary-900">{line.substring(2)}</span>
          </div>
        );
      }
      // Numbered lists
      if (/^\d+\.\s/.test(line)) {
        return (
          <div key={index} className="flex items-start mb-2 ml-4">
            <span className="text-accent-600 font-medium mr-2">{line.match(/^\d+/)[0]}.</span>
            <span className="text-secondary-900">{line.replace(/^\d+\.\s/, '')}</span>
          </div>
        );
      }
      // Regular paragraphs
      if (line.trim()) {
        return <p key={index} className="text-secondary-800 mb-3 leading-relaxed">{line}</p>;
      }
      return <br key={index} />;
    });
  };

  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl border border-primary-100 p-8">
        <div className="flex items-center mb-4">
          <Map className="h-10 w-10 text-primary-600 mr-3" />
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-1">AI Roadmap Generator</h2>
            <p className="text-secondary-700 text-base md:text-lg">Generate a comprehensive, actionable learning roadmap for any topic using AI.</p>
          </div>
        </div>
        <div className="mt-6 mb-4">
          <label htmlFor="topic" className="block text-sm font-semibold text-primary mb-2">What would you like to learn?</label>
          <div className="flex gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-primary-300" />
              <input
                id="topic"
                type="text"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder="e.g., Machine Learning, Web Development, Digital Marketing..."
                className="w-full pl-10 pr-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-transparent outline-none text-lg bg-primary-50 text-primary-900"
                onKeyPress={(e) => e.key === 'Enter' && generateRoadmap()}
              />
            </div>
            <button
              onClick={generateRoadmap}
              disabled={isLoading || !topic.trim()}
              className="px-7 py-3 bg-gradient-to-r from-accent-500 to-primary-500 text-white font-bold rounded-lg shadow-md hover:from-accent-600 hover:to-primary-600 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed transition-all duration-200 flex items-center gap-2 text-lg"
            >
              {isLoading ? (
                <>
                  <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
                  Generating...
                </>
              ) : (
                <>
                  <Sparkles className="h-5 w-5" />
                  Generate
                </>
              )}
            </button>
          </div>
        </div>
        {isLoading && (
          <div className="bg-primary-50 rounded-lg p-6 flex items-center justify-center mt-6 mb-2">
            <div className="text-center">
              <div className="animate-pulse flex items-center justify-center mb-4">
                <Clock className="h-8 w-8 text-primary-500" />
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">Creating Your Roadmap...</h3>
              <p className="text-secondary-700">AI is analyzing your topic and generating a comprehensive learning path.</p>
            </div>
          </div>
        )}
        {roadmap && !isLoading && (
          <div className="mt-8 bg-primary-50 rounded-xl border border-primary-100 shadow-inner p-6">
            <h3 className="text-xl font-bold text-primary mb-4 flex items-center"><Map className="mr-2 h-7 w-7 text-accent-500" />Learning Roadmap: <span className="ml-2 text-accent-600">{topic}</span></h3>
            <div className="prose prose-lg max-w-none">
              {formatRoadmap(roadmap)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RoadmapGenerator; 